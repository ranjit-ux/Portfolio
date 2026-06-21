import React from "react";
import {Live, GithubPng, StyleDefaultPng } from "../assets/images";
import { Link } from "react-router-dom";
const ProjectCard = ({projectimg,title,desc,techstack,link}) => {
  return (
    <div className="group border-b border-l rounded-2xl border-[#ABB2BF] bg-[#1f232a] transition-all duration-300 hover:-translate-y-2 hover:border-[#C778DD] flex flex-col h-full">
      {/* Image */}
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={projectimg}
          alt={title}
          className="w-full h-[180px] object-cover
          transition-transform duration-500
          group-hover:scale-105"
        />
      </div>

      {/* Tech stack */}
      <div className="p-4 flex flex-wrap gap-2 text-xs text-[#ABB2BF]">
        {techstack.map((tech,index) => (
          <span key={index} className="border border-[#ABB2BF]/40 px-2 py-0.5">
            {tech}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="px-4 pb-6 flex flex-col flex-1">
        <h1 className="text-white text-lg mb-2">{title}</h1>
        <p className="text-[#ABB2BF] text-sm flex-1">
          {desc}
        </p>
        <div className="flex justify-between mt-6">
          <Link 
            to={link}
            className="w-[120px] flex items-center justify-center gap-2 border rounded-xl border-[#C778DD] text-[#abb2bf] px-4 py-2 text-sm font-semibold hover:bg-[#C778DD] hover:text-white transition">
            Live
            <img src={StyleDefaultPng} alt="" className="w-[12px] " />
          </Link>
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;
