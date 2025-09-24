export default function Header() {
  return (
    <div className="w-full px-15 py-7.5 bg-blue-50 border-b-2 border-sky-100 flex justify-center items-start gap-2.5 overflow-hidden">
      <div className="flex-1 flex justify-start items-center gap-10">
        <div className="justify-start text-black text-base font-normal font-['Inter']">
          New arrivals
        </div>
        <div className="justify-start text-black text-base font-normal font-['Inter']">
          Collection
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center gap-2.5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-sky-500 rounded-full border-2 border-[#0085FF] flex items-center justify-center">
            <img
              src="/icons/brandIcon.svg"
              alt="Brand Icon"
              className="w-8 h-8"
            />
          </div>
          <div className="justify-start text-black text-2xl font-normal font-['Inter']">
            Rubber Duck Shop
          </div>
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
