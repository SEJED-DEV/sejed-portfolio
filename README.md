# 🌌 sejed-portfolio — Cosmic Developer Portfolio (v2.0)

![License](https://img.shields.io/badge/License-MIT-green)

A state-of-the-art, premium developer portfolio website designed for full-stack developers, software engineers, and creators. Featuring an immersive cosmic dark-themed, glassmorphic UI built using **Next.js**, **React**, **Framer Motion**, and **Vanilla CSS**.

This website is fully open-source and customizable via an advanced real-time Studio interface. Show off your projects, tech arsenal, professional journey, and contact information with fluid animations and premium typography.

---

## ✨ Cutting-Edge Features

- **🎨 Advanced Portfolio Studio (`/customize`) [BETA]:** A full-screen split-screen dashboard to dynamically construct your custom identity, configure Discord bot profiles, change fonts, and toggle physics engines in real-time before exporting your configuration!
- **🛸 Cosmic Dark Design:** A curated dark color scheme utilizing deep space purples, sleek indigos, and glowing cyans.
- **🖱️ PC Right-Click Custom Menu:** A gorgeous global Right-Click context menu for desktop users featuring smooth spring scales, target scrolling, theme indicators, and clipboard actions.
- **🤖 Discord Bot Simulator Playground:** An immersive simulated Discord Chat Console where visitors click presets or type slash commands (`/help`, `/status`, `/cortex`, `/palestine`) and watch custom rich embed cards render dynamically with typing state bubbles.
- **🎒 Interactive Academic Timeline:** A gamified vertical timeline where visitors click academic milestones (Hannibal Primary, Lycée Pilote, First script) to explore custom experience cards.
- **📈 Developer Metrics Stats Grid:** Numerical metrics highlighting your real-world achievements: 2.4M+ bot users, 1.8K+ active servers, and 6+ years coding experience.
- **💎 Premium Glassmorphism:** Subtle, backdrop-filtered cards with interactive hover effects and glowing gradients.
- **🇵🇸 Palestine Advocacy Resource Library:** A deeply respectful Solidarity section featuring a Mahmoud Darwish poetry quote card, direct medical relief actions (PRCS), and an expanding educational library of 3 detailed essays opening in custom spring-action modal overlays.
- **🇹🇳 🇵🇸 Vector Flag Assets:** Native inline SVG flag components for Palestine and Tunisia, ensuring crisp rendering across Windows, macOS, Android, and iOS with zero letter-code text fallbacks.
- **⚡ Smart Tech Arsenal Filters:** Clicking any individual tech skill badge instantly smooth-scrolls recruiters down to the projects section and filters items dynamically.
- **💬 Click-to-Copy Toast alerts:** Copying the Discord profile username fires a slide-up, glowing toast notification.
- **🌀 Zero-Render Cursor Trails:** Pointer halo glows are driven entirely by direct DOM `useRef` translate coordinates, bypassing React render cycles to maintain 144Hz performance at `0%` CPU overhead.
- **🚀 Circular Scroll-to-Top:** A floating button showing scroll completion via dynamic SVG progress rings.
- **⚡ SEO & Performance-Ready:** Built using Next.js App Router, custom optimized metadata icons, and highly modular architecture.

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Library:** React 19
- **Animations:** Framer Motion
- **Styles:** Vanilla CSS with CSS Modules
- **Fonts:** Google Fonts (Outfit, Fira Code)
- **Deployment:** Vercel

---

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/SEJED-DEV/sejed-portfolio.git
cd sejed-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for Production
```bash
npm run build
```

---

## 📂 Project Structure

```bash
sejed-portfolio/
├── app/
│   ├── components/            # Reusable UI components
│   │   ├── About.js           # Professional timeline explorer
│   │   ├── BotSimulator.js    # Interactive Discord terminal
│   │   ├── Contact.js         # Interactive social grid & toasts
│   │   ├── ContextMenu.js     # Custom PC Right-click menu
│   │   ├── Effects.js         # Zero-render canvas & cursor physics
│   │   ├── Flag.js            # Custom vector SVG flag component
│   │   ├── Hero.js            # Typewriter animation & CTA
│   │   ├── Navbar.js          # Fixed scroll-tracking navigation
│   │   ├── Palestine.js       # Solidarity advocacy library
│   │   ├── Projects.js        # Filterable projects grid
│   │   ├── Skills.js          # Interactive tech arsenal progress
│   │   ├── Stats.js           # Developer metrics stats cards
│   │   └── Testimonials.js    # Client reviews sliding panel
│   ├── globals.css            # Global CSS variables & layout utilities
│   ├── layout.js              # Global metadata and layouts
│   └── page.js                # Core landing page composition
├── public/                    # Assets and static icons
└── package.json               # Dependencies and scripts
```

---

## ✏️ Customization (No-Code Studio)

This portfolio is entirely driven by a centralized configuration matrix. 
1. Open the project in your browser.
2. Click the **Customize Portfolio** button in the bottom left, or navigate directly to `http://localhost:3000/customize`.
3. Use the **Split-Screen Studio** to dynamically update your name, stats, timeline, projects, fonts, and Discord simulator configurations!
4. Click **Download config.json** and replace the contents of `app/config/defaultConfig.js` with your exported configuration!

---

## 🤝 Contributions

**All components, profile customizations, and GitHub projects are completely Open for Contribution!** 
We welcome Pull Requests for new interactive widgets, refined animations, or optimized systems. If you have an idea, fork the repository, make your changes, and open a PR.

---

## 📝 License

This project is open-source and available under the **MIT License**. Feel free to use, modify, and distribute it as you see fit! 

*Designed and Developed with 💜 by [SEJED-DEV](https://github.com/SEJED-DEV).*