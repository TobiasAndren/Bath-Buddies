"use client";

import DuckScene from "@/components/DuckScene";
import { useState } from "react";

export default function Duck() {
  const [bodyColor, setBodyColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [isHatVisible, setIsHatVisible] = useState(true);
  const [hatColor, setHatColor] = useState("");
  const [badgeColor, setBadgeColor] = useState("");

  return (
    <main className="w-screen h-screen flex">
      <div className="h-1/2 w-1/3">
        <DuckScene
          bodyColor={bodyColor}
          eyeColor={eyeColor}
          hatVisible={isHatVisible}
          hatColor={hatColor}
          badgeColor={badgeColor}
        />
        <button
          className="bg-orange-300 h-3 w-7"
          onClick={() => setBodyColor("#ffca4b")}
        ></button>
        <button
          className="bg-red-500 h-3 w-7"
          onClick={() => setBodyColor("red")}
        ></button>
        <button
          className="bg-green-500 h-3 w-7"
          onClick={() => setBodyColor("green")}
        ></button>
        <button
          className="bg-black h-3 w-7"
          onClick={() => setEyeColor("black")}
        ></button>
        <button
          className="bg-blue-500 h-3 w-7"
          onClick={() => setEyeColor("blue")}
        ></button>
        <button
          className="bg-purple-500 h-3 w-7"
          onClick={() => setEyeColor("purple")}
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
