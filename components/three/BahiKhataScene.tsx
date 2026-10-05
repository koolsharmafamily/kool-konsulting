"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useTexture, ContactShadows, Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import Link from "next/link";
import { createDigitiseMaterial } from "./DigitiseMaterial";

interface BahiKhataModelProps {
  scrollProgress: number;
  isMobile: boolean;
  onFirstFrameRendered?: () => void;
}

function BahiKhataModel({ scrollProgress, isMobile, onFirstFrameRendered }: BahiKhataModelProps) {
  const { scene } = useGLTF("/3d/bahi-khata.glb", false, true);
  const { pointer } = useThree();

  // Load the 4 card UI textures and the handwritten paper ledger texture
  const [websiteTex, appTex, softwareTex, automationTex, paperTex] = useTexture([
    "/3d/textures/card-website.webp",
    "/3d/textures/card-app.webp",
    "/3d/textures/card-software.webp",
    "/3d/textures/card-automation.webp",
    "/3d/textures/paper-ledger.webp",
  ]);

  // Set texture parameters for glTF UV layout
  useMemo(() => {
    [websiteTex, appTex, softwareTex, automationTex, paperTex].forEach((t) => {
      t.flipY = false;
      t.generateMipmaps = true;
      t.minFilter = THREE.LinearMipmapLinearFilter;
      t.magFilter = THREE.LinearFilter;
    });
  }, [websiteTex, appTex, softwareTex, automationTex, paperTex]);

  // Create custom digitise materials for the 4 pages
  const digitiseMats = useMemo(() => {
    return [
      createDigitiseMaterial(paperTex, websiteTex),
      createDigitiseMaterial(paperTex, appTex),
      createDigitiseMaterial(paperTex, softwareTex),
      createDigitiseMaterial(paperTex, automationTex),
    ];
  }, [paperTex, websiteTex, appTex, softwareTex, automationTex]);

  // Cache object references from GLB
  const nodes = useMemo(() => {
    const map: Record<string, THREE.Object3D> = {};
    scene.traverse((obj) => {
      if (obj.name) map[obj.name] = obj;

      // Enhance materials per §4.3
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        mats.forEach((m) => {
          if (!m) return;
          if (m.name === "M_Cloth_Inner") {
            // Pale yellow endpaper per §4.3 & 3D-BAHI-KHATA-PROMPT §4.6
            (m as THREE.MeshStandardMaterial).color = new THREE.Color("#F3E5BB");
            (m as THREE.MeshStandardMaterial).roughness = 0.88;
            (m as THREE.MeshStandardMaterial).metalness = 0.0;
          }
          if (m.name === "M_Cloth_Red") {
            (m as THREE.MeshStandardMaterial).roughness = 0.85;
          }
        });
      }
    });
    return map;
  }, [scene]);

  // Assign digitise materials to top face (primitive 2) of pages 1-4
  useEffect(() => {
    const pageKeys = ["BK_Page_01", "BK_Page_02", "BK_Page_03", "BK_Page_04"];
    pageKeys.forEach((key, idx) => {
      const pageObj = nodes[key];
      if (pageObj && pageObj.children && pageObj.children[2]) {
        const topMesh = pageObj.children[2] as THREE.Mesh;
        topMesh.material = digitiseMats[idx];
      }
    });
  }, [nodes, digitiseMats]);

  const rootRef = useRef<THREE.Group>(null);
  const tiltRef = useRef({ x: 0, y: 0 });
  const firstFrameNotified = useRef(false);

  // Store initial positions of hinges and page meshes
  const initialHingePos = useRef<Record<string, THREE.Vector3>>({});
  const initialPagePos = useRef<Record<string, THREE.Vector3>>({});

  useEffect(() => {
    const pageKeys = [
      { hinge: "BK_Page_01_Hinge", mesh: "BK_Page_01" },
      { hinge: "BK_Page_02_Hinge", mesh: "BK_Page_02" },
      { hinge: "BK_Page_03_Hinge", mesh: "BK_Page_03" },
      { hinge: "BK_Page_04_Hinge", mesh: "BK_Page_04" },
    ];
    pageKeys.forEach(({ hinge: hKey, mesh: mKey }) => {
      const h = nodes[hKey];
      const m = nodes[mKey];
      if (h && !initialHingePos.current[hKey]) {
        initialHingePos.current[hKey] = h.position.clone();
      }
      if (m && !initialPagePos.current[mKey]) {
        initialPagePos.current[mKey] = m.position.clone();
      }
    });
  }, [nodes]);

  // Card targets in settled state (p = 1.0)
  // Perfectly centered and scaled in front of the book
  const cardTargets = useMemo(() => {
    if (isMobile) {
      return [
        { x: -0.065, y: 0.16, z: 0.02, rotX: -0.20, rotY: 0.25, rotZ: 0.02, scale: 0.36 },
        { x: 0.065, y: 0.16, z: 0.02, rotX: -0.20, rotY: -0.25, rotZ: -0.02, scale: 0.36 },
        { x: -0.065, y: 0.04, z: 0.05, rotX: -0.24, rotY: 0.25, rotZ: 0.02, scale: 0.36 },
        { x: 0.065, y: 0.04, z: 0.05, rotX: -0.24, rotY: -0.25, rotZ: -0.02, scale: 0.36 },
      ];
    }
    return [
      { x: -0.125, y: 0.145, z: -0.03, rotX: -0.22, rotY: 0.42, rotZ: 0.04, scale: 0.46 },
      { x: -0.042, y: 0.165, z: 0.02, rotX: -0.24, rotY: 0.14, rotZ: 0.01, scale: 0.47 },
      { x: 0.042, y: 0.165, z: 0.02, rotX: -0.24, rotY: -0.14, rotZ: -0.01, scale: 0.47 },
      { x: 0.125, y: 0.145, z: -0.03, rotX: -0.22, rotY: -0.42, rotZ: -0.04, scale: 0.46 },
    ];
  }, [isMobile]);

  useFrame((state, delta) => {
    if (!firstFrameNotified.current) {
      firstFrameNotified.current = true;
      onFirstFrameRendered?.();
    }

    const time = state.clock.getElapsedTime();
    const p = Math.max(0, Math.min(1, scrollProgress));

    // 1. Idle Floating & Desktop Pointer Tilt
    if (rootRef.current) {
      if (p < 0.05) {
        rootRef.current.position.y = Math.sin(time * 1.2) * 0.004;
        rootRef.current.position.x = 0;
        rootRef.current.position.z = 0;
        rootRef.current.scale.setScalar(1);

        // Smooth desktop pointer tilt: ±5° (0.087 rad)
        if (!isMobile) {
          tiltRef.current.x = THREE.MathUtils.damp(tiltRef.current.x, pointer.y * -0.07, 4, delta);
          tiltRef.current.y = THREE.MathUtils.damp(tiltRef.current.y, pointer.x * 0.07, 4, delta);
          rootRef.current.rotation.x = tiltRef.current.x;
          rootRef.current.rotation.y = tiltRef.current.y;
        } else {
          rootRef.current.rotation.x = 0;
          rootRef.current.rotation.y = 0;
        }
      } else {
        // Book eases back and down as cards settle (p > 0.70)
        const settleP = Math.max(0, (p - 0.70) / 0.30);
        const bookEased = THREE.MathUtils.smoothstep(settleP, 0, 1);
        rootRef.current.position.z = -0.05 * bookEased;
        rootRef.current.position.y = -0.02 * bookEased;
        rootRef.current.scale.setScalar(1 - 0.05 * bookEased);
        rootRef.current.rotation.x = 0;
        rootRef.current.rotation.y = 0;
      }
    }

    // 2. BK_Rope: 0.00 -> 0.12 lifts 2.5 cm and fades out
    if (nodes["BK_Rope"]) {
      if (p <= 0.12) {
        const ropeProgress = p / 0.12;
        nodes["BK_Rope"].position.y = ropeProgress * 0.025;
        nodes["BK_Rope"].scale.setScalar(1 + 0.04 * ropeProgress);
        nodes["BK_Rope"].visible = true;
      } else {
        nodes["BK_Rope"].visible = false;
      }
    }

    // 3. BK_FrontCover_Hinge: 0.08 -> 0.32 rotates around X from 0 to -Math.PI (laying flat behind)
    if (nodes["BK_FrontCover_Hinge"]) {
      const coverP = Math.max(0, Math.min(1, (p - 0.08) / 0.24));
      const eased = THREE.MathUtils.smoothstep(coverP, 0, 1);
      nodes["BK_FrontCover_Hinge"].rotation.x = -eased * Math.PI;
    }

    // 4. Pages 1-4: Sequential Lift, Curl, Flight, Digitise, and Settle
    const pageKeys = [
      { hinge: "BK_Page_01_Hinge", mesh: "BK_Page_01" },
      { hinge: "BK_Page_02_Hinge", mesh: "BK_Page_02" },
      { hinge: "BK_Page_03_Hinge", mesh: "BK_Page_03" },
      { hinge: "BK_Page_04_Hinge", mesh: "BK_Page_04" },
    ];

    pageKeys.forEach(({ hinge: hingeKey, mesh: meshKey }, idx) => {
      const hinge = nodes[hingeKey];
      const pageMesh = nodes[meshKey] as THREE.Group | undefined;
      const target = cardTargets[idx];
      const mat = digitiseMats[idx];

      if (!hinge || !pageMesh) return;

      const initHPos = initialHingePos.current[hingeKey] || new THREE.Vector3(0, 0.039, -0.165);
      const initPPos = initialPagePos.current[meshKey] || new THREE.Vector3(0, 0.0002, 0.161);

      // Timing window for this page
      const start = 0.26 + idx * 0.10;
      const t = Math.max(0, Math.min(1, (p - start) / 0.35));

      if (t <= 0) {
        // Reset to rest state in book
        hinge.position.copy(initHPos);
        hinge.rotation.set(0, 0, 0);
        pageMesh.position.copy(initPPos);
        pageMesh.rotation.set(0, 0, 0);
        pageMesh.scale.set(1, 1, 1);

        pageMesh.children.forEach((c, cIdx) => {
          if (cIdx !== 2) (c as THREE.Mesh).visible = true;
          const m = c as THREE.Mesh;
          if (m.morphTargetInfluences && m.morphTargetInfluences.length > 0) {
            m.morphTargetInfluences[0] = 0;
          }
        });
        mat.uniforms.uProgress.value = 0.0;
        mat.uniforms.uRadius.value = 0.0;
        return;
      }

      // Phase 1: Lift & Curl (t: 0 -> 0.35)
      const liftT = Math.min(1, t / 0.35);
      const liftEased = THREE.MathUtils.smoothstep(liftT, 0, 1);

      // Phase 2: Detach, Fly to Card Slot, Turn to Face Camera (t: 0.30 -> 0.75)
      const flightT = Math.max(0, Math.min(1, (t - 0.30) / 0.45));
      const flightEased = THREE.MathUtils.smoothstep(flightT, 0, 1);

      // Phase 3: Digitise Shader Sweep & Rounded Corners (t: 0.50 -> 0.92)
      const digitiseT = Math.max(0, Math.min(1, (t - 0.50) / 0.42));
      const digitiseEased = THREE.MathUtils.smoothstep(digitiseT, 0, 1);

      // --- Kinematics ---
      // Rotate hinge initially up to -0.35 * Math.PI
      hinge.rotation.x = -liftEased * (Math.PI * 0.35) * (1 - flightEased);

      // Interpolate hinge position from book hinge origin to target card slot
      hinge.position.x = THREE.MathUtils.lerp(initHPos.x, target.x, flightEased);
      hinge.position.y = THREE.MathUtils.lerp(initHPos.y + liftEased * 0.04, target.y, flightEased);
      hinge.position.z = THREE.MathUtils.lerp(initHPos.z, target.z, flightEased);

      // Turn page so top face stands upright and faces camera:
      // Rotating around local X by -Math.PI * 0.5 brings the free edge down and top face forward (+Z)
      pageMesh.rotation.x = -Math.PI * 0.5 * flightEased + flightEased * target.rotX;
      pageMesh.rotation.y = flightEased * target.rotY;
      pageMesh.rotation.z = flightEased * target.rotZ;

      const currentScale = THREE.MathUtils.lerp(1.0, target.scale, flightEased);
      pageMesh.scale.set(currentScale, currentScale, currentScale);

      // Curl morph: swells to 0.6 during lift, returns smoothly to 0 as it detaches
      const curlAmount = Math.sin(liftT * Math.PI) * 0.6 * (1 - flightEased);
      pageMesh.children.forEach((c) => {
        const m = c as THREE.Mesh;
        if (m.morphTargetInfluences && m.morphTargetInfluences.length > 0) {
          m.morphTargetInfluences[0] = curlAmount;
        }
      });

      // Once card detaches, hide back paper so only crisp UI card face is visible
      if (flightEased > 0.15) {
        pageMesh.children.forEach((c, cIdx) => {
          if (cIdx !== 2) (c as THREE.Mesh).visible = false;
        });
      } else {
        pageMesh.children.forEach((c, cIdx) => {
          if (cIdx !== 2) (c as THREE.Mesh).visible = true;
        });
      }

      // --- Digitise Shader Uniforms ---
      mat.uniforms.uProgress.value = digitiseEased;
      mat.uniforms.uRadius.value = digitiseEased * 0.065;
    });
  });

  return (
    <group ref={rootRef} position={[0, 0, 0]}>
      <primitive object={scene} />

      {/* Ground contact shadow */}
      <ContactShadows
        position={[0, -0.005, 0]}
        opacity={0.4}
        scale={0.75}
        blur={1.8}
        far={0.4}
        frames={1}
      />
    </group>
  );
}

useGLTF.preload("/3d/bahi-khata.glb");

export default function BahiKhataScene({
  scrollProgress = 0,
  onCanvasReady,
}: {
  scrollProgress?: number;
  onCanvasReady?: () => void;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-full relative select-none">
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
          onCanvasReady?.();
        }}
      >
        {/* Cool Studio Lighting per §4.7 */}
        <ambientLight intensity={0.85} color="#F6F7FB" />
        <directionalLight position={[-2.5, 4.5, 2.5]} intensity={1.6} color="#FFFFFF" castShadow />
        <directionalLight position={[3.5, 1.8, -1.0]} intensity={0.75} color="#22C3EE" />
        <directionalLight position={[0, 3.0, -3.0]} intensity={0.7} color="#FFF8EB" />

        <Environment resolution={256}>
          <Lightformer
            form="rect"
            intensity={2}
            position={[-2.5, 3.5, 2]}
            scale={[3, 3, 1]}
            target={[0, 0, 0]}
            color="#FFFFFF"
          />
          <Lightformer
            form="rect"
            intensity={1.2}
            position={[3, 1.5, 1]}
            scale={[2, 2, 1]}
            color="#22C3EE"
          />
        </Environment>

        <React.Suspense fallback={null}>
          <BahiKhataModel
            scrollProgress={scrollProgress}
            isMobile={isMobile}
            onFirstFrameRendered={onCanvasReady}
          />
        </React.Suspense>
      </Canvas>

      {/* Floating Service Tags Overlay (Fades in when cards settle, p >= 0.82) */}
      <div
        className={`absolute inset-x-2 top-3 flex items-center justify-between pointer-events-auto transition-opacity duration-500 z-20 ${
          scrollProgress >= 0.82 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/services/websites"
          className="px-2 py-0.5 rounded-full bg-white/95 border border-line shadow-card text-[10px] font-bold text-ink hover:text-kk-indigo hover:border-kk-indigo transition-all block whitespace-nowrap active:scale-95"
        >
          Websites
        </Link>
        <Link
          href="/services/apps"
          className="px-2 py-0.5 rounded-full bg-white/95 border border-line shadow-card text-[10px] font-bold text-ink hover:text-kk-indigo hover:border-kk-indigo transition-all block whitespace-nowrap active:scale-95"
        >
          Apps
        </Link>
        <Link
          href="/services/software"
          className="px-2 py-0.5 rounded-full bg-white/95 border border-line shadow-card text-[10px] font-bold text-ink hover:text-kk-indigo hover:border-kk-indigo transition-all block whitespace-nowrap active:scale-95"
        >
          Business software
        </Link>
        <Link
          href="/services/automation"
          className="px-2 py-0.5 rounded-full bg-white/95 border border-line shadow-card text-[10px] font-bold text-ink hover:text-kk-indigo hover:border-kk-indigo transition-all block whitespace-nowrap active:scale-95"
        >
          Automation
        </Link>
      </div>
    </div>
  );
}
