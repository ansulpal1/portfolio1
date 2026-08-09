import React, { useEffect, useState } from 'react'
import { ExternalLink, Flame, Trophy, RotateCw, ShieldCheck } from 'lucide-react'

const LeetCodeCard = ({ username = 'Raza37' }) => {
  const [stats, setStats] = useState({
    totalSolved: 12,
    totalQuestions: 4013,
    easySolved: 11,
    totalEasy: 958,
    easyBeats: '1.33%',
    mediumSolved: 1,
    totalMedium: 2095,
    medBeats: '0.06%',
    hardSolved: 0,
    totalHard: 960,
    hardBeats: '0%',
    totalSubmissions: 17,
    acSubmissions: 13,
    acceptanceRateInt: '76',
    acceptanceRateDec: '.47%',
    submissionsLastYear: 6,
    activeDays: 1,
    maxStreak: 1,
    currentStreak: 1,
    ranking: 'Top 35%',
    points: 25,
    recentSubmissions: [
      { title: 'Reverse Integer', status: 'Accepted', lang: 'Java' },
      { title: 'Palindrome Number', status: 'Accepted', lang: 'Java' },
    ],
    loading: true,
  })

  const [isFlipped, setIsFlipped] = useState(false)
  const [isRingHovered, setIsRingHovered] = useState(false)

  useEffect(() => {
    let isMounted = true

    const fetchLeetCodeData = async () => {
      try {
        // Fetch both endpoints in parallel
        const [profileRes, solvedRes] = await Promise.allSettled([
          fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`),
          fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`),
        ])

        // Extract solved counts from /solved endpoint (reliable, fast)
        let easySolved = 11, mediumSolved = 1, hardSolved = 0
        let totalSubs = 17, acSubs = 13
        if (solvedRes.status === 'fulfilled' && solvedRes.value.ok) {
          const s = await solvedRes.value.json()
          easySolved = s.easySolved ?? 11
          mediumSolved = s.mediumSolved ?? 1
          hardSolved = s.hardSolved ?? 0
          totalSubs = s.totalSubmissionNum?.[0]?.submissions ?? 17
          acSubs = s.acSubmissionNum?.[0]?.submissions ?? 13
        }

        // Extract full profile data (may be slower)
        let totalEasy = 958, totalMedium = 2095, totalHard = 960, totalQuestions = 4013
        let calendarSubmissions = 6, recents = [
          { title: 'Reverse Integer', status: 'Accepted', lang: 'Java' },
          { title: 'Palindrome Number', status: 'Accepted', lang: 'Java' },
        ]
        let points = 25
        if (profileRes.status === 'fulfilled' && profileRes.value.ok) {
          const data = await profileRes.value.json()
          if (data && isMounted) {
            totalEasy = data.totalEasy || 958
            totalMedium = data.totalMedium || 2095
            totalHard = data.totalHard || 960
            totalQuestions = data.totalQuestions || 4013
            points = data.contributionPoint || 25
            if (data.submissionCalendar) {
              const subObj = typeof data.submissionCalendar === 'string'
                ? JSON.parse(data.submissionCalendar)
                : data.submissionCalendar
              calendarSubmissions = Object.values(subObj).reduce((a, b) => a + Number(b), 0)
            }
            if (data.recentSubmissions) {
              recents = data.recentSubmissions.slice(0, 3).map(s => ({
                title: s.title,
                status: s.statusDisplay,
                lang: s.lang,
              }))
            }
            // Override solved counts from profile if available
            easySolved = data.easySolved ?? easySolved
            mediumSolved = data.mediumSolved ?? mediumSolved
            hardSolved = data.hardSolved ?? hardSolved
          }
        }

        const rate = totalSubs > 0 ? (acSubs / totalSubs) * 100 : 76.47
        const [rateInt, rateDec] = rate.toFixed(2).split('.')

        const eBeats = totalEasy > 0 ? ((easySolved / totalEasy) * 100).toFixed(2) + '%' : '0%'
        const mBeats = totalMedium > 0 ? ((mediumSolved / totalMedium) * 100).toFixed(2) + '%' : '0%'
        const hBeats = totalHard > 0 ? ((hardSolved / totalHard) * 100).toFixed(2) + '%' : '0%'

        if (isMounted) {
          setStats({
            totalSolved: easySolved + mediumSolved + hardSolved,
            totalQuestions,
            easySolved,
            totalEasy,
            easyBeats: eBeats,
            mediumSolved,
            totalMedium,
            medBeats: mBeats,
            hardSolved,
            totalHard,
            hardBeats: hBeats,
            totalSubmissions: totalSubs,
            acSubmissions: acSubs,
            acceptanceRateInt: rateInt,
            acceptanceRateDec: `.${rateDec}%`,
            submissionsLastYear: calendarSubmissions || 6,
            activeDays: calendarSubmissions > 0 ? 1 : 0,
            maxStreak: 1,
            currentStreak: 1,
            ranking: 'Top 35%',
            points,
            recentSubmissions: recents,
            loading: false,
          })
        }
        return
      } catch (err) {
        console.warn('LeetCode API fetch error:', err)
      }

      if (isMounted) {
        setStats((prev) => ({ ...prev, loading: false }))
      }
    }

    fetchLeetCodeData()

    return () => {
      isMounted = false
    }
  }, [username])

  return (
    <div className="glass-panel-glow rounded-3xl p-6 sm:p-7 border border-purple-500/30 flex flex-col justify-between h-full shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_15px_45px_rgba(139,92,246,0.25)]">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M16.102 17.93l-2.697 2.607c-.766.741-1.986.741-2.753 0l-6.85-6.611a2.037 2.037 0 010-2.834l6.85-6.613c.767-.74 1.987-.74 2.753 0l2.697 2.606a.625.625 0 01-.86.906l-2.697-2.606c-.287-.278-.745-.278-1.032 0l-6.85 6.613a.764.764 0 000 1.063l6.85 6.611c.287.278.745.278 1.032 0l2.697-2.607a.625.625 0 01.86.906zm4.887-5.011a.625.625 0 000-.884l-4.52-4.364a.625.625 0 10-.869.899l4.52 4.364c.24.232.24.61 0 .842l-4.52 4.364a.625.625 0 00.869.9l4.52-4.364z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">LeetCode Profile</h3>
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-500 animate-pulse" />
                <span>{stats.submissionsLastYear} Submissions in past year</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 text-gray-400 hover:text-white transition-all flex items-center gap-1 text-xs font-mono"
            title="Flip Card"
          >
            <RotateCw className={`w-3.5 h-3.5 transition-transform duration-500 ${isFlipped ? 'rotate-180 text-amber-400' : ''}`} />
            <span className="hidden sm:inline">Flip</span>
          </button>
        </div>

        {/* 3D FLIP CONTAINER MATCHING OFFICIAL LEETCODE UI */}
        <div className="my-4 relative min-h-[220px] [perspective:1000px]">
          <div
            className={`w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
              isFlipped ? '[transform:rotateY(180deg)]' : ''
            }`}
          >
            {/* FRONT SIDE: Official LeetCode Donut Circle & Horizontal Beats Cards */}
            <div className="w-full h-full p-4 rounded-2xl bg-[#0d1117]/90 border border-white/10 [backface-visibility:hidden]">
              <div className="grid grid-cols-12 gap-4 items-center">
                
                {/* Left: 360-Degree 3 Sector Donut Ring */}
                <div
                  onMouseEnter={() => setIsRingHovered(true)}
                  onMouseLeave={() => setIsRingHovered(false)}
                  className="col-span-12 sm:col-span-5 flex flex-col items-center justify-center p-4 rounded-2xl bg-[#161b22] border border-white/5 relative cursor-pointer select-none min-h-[160px]"
                >
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90 transition-all duration-300" viewBox="0 0 36 36">
                      
                      {/* 1. Hard Muted Sector (Top Right, #3d191c) */}
                      <path
                        stroke="#3d191c"
                        strokeWidth="3.6"
                        strokeDasharray="31.5 100"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />

                      {/* 2. Easy Muted Sector (Bottom, #1a3d36) */}
                      <path
                        stroke="#1a3d36"
                        strokeWidth="3.6"
                        strokeDasharray="31.5 100"
                        strokeDashoffset="-33.33"
                        strokeLinecap="round"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />

                      {/* 3. Medium Muted Sector (Top Left, #3d3214) */}
                      <path
                        stroke="#3d3214"
                        strokeWidth="3.6"
                        strokeDasharray="31.5 100"
                        strokeDashoffset="-66.66"
                        strokeLinecap="round"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />

                      {/* ACTIVE HIGHLIGHT PILL DOTS MATCHING EXACT SCREENSHOT */}
                      {/* Easy Active Teal Dot (#00b8a3) */}
                      <path
                        stroke="#00b8a3"
                        strokeDasharray="3.5 100"
                        strokeDashoffset="-33.33"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />

                      {/* Medium Active Yellow Dot (#ffa116) */}
                      <path
                        stroke="#ffa116"
                        strokeDasharray="3.5 100"
                        strokeDashoffset="-66.66"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>

                    {/* Ring Center Text View */}
                    {isRingHovered ? (
                      /* Ring Hover: Shows Acceptance */
                      <div className="absolute flex flex-col items-center justify-center text-center transition-all duration-300 select-none">
                        <div className="flex items-baseline justify-center">
                          <span className="text-2xl font-extrabold text-white">{stats.acceptanceRateInt}</span>
                          <span className="text-[11px] font-semibold text-gray-300">{stats.acceptanceRateDec}</span>
                        </div>
                        <span className="text-[10px] text-gray-300 font-medium leading-tight">
                          Acceptance
                        </span>
                        <span className="text-[9px] text-gray-400 font-normal mt-0.5">
                          {stats.totalSubmissions} submission
                        </span>
                      </div>
                    ) : (
                      /* Default Center View matching screenshot */
                      <div className="absolute flex flex-col items-center justify-center text-center transition-all duration-300 select-none">
                        <div className="flex items-baseline justify-center gap-0.5">
                          <span className="text-2xl font-extrabold text-white">{stats.totalSolved}</span>
                          <span className="text-xs text-gray-400 font-normal">/{stats.totalQuestions}</span>
                        </div>
                        <span className="text-xs text-[#00b8a3] font-semibold flex items-center justify-center gap-1 mt-0.5">
                          <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Solved</span>
                        </span>
                      </div>
                    )}

                  </div>
                </div>

                {/* Right: Difficulty Cards with Horizontal Progress Bars & Beats Data */}
                <div className="col-span-12 sm:col-span-7 space-y-2.5">
                  
                  {/* Easy Card */}
                  <div className="p-3 rounded-2xl bg-[#161b22] border border-white/5 space-y-2 transition-all hover:border-[#00b8a3]/40">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#00b8a3]">Easy</span>
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        <span>{stats.easySolved}</span>
                        <span className="text-gray-500 font-normal text-[11px]">/{stats.totalEasy}</span>
                        <span className="text-gray-400 font-normal text-[10px] ml-1">(Beats {stats.easyBeats})</span>
                      </div>
                    </div>
                    {/* Horizontal Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-[#00b8a3] rounded-full transition-all duration-500"
                        style={{ width: `${(stats.easySolved / stats.totalEasy) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Medium Card */}
                  <div className="p-3 rounded-2xl bg-[#161b22] border border-white/5 space-y-2 transition-all hover:border-[#ffa116]/40">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#ffa116]">Medium</span>
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        <span>{stats.mediumSolved}</span>
                        <span className="text-gray-500 font-normal text-[11px]">/{stats.totalMedium}</span>
                        <span className="text-gray-400 font-normal text-[10px] ml-1">(Beats {stats.medBeats})</span>
                      </div>
                    </div>
                    {/* Horizontal Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-[#ffa116] rounded-full transition-all duration-500"
                        style={{ width: `${(stats.mediumSolved / stats.totalMedium) * 100}%`, minWidth: '4px' }}
                      />
                    </div>
                  </div>

                  {/* Hard Card */}
                  <div className="p-3 rounded-2xl bg-[#161b22] border border-white/5 space-y-2 transition-all hover:border-[#ff375f]/40">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#ff375f]">Hard</span>
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        <span>{stats.hardSolved}</span>
                        <span className="text-gray-500 font-normal text-[11px]">/{stats.totalHard}</span>
                        <span className="text-gray-400 font-normal text-[10px] ml-1">(Beats {stats.hardBeats})</span>
                      </div>
                    </div>
                    {/* Horizontal Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-[#ff375f] rounded-full transition-all duration-500"
                        style={{ width: `${(stats.hardSolved / stats.totalHard) * 100}%` }}
                      />
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* BACK SIDE: LeetCode Badges, Acceptance & Submissions */}
            <div className="absolute inset-0 w-full h-full p-4 rounded-2xl bg-[#0d1117]/95 border border-amber-500/30 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-white">Badges: 0</span>
                  </div>
                  <span className="text-[10px] text-amber-400 font-medium px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                    Aug LeetCoding Challenge
                  </span>
                </div>

                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                  Recent Submissions
                </span>

                <div className="space-y-1.5">
                  {stats.recentSubmissions.map((sub, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-white/5 text-xs">
                      <span className="font-semibold text-gray-200">{sub.title}</span>
                      <span className="text-emerald-400 font-bold text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                        {sub.status} ({sub.lang})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-gray-400 pt-2 border-t border-white/5 font-mono">
                <span>Acceptance: <strong className="text-white">{stats.acceptanceRateInt}{stats.acceptanceRateDec}</strong></span>
                <span>Submissions: <strong className="text-amber-400">{stats.totalSubmissions}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Summary Bar */}
        <div className="grid grid-cols-3 gap-2 pt-1 text-center">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
            <span className="text-lg font-extrabold text-amber-400 block">{stats.submissionsLastYear}</span>
            <span className="text-[11px] text-gray-400 font-medium">Submissions</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
            <span className="text-lg font-extrabold text-emerald-400 block">{stats.activeDays}</span>
            <span className="text-[11px] text-gray-400 font-medium">Active Days</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
            <span className="text-lg font-extrabold text-sky-400 block">{stats.points}</span>
            <span className="text-[11px] text-gray-400 font-medium">Points</span>
          </div>
        </div>
      </div>

      {/* Profile Link Button */}
      <div className="pt-5">
        <a
          href={`https://leetcode.com/u/ansul121/`}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl glass-pill border border-white/15 hover:border-amber-500/40 hover:bg-white/10 text-sm font-semibold text-gray-200 hover:text-white transition-all duration-300"
        >
          <div className="flex items-center gap-2.5">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>View LeetCode Profile</span>
          </div>
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      </div>
    </div>
  )
}

export default LeetCodeCard
