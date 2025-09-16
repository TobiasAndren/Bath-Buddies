"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds } from "@react-three/drei";
import * as THREE from "three";

function DuckModel({
  bodyColor,
  eyeColor,
  hatVisible,
}: {
  bodyColor: string;
  eyeColor: string;
  hatVisible: boolean;
}) {
  const { scene } = useGLTF("/duck/test-duck.gltf") as any;
  const bodyMeshes = useRef<THREE.Mesh[]>([]);
  const eyeMeshes = useRef<THREE.Mesh[]>([]);
  const hatMeshes = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    const bodies: THREE.Mesh[] = [];
    const eyes: THREE.Mesh[] = [];
    const hats: THREE.Mesh[] = [];

    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material = (child.material as THREE.Material).clone();

        if (child.name.includes("body") || child.name.includes("wings")) {
          bodies.push(child);
        }
        if (child.name.includes("eye")) {
          eyes.push(child);
        }
        if (child.name.includes("hat")) {
          hats.push(child);
        }

        child.castShadow = true;
        child.recieveShadow = true;
        if (child.name.includes("body") || child.name.includes("wings")) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xffca4b,
            metalness: 0.3,
            roughness: 0.2,
          });
          if (bodyColor === "red") {
            child.material = new THREE.MeshStandardMaterial({
              color: 0xff0000,
              metalness: 0.3,
              roughness: 0.2,
            });
          }
        }
        if (child.name.includes("eye")) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x000000,
            metalness: 0.5,
            roughness: 0.2,
          });
        }
        if (child.name.includes("hat_flower_1")) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xa968c4,
            metalness: 0.2,
            roughness: 0.7,
          });
        }
        if (child.name.includes("hat_badge")) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x5b1657,
            metalness: 0.2,
            roughness: 0.7,
          });
        }
      }

      if (child.name.includes("beak")) {
        child.traverse((subChild: any) => {
          if (subChild.isMesh) {
            subChild.material = new THREE.MeshStandardMaterial({
              color: 0xf35626,
              metalness: 0.2,
              roughness: 0.4,
            });
          }
        });
      }
    });

    bodyMeshes.current = bodies;
    eyeMeshes.current = eyes;
    hatMeshes.current = hats;
  }, [scene]);

  useEffect(() => {
    bodyMeshes.current.forEach((mesh) =>
      (mesh.material as THREE.MeshStandardMaterial).color.set(bodyColor)
    );
  }, [bodyColor]);
  useEffect(() => {
    eyeMeshes.current.forEach((mesh) =>
      (mesh.material as THREE.MeshStandardMaterial).color.set(eyeColor)
    );
  }, [eyeColor]);
  useEffect(() => {
    hatMeshes.current.forEach((mesh) => (mesh.visible = hatVisible));
  }, [hatVisible]);

  return <primitive object={scene} />;
}

export default function DuckScene({
  bodyColor,
  eyeColor,
  hatVisible,
}: {
  bodyColor: string;
  eyeColor: string;
  hatVisible: boolean;
}) {
  return (
    <Canvas shadows>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 7]} intensity={2} castShadow />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
          <DuckModel
            bodyColor={bodyColor}
            eyeColor={eyeColor}
            hatVisible={hatVisible}
          />
        </Bounds>
      </Suspense>
      <OrbitControls enableDamping makeDefault />
    </Canvas>
  );
}
