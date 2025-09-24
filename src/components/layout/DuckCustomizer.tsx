"use client";

import { useState } from "react";
import { duckColorPresets } from "@/config/duckPresets";
import { eyeExpression, colorOptions } from "@/components/DuckModel";

interface DuckCustomizerProps {
  onDuckChange: (config: {
    bodyColor: string;
    beakColor: string;
    hatVisible: boolean;
    hatColor: string;
    badgeColor: string;
    eyeExpression: eyeExpression;
  }) => void;
}

export default function DuckCustomizer({ onDuckChange }: DuckCustomizerProps) {
  const [preset, setPreset] = useState<colorOptions>("default");
  const [isHatVisible, setIsHatVisible] = useState(true);
  const [hatColor, setHatColor] = useState("");
  const [badgeColor, setBadgeColor] = useState("");
  const [eyeExpression, setEyeExpression] = useState<eyeExpression>("normal");
  const { bodyColor, beakColor } = duckColorPresets[preset];

  const handlePresetChange = (newPreset: colorOptions) => {
    setPreset(newPreset);
    const { bodyColor, beakColor } = duckColorPresets[newPreset];
    onDuckChange({
      bodyColor,
      beakColor,
      hatVisible: isHatVisible,
      hatColor,
      badgeColor,
      eyeExpression,
    });
  };

  const handleHatToggle = (visible: boolean) => {
    setIsHatVisible(visible);
    onDuckChange({
      bodyColor,
      beakColor,
      hatVisible: visible,
      hatColor,
      badgeColor,
      eyeExpression,
    });
  };

  const handleEyeChange = (expression: eyeExpression) => {
    setEyeExpression(expression);
    onDuckChange({
      bodyColor,
      beakColor,
      hatVisible: isHatVisible,
      hatColor,
      badgeColor,
      eyeExpression: expression,
    });
  };

  return (
    <div className="self-stretch self-stretch inline-flex flex-col justify-start items-start gap-5">
      <div className="pl-10 pt-5 pb-2.5 flex flex-col justify-start items-start gap-5">
        <div className="justify-start text-Text-Black text-4xl font-normal font-['Gloock']">
          Customize your duck
        </div>
        <div className="flex flex-col justify-start items-start gap-7">
          {/* Color on duck */}
          <div className="flex flex-col justify-start items-start gap-3.5">
            <div className="rounded-[5px] outline outline-2 outline-offset-[-2px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="justify-start text-Text-Black text-xl font-normal font-['Gloock']">
                Color on duck:
              </div>
            </div>
            <div className="inline-flex justify-start items-start gap-5">
              <button
                className={`p-2.5 rounded-[10px] outline outline-1 outline-offset-[-1px] ${
                  preset === "default" ? "outline-zinc-400" : "outline-zinc-400"
                } flex justify-start items-center gap-2.5`}
                onClick={() => handlePresetChange("default")}
              >
                <div className="inline-flex flex-col justify-start items-center gap-2.5">
                  <div className="w-14 h-14 bg-Duck-Yellow rounded-[5px] border-2"></div>
                  <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                    Yellow
                  </div>
                </div>
              </button>
              <button
                className={`p-2.5 rounded-[10px] ${
                  preset === "secondary" ? "bg-white" : "bg-white"
                } inline-flex flex-col justify-start items-center gap-2.5`}
                onClick={() => handlePresetChange("secondary")}
              >
                <div className="w-14 h-14 bg-Duck-Pink rounded-[5px] border-2"></div>
                <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                  Pink
                </div>
              </button>
            </div>
          </div>

          {/* Eyes */}
          <div className="flex flex-col justify-start items-start gap-3.5">
            <div className="rounded-[5px] outline outline-2 outline-offset-[-2px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="justify-start text-Text-Black text-xl font-normal font-['Gloock']">
                Eyes:
              </div>
            </div>
            <div className="inline-flex justify-start items-start gap-5">
              <button
                className={`p-2.5 rounded-[10px] outline outline-1 outline-offset-[-1px] ${
                  eyeExpression === "grinning"
                    ? "outline-zinc-400"
                    : "outline-zinc-400"
                } flex justify-start items-center gap-2.5`}
                onClick={() => handleEyeChange("grinning")}
              >
                <div className="inline-flex flex-col justify-start items-center gap-2.5">
                  <img
                    className="w-14 h-14 rounded-[5px] border-2"
                    src="/images/grinningeyes.png"
                    alt="Grinning eyes"
                  />
                  <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                    Grinning
                  </div>
                </div>
              </button>
              <button
                className={`p-2.5 rounded-[10px] outline outline-2 outline-offset-[-2px] ${
                  eyeExpression === "normal"
                    ? "outline-zinc-400"
                    : "outline-zinc-400"
                } flex justify-start items-center gap-2.5`}
                onClick={() => handleEyeChange("normal")}
              >
                <div className="inline-flex flex-col justify-start items-center gap-2.5">
                  <img
                    className="w-14 h-14 rounded-[5px] border-2"
                    src="/images/normaleyes.png"
                    alt="Normal eyes"
                  />
                  <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                    Normal
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Accessories */}
          <div className="flex flex-col justify-start items-start gap-3.5">
            <div className="rounded-[5px] outline outline-2 outline-offset-[-2px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="justify-start text-Text-Black text-xl font-normal font-['Gloock']">
                Accessories:
              </div>
            </div>
            <div className="inline-flex justify-start items-start gap-5">
              <button
                className={`p-2.5 rounded-[10px] outline outline-1 outline-offset-[-1px] ${
                  isHatVisible ? "outline-zinc-400" : "outline-zinc-400"
                } flex justify-start items-center gap-2.5`}
                onClick={() => handleHatToggle(true)}
              >
                <div className="inline-flex flex-col justify-start items-center gap-2.5">
                  <img
                    className="w-14 h-14"
                    src="/images/hat.png"
                    alt="With hat"
                  />
                  <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                    With
                  </div>
                </div>
              </button>
              <button
                className={`p-2.5 rounded-[10px] outline outline-1 outline-offset-[-1px] ${
                  !isHatVisible ? "outline-zinc-400" : "outline-zinc-400"
                } flex justify-start items-center gap-2.5`}
                onClick={() => handleHatToggle(false)}
              >
                <div className="inline-flex flex-col justify-start items-center gap-2.5">
                  <img
                    className="w-14 h-14"
                    src="/images/noHat.png"
                    alt="Without hat"
                  />
                  <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                    Without
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Color on Hat */}
          <div className="flex flex-col justify-start items-start gap-3.5">
            <div className="rounded-[5px] outline outline-2 outline-offset-[-2px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="justify-start text-Text-Black text-xl font-normal font-['Gloock']">
                Color on Hat:
              </div>
            </div>
            <div className="inline-flex justify-start items-start gap-3.5">
              <div className="inline-flex flex-col justify-start items-start gap-2">
                <div className="rounded-[5px] outline outline-2 outline-offset-[-2px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                  <div className="justify-start text-Text-Black text-lg font-normal font-['Gloock']">
                    Hat rim:
                  </div>
                </div>
                <div className="inline-flex justify-start items-start gap-5">
                  <div className="p-2.5 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-400 flex justify-start items-center gap-2.5">
                    <div className="inline-flex flex-col justify-start items-center gap-2.5">
                      <div className="w-14 h-14 bg-Hat-band1 rounded-[5px] border-2"></div>
                      <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                        Light Blue
                      </div>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-[10px] inline-flex flex-col justify-start items-center gap-2.5">
                    <div className="w-14 h-14 bg-Hat-band2 rounded-[5px] border-2"></div>
                    <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                      Dark Blue
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start gap-2">
                <div className="rounded-[5px] outline outline-2 outline-offset-[-2px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                  <div className="justify-start text-Text-Black text-lg font-normal font-['Gloock']">
                    Hat Base:
                  </div>
                </div>
                <div className="inline-flex justify-start items-start gap-5">
                  <div className="p-2.5 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-400 flex justify-start items-center gap-2.5">
                    <div className="inline-flex flex-col justify-start items-center gap-2.5">
                      <div className="w-14 h-14 bg-Hat-base1 rounded-[5px] border-2"></div>
                      <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                        Pink
                      </div>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-[10px] inline-flex flex-col justify-start items-center gap-2.5">
                    <div className="w-14 h-14 bg-Hat-base2 rounded-[5px] border-2"></div>
                    <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                      Turquoise
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-end items-end gap-2.5">
        <div className="flex flex-col justify-start items-end gap-5">
          <div className="justify-start text-Text-Black text-xl font-normal font-['Gloock']">
            199,00 Kr
          </div>
          <div className="px-14 py-5 bg-Text-Black rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-Text-White text-base font-bold font-['Nunito']">
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
