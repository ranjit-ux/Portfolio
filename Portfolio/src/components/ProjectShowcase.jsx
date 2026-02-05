import { useState, useEffect, useRef } from "react";
import { projects } from "../data/project";
import { StyleDefaultPng } from "../assets/images";

const ROTATION_TIME = 4000;

const ProjectsShowcase = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startTimer = () => {
    clearTimer(); // ✅ prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, ROTATION_TIME);
  };

  useEffect(() => {
    startTimer();
    return clearTimer; // clean unmount
  }, []);

  const handleSelect = (index) => {
    setActive(index);
    startTimer(); // restart timer from clicked project
  };

  const activeProject = projects[active];

  return (
    <section className="w-full">
      {/* FEATURED PROJECT */}
      <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
        <img
          src={activeProject.image}
          alt={activeProject.title}
          className="w-full h-full object-cover transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 flex flex-col justify-end">
          <h2 className="text-3xl font-bold text-white">
            {activeProject.title}
          </h2>

          <p className="text-white/70 mt-2 ">
            {activeProject.description}
          </p>

          {activeProject.liveUrl && (
            <a
              href={activeProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-2 px-4 py-2 border border-[#C778DD] text-[#ffffff] rounded-md text-sm font-medium hover:bg-[#C778DD] hover: transition"
            >
              Live 
              <img src={StyleDefaultPng} alt="" className="w-[12px] " />
            </a>
          )}
        </div>
      </div>

      {/* THUMBNAILS */}
      <div className="mt-6 overflow-x-auto overflow-y-visible scroll-smooth not-scrollbar">
  <div className="flex gap-4 px-2 py-2">
    {projects.map((project, i) => {
      const isActive = i === active;

      return (
        <button
          key={project.id}
          onClick={() => handleSelect(i)}
          className={`min-w-[200px] h-[110px] rounded-lg overflow-hidden border transition-transform
            ${
              isActive
                ? "border-[#C778DD] scale-105"
                : "border-white/10 hover:border-white/30"
            }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </button>
      );
    })}
  </div>
</div>


    </section>
  );
};

export default ProjectsShowcase;
