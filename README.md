# 🌌 Shubham Bhandari — Futuristic Developer Portfolio

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://shubhambhandari-portfolio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js%2015-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)

> A modern, highly animated, dark cyberpunk-themed developer portfolio engineered for high performance, smooth micro-interactions, and responsive full-stack storytelling.

---

## 🌐 Live Website & Links

* **Live Portfolio**: **[https://shubhambhandari-portfolio.vercel.app](https://shubhambhandari-portfolio.vercel.app/)**
* **GitHub Repository**: [https://github.com/Shubham-Bhandari1/Portfolio](https://github.com/Shubham-Bhandari1/Portfolio)
* **LinkedIn**: [https://www.linkedin.com/in/shubham-bhandari-95642532a](https://www.linkedin.com/in/shubham-bhandari-95642532a)
* **Direct Email**: `shubhambhndari@gmail.com`

---

## ⚡ Key Highlights & Features

* **✨ Futuristic Cyber Aesthetic**: Dark obsidian canvas (`#030712`) with ambient neon cyan/purple glows, interactive constellations, and glassmorphism.
* **🖥️ Interactive 3D Terminal**: Real-time simulated developer telemetry with CPU stats, active stack, and status beacons.
* **🪐 3D Planetary Tech Orbit**: Dual-view capabilities matrix — toggle between an interactive 3D solar orbit reactor and a searchable grid.
* **🔍 Instant Tech Search & Filters**: Live search bar with dynamic count pills for instant filtering across 25+ technologies.
* **💼 Flagship Project Showcases**: 3D tilt project cards with deep-dive technical modals exploring system architectures, problem-solution breakdowns, and metrics.
* **📈 Animated Milestone Stepper**: Top-to-bottom academic and engineering milestones from 2022 to Present.
* **📜 Verified Credentials Hub**: Verifiable accreditation cards linking directly to official Google Drive & Udemy certificates.
* **📥 Real-Time Gmail Delivery**: Integrated with Web3Forms to send visitor transmissions straight into a dedicated `📁 Portfolio Inquiries` Gmail folder.
* **🎉 Resume Hub with Confetti**: One-click download and browser viewing for official resume PDF.
* **♿ WCAG 2.2 AAA Contrast & Accessibility**: High-contrast typography (`text-slate-200`), accessible keyboard skip links, and 44px+ mobile touch targets.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router with Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, Custom Cyber Glassmorphism, CSS Variables |
| **Animations** | Framer Motion, Canvas Particle Constellations, 3D CSS Card Tilts |
| **Icons** | React Icons (`si`, `fa6`), Lucide React |
| **Form Service** | Web3Forms API (Direct-to-Gmail routing) |
| **Deployment** | Vercel (Automated CI/CD via GitHub) |

---

## 🚀 Projects Showcased

1. **[Pyramid — Full-Stack Task Management System](https://task-flow-rust-five.vercel.app/)**
   * *Stack*: Next.js 14, React 18, TypeScript, Tailwind CSS, NestJS, TypeORM, PostgreSQL, JWT, Docker, Vercel
   * *Features*: Kanban board, list views, subtasks, comments, owner data isolation, and rate-limited REST APIs.
   * *Repo*: [Shubham-Bhandari1/Task-Flow](https://github.com/Shubham-Bhandari1/Task-Flow)

2. **[AI-Powered E-Commerce Search Engine](https://github.com/Shubham-Bhandari1/ai-search-engine)**
   * *Stack*: FastAPI, Python, Elasticsearch, Sentence Transformers, MySQL, Docker, React, NLP, Semantic Search
   * *Features*: Hybrid search combining typo-tolerant lexical search and vector semantic comprehension across 1,465 Amazon products.

3. **[LiveCode — Real-Time Collaborative Code Editor](https://github.com/Shubham-Bhandari1/LiveCode)**
   * *Stack*: React, Next.js, Node.js, Express.js, Monaco Editor, Xterm.js, Docker
   * *Features*: In-browser collaborative editing, interactive terminal, and sandboxed multi-language Docker execution.

---

## 📦 Getting Started & Local Development

### Prerequisites
* **Node.js**: v18.17+ or v20+
* **Package Manager**: npm, yarn, or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Shubham-Bhandari1/Portfolio.git

# 2. Navigate into the project directory
cd Portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the live site.

### Production Build

```bash
# Build optimized static and server pages
npm run build

# Start production server locally
npm start
```

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── icon.svg                  # Glowing terminal favicon
│   ├── resume.pdf                # Downloadable official resume
│   └── images/projects/          # Project thumbnails
├── src/
│   ├── app/
│   │   ├── globals.css           # Tailwind configuration & cyber animations
│   │   ├── layout.tsx            # Root layout, fonts & SEO metadata
│   │   ├── page.tsx              # Single-page master container
│   │   └── icon.svg              # App Router favicon
│   ├── components/
│   │   ├── background/           # CyberGrid & ParticleCanvas
│   │   ├── layout/               # Sticky Navbar & Footer
│   │   └── ui/                   # GlassCard, NeonButton, TechIcon, Modals
│   ├── data/
│   │   └── portfolioData.ts      # 🎯 Central single-source-of-truth data store
│   └── sections/                 # Modular page sections (Hero, About, Skills, etc.)
├── package.json
└── tsconfig.json
```

---

## ⚙️ Updating Content in the Future

All portfolio information (projects, skills, milestones, certificates, bio, and contact info) is centrally managed in **one single file**:

📁 **`src/data/portfolioData.ts`**

Simply update the data object, push to GitHub, and Vercel will automatically rebuild and deploy your changes within 40 seconds!

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

### 👨‍💻 Author
**Shubham Bhandari**
* GitHub: [@Shubham-Bhandari1](https://github.com/Shubham-Bhandari1)
* LinkedIn: [shubham-bhandari](https://www.linkedin.com/in/shubham-bhandari-95642532a)
* Email: [shubhambhndari@gmail.com](mailto:shubhambhndari@gmail.com)
