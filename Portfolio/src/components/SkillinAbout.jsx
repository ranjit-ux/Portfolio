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
            <span className='primary'>1500+ problems</span> solved. LeetCode <span className='primary'>Knight</span>. I understand tradeoffs at the algorithm level before I touch any framework.
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
            Deployed 3+ products. <span className='primary'>200+ organic users</span>. I build interfaces that hold up in production not just in demos.
          </p>
          <p className="text-primary text-sm leading-6">
            React · JavaScript · Tailwind CSS · REST APIs · Node.js · Express· JWT Authentication · OAuth · MongoDB · SQL
          </p>
        </div>

        {/* Shipping */}
        <div className="border border-white/10 rounded-lg p-5 hover:border-[#ABB2BF] transition ">
          <p className="text-white font-semibold mb-1">
            Shipping & Owning Systems
          </p>
          <p className="text-primary text-xs mb-3 opacity-70">
            I don't just write code. I deploy it, monitor it, and own it end-to-end. From first commit to live users.
          </p>
          <p className="text-primary text-sm leading-6">
            Git · GitHub · PostgreSQL · Visual Studio Code · Postman · Vercel
          </p>
        </div>

        {/* Shipping */}
        <div className="border border-white/10 rounded-lg p-5 hover:border-[#ABB2BF] transition ">
          <p className="text-white font-semibold mb-1">
            CS Fundamentals
          </p>
          <p className="text-primary text-xs mb-3 opacity-70">
            The theory behind every system I've built. These aren't just coursework they're the lens I use while building things.
          </p>
          <p className="text-primary text-sm leading-6">
            Operating System · Database Management System · Object Oriented Programming · Computer Networks · Scheduling · System Design
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
