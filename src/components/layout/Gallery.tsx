export default function Gallery() {
  return (
    <div className="w-full px-14 py-24 flex justify-center items-center gap-5">
      <div className="flex justify-start items-center gap-5">
        <img
          className="w-[200px] h-[300px] rounded-[20px] object-cover"
          src="/images/pic.png"
          alt="Yellow duck in bathtub"
        />
        <img
          className="w-[200px] h-[300px] rounded-[20px] object-cover"
          src="/images/groupDucks.png"
          alt="Ducklings swimming in pond"
        />
      </div>
      <div className="flex justify-start items-center gap-5">
        <img
          className="w-[200px] h-[300px] rounded-[20px] object-cover"
          src="/images/bubbles.png"
          alt="Transparent bubbles floating"
        />
        <img
          className="w-[200px] h-[300px] rounded-[20px] object-cover"
          src="/images/ducks.png"
          alt="Pattern of yellow rubber ducks"
        />
      </div>
    </div>
  );
}
