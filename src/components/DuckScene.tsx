"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import DuckModel from "./DuckModel";
import { eyeExpression } from "./DuckModel";
import { CameraDirLight } from "./CameraDirLight";

export default function DuckScene({
  bodyColor,
  hatVisible,
  hatColor,
  badgeColor,
  beakColor,
  eyeExpression,
}: {
  bodyColor: string;
  hatVisible: boolean;
  hatColor: string;
  badgeColor: string;
  beakColor: string;
  eyeExpression: eyeExpression;
}) {
  return (
    <Canvas shadows camera={{ position: [2, 1, 2], fov: 20 }}>
      <ambientLight intensity={1} />
      <CameraDirLight />
      <Suspense fallback={null}>
        <Center>
          <DuckModel
            bodyColor={bodyColor}
            hatVisible={hatVisible}
            hatColor={hatColor}
            badgeColor={badgeColor}
            beakColor={beakColor}
            eyeExpression={eyeExpression}
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
