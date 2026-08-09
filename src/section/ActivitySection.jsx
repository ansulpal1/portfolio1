import React from 'react'
import AboutCard from '../components/AboutCard.jsx'
import GitHubCard from '../components/GitHubCard.jsx'
import LeetCodeCard from '../components/LeetCodeCard.jsx'

const ActivitySection = () => {
  return (
    <section id="about" className="relative py-16 bg-[#080914] bg-stars">
      {/* Dynamic Background Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
            Overview & Coding Activity
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Engineering & Problem Solving
          </h2>
        </div>

        {/* Row 1: Full-width About Card */}
        <div className="w-full">
          <AboutCard />
        </div>

        {/* Row 2: GitHub & LeetCode Cards Side-by-Side (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <GitHubCard username="ansulpal1" />
          <LeetCodeCard username="ansul121" />
        </div>

      </div>
    </section>
  )
}

export default ActivitySection
//Ritikkumar_060