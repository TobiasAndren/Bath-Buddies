"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds } from "@react-three/drei";
import * as THREE from "three";

function DuckModel() {
  const { scene } = useGLTF("/duck/test-duck.gltf") as any;

  return <primitive object={scene} />;
}

export default function DuckScene() {
  return (
    <Canvas camera={{ fov: 75 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 7]} intensity={2} />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
          <DuckModel />
        </Bounds>
      </Suspense>
      <OrbitControls enableDamping makeDefault />
    </Canvas>
  );
}
