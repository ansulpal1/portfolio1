import React from 'react'
import heroBg from '../assets/herobg.png'
import {
  Send,
  MapPin,
  Briefcase,
  Sparkles,
  Mail,
  Code2,
  Database,
  Rocket,
  Heart,
  X,
  MoreHorizontal
} from 'lucide-react'
import { personalInfo, heroStats as rawHeroStats } from '../data'

const Hero = () => {
  const techStack = [
    {
      name: 'Java',
      icon: (
        <svg className="w-8.5 h-8.5 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#E76F00" opacity="0.2" />
          <path d="M8.5 15.5c2 1 5 1 7 0M9.5 18c1.5.8 3.5.8 5 0" stroke="#E76F00" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 4v6M10 7c1 1.5 3 1.5 4 0" stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      color: 'hover:border-amber-500/50 hover:bg-amber-500/10'
    },
    {
      name: 'Spring Boot',
      icon: (
        <svg className="w-8.5 h-8.5 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#6DB33F" fillOpacity="0.2" stroke="#6DB33F" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="3" fill="#6DB33F" />
        </svg>
      ),
      color: 'hover:border-emerald-500/50 hover:bg-emerald-500/10'
    },
    {
      name: 'React',
      icon: (
        <svg className="w-8.5 h-8.5 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
      ),
      color: 'hover:border-cyan-500/50 hover:bg-cyan-500/10'
    },
    {
      name: 'Node.js',
      icon: (
        <svg className="w-8.5 h-8.5 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" stroke="#5FA04E" strokeWidth="1.5" fill="#5FA04E" fillOpacity="0.2" />
          <path d="M12 7v10" stroke="#5FA04E" strokeWidth="1.5" />
        </svg>
      ),
      color: 'hover:border-green-500/50 hover:bg-green-500/10'
    },
    {
      name: 'MongoDB',
      icon: (
        <svg className="w-8.5 h-8.5 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
          <path d="M12 2s-6 7.5-6 12a6 6 0 0012 0c0-4.5-6-12-6-12z" stroke="#47A248" strokeWidth="1.5" fill="#47A248" fillOpacity="0.2" />
          <path d="M12 2v20" stroke="#47A248" strokeWidth="1.5" />
        </svg>
      ),
      color: 'hover:border-emerald-600/50 hover:bg-emerald-600/10'
    },
    {
      name: 'MySQL',
      icon: (
        <svg className="w-8.5 h-8.5 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
          <path d="M4 7c0-2 4-3 8-3s8 1 8 3v10c0 2-4 3-8 3s-8-1-8-3V7z" stroke="#00758F" strokeWidth="1.5" fill="#00758F" fillOpacity="0.2" />
          <path d="M4 12c0 2 4 3 8 3s8-1 8-3" stroke="#00758F" strokeWidth="1.5" />
        </svg>
      ),
      color: 'hover:border-sky-500/50 hover:bg-sky-500/10'
    },
    {
      name: 'Docker',
      icon: (
        <svg className="w-8.5 h-8.5 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="12" width="4" height="4" rx="1" stroke="#2496ED" strokeWidth="1.5" fill="#2496ED" fillOpacity="0.2" />
          <rect x="8" y="12" width="4" height="4" rx="1" stroke="#2496ED" strokeWidth="1.5" fill="#2496ED" fillOpacity="0.2" />
          <rect x="13" y="12" width="4" height="4" rx="1" stroke="#2496ED" strokeWidth="1.5" fill="#2496ED" fillOpacity="0.2" />
          <rect x="8" y="7" width="4" height="4" rx="1" stroke="#2496ED" strokeWidth="1.5" fill="#2496ED" fillOpacity="0.2" />
          <path d="M2 17c3 2 15 2 20-1" stroke="#2496ED" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      color: 'hover:border-blue-500/50 hover:bg-blue-500/10'
    },

    {
      name: 'Firebase',
      icon: (
        <svg className="w-8.5 h-8.5 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
          <path d="M4 17l4-12 4 6 8-8-16 14z" stroke="#FFCA28" strokeWidth="1.5" fill="#FFCA28" fillOpacity="0.2" />
        </svg>
      ),
      color: 'hover:border-yellow-500/50 hover:bg-yellow-500/10'
    },
    {
      name: 'Git',
      icon: (
        <svg className="w-8.5 h-8.5 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
          <path d="M12 3l9 9-9 9-9-9 9-9z" stroke="#F05032" strokeWidth="1.5" fill="#F05032" fillOpacity="0.2" />
          <circle cx="12" cy="12" r="2" fill="#F05032" />
        </svg>
      ),
      color: 'hover:border-rose-500/50 hover:bg-rose-500/10'
    }
  ]

  // Map color names to icon+style (icons still defined here since they use JSX)
  const iconMap = {
    indigo: { icon1: <Code2 className="w-6 h-6 text-indigo-400" />, icon2: <Briefcase className="w-6 h-6 text-indigo-400" />, bg: 'bg-indigo-500/10 border-indigo-500/20' },
    purple: { icon: <Database className="w-6 h-6 text-purple-400" />, bg: 'bg-purple-500/10 border-purple-500/20' },
    blue: { icon: <Rocket className="w-6 h-6 text-blue-400" />, bg: 'bg-blue-500/10 border-blue-500/20' },
    pink: { icon: <Heart className="w-6 h-6 text-pink-400" />, bg: 'bg-pink-500/10 border-pink-500/20' },
  }
  const statsIcons = [<Code2 className="w-6 h-6 text-indigo-400" />, <Database className="w-6 h-6 text-purple-400" />, <Rocket className="w-6 h-6 text-blue-400" />, <Briefcase className="w-6 h-6 text-indigo-400" />, <Heart className="w-6 h-6 text-pink-400" />]
  const statsBg = ['bg-indigo-500/10 border-indigo-500/20', 'bg-purple-500/10 border-purple-500/20', 'bg-blue-500/10 border-blue-500/20', 'bg-indigo-500/10 border-indigo-500/20', 'bg-pink-500/10 border-pink-500/20']
  const stats = rawHeroStats.map((s, i) => ({ ...s, icon: statsIcons[i], bgColor: statsBg[i] }))

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-[#080914] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Semi-transparent dark overlay to enhance text readability over custom background */}
      <div className="absolute inset-0 bg-[#080914]/40 backdrop-blur-[4px] pointer-events-none" />
      {/* Dynamic Background Glow Effects */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Cosmic Orbit Line SVG overlays behind right content */}
      <div className="absolute top-20 right-0 w-full max-w-3xl h-[650px] pointer-events-none opacity-40">
        <svg viewBox="0 0 800 800" className="w-full h-full text-indigo-500/30">
          {/* Outer Orbit */}
          <ellipse
            cx="500"
            cy="350"
            rx="360"
            ry="200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="6 6"
            transform="rotate(-25 500 350)"
          />
          {/* Inner Orbit */}
          <ellipse
            cx="520"
            cy="360"
            rx="260"
            ry="140"
            fill="none"
            stroke="url(#orbitGradient)"
            strokeWidth="1.5"
            transform="rotate(-25 520 360)"
          />
          <defs>
            <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#c084fc" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Glowing Planet Arc Graphic (Bottom Right Background) */}
      <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full pointer-events-none opacity-60">
        <div className="w-full h-full rounded-full bg-gradient-to-tl from-indigo-950 via-slate-900 to-purple-900/60 shadow-[inset_0_0_80px_rgba(139,92,246,0.3)] border border-purple-500/20" />
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[calc(100vh-160px)]">

          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 text-left pt-4">



            {/* Mobile: Compact Profile Preview */}
            <div className="flex items-center gap-4 lg:hidden">
              <div className="w-16 h-16 rounded-full border-2 border-purple-500/50 overflow-hidden shadow-[0_0_20px_rgba(124,58,237,0.4)] flex-shrink-0">
                <img src="/ansul_tech_profile.png" alt="Ansul Pal" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Ansul Pal</h2>
                <p className="text-xs text-purple-300 font-medium">Software Engineer @ TCS</p>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Building Scalable Solutions. Engineering a{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                Better Tomorrow.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Primary & Secondary Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:shadow-[0_0_40px_rgba(99,102,241,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-gray-200 glass-pill border border-white/15 hover:border-purple-500/40 hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-md"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Tech Stack Row */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block">
                TECH STACK
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {techStack.map((tech) => (
                  <div key={tech.name} className="relative group">
                    <div
                      className={`p-2 sm:p-2.5 rounded-xl glass-pill border border-white/10 ${tech.color} transition-all duration-300 cursor-pointer flex items-center justify-center hover:scale-110 shadow-lg`}
                    >
                      {tech.icon}
                    </div>
                    {/* Hover Skill Name Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 px-3 py-1 rounded-xl glass-panel text-xs font-bold text-white whitespace-nowrap border border-purple-500/30 shadow-xl group-hover:-translate-y-1">
                      {tech.name}
                    </div>
                  </div>
                ))}
                <div className="relative group">
                  <div className="p-2 sm:p-2.5 rounded-xl glass-pill border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/40 transition-all duration-300 flex items-center justify-center hover:scale-110">
                    <MoreHorizontal className="w-8.5 h-8.5 sm:w-9 sm:h-9" />
                  </div>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 px-3 py-1 rounded-xl glass-panel text-xs font-bold text-white whitespace-nowrap border border-purple-500/30 shadow-xl group-hover:-translate-y-1">
                    More Technologies
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Full Circular Tech Profile Hub — hidden on mobile */}
          <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end relative py-6">

            {/* Outer Circular Container */}
            <div className="relative w-[380px] h-[380px] xl:w-[480px] xl:h-[480px] flex items-center justify-center">

              {/* Outer Static Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/25 shadow-[0_0_50px_rgba(139,92,246,0.15)] pointer-events-none" />
              <div className="absolute -inset-5 rounded-full border border-dashed border-indigo-500/20 pointer-events-none" />

              {/* SYNCHRONIZED ORBITING BADGES & SOCIAL ICONS (100% Upright, No Sinking/Wobble) */}

              {/* Node 0: Location (Top) */}
              <div className="absolute top-1/2 left-1/2 z-30 animate-orbit-node-0 pointer-events-auto">
                <div className="px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-xs font-semibold text-gray-200 flex items-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform hover:scale-105">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>India</span>
                </div>
              </div>

              {/* Node 1: Availability (Top-Right) */}
              <div className="absolute top-1/2 left-1/2 z-30 animate-orbit-node-1 pointer-events-auto">
                <div className="px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-xs font-semibold text-emerald-400 flex items-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform hover:scale-105">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Open to Work</span>
                  <span>{personalInfo.availability}</span>
                </div>
              </div>

              {/* Node 2: GitHub (Mid-Right) */}
              <div className="absolute top-1/2 left-1/2 z-30 animate-orbit-node-2 pointer-events-auto">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full glass-panel border border-purple-500/30 text-gray-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/20 transition-all hover:scale-110 shadow-lg flex items-center justify-center"
                  title="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>

              {/* Node 3: Experience (Bottom-Right) */}
              <div className="absolute top-1/2 left-1/2 z-30 animate-orbit-node-3 pointer-events-auto">
                <div className="px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-semibold text-gray-200 flex items-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform hover:scale-105">
                  <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personalInfo.experience}</span>
                </div>
              </div>

              {/* Node 4: Email (Bottom-Left) */}
              <div className="absolute top-1/2 left-1/2 z-30 animate-orbit-node-4 pointer-events-auto">
                <div className="px-3 py-1.5 rounded-full glass-panel border border-blue-500/30 text-xs font-semibold text-gray-300 flex items-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:text-white transition-all hover:scale-105">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
                </div>
              </div>

              {/* Node 5: LinkedIn & Twitter (Mid-Left) */}
              <div className="absolute top-1/2 left-1/2 z-30 animate-orbit-node-5 pointer-events-auto">
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full glass-panel border border-blue-500/30 text-gray-300 hover:text-white hover:border-blue-400 hover:bg-blue-500/20 transition-all hover:scale-110 shadow-lg flex items-center justify-center"
                    title="LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  <a
                    href={personalInfo.links.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full glass-panel border border-sky-500/30 text-gray-300 hover:text-white hover:border-sky-400 hover:bg-sky-500/20 transition-all hover:scale-110 shadow-lg flex items-center justify-center"
                    title="Twitter / X"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Node 6: TCS Company (Top-Left) */}
              <div className="absolute top-1/2 left-1/2 z-30 animate-orbit-node-6 pointer-events-auto">
                <div className="px-3.5 py-1.5 rounded-full glass-panel border border-purple-400/30 text-xs font-semibold text-purple-300 flex items-center gap-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform hover:scale-105">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>Engineer @TCS</span>
                </div>
              </div>

              {/* CENTRAL FULL CIRCLE IMAGE HUB (Static / Non-rotating center) */}
              <div className="w-[280px] h-[280px] xl:w-[340px] xl:h-[340px] rounded-full p-1.5 border-2 border-purple-500/40 relative z-20 shadow-[0_0_60px_rgba(124,58,237,0.35)] overflow-hidden bg-slate-950/80">
                <img
                  src="/ansul_tech_profile.png"
                  alt="Ansul Pal"
                  className="w-full h-full object-cover rounded-full"
                />

                {/* Subtle Name Tag Overlay at Bottom of Image Circle */}
                <div className="absolute bottom-3 inset-x-6 py-2 px-3 rounded-2xl glass-panel border border-white/10 backdrop-blur-md text-center">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">Ansul Pal</h3>
                  <p className="text-xs font-semibold text-purple-300">Software Engineer</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Stats Banner */}
        <div className="mt-10 sm:mt-16">
          <div className="glass-panel rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-3 sm:gap-4 p-2 sm:p-0 ${idx >= 2 ? 'pt-4 md:pt-0' : ''}`}
                >
                  <div className={`p-2.5 sm:p-3 rounded-xl border ${stat.bgColor} flex items-center justify-center shrink-0`}>
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-medium leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero