// =============================================
// SKILLS & TECH STACK DATA
// =============================================

export const techStack = [
  { name: 'Java', color: 'hover:border-amber-500/50 hover:bg-amber-500/10' },
  { name: 'Spring Boot', color: 'hover:border-emerald-500/50 hover:bg-emerald-500/10' },
  { name: 'React', color: 'hover:border-cyan-500/50 hover:bg-cyan-500/10' },
  { name: 'Node.js', color: 'hover:border-green-500/50 hover:bg-green-500/10' },
  { name: 'MongoDB', color: 'hover:border-emerald-600/50 hover:bg-emerald-600/10' },
  { name: 'MySQL', color: 'hover:border-sky-500/50 hover:bg-sky-500/10' },
  { name: 'Docker', color: 'hover:border-blue-500/50 hover:bg-blue-500/10' },
  { name: 'Firebase', color: 'hover:border-yellow-500/50 hover:bg-yellow-500/10' },
  { name: 'Git', color: 'hover:border-rose-500/50 hover:bg-rose-500/10' },
]

// ─── Technical Arsenal (tabbed skill cards) ───────────────────────────────
// Each skill: { name, color (icon bg hex), textColor, icon (SVG path or emoji fallback) }
export const technicalArsenal = {
  Languages: [
    {
      name: 'Java',
      bg: '#1a0d00',
      border: '#E76F00',
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#E76F00" fill-opacity="0.15"/>
        <path d="M9 17s-1 .5 3 .5 4-.5 4-.5M9.5 15.5s-.5.5 2.5.5 3.5-.5 3.5-.5" stroke="#E76F00" stroke-width="1.3" stroke-linecap="round"/>
        <path d="M11 4c0 0-4 3-1 6 1.5 1.5 2 2.5 0 4.5" stroke="#5382A1" stroke-width="1.3" stroke-linecap="round"/>
        <path d="M13 4c0 0 3 3 0 5.5-2 1.5-.5 3 1 4.5" stroke="#5382A1" stroke-width="1.3" stroke-linecap="round"/>
      </svg>`,
    },
    {
      name: 'JavaScript',
      bg: '#1a1500',
      border: '#F7DF1E',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#F7DF1E" fill-opacity="0.15" stroke="#F7DF1E" stroke-width="1.2"/>
        <path d="M8 16.5c0 1 .5 1.5 1.5 1.5s1.5-.5 1.5-1.5V11" stroke="#F7DF1E" stroke-width="1.4" stroke-linecap="round"/>
        <path d="M14 16.5c.5.8 1.2 1.2 2 .9" stroke="#F7DF1E" stroke-width="1.4" stroke-linecap="round"/>
        <path d="M13 13.5c0-1.8 3.5-2 3.5 0 0 1-1 1.5-2 2s-1.5.8-1.5 1.5" stroke="#F7DF1E" stroke-width="1.3" stroke-linecap="round"/>
      </svg>`,
    },
    {
      name: 'TypeScript',
      bg: '#001a2e',
      border: '#3178C6',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#3178C6" fill-opacity="0.2" stroke="#3178C6" stroke-width="1.2"/>
        <path d="M5 9h14M10 9v8" stroke="#3178C6" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M14 12.5c.3-.5.9-.8 1.5-.8 1 0 1.5.7 1.5 1.5 0 .6-.4 1.1-1 1.4l-1 .6c-.5.3-.8.7-.8 1.3" stroke="#3178C6" stroke-width="1.3" stroke-linecap="round"/>
      </svg>`,
    },
    {
      name: 'SQL',
      bg: '#001a2e',
      border: '#00758F',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="7" rx="7" ry="3" stroke="#00758F" stroke-width="1.3" fill="#00758F" fill-opacity="0.15"/>
        <path d="M5 7v5c0 1.66 3.13 3 7 3s7-1.34 7-3V7" stroke="#00758F" stroke-width="1.3"/>
        <path d="M5 12v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" stroke="#00758F" stroke-width="1.3"/>
      </svg>`,
    },
    {
      name: 'HTML5',
      bg: '#1a0900',
      border: '#E34F26',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#E34F26" fill-opacity="0.15" stroke="#E34F26" stroke-width="1.2"/>
        <path d="M8 8h8l-.6 6.5L12 16l-3.4-1.5L8.2 11H15" stroke="#E34F26" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      name: 'CSS3',
      bg: '#001020',
      border: '#264DE4',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#264DE4" fill-opacity="0.15" stroke="#264DE4" stroke-width="1.2"/>
        <path d="M16 8H8l.3 3H15.5l-.4 4-3.1.9-3.1-.9-.2-2H10l.1 1 1.9.5 1.9-.5.2-2.5H8.5" stroke="#264DE4" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
  ],
  Frameworks: [
    {
      name: 'Spring Boot',
      bg: '#002200',
      border: '#6DB33F',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3L4 7v10l8 4 8-4V7l-8-4z" fill="#6DB33F" fill-opacity="0.15" stroke="#6DB33F" stroke-width="1.2"/>
        <circle cx="12" cy="12" r="3" fill="#6DB33F" fill-opacity="0.5"/>
        <circle cx="12" cy="12" r="1.5" fill="#6DB33F"/>
      </svg>`,
    },
    {
      name: 'React',
      bg: '#001a20',
      border: '#61DAFB',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" stroke-width="1.3" transform="rotate(0 12 12)"/>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" stroke-width="1.3" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" stroke-width="1.3" transform="rotate(120 12 12)"/>
        <circle cx="12" cy="12" r="1.5" fill="#61DAFB"/>
      </svg>`,
    },
    {
      name: 'Node.js',
      bg: '#001a00',
      border: '#5FA04E',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3l8.66 5v10L12 22l-8.66-5V8L12 3z" fill="#5FA04E" fill-opacity="0.15" stroke="#5FA04E" stroke-width="1.2"/>
        <path d="M12 8v8M9 13l3 3 3-3" stroke="#5FA04E" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      name: 'Hibernate',
      bg: '#1a0d00',
      border: '#BCAE79',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="3" fill="#BCAE79" fill-opacity="0.15" stroke="#BCAE79" stroke-width="1.2"/>
        <path d="M8 12h8M8 8h8M8 16h5" stroke="#BCAE79" stroke-width="1.3" stroke-linecap="round"/>
      </svg>`,
    },
    {
      name: 'REST API',
      bg: '#0a001a',
      border: '#A78BFA',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <circle cx="5" cy="12" r="2.5" stroke="#A78BFA" stroke-width="1.2" fill="#A78BFA" fill-opacity="0.15"/>
        <circle cx="19" cy="12" r="2.5" stroke="#A78BFA" stroke-width="1.2" fill="#A78BFA" fill-opacity="0.15"/>
        <path d="M7.5 12h9M14 9l3 3-3 3" stroke="#A78BFA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      name: 'Microservices',
      bg: '#001020',
      border: '#38BDF8',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="5" r="2.5" fill="#38BDF8" fill-opacity="0.2" stroke="#38BDF8" stroke-width="1.2"/>
        <circle cx="5" cy="17" r="2.5" fill="#38BDF8" fill-opacity="0.2" stroke="#38BDF8" stroke-width="1.2"/>
        <circle cx="19" cy="17" r="2.5" fill="#38BDF8" fill-opacity="0.2" stroke="#38BDF8" stroke-width="1.2"/>
        <path d="M12 7.5v4M12 11.5l-5.5 3.5M12 11.5l5.5 3.5" stroke="#38BDF8" stroke-width="1.2"/>
      </svg>`,
    },
  ],
  Databases: [
    {
      name: 'MySQL',
      bg: '#001520',
      border: '#00758F',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="7" rx="7" ry="3" stroke="#00758F" stroke-width="1.3" fill="#00758F" fill-opacity="0.15"/>
        <path d="M5 7v5c0 1.66 3.13 3 7 3s7-1.34 7-3V7" stroke="#00758F" stroke-width="1.3"/>
        <path d="M5 12v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" stroke="#00758F" stroke-width="1.3"/>
      </svg>`,
    },
    {
      name: 'PostgreSQL',
      bg: '#001530',
      border: '#336791',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="8" rx="6" ry="3" stroke="#336791" stroke-width="1.3" fill="#336791" fill-opacity="0.15"/>
        <path d="M6 8v8c0 1.66 2.69 3 6 3s6-1.34 6-3V8" stroke="#336791" stroke-width="1.3"/>
        <path d="M18 10c1 0 2 .5 2 2s-1 2-2 2" stroke="#336791" stroke-width="1.2"/>
      </svg>`,
    },
    {
      name: 'MongoDB',
      bg: '#001500',
      border: '#47A248',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3s-6 7.5-6 12a6 6 0 0012 0c0-4.5-6-12-6-12z" fill="#47A248" fill-opacity="0.15" stroke="#47A248" stroke-width="1.3"/>
        <path d="M12 5v14" stroke="#47A248" stroke-width="1.3" stroke-linecap="round"/>
      </svg>`,
    },
    {
      name: 'Firebase',
      bg: '#1a1000',
      border: '#FFCA28',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <path d="M5 20l3.5-10 3 5 2-8L19 20H5z" fill="#FFCA28" fill-opacity="0.15" stroke="#FFCA28" stroke-width="1.2" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      name: 'Redis',
      bg: '#1a0000',
      border: '#DC382D',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="9" rx="7" ry="3" fill="#DC382D" fill-opacity="0.15" stroke="#DC382D" stroke-width="1.3"/>
        <path d="M5 9v6c0 1.66 3.13 3 7 3s7-1.34 7-3V9" stroke="#DC382D" stroke-width="1.3"/>
      </svg>`,
    },
  ],
  'Tools & Cloud': [
    {
      name: 'Docker',
      bg: '#001228',
      border: '#2496ED',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="4" height="4" rx="1" fill="#2496ED" fill-opacity="0.2" stroke="#2496ED" stroke-width="1.2"/>
        <rect x="8" y="11" width="4" height="4" rx="1" fill="#2496ED" fill-opacity="0.2" stroke="#2496ED" stroke-width="1.2"/>
        <rect x="13" y="11" width="4" height="4" rx="1" fill="#2496ED" fill-opacity="0.2" stroke="#2496ED" stroke-width="1.2"/>
        <rect x="8" y="6" width="4" height="4" rx="1" fill="#2496ED" fill-opacity="0.2" stroke="#2496ED" stroke-width="1.2"/>
        <path d="M2 16.5c2.5 1.5 12 1.5 16-1" stroke="#2496ED" stroke-width="1.2" stroke-linecap="round"/>
      </svg>`,
    },
    {
      name: 'Kubernetes',
      bg: '#001028',
      border: '#326CE5',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" fill="#326CE5" fill-opacity="0.1" stroke="#326CE5" stroke-width="1.2"/>
        <circle cx="12" cy="12" r="2" fill="#326CE5"/>
        <path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M6.3 17.7l2.8-2.8M14.9 9.1l2.8-2.8" stroke="#326CE5" stroke-width="1.2" stroke-linecap="round"/>
      </svg>`,
    },
    {
      name: 'Git',
      bg: '#1a0900',
      border: '#F05032',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3l9 9-9 9-9-9 9-9z" fill="#F05032" fill-opacity="0.15" stroke="#F05032" stroke-width="1.2"/>
        <circle cx="12" cy="12" r="2" fill="#F05032"/>
      </svg>`,
    },
    {
      name: 'AWS',
      bg: '#100800',
      border: '#FF9900',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <path d="M6 15s-2-1-2-3 2-3 2-3" stroke="#FF9900" stroke-width="1.3" stroke-linecap="round"/>
        <path d="M18 15s2-1 2-3-2-3-2-3" stroke="#FF9900" stroke-width="1.3" stroke-linecap="round"/>
        <path d="M7 12c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#FF9900" stroke-width="1.3" stroke-linecap="round"/>
        <path d="M7 16l-2 2h14l-2-2" stroke="#FF9900" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      name: 'Linux',
      bg: '#0d0d00',
      border: '#FCC624',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="5" fill="#FCC624" fill-opacity="0.15" stroke="#FCC624" stroke-width="1.2"/>
        <circle cx="10" cy="7" r="0.8" fill="#FCC624"/>
        <circle cx="14" cy="7" r="0.8" fill="#FCC624"/>
        <path d="M10 10s.5 1 2 1 2-1 2-1M9 13l-2 5h10l-2-5" stroke="#FCC624" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      name: 'CI/CD',
      bg: '#0d0020',
      border: '#9B59B6',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#9B59B6" stroke-width="1.2" fill="#9B59B6" fill-opacity="0.1" stroke-dasharray="4 2"/>
        <path d="M8 12l3 3 5-5" stroke="#9B59B6" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
  ],
  Others: [
    {
      name: 'Socket.io',
      bg: '#0a0a0a',
      border: '#aaaaaa',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="#aaa" stroke-width="1.2" fill="#aaa" fill-opacity="0.08"/>
        <path d="M8 10l4-4 4 8-4 4-4-8z" fill="#aaa" fill-opacity="0.3" stroke="#aaa" stroke-width="1"/>
      </svg>`,
    },
    {
      name: 'Google Maps',
      bg: '#001a00',
      border: '#34A853',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="10" r="4" fill="#34A853" fill-opacity="0.15" stroke="#4285F4" stroke-width="1.2"/>
        <path d="M12 14c0 0-5 6-5 8h10c0-2-5-8-5-8z" fill="#EA4335" fill-opacity="0.15" stroke="#EA4335" stroke-width="1.1"/>
        <circle cx="12" cy="10" r="1.5" fill="#34A853"/>
      </svg>`,
    },
    {
      name: 'Postman',
      bg: '#1a0a00',
      border: '#FF6C37',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" fill="#FF6C37" fill-opacity="0.15" stroke="#FF6C37" stroke-width="1.2"/>
        <path d="M8 12h8M14 9l3 3-3 3" stroke="#FF6C37" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      name: 'Maven',
      bg: '#1a0005',
      border: '#C71A36',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="3" fill="#C71A36" fill-opacity="0.12" stroke="#C71A36" stroke-width="1.2"/>
        <path d="M8 16V8l4 6 4-6v8" stroke="#C71A36" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      name: 'IntelliJ',
      bg: '#0a001a',
      border: '#FE2857',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="url(#ij)" fill-opacity="0.3" stroke="#FE2857" stroke-width="1.1"/>
        <defs><linearGradient id="ij" x1="3" y1="3" x2="21" y2="21"><stop stop-color="#FE2857"/><stop offset="1" stop-color="#9F0DFF"/></linearGradient></defs>
        <rect x="6" y="17" width="7" height="1.5" rx="0.5" fill="#FE2857"/>
        <path d="M8 7v7M6 7h4" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
      </svg>`,
    },
    {
      name: 'VS Code',
      bg: '#001530',
      border: '#007ACC',
      icon: `<svg viewBox="0 0 24 24" fill="none">
        <path d="M17 3l4 3v12l-4 3L3 14.5v-5L17 3z" fill="#007ACC" fill-opacity="0.15" stroke="#007ACC" stroke-width="1.2"/>
        <path d="M17 3v18M3 9.5l9 5" stroke="#007ACC" stroke-width="1.2" stroke-linecap="round"/>
      </svg>`,
    },
  ],
}
