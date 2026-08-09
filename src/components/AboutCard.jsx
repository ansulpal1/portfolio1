import React from 'react'
import { User, Sparkles, ArrowRight, Briefcase, Code2, Award, Terminal } from 'lucide-react'

const AboutCard = () => {
  return (
    <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_15px_45px_rgba(139,92,246,0.25)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Title & Paragraphs */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-2xl bg-purple-500/15 border border-purple-400/30 text-purple-400">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">About Me</h3>
              <span className="text-xs text-purple-300 font-semibold">Software Engineer at Tata Consultancy Services (TCS)</span>
            </div>
          </div>

          <p className="text-gray-300 text-base leading-relaxed">
            I am a dedicated <span className="text-purple-300 font-semibold">Software Engineer at TCS</span> specializing in building high-performance backend microservices, robust RESTful APIs, and enterprise cloud solutions.
          </p>

          <p className="text-gray-400 text-sm leading-relaxed">
            My core technical expertise revolves around <span className="text-gray-200 font-medium">Java, Spring Boot, React, Node.js, relational and NoSQL databases, and cloud infrastructure</span>. I thrive on translating complex business requirements into elegant, scalable software applications.
          </p>

          {/* Quick Highlight Pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full-Time @ TCS</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Backend & Cloud Architecture</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Clean Code & Microservices</span>
            </div>
          </div>
        </div>

        {/* Right Side: Skill Tags & Action CTA */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8">
          <div>
            <span className="text-xs font-bold tracking-wider text-purple-300 uppercase block mb-3">
              PRIMARY COMPETENCIES
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                {
                  name: 'Java',
                  border: '#E76F00',
                  icon: (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <path d="M9 17s-1 .5 3 .5 4-.5 4-.5M9.5 15.5s-.5.5 2.5.5 3.5-.5 3.5-.5" stroke="#E76F00" strokeWidth="1.4" strokeLinecap="round"/>
                      <path d="M11 4c0 0-4 3-1 6 1.5 1.5 2 2.5 0 4.5" stroke="#5382A1" strokeWidth="1.4" strokeLinecap="round"/>
                      <path d="M13 4c0 0 3 3 0 5.5-2 1.5-.5 3 1 4.5" stroke="#5382A1" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  )
                },
                {
                  name: 'Spring Boot',
                  border: '#6DB33F',
                  icon: (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3L4 7v10l8 4 8-4V7l-8-4z" fill="#6DB33F" fillOpacity="0.2" stroke="#6DB33F" strokeWidth="1.3"/>
                      <circle cx="12" cy="12" r="2" fill="#6DB33F"/>
                    </svg>
                  )
                },
                {
                  name: 'REST APIs',
                  border: '#A78BFA',
                  icon: (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <circle cx="5" cy="12" r="2.5" stroke="#A78BFA" strokeWidth="1.3" fill="#A78BFA" fillOpacity="0.2"/>
                      <circle cx="19" cy="12" r="2.5" stroke="#A78BFA" strokeWidth="1.3" fill="#A78BFA" fillOpacity="0.2"/>
                      <path d="M7.5 12h9M14 9l3 3-3 3" stroke="#A78BFA" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  name: 'Microservices',
                  border: '#38BDF8',
                  icon: (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="5" r="2.5" fill="#38BDF8" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="1.3"/>
                      <circle cx="5" cy="17" r="2.5" fill="#38BDF8" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="1.3"/>
                      <circle cx="19" cy="17" r="2.5" fill="#38BDF8" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="1.3"/>
                      <path d="M12 7.5v4M12 11.5l-5.5 3.5M12 11.5l5.5 3.5" stroke="#38BDF8" strokeWidth="1.3"/>
                    </svg>
                  )
                },
                {
                  name: 'React.js',
                  border: '#61DAFB',
                  icon: (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(0 12 12)"/>
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)"/>
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)"/>
                      <circle cx="12" cy="12" r="1.5" fill="#61DAFB"/>
                    </svg>
                  )
                },
                {
                  name: 'PostgreSQL',
                  border: '#336791',
                  icon: (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <ellipse cx="12" cy="8" rx="6" ry="3" stroke="#336791" strokeWidth="1.4" fill="#336791" fillOpacity="0.2"/>
                      <path d="M6 8v8c0 1.66 2.69 3 6 3s6-1.34 6-3V8" stroke="#336791" strokeWidth="1.4"/>
                      <path d="M18 10c1 0 2 .5 2 2s-1 2-2 2" stroke="#336791" strokeWidth="1.3"/>
                    </svg>
                  )
                },
                {
                  name: 'Docker',
                  border: '#2496ED',
                  icon: (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="11" width="4" height="4" rx="1" fill="#2496ED" fillOpacity="0.3" stroke="#2496ED" strokeWidth="1.3"/>
                      <rect x="8" y="11" width="4" height="4" rx="1" fill="#2496ED" fillOpacity="0.3" stroke="#2496ED" strokeWidth="1.3"/>
                      <rect x="13" y="11" width="4" height="4" rx="1" fill="#2496ED" fillOpacity="0.3" stroke="#2496ED" strokeWidth="1.3"/>
                      <rect x="8" y="6" width="4" height="4" rx="1" fill="#2496ED" fillOpacity="0.3" stroke="#2496ED" strokeWidth="1.3"/>
                      <path d="M2 16.5c2.5 1.5 12 1.5 16-1" stroke="#2496ED" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  )
                },
                {
                  name: 'AWS',
                  border: '#FF9900',
                  icon: (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <path d="M6 15s-2-1-2-3 2-3 2-3" stroke="#FF9900" strokeWidth="1.4" strokeLinecap="round"/>
                      <path d="M18 15s2-1 2-3-2-3-2-3" stroke="#FF9900" strokeWidth="1.4" strokeLinecap="round"/>
                      <path d="M7 12c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#FF9900" strokeWidth="1.4" strokeLinecap="round"/>
                      <path d="M7 16l-2 2h14l-2-2" stroke="#FF9900" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                }
              ].map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 flex items-center gap-2 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-200 select-none cursor-default"
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center justify-between w-full px-6 py-3.5 rounded-2xl glass-pill border border-white/15 hover:border-purple-500/40 hover:bg-white/10 text-sm font-semibold text-gray-200 hover:text-white transition-all duration-300 shadow-lg"
          >
            <div className="flex items-center gap-2.5">
              <User className="w-4 h-4 text-purple-400" />
              <span>Know More About Me</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default AboutCard
