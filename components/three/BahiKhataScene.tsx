"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows, Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";

function BahiKhataModel({ scrollProgress = 0 }: { scrollProgress: number }) {
  const { scene } = useGLTF("/3d/bahi-khata.glb", false, true);

  // Cache object references
  const nodes = useMemo(() => {
    const map: Record<string, THREE.Object3D> = {};
    scene.traverse((obj) => {
      if (obj.name) map[obj.name] = obj;
    });
    return map;
  }, [scene]);

  const rootRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    // Gentle idle floating when not scrolled
    const time = state.clock.getElapsedTime();
    if (rootRef.current && scrollProgress < 0.05) {
      rootRef.current.position.y = Math.sin(time * 1.2) * 0.004;
      rootRef.current.rotation.y = Math.sin(time * 0.8) * 0.02;
    }

    const p = Math.max(0, Math.min(1, scrollProgress));

    // 1. Rope: 0.00 -> 0.12 lifts and fades out
    if (nodes["BK_Rope"]) {
      if (p <= 0.12) {
        const ropeProgress = p / 0.12;
        nodes["BK_Rope"].position.y = ropeProgress * 0.04;
        nodes["BK_Rope"].visible = true;
      } else {
        nodes["BK_Rope"].visible = false;
      }
    }

    // 2. Front cover: 0.08 -> 0.35 rotates around X from 0 to -Math.PI
    if (nodes["BK_FrontCover_Hinge"]) {
      const coverP = Math.max(0, Math.min(1, (p - 0.08) / 0.27));
      const eased = THREE.MathUtils.smoothstep(coverP, 0, 1);
      nodes["BK_FrontCover_Hinge"].rotation.x = -eased * Math.PI;
    }

    // 3. Pages 1-4: 0.30 -> 0.78 open
    const pageKeys = ["BK_Page_01_Hinge", "BK_Page_02_Hinge", "BK_Page_03_Hinge", "BK_Page_04_Hinge"];
    pageKeys.forEach((key, idx) => {
      const hinge = nodes[key];
      if (hinge) {
        const start = 0.30 + idx * 0.1;
        const pageP = Math.max(0, Math.min(1, (p - start) / 0.18));
        const easedPage = THREE.MathUtils.smoothstep(pageP, 0, 1);
        hinge.rotation.x = -easedPage * (Math.PI * 0.35);
      }
    });
  });

  return (
    <group ref={rootRef} position={[0, -0.05, 0]}>
      <primitive object={scene} />
      <ContactShadows
        position={[0, -0.06, 0]}
        opacity={0.4}
        scale={0.8}
        blur={1.8}
        far={0.5}
        frames={1}
      />
    </group>
  );
}

// Preload the GLB model
useGLTF.preload("/3d/bahi-khata.glb");

export default function BahiKhataScene({ scrollProgress = 0 }: { scrollProgress?: number }) {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0.32, 0.48], fov: 32 }}
        gl={{
          toneMapping: THREE.NeutralToneMapping,
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.75]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[-2, 4, 3]} intensity={1.4} castShadow />
        <directionalLight position={[3, 2, -2]} intensity={0.5} color="#FFE6CC" />

        <Environment resolution={256}>
          <Lightformer
            form="rect"
            intensity={2}
            position={[-2, 3, 2]}
            scale={[3, 3, 1]}
            target={[0, 0, 0]}
          />
          <Lightformer
            form="rect"
            intensity={1}
            position={[3, 1, 1]}
            scale={[2, 2, 1]}
            color="#FFD6A5"
          />
        </Environment>

        <BahiKhataModel scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
