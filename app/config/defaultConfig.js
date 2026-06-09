export const defaultConfig = {
  personal: {
    firstName: "Sejed",
    lastName: "Trabelsi",
    domain: "sejed.dev",
    role: "Full Stack Developer",
    location: "Mannouba, Tunisia",
    avatar: "/code-icon.png",
    bioShort: "Building high-performance automation engines, scalable Discord ecosystems, and interactive web experiences.",
    story: [
      "I'm **Sejed Trabelsi** — a full-stack developer from Tunisia who started coding at 11. What began as curiosity quickly turned into an obsession with building things that matter.",
      "Over the past 6+ years, I've gone deep into **Node.js** and **Next.js**, building everything from high-performance Discord bots serving thousands of users to full-stack web applications with complex backends.",
      "I believe in clean architecture, scalable systems, and shipping fast. Currently studying while continuing to push the boundaries of what I can build."
    ],
    themeColor: "indigo", // indigo, purple, cyan, green, red
    themeFont: "outfit", // outfit, fira-code, inter
    backgroundFx: "particles", // particles, nebulas, static
    themeMode: "dark", // dark, light
    showPalestine: true,
    showTestimonials: true
  },
  stats: [
    { value: "2.4M+", label: "Total Bot Users Served", icon: "👥" },
    { value: "1.8K+", label: "Discord Servers Managed", icon: "🌐" },
    { value: "120K+", label: "Lines of Code Compiled", icon: "💻" },
    { value: "99.99%", label: "Average Uptime Reliability", icon: "⚡" }
  ],
  socials: [
    { name: 'Email', value: 'support@sejed.dev', href: 'mailto:support@sejed.dev', color: '#6366f1' },
    { name: 'GitHub', value: '@SEJED-DEV', href: 'https://github.com/SEJED-DEV', color: '#8b5cf6' },
    { name: 'Discord', value: 'sejed.dev (Click to Copy ID)', href: 'https://discord.com/users/985444871722631199', color: '#5865f2' },
    { name: 'Instagram', value: '@http.sejed.official', href: 'https://instagram.com/http.sejed.official', color: '#e1306c' },
    { name: 'WhatsApp', value: '+216 94 155 000', href: 'https://wa.me/21694155000', color: '#25d366' }
  ],
  timeline: [
    { 
      year: '2015 - 2021', 
      label: 'Primary School at Hannibal',
      emoji: '🎒',
      desc: 'Completed my primary education (1ère to 6ème) at Hannibal. This is where my love for math, structural logic, and problem-solving was originally sparked.'
    },
    { 
      year: '2020', 
      label: 'First Line of Code (Age 11)',
      emoji: '💻',
      desc: 'Wrote my very first scripting code in Lua! Discovered how powerful code is to create and automate experiences, which led me down the rabbit hole of computer science.'
    },
    { 
      year: '2021 - 2024', 
      label: 'Prep School at Hannibal',
      emoji: '🏫',
      desc: 'Excelled in advanced mathematics and computer studies. Formulated my architectural designs and began constructing the blueprint of CortexBot.'
    },
    { 
      year: '2024 - 2026', 
      label: 'Lycée Pilote de la Manouba',
      emoji: '🎓',
      desc: 'Admitted to the highly competitive and prestigious Lycée Pilote (Pioneer School), reserved for the country\'s top academic minds. Continuing to balance elite academics while leading core development at Cortex.'
    }
  ],
  skills: [
    {
      title: 'Languages',
      icon: '{ }',
      items: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3 / SCSS', 'Lua']
    },
    {
      title: 'Frontend',
      icon: '◆',
      items: ['Next.js', 'React', 'Framer Motion', 'CSS Modules', 'Responsive Design', 'Vercel']
    },
    {
      title: 'Backend',
      icon: '⚙',
      items: ['Node.js', 'Express.js', 'Discord.js', 'REST APIs', 'WebSockets', 'Nix']
    },
    {
      title: 'Database',
      icon: '◉',
      items: ['MongoDB', 'SQLite', 'PostgreSQL', 'Mongoose', 'JSON Storage']
    },
    {
      title: 'DevOps & Tools',
      icon: '▲',
      items: ['Git & GitHub', 'Docker', 'Linux / VPS', 'CI/CD', 'Cloudflare']
    },
    {
      title: 'AI & APIs',
      icon: '✦',
      items: ['Gemini API', 'OpenAI / GPT', 'Groq (Llama)', 'PRC / ERLC API', 'Webhooks']
    }
  ],
  projects: [
    {
      title: 'Sejed Portfolio',
      description: 'A high-performance, glassmorphic Next.js developer portfolio featuring zero-render cursor tracking and fully customizable design.',
      tags: ['Next.js', 'React', 'Framer Motion', 'Open Source'],
      color: 'purple',
      emoji: '🌌',
      category: 'web',
      github: 'https://github.com/SEJED-DEV/sejed-portfolio',
      live: 'https://sejed.dev',
      featured: true
    },
    {
      title: 'Nova ERLC Manager',
      description: 'The most popular ER:LC management bot — advanced session management, staff tracking, automated voting, and live PRC API dashboards.',
      tags: ['JavaScript', 'Discord.js', 'PRC API'],
      color: 'indigo',
      emoji: '🌟',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/Nova-ERLC-Manager',
      live: null,
      featured: true
    },
    {
      title: 'SGL Audit',
      description: 'A professional corporate website for SGL Audit Expertise, a Tunisian auditing and accounting firm. Built with TypeScript and Next.js.',
      tags: ['TypeScript', 'Next.js', 'Corporate'],
      color: 'indigo',
      emoji: '📊',
      category: 'web',
      github: 'https://github.com/SEJED-DEV/SGL-Audit',
      live: 'https://sglaudit.com',
      featured: true
    },
    {
      title: 'Cortex QuranBot',
      description: 'A beautifully designed Discord bot for Quran recitation, ayah lookup, and daily Islamic reminders with multi-language embed formatting.',
      tags: ['Node.js', 'Discord.js', 'REST API'],
      color: 'purple',
      emoji: '📖',
      category: 'bot',
      github: null,
      live: 'https://quran.cortexhq.net',
      featured: true
    },
    {
      title: 'Vectra Mod',
      description: 'Advanced multi-purpose Discord moderation infrastructure with an interactive V2 staff panel. MongoDB-backed, permission-isolated, and built for scalable communities.',
      tags: ['Node.js', 'Discord.js', 'MongoDB', 'Moderation'],
      color: 'purple',
      emoji: '🛡️',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/Vectra-Mod',
      live: null
    },
    {
      title: 'CortexHQ',
      description: 'The central hub and landing page for the Cortex ecosystem. A sleek, modern website showcasing all Cortex services and products.',
      tags: ['Next.js', 'Web Design', 'Vercel'],
      color: 'indigo',
      emoji: '🌐',
      category: 'web',
      github: null,
      live: 'https://cortexhq.net'
    },
    {
      title: 'Cortex',
      description: 'A feature-rich multipurpose Discord bot with deep AI integration. Handles moderation, utility, fun commands, and intelligent conversational AI.',
      tags: ['Node.js', 'Discord.js', 'AI', 'MongoDB'],
      color: 'indigo',
      emoji: '🧠',
      category: 'bot',
      github: null,
      live: 'https://cortex.cortexhq.net'
    },
    {
      title: 'Cortex Core',
      description: 'An open-source core framework powering the Cortex Discord ecosystem. A scalable, modular bot engine with built-in command handlers and AI integrations.',
      tags: ['Node.js', 'Discord.js', 'Open Source', 'Framework'],
      color: 'indigo',
      emoji: '🤖',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/cortex-core',
      live: null
    },
    {
      title: 'Cortex Modmail',
      description: 'A dedicated modmail system for Cortex with session persistence, automated transcripts, staff assignment, and inline attachment rendering.',
      tags: ['Node.js', 'Discord.js', 'SQLite'],
      color: 'cyan',
      emoji: '📨',
      category: 'bot',
      github: null,
      live: 'https://modmail.cortexhq.net'
    },
    {
      title: 'Vortex',
      description: 'A state-of-the-art Discord bot that automates server architecture through interactive AI-driven dialogues. Built with TypeScript.',
      tags: ['TypeScript', 'Discord.js', 'AI'],
      color: 'purple',
      emoji: '🌀',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/vortex',
      live: null
    },
    {
      title: 'Vanguard',
      description: 'Industrial-grade moderation solution with a custom SQLite caching layer and privacy-first restricted global logging.',
      tags: ['JavaScript', 'Discord.js', 'SQLite'],
      color: 'cyan',
      emoji: '🛡️',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/Vanguard-discord-bot',
      live: null
    },
    {
      title: 'Pickle Infra',
      description: 'The definitive Discord utility for Roblox sellers. Professional ticketing, automated entries, and secure sales tracking with 0% packet loss.',
      tags: ['JavaScript', 'Discord.js', 'Vercel'],
      color: 'purple',
      emoji: '🥒',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/pickle-infra',
      live: 'https://pickle-infra.vercel.app'
    },
    {
      title: 'ERLC Utility Bot',
      description: 'Enterprise-grade Discord utility bot for ER:LC Private Servers with modular architecture, SQLite persistence, and ERLC API V2 optimizations.',
      tags: ['JavaScript', 'Discord.js', 'SQLite', 'ERLC API'],
      color: 'indigo',
      emoji: '⚙️',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/ERLC-UTILITY-BOT',
      live: null
    },
    {
      title: 'Discord ModMail Bot',
      description: 'Advanced Modmail infrastructure with session persistence, automated transcripts, and inline attachment rendering. Built with Python.',
      tags: ['Python', 'Discord.py', 'Async'],
      color: 'cyan',
      emoji: '📬',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/Discord-ModMail-Bot',
      live: null
    },
    {
      title: 'Digital Akhi Bot',
      description: 'A production-grade, secure Discord bot for Islamic communities featuring prayer times, Quran recitation, and community moderation.',
      tags: ['TypeScript', 'Discord.js', 'Islamic'],
      color: 'indigo',
      emoji: '🕌',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/digital-akhi-bot',
      live: 'https://digital-akhi-bot.vercel.app/'
    },
    {
      title: 'Nexus Transcripts',
      description: 'A premium HTML transcript generation library for Discord channels with interactive components and sleek UI.',
      tags: ['HTML', 'Discord.js', 'Library'],
      color: 'cyan',
      emoji: '📜',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/nexus-transcripts',
      live: 'https://nexus-transcripts.pages.dev/',
      featured: true
    },
    {
      title: 'Community Zone TN Bot',
      description: 'A Discord bot for the Zone TN Tunisian developer community, fostering collaboration and resource sharing.',
      tags: ['JavaScript', 'Discord.js', 'Community'],
      color: 'purple',
      emoji: '🤝',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/Community-Zone-TN-Bot',
      live: null
    },
    {
      title: 'Colorado State Roleplay',
      description: 'A specialized Discord bot for managing Colorado State RP communities with automated session tracking and staff tools.',
      tags: ['JavaScript', 'Discord.js', 'Roleplay'],
      color: 'purple',
      emoji: '🏔️',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/Colorado-State-Roleplay',
      live: null
    },
    {
      title: 'OpenSyntax Academy',
      description: 'An online learning platform built with TypeScript and Next.js featuring interactive coding lessons and structured curriculum.',
      tags: ['TypeScript', 'Next.js', 'Vercel'],
      color: 'purple',
      emoji: '📚',
      category: 'web',
      github: 'https://github.com/SEJED-DEV/opensyntax-academy',
      live: 'https://opensyntax-academy.vercel.app/'
    },
    {
      title: 'DevRegistry',
      description: 'A universal discovery platform where creators can submit any digital product — from npm packages to Discord bots and tools.',
      tags: ['TypeScript', 'Next.js', 'Discovery'],
      color: 'purple',
      emoji: '📦',
      category: 'web',
      github: 'https://github.com/SEJED-DEV/DevRegistry',
      live: null
    },
    {
      title: 'CodeXTN',
      description: 'A platform for aspiring coders — daily challenges, coding competitions, and project building. Compete for rankings and earn recognition.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      color: 'cyan',
      emoji: '🏆',
      category: 'web',
      github: 'https://github.com/TSSEJED/CodeXTN',
      live: null
    },
    {
      title: 'Bots Studio',
      description: 'A web dashboard for managing and monitoring Discord bots. Built with TypeScript and deployed on Vercel.',
      tags: ['TypeScript', 'Next.js', 'Vercel'],
      color: 'purple',
      emoji: '🎛️',
      category: 'web',
      github: 'https://github.com/TSSEJED/bots-studio',
      live: 'https://bots-studio.vercel.app'
    },
    {
      title: 'Zone-TN',
      description: 'A community-focused project for Tunisian developers and creators to collaborate and share resources.',
      tags: ['Community', 'Tunisia', 'Resources'],
      color: 'indigo',
      emoji: '🇹🇳',
      category: 'web',
      github: 'https://github.com/SEJED-DEV/Zone-TN',
      live: null
    },
    {
      title: 'Develeport Repository',
      description: 'The core repository for the Develeport ecosystem, housing essential tools and documentation for developers.',
      tags: ['Core', 'Ecosystem', 'Documentation'],
      color: 'indigo',
      emoji: '🏗️',
      category: 'web',
      github: 'https://github.com/SEJED-DEV/The-Develeport-Repository',
      live: null
    },
    {
      title: 'Red Crescent Platform',
      description: 'A private social media platform built for the IFRC and ICRC (Red Cross/Red Crescent). Secure communication for humanitarian workers.',
      tags: ['Full Stack', 'Private', 'Humanitarian'],
      color: 'indigo',
      emoji: '🏥',
      category: 'web',
      github: null,
      live: null,
      isPrivate: true
    }
  ]
};
