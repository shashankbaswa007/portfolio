"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  icon: string; // Emoji or text icon
  color: string; // Gradient accent
  skills: string[];
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Applied Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "Dec 2024",
    icon: "🤖",
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
    skills: ["AI Ethics", "Machine Learning", "Neural Networks"],
  },
  {
    id: 2,
    title: "Python Programming Essentials",
    issuer: "Cisco Networking Academy",
    date: "Aug 2024",
    icon: "🐍",
    color: "from-amber-500/20 via-yellow-500/10 to-transparent",
    skills: ["Python", "Data Structures", "Algorithms"],
  },
  {
    id: 3,
    title: "MongoDB with Python",
    issuer: "MongoDB University",
    date: "Feb 2024",
    icon: "🍃",
    color: "from-emerald-500/20 via-green-500/10 to-transparent",
    skills: ["NoSQL", "PyMongo", "Database Design"],
  },
  {
    id: 4,
    title: "Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "Nov 2024",
    icon: "💻",
    color: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    skills: ["React", "Node.js", "Express", "MERN Stack"],
  },
  {
    id: 5,
    title: "Spring Boot & Hibernate for Beginners",
    issuer: "Udemy",
    date: "Mar 2025",
    icon: "🌱",
    color: "from-sky-500/20 via-cyan-500/10 to-transparent",
    skills: ["Java", "Spring Boot", "JPA", "REST APIs"],
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

export default function Certifications() {
  return (
    <section
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24"
      id="certifications-section"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-600/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Section header */}
      <motion.div
        className="max-w-7xl mx-auto mb-16 md:mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-sky-400 to-transparent" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-light">
            Credentials
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient">Certifications</span>
        </h2>
        <p className="mt-4 text-lg text-white/40 font-light max-w-xl">
          Industry-recognized certifications that validate expertise across
          cloud, frontend, and emerging technologies.
        </p>
      </motion.div>

      {/* Certifications grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} cert={cert} />
        ))}
      </motion.div>
    </section>
  );
}

function CertificationCard({ cert }: { cert: Certification }) {
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
      className="group relative rounded-3xl bg-white/[0.02] border border-white/5 cursor-pointer overflow-hidden block shadow-xl transition-transform duration-500 hover:-translate-y-2"
    >
      {/* Top Gradient Edge Accent (Remains Static) */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cert.color} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Dynamic Background Spotlight */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-screen"
        style={{
          background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(139,92,246,0.06), transparent 40%)`
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
          padding: "1px"
        }}
      />

      {/* Static Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="relative p-7 md:p-8 flex flex-col min-h-[260px] h-full z-10">
        {/* Icon + Year */}
        <div className="flex items-center justify-between mb-8">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-2xl group-hover:border-white/15 group-hover:bg-white/[0.08] transition-all duration-300 shadow-lg backdrop-blur-md">
            {cert.icon}
          </div>
          <span className="text-xs text-white/30 font-mono tabular-nums tracking-widest bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
            {cert.date}
          </span>
        </div>

        {/* Title & Issuer */}
        <h3 className="text-lg md:text-xl font-bold text-white/90 group-hover:text-white leading-[1.3] transition-colors duration-300 mb-2 tracking-tight pr-4">
          {cert.title}
        </h3>
        <p className="text-sm text-sky-300/80 font-medium mb-auto tracking-wide">
          {cert.issuer}
        </p>

        {/* Credential ID */}
        {cert.credentialId && (
          <div className="flex items-center gap-2 mt-5 mb-4 px-3 py-2 rounded-lg bg-black/20 border border-white/5 w-fit">
            <svg
              width="12"
              height="12"
              viewBox="0 0 10 10"
              fill="none"
              className="text-white/30"
            >
              <path
                d="M5 0L6.12 3.88L10 5L6.12 6.12L5 10L3.88 6.12L0 5L3.88 3.88L5 0Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-[11px] text-white/40 font-mono tracking-wider">
              {cert.credentialId}
            </span>
          </div>
        )}

        {/* Skills tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white/40 group-hover:text-white/60 group-hover:bg-white/[0.06] group-hover:border-white/[0.1] transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
