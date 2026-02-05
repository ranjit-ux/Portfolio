import { useEffect, useState } from "react";
import { FiverrLogo, upworkblack, XLogo } from "../assets/images";

const LeftNavbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 🔥 subtle parallax (clamped)
      const translated = Math.min(scrollY * 0.08, 24);
      setOffset(translated);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="hidden md:flex w-[32px] min-h-screen flex-col items-center gap-3"
      style={{
        transform: `translateY(${offset}px)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* Top vertical line */}
      <div className="w-[1px] h-[180px] bg-gray-500 opacity-40" />

      <a href="https://x.com/CodeWith_Ranjit" target="_blank" rel="noreferrer">
        <img
          src={XLogo}
          className="w-[28px] opacity-60 hover:opacity-100 transition
          hover:-translate-y-0.5 cursor-pointer rounded-full"
        />
      </a>

      <a
        href="https://www.upwork.com/freelancers/~01c68da0c834d4fbb6?mp_source=share"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={upworkblack}
          className="w-[30px] opacity-60 hover:opacity-100 transition
          hover:-translate-y-0.5 cursor-pointer rounded-full"
        />
      </a>

      <a href="https://www.fiverr.com/s/LdbXayp" target="_blank" rel="noreferrer">
        <img
          src={FiverrLogo}
          className="w-[28px] opacity-60 hover:opacity-100 transition
          hover:-translate-y-0.5 cursor-pointer rounded-full"
        />
      </a>
    </div>
  );
};

export default LeftNavbar;
