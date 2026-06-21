// ProjectRow.jsx

import React from "react";

const ProjectRow = ({
  index,
  image,
  title,
  subtitle,
  category,
  description,
  techstack,
  liveUrl,
  githubUrl,
  reverse = false,
}) => {
  return (
    <div
      className={`
        group
        relative
        grid lg:grid-cols-[360px_1fr]
        gap-10
        py-10
        border-b border-white/10
        items-center
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* Image */}
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border border-white/10
          bg-white/[0.03]
          shrink-0
        "
      >
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-[220px]
            object-cover
            transition-all
            duration-500
            ease-out
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/40
            via-transparent
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
        />

        <span
          className="
            absolute bottom-3 left-4
            text-[11px]
            uppercase
            tracking-[0.12em]
            text-white/80
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
        >
          View Project ↗
        </span>
      </div>

      {/* Content */}
      <div
        className={`
          flex flex-col justify-center
          ${reverse ? "lg:pr-6" : "lg:pl-2"}
        `}
      >
        {/* Meta */}
        <div className="flex items-center gap-4 mb-3">
          <span className="text-[#7C3AED] text-[11px] font-semibold tracking-[0.15em]">
            {String(index).padStart(2, "0")}
          </span>

          {category && (
            <span className="text-[11px] uppercase tracking-[0.1em] text-white/40">
              {category}
            </span>
          )}
        </div>

        {/* Title */}
        <h2
          className="
            text-white
            text-[24px]
            md:text-[28px]
            font-bold
            leading-tight
            mb-2
          "
        >
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-[#7C3AED] text-[13px] font-medium mb-4">
            {subtitle}
          </p>
        )}

        {/* Description */}
        <p
          className="
            text-[#ABB2BF]
            text-[14px]
            leading-7
            max-w-[650px]
            mb-6
          "
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techstack.map((tech) => (
            <span
              key={tech}
              className="
                px-3 py-1
                rounded-full
                border border-white/10
                text-[#ABB2BF]
                text-[12px]
                bg-white/[0.02]
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-full
                bg-[#7C3AED]
                text-white
                text-[13px]
                font-medium
                hover:bg-[#6d28d9]
                transition-all
                duration-200
              "
            >
              Live Demo ↗
            </a>
          )}

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-full
              border border-white/10
              text-[#ABB2BF]
              text-[13px]
              hover:border-white/30
              hover:text-white
              transition-all
              duration-200
            "
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;