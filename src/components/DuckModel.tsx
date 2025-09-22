import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function DuckModel({
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
  const { scene } = useGLTF("/duck/test-duck.gltf") as any;
  const bodyMeshes = useRef<THREE.Mesh[]>([]);
  const hatMeshes = useRef<THREE.Mesh[]>([]);
  const badgeMeshes = useRef<THREE.Mesh[]>([]);
  const beakMeshes = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    const bodies: THREE.Mesh[] = [];
    const hats: THREE.Mesh[] = [];
    const badges: THREE.Mesh[] = [];
    const beaks: THREE.Mesh[] = [];

    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material = (child.material as THREE.Material).clone();

        child.castShadow = true;
        child.recieveShadow = true;
        if (child.name.includes("body") || child.name.includes("wings")) {
          bodies.push(child);
          child.material = new THREE.MeshStandardMaterial({
            color: 0xffcb2a,
            metalness: 0.3,
            roughness: 0.2,
          });
        }
        if (child.name.includes("eye")) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x000000,
            metalness: 0.3,
            roughness: 0.2,
          });
        }
        if (child.name.includes("hat_flower_1")) {
          hats.push(child);
          child.material = new THREE.MeshStandardMaterial({
            color: 0xe572e3,
            metalness: 0.2,
            roughness: 0.7,
          });
        }
        if (child.name.includes("hat_badge")) {
          badges.push(child);
          child.material = new THREE.MeshStandardMaterial({
            color: 0x70c6ff,
            metalness: 0.2,
            roughness: 0.7,
          });
        }
      }
      if (child.name.includes("beak")) {
        child.traverse((subChild: any) => {
          if (subChild.isMesh) {
            beaks.push(subChild);
            subChild.material = new THREE.MeshStandardMaterial({
              color: 0xff8019,
              metalness: 0.2,
              roughness: 0.4,
            });
          }
        });
      }
    });

    bodyMeshes.current = bodies;
    hatMeshes.current = hats;
    badgeMeshes.current = badges;
    beakMeshes.current = beaks;
  }, [scene]);

  useEffect(() => {
    bodyMeshes.current.forEach((mesh) =>
      (mesh.material as THREE.MeshStandardMaterial).color.set(bodyColor)
    );
  }, [bodyColor]);

  useEffect(() => {
    hatMeshes.current.forEach((mesh) => {
      mesh.visible = hatVisible;
      (mesh.material as THREE.MeshStandardMaterial).color.set(hatColor);
    });
  }, [hatVisible, hatColor]);

  useEffect(() => {
    badgeMeshes.current.forEach((mesh) =>
      (mesh.material as THREE.MeshStandardMaterial).color.set(badgeColor)
    );
  }, [badgeColor]);

  useEffect(() => {
    beakMeshes.current.forEach((mesh) =>
      (mesh.material as THREE.MeshStandardMaterial).color.set(beakColor)
    );
  }, [beakColor]);

  return <primitive object={scene} />;
}
