export default function Header() {
  return (
    <div className="w-full px-14 py-5 bg-gray-200 flex justify-center items-start gap-2.5 overflow-hidden">
      <div className="flex-1 flex justify-start items-center gap-10">
        <div className="justify-start text-black text-base font-normal font-['Inter']">
          Profile
        </div>
        <div className="justify-start text-black text-base font-normal font-['Inter']">
          New arrivals
        </div>
        <div className="justify-start text-black text-base font-normal font-['Inter']">
          Collection
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center gap-2.5">
        <div className="justify-start text-black text-2xl font-normal font-['Inter']">
          Rubber Duck Shop
        </div>
      </div>
      <div className="flex-1 flex justify-end items-center gap-10">
        <div className="justify-start text-black text-base font-normal font-['Inter']">
          Profile
        </div>
        <div className="justify-start text-black text-base font-normal font-['Inter']">
          Cart
        </div>
      </div>
    </div>
  );
}
