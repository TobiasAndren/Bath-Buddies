import DuckScene from "../DuckScene";

export default function Hero() {
  return (
    <div className="self-stretch px-14 py-6 relative inline-flex justify-start items-center gap-2.5 overflow-hidden">
      <div className="w-[865px] self-stretch bg-neutral-200 rounded-3xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <DuckScene />
      </div>
      <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-5">
        {/* Future customization component will go here */}
      </div>
    </div>
  );
}
