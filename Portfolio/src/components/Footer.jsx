import React from "react";
import { Email,Linkedin,Telegram, twitter } from "../assets/images";

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-[#ABB2BF]/50 px-6 md:px-0">
      <div className="max-w-[1024px] mx-auto py-10 flex flex-col md:flex-row justify-between gap-8 bottom-0">

        {/* Left */}
        <div className="space-y-2">
          <h3 className="text-white font-medium text-lg">
            Ranjit
          </h3>
          <p className="text-[#ABB2BF] text-sm">
            Software Engineer · Full-Stack Developer
          </p>
          <p className="text-[#ABB2BF] text-sm">
            ranjitksingh.079@gmail.com
          </p>
        </div>

        {/* Right */}
        <div className="space-y-3 text-center">
          <p className="text-[#ABB2BF] text-sm">
            Media
          </p>
          <div className="flex items-center gap-3">
            <a
  href="mailto:ranjitksingh.079@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="opacity-100 hover:scale-[1.2] transition-all duration-300"
>
  <span className="flex items-center justify-center w-9 h-9">
    <img src={Email} alt="GitHub" className="w-10 h-8 rounded-sm" />
  </span>
</a>


            <a
  href="https://www.linkedin.com/in/ranjit-kumar-singh/"
  target="_blank"
  rel="noreferrer"
  className="opacity-100 hover:scale-[1.2] transition-all duration-300"
>
  <span className="flex items-center justify-center w-9 h-9">
    <img src={Linkedin} alt="GitHub" className="w-8 h-8 rounded-sm" />
  </span>
</a>

            <a
  href="https://x.com/CodeWith_Ranjit"
  target="_blank"
  rel="noreferrer"
  className="opacity-100 hover:scale-[1.2] transition-all duration-300 "
>
  <span className="flex items-center justify-center w-9 h-9">
    <img src={twitter} alt="GitHub" className="w-8 h-8 rounded-sm" />
  </span>
</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center pb-6">
        <p className="text-[#ABB2BF] text-xs">
          © {new Date().getFullYear()} Ranjit. Built with clarity and purpose.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
