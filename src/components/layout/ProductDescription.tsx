interface ProductDescriptionProps {
  className?: string;
}

export default function ProductDescription({
  className = "",
}: ProductDescriptionProps) {
  return (
    <section
      className={`w-full pl-16 pr-14 pt-5 flex flex-col justify-center items-start gap-7 ${className}`}
    >
      <article className="flex flex-col justify-center items-start gap-2.5">
        <h1 className="justify-start text-black text-xl font-bold">
          Product Details
        </h1>
        <p className="w-[632px] justify-start text-black text-xl font-normal font-['nunito']">
          A classic favorite with a personal touch. This customizable rubber
          duck is simple, cheerful, and uniquely yours. A little companion
          designed to brighten any space or occasion
        </p>
      </article>
      <div className="flex flex-col justify-center items-start gap-2.5">
        <h1 className="justify-start text-black text-xl font-bold">Size</h1>
        <p className="w-[632px] justify-start text-neutral-400 text-xl font-normal font-['nunito']">
          Dimensions: 8 cm × 7 cm × 9 cm <br />
          Weight: approx. 45 g
        </p>
      </div>
    </section>
  );
}
