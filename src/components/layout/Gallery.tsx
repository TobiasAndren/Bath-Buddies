interface GalleryProps {
  className?: string;
}

export default function Gallery({ className = "" }: GalleryProps) {
  return (
    <section
      className={`w-full px-14 py-24 flex justify-center items-center gap-5 ${className}`}
    >
      <div className="flex justify-start items-center gap-5">
        <figure>
          <img
            className="h-[300px] xl:h-[500px] rounded-[20px] object-cover"
            src="/images/pic.png"
            alt="Yellow duck in bathtub"
          />
        </figure>
        <figure>
          <img
            className="h-[300px] xl:h-[500px] rounded-[20px] object-cover"
            src="/images/groupDucks.png"
            alt="Ducklings swimming in pond"
          />
        </figure>
      </div>
      <div className="flex justify-start items-center gap-5">
        <figure>
          <img
            className="h-[300px] xl:h-[500px] rounded-[20px] object-cover"
            src="/images/bubbles.png"
            alt="Transparent bubbles floating"
          />
        </figure>
        <figure>
          <img
            className="h-[300px] xl:h-[500px] rounded-[20px] object-cover"
            src="/images/ducks.png"
            alt="Pattern of yellow rubber ducks"
          />
        </figure>
      </div>
    </section>
  );
}
