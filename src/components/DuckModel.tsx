import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export type eyeExpression = "normal" | "grinning";
export type colorOptions = "default" | "secondary";

export default function DuckModel({
  bodyColor,
  hatVisible,
  hatColor,
  badgeColor,
  beakColor,
  eyeExpression = "normal",
}: {
  bodyColor: string;
  hatVisible: boolean;
  hatColor: string;
  badgeColor: string;
  beakColor: string;
  eyeExpression: eyeExpression;
}) {
  const { scene } = useGLTF("/duck/duck-model.gltf") as { scene: THREE.Group };
  const bodyMeshes = useRef<THREE.Mesh[]>([]);
  const hatMeshes = useRef<THREE.Mesh[]>([]);
  const badgeMeshes = useRef<THREE.Mesh[]>([]);
  const beakMeshes = useRef<THREE.Mesh[]>([]);
  const eyeMeshes = useRef<{ normal?: THREE.Mesh; grinning?: THREE.Mesh }>({});

  useEffect(() => {
    const bodies: THREE.Mesh[] = [];
    const hats: THREE.Mesh[] = [];
    const badges: THREE.Mesh[] = [];
    const beaks: THREE.Mesh[] = [];
    const eyes: { normal?: THREE.Mesh; grinning?: THREE.Mesh } = {};

    scene.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = (mesh.material as THREE.Material).clone();

        if (mesh.name.includes("body") || mesh.name.includes("wings")) {
          bodies.push(mesh);
          mesh.material = new THREE.MeshStandardMaterial({
            color: 0xffcb2a,
            metalness: 0.3,
            roughness: 0.2,
          });
        }

        if (mesh.name.includes("beak")) {
          beaks.push(mesh);
          mesh.material = new THREE.MeshStandardMaterial({
            color: 0xff8019,
            metalness: 0.2,
            roughness: 0.4,
          });
        }

        if (mesh.name === "normal_eyes") {
          eyes.normal = mesh;
        }

        if (mesh.name === "grinning_eyes") {
          eyes.grinning = mesh;
        }

        if (mesh.name.includes("eye")) {
          mesh.material = new THREE.MeshStandardMaterial({
            color: 0x000000,
            metalness: 0.3,
            roughness: 0.2,
          });
        }

        if (mesh.name.includes("hat")) {
          hats.push(mesh);
          mesh.material = new THREE.MeshStandardMaterial({
            color: 0xe572e3,
            metalness: 0.2,
            roughness: 0.7,
          });
        }

        if (mesh.name.includes("rim")) {
          badges.push(mesh);
          mesh.material = new THREE.MeshStandardMaterial({
            color: 0x70c6ff,
            metalness: 0.2,
            roughness: 0.7,
          });
        }
      }

      child.castShadow = true;
      child.receiveShadow = true;
    });

    bodyMeshes.current = bodies;
    hatMeshes.current = hats;
    badgeMeshes.current = badges;
    beakMeshes.current = beaks;
    eyeMeshes.current = eyes;
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

  useEffect(() => {
    if (!eyeMeshes.current.normal || !eyeMeshes.current.grinning) return;

    eyeMeshes.current.normal.visible = eyeExpression === "normal";
    eyeMeshes.current.grinning.visible = eyeExpression === "grinning";
  }, [eyeExpression]);

  return <primitive object={scene} />;
}
