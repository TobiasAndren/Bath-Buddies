"use client";

import DuckScene from "@/components/DuckScene";
import { useState } from "react";
import { eyeExpression, colorOptions } from "@/components/DuckModel";

export default function Duck() {
  const [preset, setPreset] = useState<colorOptions>("default");
  const [isHatVisible, setIsHatVisible] = useState(true);
  const [hatColor, setHatColor] = useState("");
  const [badgeColor, setBadgeColor] = useState("");
  const [eyeExpression, setEyeExpression] = useState<eyeExpression>("normal");
  const [bodyColor, setBodyColor] = useState("#FFCB2A");
  const [beakColor, setBeakColor] = useState("#FF8019");
  return (
    <main className="w-screen h-screen flex">
      <div className="h-1/2 w-1/3">
        <DuckScene
          bodyColor={bodyColor}
          hatVisible={isHatVisible}
          hatColor={hatColor}
          badgeColor={badgeColor}
          beakColor={beakColor}
          eyeExpression={eyeExpression}
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
        <button className="h-7 w-15" onClick={() => setEyeExpression("normal")}>
          normal
        </button>
        <button
          className="h-7 w-15"
          onClick={() => setEyeExpression("grinning")}
        >
          grinning
        </button>
      </div>
    </main>
  );
}
