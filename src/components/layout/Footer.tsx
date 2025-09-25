export default function Footer() {
  return (
    <div className="w-full px-28 py-14 bg-blue-50 flex justify-center items-center gap-64 overflow-hidden">
      <div className="w-44 flex justify-center items-center gap-2.5">
        <div className="flex-1 inline-flex flex-col justify-center items-start gap-5">
          <div className="justify-start text-black text-xl font-normal font-['nunito']">
            About us
          </div>
          <div className="justify-start text-black text-xl font-normal font-['nunito']">
            Customer Support
          </div>
          <div className="justify-start text-black text-xl font-normal font-['nunito']">
            Company
          </div>
          <div className="justify-start text-black text-xl font-normal font-['nunito']">
            Legal
          </div>
          <div className="justify-start text-black text-xl font-normal font-['nunito']">
            Connect
          </div>
          <div className="justify-start text-black text-xl font-normal font-['nunito']">
            Shop / Products
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <img
          src="/images/footerBubbles.svg"
          alt="Footer bubbles"
          className="w-auto h-auto"
        />
      </div>
      <div className="flex justify-end items-center gap-2.5">
        <div className="inline-flex flex-col justify-center items-start gap-7">
          <div className="flex flex-col justify-start items-start gap-2.5">
            <div className="w-[542px] justify-start text-black text-xl font-bold font-['gloock']">
              Dear rubber duck lovers
            </div>
            <div className="w-[542px] justify-start text-black text-xl font-normal font-['nunito']">
              Founded with a love for everyday design and a splash of
              creativity, Bath Buddies creates playful, high-quality products
              that bring personality to simple moments. Every item is
              thoughtfully crafted with attention to detail, durability, and a
              touch of fun — because we believe even the smallest things can
              make life brighter
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2.5">
            <div className="w-[542px] justify-start text-black text-xl font-bold font-['gloock']">
              Connect
            </div>
            <div className="inline-flex justify-start items-start gap-3 flex-wrap content-start">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center">
                <img
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </div>
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center">
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </div>
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center">
                <img
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  className="w-8 h-8"
                />
              </div>
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center">
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
