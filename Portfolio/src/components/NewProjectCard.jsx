import React from "react";
import { GithubPng, render } from "../assets/images";

const NewProjectCard = ({
  projectimg,
  title,
  desc,
  techstack,
  githubUrl,
}) => {
  return (
    <div
      className="
        group relative rounded-xl overflow-hidden
        border border-white/10
        bg-[#1f232a]
        transition
        hover:border-[#C778DD]/50
      "
    >
      {/* Image */}
      <img
        src={projectimg}
        alt={title}
        className="
          h-[220px] w-full object-cover
          transition group-hover:brightness-30
          pointer-events-none
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0 z-10 p-6
          flex flex-col justify-end
          opacity-0 group-hover:opacity-100
          transition
          bg-gradient-to-t from-black/80 via-black/40
        "
      >
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>

        <p className="text-sm text-[#ABB2BF] mb-4">
          {desc}
        </p>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
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
          Render Live
          <img src={render} alt="Live" className="w-4 opacity-100"  />
        </a>
      </div>

      {/* Tech Stack */}
      <div
        className="
          p-4 flex gap-2 flex-wrap text-xs text-[#ABB2BF]
          transition
          group-hover:opacity-0
          group-hover:pointer-events-none
        "
      >
        {techstack.map((t) => (
          <span
            key={t}
            className="border border-white/10 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewProjectCard;
