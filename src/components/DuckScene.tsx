"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds } from "@react-three/drei";
import * as THREE from "three";

function DuckModel() {
  const { scene } = useGLTF("/duck/test-duck.gltf") as any;

  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        if (child.name.includes("body") || child.name.includes("wings")) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xffca4b,
            metalness: 0.4,
            roughness: 0.2,
          });
        }
        if (child.name.includes("eye")) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x000000,
            metalness: 0.4,
            roughness: 0.2,
          });
        }
        if (child.name.includes("hat_flower_1")) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xa968c4,
            metalness: 0.2,
            roughness: 0.5,
          });
        }
        if (child.name.includes("hat_badge")) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x5b1657,
            metalness: 0.2,
            roughness: 0.5,
          });
        }
      }

      if (child.name.includes("beak")) {
        child.traverse((subChild: any) => {
          if (subChild.isMesh) {
            subChild.material = new THREE.MeshStandardMaterial({
              color: 0xf35626,
              metalness: 0.4,
              roughness: 0.2,
            });
          }
        });
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
}

export default function DuckScene() {
  return (
    <Canvas camera={{ fov: 75 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 7]} intensity={1.5} />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
          <DuckModel />
        </Bounds>
      </Suspense>
      <OrbitControls enableDamping makeDefault />
    </Canvas>
  );
}
