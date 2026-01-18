import React from "react";
import { GithubPng } from "../assets/images";

const NewProjectCard = ({
  projectimg,
  title,
  desc,
  techstack,
  githubUrl,
}) => {
  return (
    <div className="
  group relative rounded-xl overflow-hidden
  border border-white/10
  bg-[#1f232a]
  transition
  hover:border-[#C778DD]/50
">
  {/* Image */}
  <img
    src={projectimg}
    alt={title}
    className="h-[220px] w-full object-cover
               transition group-hover:brightness-30"
  />

  {/* Overlay content */}
  <div className="
    absolute inset-0 p-6
    flex flex-col justify-end
    opacity-0 group-hover:opacity-100
    transition
    bg-gradient-to-t from-black/80 via-black/30
  ">
    <h3 className="text-xl font-semibold text-white mb-2">
      {title}
    </h3>

    <p className="text-sm text-[#ABB2BF] mb-4">
      {desc}
    </p>

    <a
      href={githubUrl}
      target="_blank"
      className="
        inline-flex w-fit items-center gap-2
        px-4 py-2 text-sm
        border border-[#C778DD]
        text-[#C778DD]
        rounded-md
        hover:bg-[#C778DD]
        hover:text-black
        transition
      "
    >
      View Source
      <img src={GithubPng} className="w-4" />
    </a>
  </div>

  {/* Tech stack (visible normally) */}
  <div className="p-4 flex gap-2 flex-wrap text-xs text-[#ABB2BF]
                  group-hover:opacity-0 transition">
    {techstack.map(t => (
      <span key={t} className="border border-white/10 px-2 py-1 rounded">
        {t}
      </span>
    ))}
  </div>
</div>

  );
};

export default NewProjectCard;
