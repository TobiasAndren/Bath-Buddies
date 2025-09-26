export default function Footer() {
  return (
    <footer className="w-full px-28 py-14 bg-blue-50 flex justify-center items-center gap-64 overflow-hidden">
      <nav className="w-44 flex justify-center items-center gap-2.5">
        <ul className="flex-1 inline-flex flex-col justify-center items-start gap-5">
          <li>
            <a
              href="#"
              className="justify-start text-black text-xl font-normal font-['nunito']"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="justify-start text-black text-xl font-normal font-['nunito']"
            >
              Customer Support
            </a>
          </li>
          <li>
            <a
              href="#"
              className="justify-start text-black text-xl font-normal font-['nunito']"
            >
              Company
            </a>
          </li>
          <li>
            <a
              href="#"
              className="justify-start text-black text-xl font-normal font-['nunito']"
            >
              Legal
            </a>
          </li>
          <li>
            <a
              href="#"
              className="justify-start text-black text-xl font-normal font-['nunito']"
            >
              Connect
            </a>
          </li>
          <li>
            <a
              href="#"
              className="justify-start text-black text-xl font-normal font-['nunito']"
            >
              Shop / Products
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-between items-center">
        <img
          src="/images/footerBubbles.svg"
          alt="Footer bubbles"
          className="w-auto h-auto"
        />
      </div>
      <address className="flex justify-end items-center gap-2.5">
        <div className="inline-flex flex-col justify-center items-start gap-7">
          <section className="flex flex-col justify-start items-start gap-2.5">
            <h1 className="w-[542px] justify-start text-black text-xl font-bold font-['gloock']">
              Dear rubber duck lovers
            </h1>
            <p className="w-[542px] justify-start text-black text-xl font-normal font-['nunito']">
              Founded with a love for everyday design and a splash of
              creativity, Bath Buddies creates playful, high-quality products
              that bring personality to simple moments. Every item is
              thoughtfully crafted with attention to detail, durability, and a
              touch of fun — because we believe even the smallest things can
              make life brighter
            </p>
          </section>
          <section className="flex flex-col justify-start items-start gap-2.5">
            <h1 className="w-[542px] justify-start text-black text-xl font-bold font-['gloock']">
              Connect
            </h1>
            <nav className="inline-flex justify-start items-start gap-3 flex-wrap content-start">
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
            </nav>
          </section>
        </div>
      </address>
    </footer>
  );
}
