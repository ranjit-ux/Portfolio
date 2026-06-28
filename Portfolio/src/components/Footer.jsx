import React from "react";
import { Email, Linkedin, twitter, LinkedinLogo, GmailLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-[#ABB2BF]/50 px-4 md:px-0">
      <div className="max-w-[1024px] mx-auto py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

        {/* Left */}
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-white font-medium text-lg">
            Ranjit
          </h3>
          <p className="text-[#ABB2BF] text-sm">
            Software Engineer · Full-Stack Developer
          </p>
          <p className="text-[#ABB2BF] text-sm break-all md:break-normal">
            ranjitksingh.079@gmail.com
          </p>
        </div>

        {/* Right */}
        <div className="space-y-3 text-center md:text-right">
          <p className="text-[#ABB2BF] text-sm">
            Media
          </p>

          <div className="flex items-center justify-center md:justify-end gap-4">
            <a
              href="mailto:ranjitksingh.079@gmail.com"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img src={GmailLogo} alt="Email" className="h-9" />
            </a>

            <a
              href="https://www.linkedin.com/in/ranjit-kumar-singh/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img src={LinkedinLogo} alt="LinkedIn" className="w-8 h-8" />
            </a>

            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img src={twitter} alt="Twitter" className="w-8 h-8" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center pb-6 px-4">
        <p className="text-[#ABB2BF] text-xs">
          © {new Date().getFullYear()} Ranjit. Built with clarity and purpose.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
