import React from 'react'

const SkillinAbout = () => {
  return (
    <section className="py-20">
      <h1 className="text-3xl font-bold text-white mb-2">
        <span className="primary text-4xl">#</span>skills
      </h1>

      <p className="text-primary text-sm mb-8 opacity-80">
        How I think, build, and ship software
      </p>

      <div className="max-w-3xl space-y-5">

        {/* Thinking */}
        <div className="border border-white/10 rounded-lg p-5 hover:border-[#ABB2BF] transition">
          <p className="text-white font-semibold mb-1">
            Thinking in Fundamentals
          </p>
          <p className="text-primary text-xs mb-3 opacity-70">
            The skills I rely on before touching any framework
          </p>
          <p className="text-primary text-sm leading-6">
            C++ · Data Structures · Algorithms · Problem Solving · Debugging · Complexity Analysis
          </p>
        </div>

        {/* Building */}
        <div className="border border-white/10 rounded-lg p-5 hover:border-[#ABB2BF] transition">
          <p className="text-white font-semibold mb-1">
            Building Real Products
          </p>
          <p className="text-primary text-xs mb-3 opacity-70">
            Turning ideas into usable, maintainable interfaces
          </p>
          <p className="text-primary text-sm leading-6">
            JavaScript · React · Tailwind CSS · REST APIs · Node.js · Express
          </p>
        </div>

        {/* Shipping */}
        <div className="border border-white/10 rounded-lg p-5 hover:border-[#ABB2BF] transition ">
          <p className="text-white font-semibold mb-1">
            Shipping & Owning Systems
          </p>
          <p className="text-primary text-xs mb-3 opacity-70">
            Tools that help me ship reliably and iterate fast
          </p>
          <p className="text-primary text-sm leading-6">
            Git · Linux · MongoDB · PostgreSQL · VS Code · Deployment Basics
          </p>
        </div>

      </div>

      {/* micro philosophy */}
      <p className="text-primary text-xs mt-10 opacity-60 max-w-2xl">
        I prioritize fundamentals first, tools second, tools change fundamentals compound.
      </p>
    </section>
  )
}

export default SkillinAbout
