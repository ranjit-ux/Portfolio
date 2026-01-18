import { StyleDefaultSvg } from "../assets/images";
import { Link, useLocation } from "react-router-dom";

const TopNavbar = () => {
  const { pathname } = useLocation();

  const navItem = (to, label) => (
    <Link to={to} className="flex gap-1 items-center">
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

  return (
    <div className="w-[1024px] h-[61px] mx-auto flex items-center justify-between text-white font-fira">

      {/* Left: Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={StyleDefaultSvg} alt="logo" className="w-[16px] h-[16px]" />
        <span className="font-semibold text-[16px]">Ranjit</span>
      </Link>

      {/* Right: Links */}
      <div className="flex gap-8 text-[14px]">
        {navItem("/", "home")}
        {navItem("/projects", "works")}
        {navItem("/about", "about-me")}
        {navItem("/contact", "contacts")}
      </div>

    </div>
  );
};

export default TopNavbar;
