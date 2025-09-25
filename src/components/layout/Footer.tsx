export default function Footer() {
  return (
    <div className="w-full px-28 py-14 bg-blue-50 flex justify-center items-center gap-2.5 overflow-hidden">
      <div className="w-44 flex justify-center items-center gap-2.5">
        <div className="flex-1 inline-flex flex-col justify-center items-start gap-5">
          <div className="justify-start text-black text-xl font-normal font-['Inter']">
            About us
          </div>
          <div className="justify-start text-black text-xl font-normal font-['Inter']">
            Customer Support
          </div>
          <div className="justify-start text-black text-xl font-normal font-['Inter']">
            Company
          </div>
          <div className="justify-start text-black text-xl font-normal font-['Inter']">
            Legal
          </div>
          <div className="justify-start text-black text-xl font-normal font-['Inter']">
            Connect
          </div>
          <div className="justify-start text-black text-xl font-normal font-['Inter']">
            Shop / Products
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end items-center gap-2.5">
        <div className="inline-flex flex-col justify-center items-start gap-7">
          <div className="flex flex-col justify-start items-start gap-2.5">
            <div className="w-[542px] justify-start text-black text-xl font-bold font-['Inter']">
              Dear rubber duck lovers
            </div>
            <div className="w-[542px] justify-start text-black text-xl font-normal font-['Inter']">
              Founded with a love for everyday design and a splash of
              creativity, [Company Name] creates playful, high-quality products
              that bring personality to simple moments. Every item is
              thoughtfully crafted with attention to detail, durability, and a
              touch of fun — because we believe even the smallest things can
              make life brighter
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2.5">
            <div className="w-[542px] justify-start text-black text-xl font-bold font-['Inter']">
              Connect
            </div>
            <div className="inline-flex justify-start items-start gap-3 flex-wrap content-start">
              <div className="px-3.5 py-3 bg-white rounded-[100px] flex justify-center items-center gap-2.5">
                <div className="w-3.5 h-5 outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900"></div>
              </div>
              <div className="p-2.5 bg-white rounded-[100px] flex justify-center items-center gap-2.5">
                <div className="w-6 h-6 relative">
                  <div className="w-5 h-5 left-[2.50px] top-[2.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900"></div>
                  <div className="w-2.5 h-2.5 left-[7px] top-[7px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900"></div>
                </div>
              </div>
              <div className="p-2.5 bg-white rounded-[100px] flex justify-start items-center gap-2.5">
                <div className="w-6 h-6 relative">
                  <div className="w-5 h-5 left-[2.50px] top-[2.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900"></div>
                  <div className="w-2 h-2 left-[7.50px] top-[7.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900"></div>
                  <div className="w-[0.01px] h-0 left-[17.50px] top-[6.50px] absolute outline outline-2 outline-offset-[-1px] outline-slate-900"></div>
                </div>
              </div>
              <div className="p-2.5 bg-white rounded-[100px] flex justify-start items-center gap-2.5">
                <div className="w-6 h-6 relative">
                  <div className="w-0 h-1.5 left-[7px] top-[10px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900"></div>
                  <div className="w-1.5 h-1.5 left-[11px] top-[10px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900"></div>
                  <div className="w-[0.01px] h-0 left-[7px] top-[7px] absolute outline outline-2 outline-offset-[-1px] outline-slate-900"></div>
                  <div className="w-5 h-5 left-[2.50px] top-[2.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
