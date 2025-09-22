"use client";

import DuckScene from "@/components/DuckScene";
import { useState } from "react";
import { duckColorPresets } from "@/config/duckPresets";

export default function Duck() {
  const [preset, setPreset] = useState<"default" | "secondary">("default");
  const [isHatVisible, setIsHatVisible] = useState(true);
  const [hatColor, setHatColor] = useState("");
  const [badgeColor, setBadgeColor] = useState("");
  const { bodyColor, beakColor } = duckColorPresets[preset];

  return (
    <main className="w-screen h-screen flex">
      <div className="h-1/2 w-1/3">
        <DuckScene
          bodyColor={bodyColor}
          hatVisible={isHatVisible}
          hatColor={hatColor}
          badgeColor={badgeColor}
          beakColor={beakColor}
        />

        <button
          className="bg-orange-500 h-3 w-7"
          onClick={() => setPreset("default")}
        ></button>
        <button
          className="bg-pink-500 h-3 w-7"
          onClick={() => setPreset("secondary")}
        ></button>

        <button
          className="bg-red-500 h-3 w-7"
          onClick={() => setHatColor("red")}
        ></button>
        <button
          className="bg-pink-500 h-3 w-7"
          onClick={() => setBadgeColor("pink")}
        ></button>
        {isHatVisible ? (
          <button className="h-3 w-7" onClick={() => setIsHatVisible(false)}>
            Remove Hat
          </button>
        ) : (
          <button className="h-3 w-7" onClick={() => setIsHatVisible(true)}>
            add hat
          </button>
        )}
      </div>
    </main>
  );
}
