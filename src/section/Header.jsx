import React, { useState, useEffect } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { navItems } from '../data'

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Track navbar background on scroll
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Map each nav item's href to its section element
    const sectionIds = navItems
      .map((item) => item.href?.replace('#', ''))
      .filter(Boolean)

    const observers = []

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find which nav item matches this section id
          const matched = navItems.find(
            (item) => item.href?.replace('#', '') === entry.target.id
          )
          if (matched) setActiveTab(matched.name)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      // Fire when at least 30% of the section is visible, adjusted for fixed header
      rootMargin: '-80px 0px -40% 0px',
      threshold: 0,
    })

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (name) => {
    setActiveTab(name)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between glass-panel rounded-2xl px-6 py-3.5 border border-white/10 backdrop-blur-xl">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1 group" onClick={() => handleNavClick('Home')}>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Ansul Pal
            </span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 inline-block shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.name
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,1)]" />
                  )}
                </a>
              )
            })}
          </div>

          {/* Download Resume Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="/Ansulpal_resume.pdf"
              
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 text-xs font-semibold text-gray-200 rounded-full glass-pill border border-white/15 hover:border-purple-500/50 hover:bg-white/10 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              <span>Download Resume</span>
              <Download className="w-3.5 h-3.5 text-gray-300 group-hover:text-purple-400 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="/Ansulpal_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded-full glass-pill text-gray-300 hover:text-white border border-white/10"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 glass-panel rounded-2xl border border-white/10 flex flex-col space-y-2 animate-fadeIn">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-colors ${
                  activeTab === item.name
                    ? 'bg-purple-600/20 text-white border border-purple-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header