"use client";

import { memo, useState } from "react";
import { motion } from "framer-motion";

/* ── Data ─────────────────────────────────────────────────────────── */

interface Achievement {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  tags: string[];
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Placement Coordinator & Events Head",
    subtitle: "CBIT AI & DS Dept. · Aug 2024 – Present",
    description:
      "Led AI4Impact hackathon (100+ teams); coordinated Amazon, Barclays, Deloitte & Hartford campus drives; mentored 20+ students to 90% internship-placement rate.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    accent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    tags: ["Leadership", "Campus Drives", "Mentorship", "100+ Teams"],
  },
  {
    id: 2,
    title: "1st Place — CBIT National Hackathon",
    subtitle: "50+ competing teams",
    description:
      "Built HireLog, an Agentic RAG AI platform for semantic interview search, winning first place and earning selection for institutional deployment to CBIT's Placement Department.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
    accent: "from-amber-500/20 via-yellow-500/10 to-transparent",
    tags: ["1st Place", "National", "AI/ML", "RAG"],
  },
  {
    id: 3,
    title: "Top 5 — Mahindra University Hackathon",
    subtitle: "Inter-university competition",
    description:
      "Placed in the top 5 at a competitive inter-university hackathon, demonstrating strong problem-solving and rapid prototyping skills.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    accent: "from-sky-500/20 via-cyan-500/10 to-transparent",
    tags: ["Top 5", "Inter-University", "Hackathon"],
  },
  {
    id: 4,
    title: "Dean's List — All Semesters",
    subtitle: "GPA 9.03/10.0 · Top 10%",
    description:
      "Consistently ranked in the top 10% of the class across all semesters, earning Dean's List recognition for sustained academic excellence.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 10 3 12 0v-5" />
      </svg>
    ),
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    tags: ["Top 10%", "9.03 GPA", "Academic Excellence"],
  },
  {
    id: 5,
    title: "250+ DSA Problems",
    subtitle: "LeetCode & HackerRank",
    description:
      "Quality-focused problem solving across data structures, algorithms, and competitive programming — building a strong foundation for technical interviews.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    accent: "from-rose-500/20 via-pink-500/10 to-transparent",
    tags: ["LeetCode", "HackerRank", "DSA", "250+"],
  },
  {
    id: 6,
    title: "Co-authoring AI Research Publication",
    subtitle: "Peer-reviewed · AI & Data Science",
    description:
      "Co-authoring a peer-reviewed publication in AI and Data Science, contributing original research alongside faculty at CBIT's AI & DS department.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    accent: "from-indigo-500/20 via-violet-500/10 to-transparent",
    tags: ["Research", "Peer-Reviewed", "AI Publication"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ── Component ────────────────────────────────────────────────────── */

export default function Achievements() {
  return (
    <section
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24"
      id="achievements-section"
    >
      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-amber-600/[0.03] rounded-full blur-[100px] pointer-events-none will-change-transform" />

      {/* Section header */}
      <motion.div
        className="max-w-7xl mx-auto mb-16 md:mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-amber-400 to-transparent" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-light">
            Leadership & Impact
          </span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient">Achievements</span>
        </h2>
        <p className="mt-4 text-lg text-white/40 font-light max-w-xl">
          Leadership roles, competitive wins, and academic milestones that define my journey.
        </p>
      </motion.div>

      {/* Achievements grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {achievements.map((item) => (
          <AchievementCard key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  );
}

/* ── Card ─────────────────────────────────────────────────────────── */

const AchievementCard = memo(function AchievementCard({ item }: { item: Achievement }) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    setMouseX(clientX - left);
    setMouseY(clientY - top);
  }

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl bg-white/[0.02] border border-white/5 cursor-default overflow-hidden block shadow-xl transition-transform duration-500 hover:-translate-y-2 transform-gpu"
    >
      {/* Top Gradient Edge Accent */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Dynamic Background Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-screen"
        style={{
          background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(139,92,246,0.06), transparent 40%)`,
        }}
      />

      {/* Dynamic Border Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.3), transparent 40%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      {/* Static Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none transform-gpu"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative p-7 md:p-8 flex flex-col min-h-[280px] h-full z-10">
        {/* Icon + Subtitle */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/50 group-hover:text-white/90 group-hover:border-white/15 group-hover:bg-white/[0.08] transition-all duration-300 shadow-lg backdrop-blur-md">
            {item.icon}
          </div>
          <span className="text-[11px] text-white/30 font-mono tabular-nums tracking-wider bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5 max-w-[160px] text-right leading-tight">
            {item.subtitle}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-white/90 group-hover:text-white leading-[1.3] transition-colors duration-300 mb-3 tracking-tight pr-4">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/45 font-light leading-relaxed mb-auto">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white/40 group-hover:text-white/60 group-hover:bg-white/[0.06] group-hover:border-white/[0.1] transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});
