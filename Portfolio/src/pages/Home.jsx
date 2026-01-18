import React from "react";
import { Link } from "react-router-dom";
import Quote from "../components/Quote";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { StyleOutlinePng, DotsPng, Heroimg,Notes,SimonSays,QuizApp, Rectangle, LeetCode,CodeForces, PortfolioProject } from "../assets/images";
import CodingProfileCard from "../components/CodingProfileCard";
import App from "../App";
import Footer from "../components/Footer";
    const Home = () => {

        const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
    const handleMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
    }, []);

  return (
    <div className="w-full flex flex-col items-center mt-8">
      <div className="w-full max-w-[1024px] px-6 md:px-0">

      {/* Hero */}
      <section className="w-full max-w-[1024px] min-h-[423px] px-6 md:px-0 relative flex  md:flex-row items-center">
        {/* Left */}
        <div className="w-full md:w-1/2 pt-12 md:pt-20">
          <h1 className="text-[32px] md:text-[36px] leading-[1.25] text-white font-semibold">
            I turn complex ideas into high-performance{" "}
            <span className="primary">web products</span>
          </h1>

          <p className="mt-8 text-primary text-[16px] md:text-[17px] w-full md:w-[463px]">
            From clean UI to production-ready backend I ship software that
            actually works in the real world.
          </p>

          <a
          href="/contact"
          className="inline-block mt-8 px-6 py-3 border border-[#C778DD]
            text-white text-sm tracking-wide
            hover:bg-[#C778DD] hover:text-[#282C33] transition
            shadow-[0_0_0px_rgba(199,120,221,0)]
            hover:shadow-[0_0_10px_rgba(199,120,221,0.6)]"
        >
          Let’s build something
        </a>
        
        </div>
        {/* Right */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[423px] overflow-hidden top-6 ">
          {/* bottom fade (kills jacket) */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1E222A] via-[#1E222A]/100 to-transparent z-20 pointer-events-none" />

          {/* right fade (kills hard vertical edge) */}
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#1E222A] via-[#1E222A]/100 to-transparent z-20 pointer-events-none" />

          <img
            src={Heroimg}
            alt="Hero"
            style={{
                transform: `translate(${mouse.x * -5}px, ${mouse.y * -5}px)`
            }}
            className="absolute bottom-[-60px] right-10 w-[260px] md:w-[320px] z-[1] transition-transform duration-200 ease-out"
          />


          {/* purple squares */}

          <img
            src={StyleOutlinePng}
            alt=""
            className="hidden md:block absolute top-[90px] left-[40px] w-[100px] h-[100px] opacity-100 z-20" 
          />

          <img
            src={DotsPng}
            alt=""
            className="hidden md:block absolute right-[0px] top-[200px] opacity-100 z-30 "
          />

          <div className="absolute bottom-6 md:bottom-[40px] left-1/2 -translate-x-1/2 md:left-[140px] md:translate-x-0 
            border border-[#ABB2BF] px-4 py-2 flex items-center gap-2 bg-[#1f232a] z-30">
            <div className="w-3 h-3 bg-[#C778DD]" />
            <p className="text-sm text-white">
              Building scalable <b className="primary">full-stack </b>systems
            </p>
          </div>
           
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#1F232A] via-[#1F232A]/0 to-transparent z-20 pointer-events-none" />
        </div>
        <Quote />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-82 px-6 md:px-0">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-7">
            <h2 className="text-[#FFFFFF] text-[32px] font-semibold"><span className="primary">#</span>projects</h2>
          <div className="w-[512px] h-[1px] bg-[#C778DD] opacity-80" />
          </div>
          
          <a href="/projects" className="text-[#ABB2BF] hover:text-white cursor-pointer">
            View all →
          </a>
          
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <ProjectCard 
            projectimg={QuizApp}
            title="Quiz Platform"
            desc="Designed and built a full-stack quiz platform with user authentication, timed quizzes, score evaluation, and RESTful APIs."
            techstack={["MongoDB","Express","React","Node.js"]}
            link="https://countries-capital-quiz-production.up.railway.app/"
          />
          <ProjectCard 
            projectimg={Notes}
            title="Notes Manager"
            desc="Developed a secure notes manager with CRUD operations, protected routes, and responsive UI for daily productivity."
            techstack={["MongoDB","Express","React","Node.js"]}
            link="https://notes-app-7w6j.onrender.com/"
          />
          <ProjectCard
            projectimg={PortfolioProject}
            title="Personal Portfolio Website"
            desc="Built a personal portfolio with a modern dark theme, smooth navigation, and reusable components to showcase projects, skills, and professional identity."
            techstack={["React", "Tailwind CSS", "JavaScript"]}
            link="https://github.com/ranjit-ux/portfolio"
          />
        </div>

      </section>

      <section id="skills" className="mt-32">

  {/* Header */}
  <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-7">
            <h2 className="text-[#FFFFFF] text-[32px] font-semibold"><span className="primary">#</span>coding profiles</h2>
          <div className="w-[200px] h-[1px] bg-[#C778DD] opacity-80" />
          </div>
          
        </div>

  {/* Content */}
  <div className="flex gap-12 items-start">

    {/* LEFT: decorative block */}
    <div className="w-[300px] h-[282px] relative shrink-0">
      <img src={StyleOutlinePng} className="absolute bottom-0 left-6 w-[113px]" />
      <img src={DotsPng} className="absolute top-5 left-0 w-[73px]" />
      <img src={Rectangle} className="absolute bottom-10 right-0" />
      <img src={Rectangle} className="absolute top-0 right-10 w-[86px]" />
    </div>

    {/* RIGHT: skill cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
      <CodingProfileCard
        logo={LeetCode}
        platform="LeetCode"
        handle="ranjiitsingh"
        stats={[
          { label: "Problems Solved", value: 600, suffix: "+" },
          { label: "Max Rating", value: 1674 },
        ]}
        desc="Consistent practice in data structures and algorithms, with a focus on problem clarity, edge-case handling, and optimized solutions. Regular participation in problem-solving to strengthen fundamentals."
        link="https://leetcode.com/u/ranjiitsingh/"
      />

      <CodingProfileCard
        logo={CodeForces}
        platform="Codeforces"
        handle="ranjitSingh"
        stats={[
          { label: "Best Rank", value: 3102 },
          { label: "Max Rating", value: 1124 },
        ]}
        desc="Active participation in competitive programming contests, gaining experience with time-bound problem solving, ranking dynamics, and implementing efficient solutions under constraints."
        link="https://codeforces.com/profile/ranjitSingh"
      />
    </div>


  </div>
</section>


        <section id="skills" className="mt-32 px-6 md:px-0">
  {/* Header */}
  <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-7">
            <h2 className="text-[#FFFFFF] text-[32px] font-semibold"><span className="primary">#</span>skills</h2>
          <div className="w-[200px] h-[1px] bg-[#C778DD] opacity-80" />
          </div>
          
          <a href="/about" className="text-[#ABB2BF] hover:text-white cursor-pointer">
            View all →
          </a>
        </div>

  {/* Skills */}
  <div className="space-y-10 max-w-[820px]">

    <div>
      <h3 className="text-white font-medium text-lg mb-1">
        Data Structures & Algorithms
      </h3>
      <p className="text-[#ABB2BF] text-sm leading-relaxed">
        Arrays, strings, stacks, queues, trees, graphs, dynamic programming,
        greedy techniques and more practiced regularly through problem-solving.
      </p>
    </div>

    <div>
      <h3 className="text-white font-medium text-lg mb-1">
        Competitive Programming
      </h3>
      <p className="text-[#ABB2BF] text-sm leading-relaxed">
        Active on LeetCode and Codeforces, solving time-bound problems that
        strengthen constraint analysis, edge-case handling, and optimized
        solution design.
      </p>
    </div>

    <div>
      <h3 className="text-white font-medium text-lg mb-1">
        Web Development
      </h3>
      <p className="text-[#ABB2BF] text-sm leading-relaxed">
        Building reliable, production-ready web applications using React,
        Node.js, Express, and REST APIs with emphasis on clean architecture,
        maintainable code, and clear communication from idea to deployment.
      </p>
    </div>

    <div>
      <h3 className="text-white font-medium text-lg mb-1">
        Computer Science Fundamentals
      </h3>
      <p className="text-[#ABB2BF] text-sm leading-relaxed">
        Solid understanding of operating systems, database management systems,
        object-oriented programming, and computer networks.
      </p>
    </div>

  </div>
</section>

<section id="contacts" className="mt-32 px-6 md:px-0">
  {/* Header */}
  <div className="flex items-center justify-between mb-10">
    <div className="flex items-center gap-7">
      <h2 className="text-white text-[32px] font-semibold">
        <span className="primary">#</span>contacts
      </h2>
      <div className="w-[200px] h-[1px] bg-[#C778DD] opacity-80" />
    </div>

    <a
      href="/contact"
      className="text-[#ABB2BF] hover:text-white transition"
    >
      contact me →
    </a>
  </div>

  {/* Body */}
  <div className="max-w-[720px]">
    <p className="text-[#ABB2BF] text-sm leading-relaxed">
      Open to <span className="primary font-semibold">SDE roles</span> and
      <span className="primary font-semibold"> full-stack web development projects</span>.
      I also collaborate on freelance work where clarity, ownership, and
      long-term maintainability matter.
    </p>
  </div>
</section>


    </div>
    </div>
  );
};

export default Home;
