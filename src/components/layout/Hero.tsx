"use client";

import { useState } from "react";
import DuckScene from "../DuckScene";
import DuckCustomizer from "./DuckCustomizer";
import { eyeExpression } from "@/components/DuckModel";

interface HeroProps {
  className?: string;
}

export default function Hero({ className = "" }: HeroProps) {
  const [duckConfig, setDuckConfig] = useState({
    bodyColor: "#ffca4b",
    beakColor: "#f35626",
    hatVisible: true,
    hatColor: "#E572E3",
    badgeColor: "#70C6FF",
    eyeExpression: "normal" as eyeExpression,
  });

  const handleDuckChange = (config: typeof duckConfig) => {
    setDuckConfig(config);
  };

  return (
    <div
      className={`w-full px-14 py-6 relative inline-flex justify-start items-center gap-2.5 overflow-hidden ${className}`}
    >
      <div className="w-[864px] h-[970px] relative bg-blue-50 overflow-hidden">
        <DuckScene
          bodyColor={duckConfig.bodyColor}
          hatVisible={duckConfig.hatVisible}
          hatColor={duckConfig.hatColor}
          badgeColor={duckConfig.badgeColor}
          beakColor={duckConfig.beakColor}
          eyeExpression={duckConfig.eyeExpression}
        />
        <div className="absolute top-4 right-4 px-2.5 py-1 bg-neutral-50 rounded-[40px] flex justify-center items-center">
          <div className="pb-2.5 flex justify-start items-center gap-2.5">
            <img
              src="/icons/arrow-move-up-right.png"
              alt="Move up right"
              className="w-6 h-6"
            />
          </div>
          <div className="flex justify-center items-center gap-2.5">
            <div className="justify-start text-[#8E8E8E] text-base font-bold font-['Inter']">
              3D
            </div>
          </div>
          <div className="pt-2.5 flex justify-center items-end gap-2.5">
            <img
              src="/icons/arrow-move-up-left.png"
              alt="Move up left"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <DuckCustomizer onDuckChange={handleDuckChange} />
      </div>
    </div>
  );
}
