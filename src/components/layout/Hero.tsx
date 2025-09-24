"use client";

import { useState } from "react";
import DuckScene from "../DuckScene";
import DuckCustomizer from "./DuckCustomizer";
import { eyeExpression } from "@/components/DuckModel";

export default function Hero() {
  const [duckConfig, setDuckConfig] = useState({
    bodyColor: "#ffca4b",
    beakColor: "#f35626",
    hatVisible: true,
    hatColor: "#a968c4",
    badgeColor: "#5b1657",
    eyeExpression: "normal" as eyeExpression,
  });

  const handleDuckChange = (config: typeof duckConfig) => {
    setDuckConfig(config);
  };

  return (
    <div className="self-stretch w-full px-14 py-6 relative inline-flex justify-start items-center gap-2.5 overflow-hidden">
      <div className="w-50% h-[600px] relative bg-blue-50 overflow-hidden">
        <DuckScene
          bodyColor={duckConfig.bodyColor}
          hatVisible={duckConfig.hatVisible}
          hatColor={duckConfig.hatColor}
          badgeColor={duckConfig.badgeColor}
          beakColor={duckConfig.beakColor}
          eyeExpression={duckConfig.eyeExpression}
        />
      </div>
      <DuckCustomizer onDuckChange={handleDuckChange} />
      <div className="w-50% px-2.5 py-1 left-[788px] top-[66px] absolute bg-neutral-50 rounded-[40px] flex justify-center items-center">
        <div className="pb-2.5 flex justify-start items-center gap-2.5">
          <div className="w-6 h-6 relative">
            <div className="w-3.5 h-3.5 left-[4px] top-[6px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Text-Grey"></div>
            <div className="w-[3px] h-1.5 left-[17px] top-[3px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Text-Grey"></div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2.5">
          <div className="justify-start text-Text-Grey text-base font-bold font-['Inter']">
            3D
          </div>
        </div>
        <div className="pt-2.5 flex justify-center items-end gap-2.5">
          <div className="w-6 h-6 relative">
            <div className="w-3.5 h-3.5 left-[5px] top-[3px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Text-Grey"></div>
            <div className="w-[3px] h-1.5 left-[4px] top-[15px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Text-Grey"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
