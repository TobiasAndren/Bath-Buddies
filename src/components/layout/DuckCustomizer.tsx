"use client";

import { useState } from "react";
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
  const [isHatVisible, setIsHatVisible] = useState(true);
  const [hatColor, setHatColor] = useState("");
  const [badgeColor, setBadgeColor] = useState("");
  const [eyeExpression, setEyeExpression] = useState<eyeExpression>("normal");
  const [bodyColor, setBodyColor] = useState("#FFCB2A");
  const [beakColor, setBeakColor] = useState("#FF8019");
  const [hatRimColor, setHatRimColor] = useState("#70C6FF");
  const [hatBaseColor, setHatBaseColor] = useState("#E572E3");

  const handleBodyColorChange = (color: string) => {
    setBodyColor(color);
    onDuckChange({
      bodyColor: color,
      beakColor,
      hatVisible: isHatVisible,
      hatColor,
      badgeColor,
      eyeExpression,
    });
  };

  const handleBeakColorChange = (color: string) => {
    setBeakColor(color);
    onDuckChange({
      bodyColor,
      beakColor: color,
      hatVisible: isHatVisible,
      hatColor,
      badgeColor,
      eyeExpression,
    });
  };

  const handleHatRimColorChange = (color: string) => {
    setHatRimColor(color);
    onDuckChange({
      bodyColor,
      beakColor,
      hatVisible: isHatVisible,
      hatColor,
      badgeColor: color,
      eyeExpression,
    });
  };

  const handleHatBaseColorChange = (color: string) => {
    setHatBaseColor(color);
    onDuckChange({
      bodyColor,
      beakColor,
      hatVisible: isHatVisible,
      hatColor: color,
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
    <div className="w-full h-full flex flex-col justify-start items-start gap-5">
      <div className="pl-10 pt-5 pb-2.5 flex flex-col justify-start items-start gap-5">
        <h1 className="justify-start text-Text-Black text-4xl font-normal font-['Gloock']">
          Customize your duck
        </h1>
        <div className="flex flex-col justify-start items-start gap-7">
          {/* Color on duck */}
          <div className="flex flex-col justify-start items-start gap-3.5">
            <div className="justify-start text-Text-Black text-xl font-normal font-['Gloock']">
              Color on duck:
            </div>
            <div className="inline-flex justify-start items-start gap-3.5">
              <div className="inline-flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-Text-Black text-lg font-normal font-['Gloock']">
                  Body:
                </div>
                <div className="inline-flex justify-start items-start gap-5">
                  <button
                    className={`p-2.5 rounded-[10px] ${
                      bodyColor === "#FFCB2A"
                        ? "outline outline-1 outline-offset-[-1px] outline-zinc-400"
                        : ""
                    } flex justify-start items-center gap-2.5`}
                    onClick={() => handleBodyColorChange("#FFCB2A")}
                  >
                    <div className="inline-flex flex-col justify-start items-center gap-2.5">
                      <div className="w-14 h-14 bg-duck-yellow rounded-[5px]"></div>
                      <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                        Yellow
                      </div>
                    </div>
                  </button>
                  <button
                    className={`p-2.5 rounded-[10px] ${
                      bodyColor === "#FF89CB"
                        ? "outline outline-1 outline-offset-[-1px] outline-zinc-400"
                        : ""
                    } inline-flex flex-col justify-start items-center gap-2.5`}
                    onClick={() => handleBodyColorChange("#FF89CB")}
                  >
                    <div className="inline-flex flex-col justify-start items-center gap-2.5">
                      <div className="w-14 h-14 bg-duck-pink rounded-[5px]"></div>
                      <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                        Pink
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-Text-Black text-lg font-normal font-['Gloock']">
                  Beak:
                </div>
                <div className="inline-flex justify-start items-start gap-5">
                  <button
                    className={`p-2.5 rounded-[10px] ${
                      beakColor === "#FF8019"
                        ? "outline outline-1 outline-offset-[-1px] outline-zinc-400"
                        : ""
                    } flex justify-start items-center gap-2.5`}
                    onClick={() => handleBeakColorChange("#FF8019")}
                  >
                    <div className="inline-flex flex-col justify-start items-center gap-2.5">
                      <div className="w-14 h-14 bg-beak-orange rounded-[5px]"></div>
                      <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                        Orange
                      </div>
                    </div>
                  </button>
                  <button
                    className={`p-2.5 rounded-[10px] ${
                      beakColor === "#FF383F"
                        ? "outline outline-1 outline-offset-[-1px] outline-zinc-400"
                        : ""
                    } inline-flex flex-col justify-start items-center gap-2.5`}
                    onClick={() => handleBeakColorChange("#FF383F")}
                  >
                    <div className="inline-flex flex-col justify-start items-center gap-2.5">
                      <div className="w-14 h-14 bg-beak-red rounded-[5px]"></div>
                      <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                        Red
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Eyes */}
          <div className="flex flex-col justify-start items-start gap-3.5">
            <div className="justify-start text-Text-Black text-xl font-normal font-['Gloock']">
              Eyes:
            </div>
            <div className="inline-flex justify-start items-start gap-5">
              <button
                className={`p-2.5 rounded-[10px] ${
                  eyeExpression === "grinning"
                    ? "outline outline-1 outline-offset-[-1px] outline-zinc-400"
                    : ""
                } flex justify-start items-center gap-2.5`}
                onClick={() => handleEyeChange("grinning")}
              >
                <div className="inline-flex flex-col justify-start items-center gap-2.5">
                  <img
                    className="w-14 h-14 rounded-[5px]"
                    src="/images/grinningeyes.png"
                    alt="Grinning eyes"
                  />
                  <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                    Grinning
                  </div>
                </div>
              </button>
              <button
                className={`p-2.5 rounded-[10px] ${
                  eyeExpression === "normal"
                    ? "outline outline-1 outline-offset-[-1px] outline-zinc-400"
                    : ""
                } flex justify-start items-center gap-2.5`}
                onClick={() => handleEyeChange("normal")}
              >
                <div className="inline-flex flex-col justify-start items-center gap-2.5">
                  <img
                    className="w-14 h-14 rounded-[5px]"
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
            <div className="justify-start text-Text-Black text-xl font-normal font-['Gloock']">
              Accessories:
            </div>
            <div className="inline-flex justify-start items-start gap-5">
              <button
                className={`p-2.5 rounded-[10px] ${
                  isHatVisible
                    ? "outline outline-1 outline-offset-[-1px] outline-zinc-400"
                    : ""
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
                className={`p-2.5 rounded-[10px] ${
                  !isHatVisible
                    ? "outline outline-1 outline-offset-[-1px] outline-zinc-400"
                    : ""
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
            <div className="justify-start text-Text-Black text-xl font-normal font-['Gloock']">
              Color on Hat:
            </div>
            <div className="inline-flex justify-start items-start gap-3.5">
              <div className="inline-flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-Text-Black text-lg font-normal font-['Gloock']">
                  Hat rim:
                </div>
                <div className="inline-flex justify-start items-start gap-5">
                  <button
                    className={`p-2.5 rounded-[10px] ${
                      hatRimColor === "#70C6FF"
                        ? "outline outline-1 outline-offset-[-1px] outline-zinc-400"
                        : ""
                    } flex justify-start items-center gap-2.5`}
                    onClick={() => handleHatRimColorChange("#70C6FF")}
                  >
                    <div className="inline-flex flex-col justify-start items-center gap-2.5">
                      <div className="w-14 h-14 bg-hat-rim-ocean rounded-[5px]"></div>
                      <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                        Ocean
                      </div>
                    </div>
                  </button>
                  <button
                    className={`p-2.5 rounded-[10px] ${
                      hatRimColor === "#004B8D"
                        ? "outline outline-1 outline-offset-[-1px] outline-zinc-400"
                        : ""
                    } inline-flex flex-col justify-start items-center gap-2.5`}
                    onClick={() => handleHatRimColorChange("#004B8D")}
                  >
                    <div className="inline-flex flex-col justify-start items-center gap-2.5">
                      <div className="w-14 h-14 bg-hat-rim-navy rounded-[5px]"></div>
                      <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                        Navy
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-Text-Black text-lg font-normal font-['Gloock']">
                  Hat Base:
                </div>
                <div className="inline-flex justify-start items-start gap-5">
                  <button
                    className={`p-2.5 rounded-[10px] ${
                      hatBaseColor === "#E572E3"
                        ? "outline outline-1 outline-offset-[-1px] outline-zinc-400"
                        : ""
                    } flex justify-start items-center gap-2.5`}
                    onClick={() => handleHatBaseColorChange("#E572E3")}
                  >
                    <div className="inline-flex flex-col justify-start items-center gap-2.5">
                      <div className="w-14 h-14 bg-hat-base-pink rounded-[5px]"></div>
                      <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                        Pink
                      </div>
                    </div>
                  </button>
                  <button
                    className={`p-2.5 rounded-[10px] ${
                      hatBaseColor === "#1DBEE1"
                        ? "outline outline-1 outline-offset-[-1px] outline-zinc-400"
                        : ""
                    } inline-flex flex-col justify-start items-center gap-2.5`}
                    onClick={() => handleHatBaseColorChange("#1DBEE1")}
                  >
                    <div className="inline-flex flex-col justify-start items-center gap-2.5">
                      <div className="w-14 h-14 bg-hat-base-aqua rounded-[5px]"></div>
                      <div className="justify-start text-Text-Black text-base font-normal font-['Nunito']">
                        Aqua
                      </div>
                    </div>
                  </button>
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
          <div className="px-14 py-5 bg-sky-400 rounded-md shadow-[0px_4px_4px_0px_rgba(136,123,213,0.25)] inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-white text-2xl font-bold font-['Nunito']">
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
