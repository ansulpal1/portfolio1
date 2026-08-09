import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data'

const AllProjectsPage = () => {
  const [activeCard, setActiveCard] = useState(null)
  return (
    <div className="relative min-h-screen bg-[#080914] text-white pt-32 pb-32 overflow-x-clip">
      
      {/* Background Glowing Orbs */}
      <div className="fixed top-[20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation & Header */}
        <div className="mb-20 animate-fadeIn">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-gray-300 hover:text-white transition-all mb-8 group shadow-lg backdrop-blur-sm"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> 
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] animate-pulse" />
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight">
              All Projects
            </h1>
          </div>
          <p className="mt-4 text-gray-400 max-w-2xl text-lg">
            A comprehensive collection of my software engineering projects, spanning from enterprise solutions to personal side projects.
          </p>
        </div>

        {/* Sticky Stacking Projects List */}
        <div className="relative flex flex-col gap-[10vh]">
          {projects.map((project, idx) => (
            <div 
              key={project.id || idx}
              onClick={() => setActiveCard(activeCard === idx ? null : idx)}
              className={`sticky flex flex-col lg:flex-row bg-[#0c1021]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-4 sm:p-6 lg:p-8 transition-all duration-500 cursor-pointer group ${activeCard === idx ? 'animate-card-shuffle shadow-[0_30px_60px_rgba(59,130,246,0.3)]' : 'shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)]'}`}
              style={{
                top: `calc(120px + ${idx * 30}px)`,
                zIndex: activeCard === idx ? 50 : idx
              }}
            >
              {/* Left: Image Container (Monitor style) */}
              <div className="w-full lg:w-[45%] h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden relative bg-black flex-shrink-0 border border-white/5 mb-6 lg:mb-0 lg:mr-8 shadow-inner">
                <img 
                  src={project.previewImage || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1021] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Right: Content Container */}
              <div className="w-full lg:w-[55%] flex flex-col justify-center py-2 lg:py-6">
                
                {/* Title & Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {project.title}
                  </h3>
                  {project.badge && (
                    <span className="inline-flex px-3 py-1 text-xs font-semibold tracking-wider text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit whitespace-nowrap">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {project.techStack?.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  {project.links?.live && project.links.live !== '#' && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.links?.github && project.links.github !== '#' && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/15 hover:border-white/30 hover:bg-white/5 text-white font-semibold text-sm rounded-xl hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  
                  {/* Fallback buttons if links are '#' to match UI screenshot visually */}
                  {(!project.links?.live || project.links.live === '#') && (
                     <button onClick={(e) => e.stopPropagation()} className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transition-all duration-300 opacity-60 cursor-not-allowed">
                       Live Demo
                     </button>
                  )}
                  {(!project.links?.github || project.links.github === '#') && (
                     <button onClick={(e) => e.stopPropagation()} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/15 hover:border-white/30 hover:bg-white/5 text-white font-semibold text-sm rounded-xl transition-all duration-300 opacity-60 cursor-not-allowed">
                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                       GitHub
                     </button>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default AllProjectsPage
