import React from 'react'
import { ChevronUp } from 'lucide-react'
import { personalInfo } from '../data'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer
      className="relative overflow-hidden border-t border-white/10"
      style={{
        backgroundImage: "url('/footer.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#020617]/65" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Left Side: Brand Name & Copyright */}
          <div className="flex flex-wrap items-center gap-3 text-center md:text-left justify-center md:justify-start">
            <span className="font-bold text-white text-base sm:text-lg tracking-tight">
              {personalInfo.name}.
            </span>

            <span className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </span>
          </div>

          {/* Center: Crafted with love & coffee */}
          <div className="flex items-center gap-1.5 text-gray-300 text-xs sm:text-sm">
            <span>Crafted with</span>
            <span className="text-red-500">❤️</span>
            <span>and lots of</span>
            <span>☕</span>
          </div>

          {/* Right Side: Social Links & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">

            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>

            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>

            <a
              href={personalInfo.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Twitter
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Email
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-xl bg-[#111326]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500/40 hover:bg-[#181b35]/90 transition-all cursor-pointer"
            >
              <ChevronUp className="w-4 h-4" />
            </button>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer