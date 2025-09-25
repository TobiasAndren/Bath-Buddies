import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function CameraDirLight() {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const { camera } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.copy(camera.position);

      const target = new THREE.Vector3();

      camera.getWorldDirection(target);
      lightRef.current.target.position.copy(
        camera.position.clone().add(target)
      );
      lightRef.current.target.updateMatrixWorld();
    }
  });

  return (
    <directionalLight
      ref={lightRef}
      intensity={1.5}
      castShadow
    ></directionalLight>
  );
}
