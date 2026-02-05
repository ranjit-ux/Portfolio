import { useEffect, useRef, useState } from "react";
import { StyleDefaultSvg } from "../assets/images";
import { Link, useLocation } from "react-router-dom";

const TopNavbar = () => {
  const { pathname } = useLocation();
  const [open,setOpen] = useState(false);
  const navref = useRef(null);
  const navItem = (to, label) => (
    <Link 
      to={to} 
      className="flex gap-1 items-center py-2"
      onClick={() => setOpen(false)}
    >
      <span className="primary">#</span>
      <span
        className={`transition ${
          pathname === to
            ? "text-white"
            : "text-primary hover:text-white"
        }`}
      >
        {label}
      </span>
    </Link>
  );
  useEffect(() => {
    const handleClickOutside= (e) => {
      if(open && navref.current && !navref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart",handleClickOutside);

    return () => {
      document.removeEventListener("mousedown",handleClickOutside);
      document.removeEventListener("touchstart",handleClickOutside);
    };
  },[open]);

  return (
    <div
      ref={navref} 
      className="relative w-full max-w-[1024px] h-[61px] mx-auto flex items-center justify-between text-white font-fira">

      {/* Left: Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={StyleDefaultSvg} alt="logo" className="w-[16px] h-[16px]" />
        <span className="font-semibold text-[16px]">Ranjit</span>
      </Link>

      {/* Right: Links */}
      <div className="hidden md:flex gap-8 text-[14px]">
        {navItem("/", "home")}
        {navItem("/projects", "works")}
        {navItem("/about", "about-me")}
        {navItem("/contact", "contacts")}
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-[5px] focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className={`h-[2px] w-6 bg-white transition ${open && "rotate-45 translate-y-[7px]"}`} />
        <span className={`h-[2px] w-6 bg-white transition ${open && "opacity-0"}`} />
        <span className={`h-[2px] w-6 bg-white transition ${open && "-rotate-45 -translate-y-[7px]"}`} />
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-[61px] right-0  bg-[#282C33] border-t rounded-xl border-white/10 flex flex-col px-6 py-4 md:hidden z-50">
          {navItem("/", "home")}
          {navItem("/projects", "works")}
          {navItem("/about", "about-me")}
          {navItem("/contact", "contacts")}
        </div>
      )}
    </div>
  );
};

export default TopNavbar;
