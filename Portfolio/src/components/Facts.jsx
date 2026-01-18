import React from 'react'

const Facts = () => {
  return (
    <section className="py-20">
      <h1 className="text-3xl font-bold text-white mb-6">
        <span className="primary text-4xl">#</span>some_facts
      </h1>

      <div className="flex flex-wrap gap-3 max-w-4xl">
        {[
          "I’m an Electronics Engineering student who enjoys writing more code than circuits",
          "I enjoy figuring things out more than rushing to the final answer",
          "Reading is my second favorite habit",
          "I value consistency more than sudden bursts of motivation",
          "I like calm, focused work environment",
          "I’m comfortable saying “I don’t know” and then figuring it out",
          "I care more about long-term growth than looking impressive today",
        ].map((fact, i) => (
          <span
            key={i}
            className="border border-white/10 px-3 py-1 text-sm text-primary rounded-md
                       hover:border-[#ABB2BF]/80 transition"
          >
            {fact}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Facts
