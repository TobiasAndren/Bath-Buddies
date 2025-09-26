export default function Header() {
  return (
    <header className="w-full px-15 py-7.5 bg-blue-50 border-b-2 border-sky-100 flex justify-center items-start gap-2.5 overflow-hidden">
      <nav className="flex-1 flex justify-start items-center gap-10">
        <a
          href="#"
          className="justify-start text-black text-base font-normal font-['nunito']"
        >
          New arrivals
        </a>
        <a
          href="#"
          className="justify-start text-black text-base font-normal font-['nunito']"
        >
          Collection
        </a>
      </nav>
      <div className="flex-1 flex justify-center items-center gap-2.5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-sky-500 rounded-full border-2 border-brand-blue flex items-center justify-center">
            <img
              src="/icons/brandIcon.svg"
              alt="Brand Icon"
              className="w-8 h-8"
            />
          </div>
          <h1 className="justify-start text-black text-2xl font-normal font-['Gloock']">
            Bath Buddies
          </h1>
        </div>
      </div>
      <nav className="flex-1 flex justify-end items-center gap-10">
        <a
          href="#"
          className="justify-start text-black text-base font-normal font-['nunito']"
        >
          Profile
        </a>
        <a
          href="#"
          className="justify-start text-black text-base font-normal font-['nunito']"
        >
          Cart
        </a>
      </nav>
    </header>
  );
}
