import React, { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'

const GitHubCard = ({ username = 'ansulpal1' }) => {
  const [stats, setStats] = useState({
    repos: 12,
    stars: 10,
    prs: 1,
    loading: true,
  })

  const [yearData, setYearData] = useState({}) // { '2026': { total: 2, weeks: [], months: [] }, ... }
  const [availableYears, setAvailableYears] = useState([2026, 2025, 2024, 2023])
  const [selectedYear, setSelectedYear] = useState(2026)

  useEffect(() => {
    let isMounted = true

    const formatDateTooltip = (dateStr, count) => {
      try {
        const d = new Date(dateStr)
        const monthName = d.toLocaleString('default', { month: 'long' })
        const dayNum = d.getDate()

        const getOrdinal = (n) => {
          const s = ['th', 'st', 'nd', 'rd']
          const v = n % 100
          return n + (s[(v - 20) % 10] || s[v] || s[0])
        }

        if (count === 0) {
          return `No contributions on ${monthName} ${getOrdinal(dayNum)}.`
        }
        return `${count} contribution${count > 1 ? 's' : ''} on ${monthName} ${getOrdinal(dayNum)}.`
      } catch {
        return `${count} contributions`
      }
    }

    const fetchGitHubData = async () => {
      try {
        // 1. Fetch Real GitHub User Stats (Repos count)
        let totalRepos = 12
        const userRes = await fetch(`https://api.github.com/users/${username}`)
        if (userRes.ok) {
          const userData = await userRes.json()
          totalRepos = userData.public_repos || 12
        }

        // 2. Fetch Real GitHub Repositories for Stars count
        let starsCount = 0
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        if (reposRes.ok) {
          const reposData = await reposRes.json()
          starsCount = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0)
        }

        // 3. Fetch Real GitHub Pull Requests count
        let prsCount = 1
        try {
          const prsRes = await fetch(`https://api.github.com/search/issues?q=author:${username}+type:pr`)
          if (prsRes.ok) {
            const prsData = await prsRes.json()
            prsCount = prsData.total_count !== undefined ? prsData.total_count : 1
          }
        } catch {
          // fallback PR count if rate-limited
          prsCount = 1
        }

        // 4. Fetch Real Contribution Heatmap Data per Year
        const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
        if (contribRes.ok) {
          const contribData = await contribRes.json()
          const contributionsList = contribData.contributions || []
          const totalsByYear = contribData.total || {}

          if (contributionsList.length > 0) {
            const groupedByYear = {}

            contributionsList.forEach((item) => {
              const yr = new Date(item.date).getFullYear()
              if (!groupedByYear[yr]) {
                groupedByYear[yr] = []
              }
              groupedByYear[yr].push(item)
            })

            const yearMap = {}
            const yearsList = Object.keys(groupedByYear)
              .map(Number)
              .sort((a, b) => b - a)

            yearsList.forEach((yr) => {
              const list = groupedByYear[yr]
              // Exactly 52 weeks max (364 days) per year layout so it fits cleanly
              const yearList52Weeks = list.slice(0, 52 * 7)

              const computedWeeks = []
              const computedMonths = []
              let lastMonthName = ''

              for (let i = 0; i < yearList52Weeks.length; i += 7) {
                const weekChunk = yearList52Weeks.slice(i, i + 7)
                const weekIdx = Math.floor(i / 7)

                if (weekChunk.length > 0) {
                  const firstDayDate = new Date(weekChunk[0].date)
                  const monthName = firstDayDate.toLocaleString('default', { month: 'short' })
                  if (monthName !== lastMonthName) {
                    lastMonthName = monthName
                    computedMonths.push({ name: monthName, weekIdx })
                  }
                }

                const enrichedChunk = weekChunk.map((day) => ({
                  ...day,
                  tooltip: formatDateTooltip(day.date, day.count),
                }))

                computedWeeks.push(enrichedChunk)
              }

              yearMap[yr] = {
                total: totalsByYear[yr] !== undefined ? totalsByYear[yr] : list.reduce((acc, d) => acc + d.count, 0),
                weeks: computedWeeks,
                months: computedMonths,
              }
            })

            if (isMounted) {
              setAvailableYears(yearsList)
              const bestYear = yearsList.find((y) => yearMap[y].total > 10) || yearsList[0]
              setSelectedYear(bestYear)
              setYearData(yearMap)
              setStats({
                repos: totalRepos,
                stars: starsCount,
                prs: prsCount,
                loading: false,
              })
              return
            }
          }
        }
      } catch (err) {
        console.warn('Live GitHub data fetch error:', err)
      }

      // Offline fallback
      if (isMounted) {
        setStats({ repos: totalRepos, stars: 0, prs: 1, loading: false })
      }
    }

    fetchGitHubData()

    return () => {
      isMounted = false
    }
  }, [username])

  const getCellColor = (level) => {
    switch (level) {
      case 4:
        return 'bg-[#39d353] shadow-[0_0_6px_#39d353]'
      case 3:
        return 'bg-[#26a641]'
      case 2:
        return 'bg-[#006d32]'
      case 1:
        return 'bg-[#0e4429]'
      default:
        return 'bg-[#161b22] border border-white/5'
    }
  }

  const activeYearInfo = yearData[selectedYear] || { total: 0, weeks: [], months: [] }

  return (
    <div className="glass-panel-glow rounded-3xl p-6 sm:p-7 border border-purple-500/30 flex flex-col justify-between h-full shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_15px_45px_rgba(139,92,246,0.25)]">
      <div>
        {/* Header matching GitHub's exact style */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {activeYearInfo.total} contributions in {selectedYear}
              </h3>
              <p className="text-xs text-emerald-400 font-semibold">
                GitHub Activity Calendar
              </p>
            </div>
          </div>
        </div>

        {/* Main Graph Grid with Right Vertical Year Selector Pills */}
        <div className="grid grid-cols-12 gap-3 my-4">
          
          {/* Heatmap Graph Container (Fits 52 weeks perfectly without scrollbars) */}
          <div className="col-span-12 sm:col-span-10 p-3.5 rounded-2xl bg-[#0d1117]/90 border border-white/10 flex flex-col justify-between overflow-hidden">
            <div className="flex gap-1.5">
              {/* Day of Week Column (Mon, Wed, Fri aligned with rows 1, 3, 5) */}
              <div className="flex flex-col justify-between text-[9px] sm:text-[10px] text-gray-400 font-mono pt-4 pb-0.5 pr-0.5 select-none shrink-0">
                <span className="h-2 leading-none">Mon</span>
                <span className="h-2 leading-none">Wed</span>
                <span className="h-2 leading-none">Fri</span>
              </div>

              {/* Calendar Container (Fits 52 weeks smoothly using flex-1 justify-between) */}
              <div className="flex-1 min-w-0 overflow-hidden">
                {/* Month Labels Aligned Perfectly over Week Columns */}
                <div className="relative h-4 mb-1 text-[9px] sm:text-[10px] text-gray-400 font-mono select-none">
                  {activeYearInfo.months.map((m, idx) => (
                    <span
                      key={idx}
                      className="absolute"
                      style={{ left: `${(m.weekIdx / (activeYearInfo.weeks.length || 52)) * 100}%` }}
                    >
                      {m.name}
                    </span>
                  ))}
                </div>

                {/* 52 Columns Grid (Fits full width without scrollbars) */}
                <div className="flex justify-between w-full">
                  {activeYearInfo.weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[2px] sm:gap-[3px]">
                      {week.map((day, dIdx) => (
                        <div
                          key={dIdx}
                          title={day.tooltip}
                          className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-[1.5px] sm:rounded-sm transition-all duration-150 hover:scale-125 cursor-pointer ${getCellColor(
                            day.level
                          )}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* GitHub Color Legend Footer */}
            <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-gray-400 mt-2.5 font-mono pt-2 border-t border-white/5 select-none">
              <span className="hidden sm:inline text-gray-500">Learn how we count contributions</span>
              <div className="flex items-center gap-1 ml-auto">
                <span>Less</span>
                <span className="w-2 h-2 rounded-[1.5px] bg-[#161b22] border border-white/5" />
                <span className="w-2 h-2 rounded-[1.5px] bg-[#0e4429]" />
                <span className="w-2 h-2 rounded-[1.5px] bg-[#006d32]" />
                <span className="w-2 h-2 rounded-[1.5px] bg-[#26a641]" />
                <span className="w-2 h-2 rounded-[1.5px] bg-[#39d353]" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Right Column: Year Selection Buttons matching GitHub screenshot */}
          <div className="col-span-12 sm:col-span-2 flex sm:flex-col justify-center sm:justify-start gap-1.5 pt-1 sm:pt-0">
            {availableYears.map((yr) => {
              const isSelected = yr === selectedYear
              return (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`w-full py-1.5 px-2 rounded-xl text-xs font-semibold transition-all duration-200 text-center ${
                    isSelected
                      ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-105 border border-blue-400/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {yr}
                </button>
              )
            })}
          </div>

        </div>

        {/* Stats Summary Bar - Real GitHub Data */}
        <div className="grid grid-cols-4 gap-2 pt-1 text-center">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
            <span className="text-lg font-extrabold text-white block">{activeYearInfo.total}</span>
            <span className="text-[11px] text-gray-400 font-medium">In {selectedYear}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
            <span className="text-lg font-extrabold text-emerald-400 block">{stats.repos}</span>
            <span className="text-[11px] text-gray-400 font-medium">Repos</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
            <span className="text-lg font-extrabold text-amber-400 block">{stats.stars}</span>
            <span className="text-[11px] text-gray-400 font-medium">Stars</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
            <span className="text-lg font-extrabold text-purple-400 block">{stats.prs}</span>
            <span className="text-[11px] text-gray-400 font-medium">PRs</span>
          </div>
        </div>
      </div>

      {/* Profile Link Button */}
      <div className="pt-5">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl glass-pill border border-white/15 hover:border-emerald-500/40 hover:bg-white/10 text-sm font-semibold text-gray-200 hover:text-white transition-all duration-300"
        >
          <div className="flex items-center gap-2.5">
            <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>View GitHub Profile</span>
          </div>
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      </div>
    </div>
  )
}

export default GitHubCard
