import React, { useState } from 'react'
import { technicalArsenal } from '../data'

const categories = Object.keys(technicalArsenal)

// ─── Skill Card ────────────────────────────────────────────────────────────
const SkillCard = ({ skill }) => (
  <div
    className="group flex items-center gap-4 px-6 py-4 rounded-xl border transition-all duration-300 cursor-default select-none hover:scale-[1.04] hover:-translate-y-0.5"
    style={{
      background: skill.bg,
      borderColor: `${skill.border}30`,
      boxShadow: `0 2px 12px rgba(0,0,0,0.3)`,
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = `${skill.border}80`
      e.currentTarget.style.boxShadow = `0 4px 24px ${skill.border}25, 0 0 0 1px ${skill.border}20`
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = `${skill.border}30`
      e.currentTarget.style.boxShadow = `0 2px 12px rgba(0,0,0,0.3)`
    }}
  >
    {/* Icon */}
    <div
      className="w-11 h-11 p-2 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
      style={{ background: `${skill.border}15`, border: `1px solid ${skill.border}30` }}
      dangerouslySetInnerHTML={{ __html: skill.icon }}
    />
    {/* Name */}
    <span className="text-base font-bold text-gray-200 group-hover:text-white transition-colors whitespace-nowrap">
      {skill.name}
    </span>
  </div>
)

// ─── Main Section ─────────────────────────────────────────────────────────
const TechArsenal = () => {
  const [activeTab, setActiveTab] = useState(categories[0])
  const skills = technicalArsenal[activeTab] || []

  return (
    <section id="skills" className="relative py-20 bg-[#080914] overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-indigo-600/6 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[250px] bg-purple-600/6 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header row: title left, tabs right ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-5 mb-8">
          {/* Title */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(167,139,250,0.9)] animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Technical Arsenal
            </h2>
            <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(167,139,250,0.9)] animate-pulse" />
          </div>

          {/* Category tabs — horizontally scrollable on mobile */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none flex-nowrap sm:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`cursor-pointer px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap select-none flex-shrink-0
                  ${activeTab === cat
                    ? 'text-sky-300 bg-[#0a1628] border border-sky-500/50 shadow-[0_0_12px_rgba(56,189,248,0.25),inset_0_0_8px_rgba(56,189,248,0.05)]'
                    : 'text-gray-400 hover:text-gray-200 border border-transparent hover:border-white/10 hover:bg-white/4'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* ── Skill cards row ── */}
        <div key={activeTab} className="animate-fadeIn w-full mt-4">
          {skills.length <= 5 ? (
            /* Exactly 5 or fewer: 5-column grid to span full width */
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          ) : (
            /* More than 5: Infinite Marquee Carousel */
            <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-2">
              <div className="flex gap-6 sm:gap-8 w-max animate-marquee">
                {/* Render the list twice for seamless looping */}
                {[...skills, ...skills].map((skill, i) => (
                  <div key={`${skill.name}-${i}`} className="w-[240px] sm:w-[260px] flex-shrink-0">
                    <SkillCard skill={skill} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>

  )
}

export default TechArsenal
