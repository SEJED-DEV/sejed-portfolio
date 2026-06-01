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
    showSimulator: true,
    showTestimonials: true
  },
  stats: [
    { value: "2.4M+", label: "Total Bot Users Served", icon: "👥" },
    { value: "1.8K+", label: "Discord Servers Managed", icon: "🌐" },
    { value: "120K+", label: "Lines of Code Compiled", icon: "💻" },
    { value: "99.99%", label: "Average Uptime Reliability", icon: "⚡" }
  ],
  socials: [
    { name: 'Email', value: 'sejed.dev@gmail.com', href: 'mailto:sejed.dev@gmail.com', color: '#6366f1' },
    { name: 'GitHub', value: '@SEJED-DEV', href: 'https://github.com/SEJED-DEV', color: '#8b5cf6' },
    { name: 'Discord', value: 'sejed.dev (Click to Copy ID)', href: 'https://discord.com/users/985444871722631199', color: '#5865f2' },
    { name: 'Instagram', value: '@http.sejed.official', href: 'https://instagram.com/http.sejed.official', color: '#e1306c' },
    { name: 'WhatsApp', value: '+216 94 155 000', href: 'https://wa.me/21694155000', color: '#25d366' }
  ],
  discordBot: {
    botName: "CortexBot",
    botAvatar: "🤖",
    welcomeMessage: "Hello! I am **CortexBot**, a modular Discord automation engine designed by **Sejed**. Type `/` or click one of the preset commands below to see what I can do!"
  },
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
      year: '2024 - Present', 
      label: 'Lycée Pilote de la Manouba',
      emoji: '🎓',
      desc: 'Admitted to the highly competitive and prestigious Lycée Pilote (Pioneer School), reserved for the country\'s top academic minds. Continuing to balance elite academics while leading core development at Cortex.'
    }
  ],
  skills: [
    {
      title: 'Languages',
      icon: '{ }',
      items: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3 / SCSS', level: 90 },
        { name: 'Lua', level: 65 }
      ]
    },
    {
      title: 'Frontend',
      icon: '◆',
      items: [
        { name: 'Next.js', level: 90 },
        { name: 'React', level: 88 },
        { name: 'Framer Motion', level: 78 },
        { name: 'CSS Modules', level: 85 },
        { name: 'Responsive Design', level: 92 },
        { name: 'Vercel', level: 88 }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙',
      items: [
        { name: 'Node.js', level: 95 },
        { name: 'Express.js', level: 88 },
        { name: 'Discord.js', level: 95 },
        { name: 'REST APIs', level: 90 },
        { name: 'WebSockets', level: 78 },
        { name: 'Nix', level: 60 }
      ]
    }
  ],
  projects: [
    {
      title: 'Sejed Portfolio',
      description: 'The source code of this portfolio! A premium, cosmic dark-themed glassmorphic website built using Next.js, React, Framer Motion, and custom CSS modules. Fully open-source and customizable.',
      tags: ['Next.js', 'React', 'Framer Motion', 'Open Source'],
      color: 'purple',
      emoji: '🌌',
      category: 'web',
      github: 'https://github.com/SEJED-DEV/sejed-portfolio',
      live: 'https://sejed.dev'
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
      description: 'A feature-rich multipurpose Discord bot with deep AI integration. Handles moderation, utility, fun commands, and intelligent conversational AI across multiple servers.',
      tags: ['Node.js', 'Discord.js', 'AI Integration', 'MongoDB'],
      color: 'indigo',
      emoji: '🧠',
      category: 'bot',
      github: null,
      live: 'https://cortex.cortexhq.net'
    },
    {
      title: 'Cortex Core',
      description: 'An open-source core framework used to power the Cortex Discord ecosystem. A highly scalable, modular bot engine with built-in command handlers, events manager, and seamless AI integrations.',
      tags: ['Node.js', 'Discord.js', 'Open Source', 'Framework'],
      color: 'indigo',
      emoji: '🤖',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/cortex-core',
      live: null
    },
    {
      title: 'Cortex Modmail',
      description: 'A dedicated modmail system companion for Cortex. Features session persistence, automated transcripts, staff assignment, and inline attachment rendering.',
      tags: ['Node.js', 'Discord.js', 'SQLite'],
      color: 'cyan',
      emoji: '📨',
      category: 'bot',
      github: null,
      live: 'https://modmail.cortexhq.net'
    },
    {
      title: 'Cortex QuranBot',
      description: 'A beautifully designed Discord bot for Quran recitation, ayah lookup, and daily Islamic reminders. Multi-language support with elegant embed formatting.',
      tags: ['Node.js', 'Discord.js', 'REST API'],
      color: 'purple',
      emoji: '📖',
      category: 'bot',
      github: null,
      live: 'https://quran.cortexhq.net'
    },
    {
      title: 'Vortex',
      description: 'A state-of-the-art Discord bot that automates server architecture through interactive AI-driven dialogues. Built with TypeScript for type safety and reliability.',
      tags: ['TypeScript', 'Discord.js', 'AI'],
      color: 'purple',
      emoji: '🌀',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/vortex',
      live: null
    },
    {
      title: 'Nova ERLC Manager',
      description: 'A premium Discord bot for ER:LC Private Servers with advanced session management, staff tracking, automated vote systems, and live server dashboards via PRC API.',
      tags: ['JavaScript', 'Discord.js', 'PRC API'],
      color: 'indigo',
      emoji: '🌟',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/Nova-ERLC-Manager',
      live: null
    },
    {
      title: 'Vanguard',
      description: 'Industrial-grade moderation solution for Discord. Features custom SQLite caching layer and ensures user privacy through restricted global logging.',
      tags: ['JavaScript', 'Discord.js', 'SQLite'],
      color: 'cyan',
      emoji: '🛡️',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/Vanguard-discord-bot',
      live: null
    },
    {
      title: 'Pickle Infra',
      description: 'The definitive Discord utility for Roblox sellers. Professional ticketing, automated entries, and secure sales tracking built for maximum reliability.',
      tags: ['JavaScript', 'Discord.js', 'Vercel'],
      color: 'purple',
      emoji: '🥒',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/pickle-infra',
      live: 'https://pickle-infra.vercel.app'
    },
    {
      title: 'ERLC Utility Bot',
      description: 'Enterprise-grade Discord utility bot for ER:LC Private Servers. Modular architecture with local SQLite persistence and advanced ERLC API V2 optimizations.',
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
      title: 'OpenSyntax Academy',
      description: 'An online learning platform built with TypeScript and Next.js. Features interactive coding lessons and structured curriculum for aspiring developers.',
      tags: ['TypeScript', 'Next.js', 'Vercel'],
      color: 'purple',
      emoji: '📚',
      category: 'web',
      github: 'https://github.com/SEJED-DEV/opensyntax-academy',
      live: 'https://opensyntax-academy.vercel.app/'
    },
    {
      title: 'Red Crescent Platform',
      description: 'A private social media platform built for the IFRC and ICRC (Red Cross/Red Crescent). Secure communication and collaboration for humanitarian workers.',
      tags: ['Full Stack', 'Private', 'Humanitarian'],
      color: 'indigo',
      emoji: '🏥',
      category: 'web',
      github: null,
      live: null,
      isPrivate: true
    },
    {
      title: 'CodeXTN',
      description: 'A platform for aspiring coders — daily challenges, coding competitions, and project building. Users compete for rankings and earn recognition.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      color: 'cyan',
      emoji: '🏆',
      category: 'web',
      github: 'https://github.com/TSSEJED/CodeXTN',
      live: null
    },
    {
      title: 'Bots Studio',
      description: 'A web dashboard for managing and monitoring Discord bots. Built with TypeScript and deployed on Vercel for maximum performance.',
      tags: ['TypeScript', 'Next.js', 'Vercel'],
      color: 'purple',
      emoji: '🎛️',
      category: 'web',
      github: 'https://github.com/TSSEJED/bots-studio',
      live: 'https://bots-studio.vercel.app'
    },
    {
      title: 'SGL Audit Expertise',
      description: 'A private corporate website designed for SGL Audit Expertise — a Tunisian auditing and accounting firm. Clean, corporate layout with optimized security.',
      tags: ['HTML', 'CSS', 'Private'],
      color: 'indigo',
      emoji: '📊',
      category: 'web',
      github: null,
      live: null,
      isPrivate: true
    },
    {
      title: 'DevRegistry',
      description: 'A universal discovery platform where creators can submit ANY digital product - from npm packages to Discord bots and tools.',
      tags: ['TypeScript', 'Next.js', 'Discovery'],
      color: 'purple',
      emoji: '📦',
      category: 'web',
      github: 'https://github.com/SEJED-DEV/DevRegistry',
      live: null
    },
    {
      title: 'Digital Akhi Bot',
      description: 'A production-grade, secure Discord bot designed for Islamic communities. Featuring prayer times, Quran, and community moderation.',
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
      live: 'https://nexus-transcripts.pages.dev/'
    },
    {
      title: 'Colorado State Roleplay',
      description: 'A specialized Discord bot for managing Colorado State RP communities, featuring automated session tracking and staff tools.',
      tags: ['JavaScript', 'Discord.js', 'Roleplay'],
      color: 'purple',
      emoji: '🏔️',
      category: 'bot',
      github: 'https://github.com/SEJED-DEV/Colorado-State-Roleplay',
      live: null
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
      color: 'cyan',
      emoji: '🏗️',
      category: 'web',
      github: 'https://github.com/SEJED-DEV/The-Develeport-Repository',
      live: null
    }
  ]
};
