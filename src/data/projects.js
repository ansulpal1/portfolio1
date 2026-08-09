// =============================================
// PROJECTS DATA
// Edit this file to add, remove, or update
// your portfolio projects.
// =============================================

export const projects = [
  {
    id: 'proj-1',
    mainPage: true,
    featured: true,
    
    title: 'Ground Personnel Tracking System',
    description:
      'A robust real-time tracking platform designed for monitoring ground personnel using GPS telemetry. Helps organizations improve workforce efficiency, ensure safety, and automate reporting.',
    techStack: ['Node.js', 'Express.js','React-native', 'React', 'MongoDB', 'Socket.io', 'Google Maps API','tailwindcss','Redux','JWT','Google-auth'],
    links: {
      live: '#',
      github: '#',
    },
    previewImage: "https://thumbs.dreamstime.com/b/artificial-intelligence-ai-research-robot-cyborg-development-future-people-living-digital-data-mining-machine-learning-171270756.jpg", // Add path like '/projects/gpts-preview.png' if available
  },
  {
    id: 'proj-2',
    mainPage: true,
    featured: true,
    badge: null,
    title: 'Inventory Management System',
    description:
      'A full-stack inventory management system with role-based access, stock tracking, and automated low-stock alerts.',
    techStack: ['Node.js', 'Express.js', 'React', 'MongoDB'],
    links: {
      live: '#',
      github: '#',
    },
    previewImage: null,
  },
  {
    id: 'proj-4',
    mainPage: true,
    featured: true,
    title: 'Servixooo CRM',
    description: 'A complete CRM solution for managing clients, projects, tasks, invoices and team collaboration.',
    techStack:['Node.js', 'Express.js','React-native', 'React', 'MongoDB', 'Socket.io', 'Google Maps API','tailwindcss','Redux','JWT','Google-auth'],
    links: { live: '#', github: '#' },
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'proj-5',
    mainPage: true,
    featured: true,
    title: 'AI Attendance System',
    description: 'AI-powered facial recognition attendance system with real-time report generation.',
    techStack: ['Python', 'OpenCV', 'MySQL'],
    links: { live: '#', github: '#' },
    previewImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'proj-6',
    mainPage: false,
    featured: true,
    title: 'College Management System',
    description: 'Web application to manage student records, faculty, courses and examinations.',
    techStack: ['Spring Boot', 'MySQL', 'Thymeleaf', 'Bootstrap', 'JPA', 'Hibernate', 'Spring Security', 'JWT', 'React','Socket.io', 'Google Maps API','tailwindcss','Redux','JWT','Google-auth'],
    links: { live: '#', github: '#' },
    previewImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'proj-7',
    mainPage: false,
    featured: false,
    badge: 'Enterprise Solution',
    title: 'Expense Tracker',
    description: 'Track income, expenses and generate insightful reports with beautiful visualizations.',
    techStack: ['React Native', 'SQLite', 'Charts', 'Redux', 'TailwindCSS', 'JWT', 'Google-auth', 'Socket.io', 'Google Maps API',],
    links: { live: '/link', github: '/hi' },
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
  },
]

