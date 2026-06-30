"use client";

import { useState, memo } from "react";
import { motion } from "framer-motion";

/* ── Brand SVG Icons ─────────────────────────────────────────────── */

const IBMIcon = () => (
  <svg viewBox="0 0 48 48" width="28" height="28" fill="none">
    <g fill="#1F70C1">
      <rect x="4" y="4" width="10" height="4" />
      <rect x="4" y="10" width="10" height="4" />
      <rect x="6" y="16" width="6" height="4" />
      <rect x="6" y="22" width="6" height="4" />
      <rect x="4" y="28" width="10" height="4" />
      <rect x="4" y="34" width="10" height="4" />
      <rect x="4" y="40" width="10" height="4" />
      <rect x="16" y="4" width="10" height="4" />
      <rect x="16" y="10" width="14" height="4" />
      <rect x="18" y="16" width="6" height="4" />
      <rect x="18" y="22" width="6" height="4" />
      <rect x="16" y="28" width="14" height="4" />
      <rect x="16" y="34" width="10" height="4" />
      <rect x="16" y="40" width="10" height="4" />
      <rect x="34" y="4" width="10" height="4" />
      <rect x="34" y="10" width="10" height="4" />
      <rect x="34" y="16" width="10" height="4" />
      <rect x="36" y="22" width="6" height="4" />
      <rect x="34" y="28" width="10" height="4" />
      <rect x="34" y="34" width="10" height="4" />
      <rect x="34" y="40" width="10" height="4" />
    </g>
  </svg>
);

const CiscoIcon = () => (
  <svg viewBox="0 0 48 48" width="28" height="28" fill="none">
    <g stroke="#049FD9" strokeWidth="3.5" strokeLinecap="round">
      <line x1="6" y1="18" x2="6" y2="30" />
      <line x1="12" y1="14" x2="12" y2="34" />
      <line x1="18" y1="10" x2="18" y2="38" />
      <line x1="24" y1="14" x2="24" y2="34" />
      <line x1="30" y1="10" x2="30" y2="38" />
      <line x1="36" y1="14" x2="36" y2="34" />
      <line x1="42" y1="18" x2="42" y2="30" />
    </g>
  </svg>
);

const MongoDBIcon = () => (
  <svg viewBox="0 0 48 48" width="28" height="28" fill="none">
    <path
      d="M24 4C24 4 16 14 16 26c0 8 4 14 8 18 4-4 8-10 8-18C32 14 24 4 24 4z"
      fill="#00ED64"
    />
    <path
      d="M24 4C24 4 20 14 20 26c0 6 2 11 4 14 2-3 4-8 4-14C28 14 24 4 24 4z"
      fill="#12924F"
    />
    <rect x="23" y="38" width="2" height="6" rx="1" fill="#B8C4C2" />
  </svg>
);

const UdemyIcon = () => (
  <svg viewBox="0 0 48 48" width="28" height="28" fill="none">
    <path
      d="M12 10v14c0 6.627 5.373 12 12 12s12-5.373 12-12V10"
      stroke="#A435F0"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

const BCGIcon = () => (
  <svg viewBox="0 0 48 48" width="28" height="28" fill="none">
    {/* Rising bar chart — data science */}
    <rect x="6"  y="30" width="7" height="12" rx="1.5" fill="#059669" />
    <rect x="16" y="22" width="7" height="20" rx="1.5" fill="#10B981" />
    <rect x="26" y="14" width="7" height="28" rx="1.5" fill="#34D399" />
    <rect x="36" y="6"  width="7" height="36" rx="1.5" fill="#6EE7B7" />
    {/* Trend line */}
    <path d="M9.5 30 L19.5 22 L29.5 14 L39.5 6" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ServiceNowIcon = () => (
  <svg viewBox="0 0 48 48" width="28" height="28" fill="none">
    {/* Outer gear teeth */}
    <path
      d="M24 4 L27.5 8 L33 6.5 L33.5 12.5 L39.5 14 L37.5 19.5 L42 24 L37.5 28.5 L39.5 34 L33.5 35.5 L33 41.5 L27.5 40 L24 44 L20.5 40 L15 41.5 L14.5 35.5 L8.5 34 L10.5 28.5 L6 24 L10.5 19.5 L8.5 14 L14.5 12.5 L15 6.5 L20.5 8Z"
      fill="#81C506"
      opacity="0.15"
      stroke="#81C506"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Inner circle */}
    <circle cx="24" cy="24" r="10" stroke="#81C506" strokeWidth="2.5" />
    {/* Workflow nodes inside */}
    <circle cx="20" cy="21" r="2.5" fill="#81C506" />
    <circle cx="28" cy="21" r="2.5" fill="#81C506" />
    <circle cx="24" cy="28" r="2.5" fill="#81C506" />
    {/* Connecting lines */}
    <line x1="22" y1="22" x2="26" y2="22" stroke="#81C506" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="21" y1="23" x2="23" y2="27" stroke="#81C506" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="27" y1="23" x2="25" y2="27" stroke="#81C506" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ── Data ─────────────────────────────────────────────────────────── */

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  icon: React.ReactNode;
  color: string; // Gradient accent
  skills: string[];
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Applied Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "Dec 2024",
    icon: <IBMIcon />,
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
    skills: ["AI Ethics", "Machine Learning", "Neural Networks"],
  },
  {
    id: 2,
    title: "Python Programming Essentials",
    issuer: "Cisco Networking Academy",
    date: "Aug 2024",
    icon: <CiscoIcon />,
    color: "from-amber-500/20 via-yellow-500/10 to-transparent",
    skills: ["Python", "Data Structures", "Algorithms"],
  },
  {
    id: 3,
    title: "MongoDB with Python",
    issuer: "MongoDB University",
    date: "Feb 2024",
    icon: <MongoDBIcon />,
    color: "from-emerald-500/20 via-green-500/10 to-transparent",
    skills: ["NoSQL", "PyMongo", "Database Design"],
  },
  {
    id: 4,
    title: "Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "Nov 2024",
    icon: <UdemyIcon />,
    color: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    skills: ["React", "Node.js", "Express", "MERN Stack"],
  },
  {
    id: 5,
    title: "Spring Boot & Hibernate for Beginners",
    issuer: "Udemy",
    date: "Mar 2025",
    icon: <UdemyIcon />,
    color: "from-sky-500/20 via-cyan-500/10 to-transparent",
    skills: ["Java", "Spring Boot", "JPA", "REST APIs"],
  },
  {
    id: 6,
    title: "Data Science Job Simulation",
    issuer: "BCGX (Issued by Forage)",
    date: "June 2, 2026",
    icon: <BCGIcon />,
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
    skills: ["Understanding business context & problem framing", "Exploratory Data Analysis (EDA)", "Data Cleaning", "Feature Engineering", "Modeling and Evaluation", "Delivering Insights & Recommendations"],
  },
  {
    id: 7,
    title: "Welcome to ServiceNow",
    issuer: "ServiceNow",
    date: "June 11, 2026",
    icon: <ServiceNowIcon />,
    color: "from-lime-500/20 via-green-500/10 to-transparent",
    skills: ["Platform Analytics", "Service Catalog", "Visual Task Boards", "ServiceNow AI Platform", "Knowledge Management"],
  },
  {
    id: 8,
    title: "Micro-Certification - Welcome to ServiceNow (Zurich)",
    issuer: "ServiceNow",
    date: "June 14, 2026",
    icon: <ServiceNowIcon />,
    color: "from-lime-500/20 via-green-500/10 to-transparent",
    skills: ["ServiceNow AI Platform", "Platform Analytics", "Service Catalog", "Visual Task Boards", "Knowledge Management"],
  },
  {
    id: 9,
    title: "ServiceNow Administration Fundamentals - On Demand",
    issuer: "ServiceNow",
    date: "June 14, 2026",
    icon: <ServiceNowIcon />,
    color: "from-lime-500/20 via-green-500/10 to-transparent",
    skills: ["Service Catalog", "Platform Analytics Experience", "Workflow Studio", "ServiceNow AI Platform", "Incident Management"],
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
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
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

const CertificationCard = memo(function CertificationCard({ cert }: { cert: Certification }) {
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
      className="group relative rounded-3xl bg-white/[0.02] border border-white/5 cursor-pointer overflow-hidden block shadow-xl transition-transform duration-500 hover:-translate-y-2 transform-gpu"
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
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none transform-gpu" 
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
});
