export default function ProductDescription() {
  return (
    <div className="w-full pl-16 pr-14 pt-5 flex flex-col justify-center items-start gap-7">
      <div className="flex flex-col justify-center items-start gap-2.5">
        <div className="justify-start text-black text-xl font-bold font-['Inter']">
          Product Details
        </div>
        <div className="w-[632px] justify-start text-black text-xl font-normal font-['Inter']">
          A classic favorite with a personal touch. This customizable rubber
          duck is simple, cheerful, and uniquely yours. A little companion
          designed to brighten any space or occasion
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-2.5">
        <div className="justify-start text-black text-xl font-bold font-['Inter']">
          Size
        </div>
        <div className="w-[632px] justify-start text-neutral-400 text-xl font-normal font-['Inter']">
          Dimensions: 8 cm × 7 cm × 9 cm Weight: approx. 45 g
        </div>
      </div>
    </div>
  );
}
