import React from "react";
import useCountUp from "../useCountUp";

const CodingProfileCard = ({
  logo,
  platform,
  handle,
  stats,
  link,
  desc,
}) => {
  return (
    <div className="max-w-[520px] relative pl-6 space-y-6 flex flex-col h-full">

      {/* Accent line */}
      <span className="absolute left-0 top-2 h-[85%] w-[2px] bg-[#C778DD]/50" />

      {/* Header */}
      <div className="flex items-center gap-3">
        <img src={logo} alt={platform} className="w-7 h-7 opacity-80" />

        <div>
          <h3 className="text-white text-2xl font-semibold leading-none">
            {platform}
          </h3>
          <p className="text-xs text-[#ABB2BF]">@{handle}</p>
        </div>

        <span className="ml-auto flex items-center gap-2 text-xs text-[#ABB2BF]">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Active
        </span>
      </div>

      {/* Stats */}
      <div className="flex gap-10">
        {stats.map((stat, i) => {
          const counter = useCountUp(stat.value);
          return (
            <div key={i} ref={counter.ref}>
              <p className="text-[#ABB2BF] text-xs uppercase tracking-wide">
                {stat.label}
              </p>
              <p className="text-white text-3xl font-semibold tabular-nums">
                {counter.value}
                {stat.suffix || ""}
              </p>
            </div>
          );
        })}
      </div>

      {/* Supporting line */}
      <p className="text-[#ABB2BF] text-sm leading-relaxed max-w-[420px]">
        {desc}
      </p>

      {/* CTA */}
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-block text-[#C778DD] text-sm font-medium hover:underline"
      >
        View {platform} profile →
      </a>
    </div>
  );
};

export default CodingProfileCard;
