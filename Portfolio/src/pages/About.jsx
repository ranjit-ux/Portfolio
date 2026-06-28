import React from 'react'
import { DotsPng, Rectangle, StyleOutlinePng } from '../assets/images'
import SkillinAbout from '../components/SkillinAbout'
import Facts from '../components/Facts'

const About = () => {
  return (
    <section className="py-20">
      <div>
        <div className="flex flex-col md:flex-row gap-14 items-start">
          
          {/* LEFT CONTENT */}
          <div className="w-full md:w-[60%]">
            <h1 className="text-3xl font-bold text-white mb-2">
              <span className="primary text-4xl">/</span>about me
            </h1>
            <p className="text-primary text-sm mb-8 opacity-80">
              How I think, build, and approach engineering
            </p>

            <p className="text-primary text-[15px] leading-7">
              Every engineer says they're passionate. Let me show you instead.
I'm <span className='font-semibold text-white'>Ranjit</span> a final year student at NIT Bhopal who spent the last year building real products for real users, not just pushing code to private repos. <span className='font-semibold text-white'>AlgoRetention</span>, my spaced-repetition DSA tracker, crossed 200+ organic signups and 400+ DSA questions recorded. PrepWise AI lets engineers practice with AI-powered feedback on their actual code. These aren't projects they're products I designed, built, broke, fixed, and shipped.
I come alive at the intersection of hard problems and clean solutions. I have deep roots in DSA and algorithms <span className='font-semibold text-white'>1500+ problems</span>, LeetCode Knight and CodeForces Pupil paired with a genuine obsession for system thinking and building at scale. <br />
I don't wait to be assigned interesting work. I find it, frame it, and ship it.
            </p>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hidden md:block relative w-[40%] h-[380px] rounded-lg backdrop-blur-sm">
            
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
