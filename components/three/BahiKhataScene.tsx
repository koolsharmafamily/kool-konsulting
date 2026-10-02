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

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const p = Math.max(0, Math.min(1, scrollProgress));

    // Gentle idle floating when closed
    if (rootRef.current && p < 0.05) {
      rootRef.current.position.y = Math.sin(time * 1.2) * 0.003;
      rootRef.current.rotation.y = Math.sin(time * 0.8) * 0.015;
    } else if (rootRef.current) {
      rootRef.current.position.y = 0;
      rootRef.current.rotation.y = 0;
    }

    // 1. BK_Rope: 0.00 -> 0.12 lifts 2 cm and disappears
    if (nodes["BK_Rope"]) {
      if (p <= 0.12) {
        const ropeProgress = p / 0.12;
        nodes["BK_Rope"].position.y = ropeProgress * 0.025;
        nodes["BK_Rope"].visible = true;
      } else {
        nodes["BK_Rope"].visible = false;
      }
    }

    // 2. BK_FrontCover_Hinge: 0.08 -> 0.35 rotates around X from 0 to -Math.PI (laying flat behind)
    if (nodes["BK_FrontCover_Hinge"]) {
      const coverP = Math.max(0, Math.min(1, (p - 0.08) / 0.27));
      const eased = THREE.MathUtils.smoothstep(coverP, 0, 1);
      nodes["BK_FrontCover_Hinge"].rotation.x = -eased * Math.PI;
    }

    // 3. Pages 1-4: 0.30 -> 0.78 open one after another, activating the 'Curl' morph target
    const pageKeys = [
      { hinge: "BK_Page_01_Hinge", mesh: "BK_Page_01" },
      { hinge: "BK_Page_02_Hinge", mesh: "BK_Page_02" },
      { hinge: "BK_Page_03_Hinge", mesh: "BK_Page_03" },
      { hinge: "BK_Page_04_Hinge", mesh: "BK_Page_04" },
    ];

    pageKeys.forEach(({ hinge: hingeKey, mesh: meshKey }, idx) => {
      const hinge = nodes[hingeKey];
      const pageMesh = nodes[meshKey] as THREE.Mesh | undefined;

      if (hinge) {
        const start = 0.30 + idx * 0.11;
        const pageP = Math.max(0, Math.min(1, (p - start) / 0.18));
        const easedPage = THREE.MathUtils.smoothstep(pageP, 0, 1);

        // Rotate page hinge
        hinge.rotation.x = -easedPage * (Math.PI * 0.35);

        // Animate Curl morph target (up to 0.6 while rising, easing back as it settles)
        if (pageMesh && pageMesh.morphTargetInfluences && pageMesh.morphTargetInfluences.length > 0) {
          const curlVal = Math.sin(pageP * Math.PI) * 0.6;
          pageMesh.morphTargetInfluences[0] = curlVal;
        }
      }
    });
  });

  return (
    <group ref={rootRef} position={[0, 0, 0]}>
      <primitive object={scene} />
      <ContactShadows
        position={[0, -0.005, 0]}
        opacity={0.45}
        scale={0.7}
        blur={1.6}
        far={0.4}
        frames={1}
      />
    </group>
  );
}

useGLTF.preload("/3d/bahi-khata.glb");

export default function BahiKhataScene({
  scrollProgress = 0,
}: {
  scrollProgress?: number;
}) {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{
          position: [0.38, 0.40, 0.52],
          fov: 28,
        }}
        gl={{
          toneMapping: THREE.NeutralToneMapping,
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.75]}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0.02, 0);
        }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[-2, 4, 3]} intensity={1.5} castShadow />
        <directionalLight position={[3, 2, -2]} intensity={0.6} color="#FFE6CC" />

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
