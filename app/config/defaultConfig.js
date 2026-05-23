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
      description: 'The official open-source core framework powering the Cortex Discord ecosystem. A highly scalable, modular bot engine with built-in command handlers, events manager, and seamless AI integrations.',
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
    }
  ]
};
