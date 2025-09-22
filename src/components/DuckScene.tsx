"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import DuckModel from "./DuckModel";

export default function DuckScene({
  bodyColor,
  hatVisible,
  hatColor,
  badgeColor,
  beakColor,
}: {
  bodyColor: string;
  hatVisible: boolean;
  hatColor: string;
  badgeColor: string;
  beakColor: string;
}) {
  return (
    <Canvas shadows camera={{ position: [2, 1, 2], fov: 20 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 7]} intensity={2} castShadow />
      <Suspense fallback={null}>
        <Center>
          <DuckModel
            bodyColor={bodyColor}
            hatVisible={hatVisible}
            hatColor={hatColor}
            badgeColor={badgeColor}
            beakColor={beakColor}
          />
        </Center>
      </Suspense>
      <OrbitControls
        enableDamping
        makeDefault
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
