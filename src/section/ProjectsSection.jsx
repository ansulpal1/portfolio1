import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data'

const ProjectsSection = () => {
  // Get projects for the main page using the mainPage tag, fallback to featured if not explicitly set
  const featuredProjects = projects.filter(p => p.mainPage === true || (p.mainPage === undefined && p.featured)).slice(0, 4)

  return (
    <section id="projects" className="relative py-10 bg-[#080914] overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title & View All */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-16">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)] animate-pulse" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <Link 
            to="/projects" 
            className="self-start sm:self-auto text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 group px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 hover:bg-blue-500/20"
          >
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, idx) => (
            <div 
              key={project.id || idx}
              className="group flex flex-col bg-[#0c1021]/80 backdrop-blur-md border border-white/5 hover:border-white/20 rounded-2xl p-4 transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fadeIn shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] h-full"
            >
              {/* Image Container */}
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-5 bg-gray-800">
                <img 
                  src={project.previewImage || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Links (Hover Top Right) */}
                {(project.links?.live || project.links?.github) && (
                  <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.links.github && project.links.github !== '#' && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 bg-black/50 backdrop-blur-md rounded-lg text-white hover:bg-black/80 hover:text-blue-400 hover:scale-110 transition-all border border-white/10"
                        title="View Source Code"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                      </a>
                    )}
                    {project.links.live && project.links.live !== '#' && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 bg-black/50 backdrop-blur-md rounded-lg text-white hover:bg-black/80 hover:text-blue-400 hover:scale-110 transition-all border border-white/10"
                        title="View Live Site"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                {project.badge && (
                  <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-wider uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit">
                    {project.badge}
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-white transition-colors leading-snug min-h-[3.5rem] line-clamp-2" title={project.title}>
                  {project.title}
                </h3>
                <div className="flex-1 mb-6">
                  <p 
                    className="text-sm text-gray-400 leading-relaxed overflow-hidden text-ellipsis"
                    style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
                    title={project.description}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack?.slice(0, 5).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-gray-300 whitespace-nowrap group-hover:border-white/20 group-hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProjectsSection
