import { FiverrLogo, upworkblack, XLogo } from "../assets/images";

const LeftNavbar = () => {
  return (
    <div className="w-[32px] min-h-screen flex flex-col items-center gap-3">

      {/* Top vertical line */}
      <div className="w-[1px] h-[180px] bg-gray-500 opacity-40" />

      <a href="https://x.com/CodeWith_Ranjit" target="_blank" rel="noreferrer">
        <img
          src={XLogo}
          className="w-[28px] opacity-60 hover:opacity-100 transition
          hover:-translate-y-0.5 cursor-pointer rounded-full"
        />
      </a>

      <a href="https://www.upwork.com/freelancers/~01c68da0c834d4fbb6?mp_source=share" target="_blank" rel="noreferrer">
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
