import React from 'react'
import { DotsPng, Rectangle, StyleOutlinePng } from '../assets/images'
import SkillinAbout from '../components/SkillinAbout'
import Facts from '../components/Facts'

const About = () => {
  return (
    <section className="py-20">
      <div>
        <div className="flex gap-14 items-start">
          
          {/* LEFT CONTENT */}
          <div className="w-[60%]">
            <h1 className="text-3xl font-bold text-white mb-2">
              <span className="primary text-4xl">/</span>about me
            </h1>
            <p className="text-primary text-sm mb-8 opacity-80">
              How I think, build, and approach engineering
            </p>

            <p className="text-primary text-[15px] leading-7">
              I’m <span className="font-semibold text-white">Ranjit Kumar Singh</span>, an engineer who values ownership, clarity, and impact. I enjoy working in fast-moving environments where ideas are turned into production-ready systems with intention and speed, backed by strong fundamentals in data structures, algorithms, and system thinking. I’m comfortable navigating ambiguity, making trade-offs, and owning problems end-to-end—from definition to implementation and refinement—while keeping a sharp focus on clean abstractions, performance, and collaboration. I approach engineering as a long-term craft, learn quickly, adapt easily, and enjoy building with people who move fast without compromising on quality.
            </p>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative w-[40%] h-[380px] rounded-lg backdrop-blur-sm">
            
            {/* dotted grid */}
            <img
              src={DotsPng}
              alt=""
              className="absolute top-6 left-6 opacity-70 animate-floatSlow hover:glowing"
            />

            {/* main square */}
            <img
              src={Rectangle}
              alt=""
              className="absolute top-20 right-12 w-[120px] opacity-80 hover:glowing"
            />

            {/* accent outline */}
            <img
              src={StyleOutlinePng}
              alt=""
              className="absolute bottom-30 left-11 w-[90px] opacity-90 animate-floatReverse hover:glowing"
            />

            {/* secondary dots */}
            <img
              src={DotsPng}
              alt=""
              className="absolute bottom-10 right-36 w-[70px] opacity-50 hover:glowing"
            />

            {/* small square */}
            <img
              src={Rectangle}
              alt=""
              className="absolute bottom-0 right-0 w-[80px] opacity-40 hover:glowing"
            />
          </div>
        </div>
        <div>
          <SkillinAbout/>
        </div>
        <div>
          <Facts/>
        </div>
      </div>
    </section>
  )
}

export default About
