import React, { useState } from 'react'
import { Monitor, GraduationCap, Briefcase, ChevronRight } from 'lucide-react'
import { experience, projects } from '../data'

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const featuredProject = projects.find((p) => p.featured) || projects[0]

// ─── Timeline Entry ────────────────────────────────────────────────────────
const TimelineEntry = ({ entry, isActive, onClick }) => {
  const isWork = entry.type === 'work'
  return (
    <div className="relative pl-10 pb-6 cursor-pointer group" onClick={onClick}>
      {/* Vertical line */}
      <div className="absolute left-[15px] top-8 bottom-0 w-px bg-gradient-to-b from-purple-500/40 to-transparent" />

      {/* Circle dot */}
      <div className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300
        ${isActive
          ? 'bg-purple-600/30 border-purple-400/70 shadow-[0_0_14px_rgba(139,92,246,0.5)]'
          : 'bg-slate-800/60 border-white/10 group-hover:border-purple-400/40'
        }`}
      >
        {isWork
          ? <Briefcase className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-purple-300' : 'text-gray-400 group-hover:text-purple-400'}`} />
          : <GraduationCap className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-indigo-300' : 'text-gray-400 group-hover:text-indigo-400'}`} />
        }
      </div>

      <span className={`text-[10px] font-bold tracking-widest uppercase mb-0.5 block transition-colors ${isActive ? 'text-purple-400' : 'text-gray-500 group-hover:text-gray-400'}`}>
        {entry.period}
      </span>
      <h3 className={`text-sm font-bold leading-tight mb-0.5 transition-colors ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
        {entry.title}
      </h3>
      <p className={`text-xs mb-2 transition-colors ${isActive ? 'text-purple-300' : 'text-gray-500 group-hover:text-gray-400'}`}>
        {entry.company}
      </p>

      {/* Expandable highlights */}
      <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="space-y-1.5 pt-1">
          {entry.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
              <ChevronRight className="w-3 h-3 text-purple-500 mt-0.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────
const ExperienceSection = () => {
  const [activeId, setActiveId] = useState(experience[0]?.id)

  return (
    <section id="experience" className="relative py-20 bg-[#080914] overflow-hidden">
      {/* Section background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-purple-600/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-indigo-600/8 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-purple-400 mb-2 block">Background</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Experience &amp; Projects</h2>
          <p className="text-gray-400 mt-2 max-w-xl text-sm leading-relaxed">
            My professional journey and featured work — from enterprise systems to open-source projects.
          </p>
        </div>

        {/* Two equal-height columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* ── LEFT: Timeline Card ──────────────────────── */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0e1020] to-[#090b14] shadow-[0_16px_48px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col">
            {/* Decorative bg elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600/8 rounded-full blur-2xl pointer-events-none" />
            {/* Subtle dot grid overlay */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, #a78bfa 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="relative z-10 p-7 flex flex-col flex-1">
              <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">Experience Timeline</h3>
              <div className="relative flex-1">
                {experience.map((entry) => (
                  <TimelineEntry
                    key={entry.id}
                    entry={entry}
                    isActive={activeId === entry.id}
                    onClick={() => setActiveId(activeId === entry.id ? null : entry.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Featured Project Card ─────────────── */}
          {featuredProject && (
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0e1020] to-[#090b14] shadow-[0_16px_48px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col">

              {/* Decorative bg elements inside card */}
              <div className="absolute top-0 left-0 w-56 h-44 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/4 right-0 w-32 h-32 bg-purple-600/8 rounded-full blur-2xl pointer-events-none" />
              {/* Dot grid */}
              <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

              {/* TOP: text content */}
              <div className="relative z-10 p-6 pb-0">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 block mb-3">Featured Project</span>

                {/* Title + badge inline */}
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <h4 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                    {featuredProject.title}
                  </h4>
                  {featuredProject.badge && (
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg bg-white/6 text-gray-400 border border-white/12 whitespace-nowrap">
                      {featuredProject.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {featuredProject.description}
                </p>
              </div>

              {/* BOTTOM: Image with tags + buttons overlaid on top of it */}
              <div className="relative flex-1 min-h-[220px]">
                {/* The image — fills the bottom half, slightly faded at top */}
                <div className="absolute inset-0 overflow-hidden">
                  {featuredProject.previewImage ? (
                    <img
                      src={featuredProject.previewImage}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover object-top opacity-60"
                    />
                  ) : (
                    /* Dashboard placeholder */
                    <div className="w-full h-full bg-[#060912] flex flex-col p-4 gap-2 opacity-70">
                      <div className="flex gap-2 h-3 items-center">
                        <div className="w-16 h-full rounded bg-purple-500/50" />
                        <div className="flex-1 h-full rounded bg-slate-700/40" />
                        <div className="w-10 h-full rounded bg-blue-500/30" />
                      </div>
                      <div className="flex gap-2 flex-1">
                        <div className="w-14 flex flex-col gap-1.5 pt-1">
                          {[...Array(6)].map((_, i) => <div key={i} className="h-1.5 rounded bg-slate-700/60" />)}
                        </div>
                        <div className="flex-1 flex flex-col gap-2">
                          <div className="h-16 rounded bg-blue-900/40 border border-blue-500/15 flex items-center justify-center">
                            <div className="w-2/3 h-8 rounded bg-blue-500/20" />
                          </div>
                          <div className="flex gap-2 flex-1">
                            <div className="flex-1 rounded bg-slate-800/50" />
                            <div className="flex-1 rounded bg-indigo-900/30" />
                            <div className="flex-1 rounded bg-slate-800/40" />
                          </div>
                          <div className="flex gap-1 h-10 items-end">
                            {[38,60,44,80,52,72,36,90,48,66].map((h, i) => (
                              <div key={i} className="flex-1 rounded-t bg-blue-500/50" style={{ height: `${h}%` }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Gradient fade: card bg → transparent (top-to-bottom over image top) */}
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0e1020] to-transparent pointer-events-none" />
                  {/* Side fade */}
                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#0e1020]/80 to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0e1020]/80 to-transparent pointer-events-none" />
                </div>

                {/* OVERLAY: tech tags + buttons sitting ON TOP of image */}
                <div className="absolute inset-x-0 top-0 z-10 px-6 pt-3 flex flex-col gap-3">
                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[#0e1020]/80 backdrop-blur-sm border border-white/15 text-gray-300 hover:border-purple-500/50 hover:text-white transition-all duration-200 cursor-default shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={featuredProject.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_18px_rgba(79,70,229,0.5)] hover:shadow-[0_0_28px_rgba(99,102,241,0.7)] transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
                    >
                      <Monitor className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={featuredProject.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-200 bg-[#0e1020]/70 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 hover:bg-white/10 hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                    >
                      <GithubIcon />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
