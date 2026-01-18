import React from "react";

const Quote = () => {
  return (
    <div className="absolute top-[500px] right-[300px] w-[500px]
border border-[#ABB2BF] px-8 py-6 hidden md:block z-40">


      {/* Left Quote */}
      <span className="absolute top-2 left-2 text-5xl text-[#ABB2BF]">
        “
      </span>

      {/* Text */}
      <p className="text-white text-[20px] leading-relaxed ml-2 align-middle">
        Nothing changes if nothing changes.
      </p>

      {/* Right Quote */}
      <span className="absolute -bottom-4.5 right-3 text-5xl text-[#ABB2BF]">
        ”
      </span>

      {/* Author */}
      <div className="absolute -bottom-5 right-4 border border-[#ABB2BF] px-4 text-white text-s bg-[#1f232a]">
        — Dr. Who
      </div>

    </div>
  );
};

export default Quote;
