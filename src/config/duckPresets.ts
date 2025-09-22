export type DuckColorPreset = {
  bodyColor: string;
  beakColor: string;
};

export const duckColorPresets: Record<
  "default" | "secondary",
  DuckColorPreset
> = {
  default: {
    bodyColor: "#FFCB2A",
    beakColor: "#FF8019",
  },
  secondary: {
    bodyColor: "#FF89CB",
    beakColor: "#FF383F",
  },
};
