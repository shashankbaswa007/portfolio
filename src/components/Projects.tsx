"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  categories: ("AI/ML" | "Full Stack")[];
  metric: string;
  color: string;
  year: string;
  href: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SmartStyle",
    description: "Multi-LLM fashion recommendation platform with a dual-model fallback pipeline (Groq primary, Gemini fallback), client-side CV color extraction at 95%+ skin tone accuracy, and a 70-20-10 personalization engine that cut AI costs by 65%.",
    tags: ["Next.js", "TypeScript", "Llama 3.3", "Gemini 2.0", "Firebase", "Computer Vision"],
    categories: ["AI/ML", "Full Stack"],
    metric: "85% user satisfaction",
    color: "from-violet-500/20 to-fuchsia-500/20",
    year: "Sept 2024",
    href: "https://smart-style.vercel.app",
    github: "https://github.com/shashankbaswa007/SmartStyle",
  },
  {
    id: 2,
    title: "HireLog",
    description: "NLP-powered placement intelligence platform that converts unstructured interview data into a FAISS-indexed semantic search knowledge base of 1,000+ questions. Won 1st place at CBIT National Hackathon against 50+ teams. Improved preparation efficiency by 60% for 200+ students.",
    tags: ["Python", "NLP", "FAISS", "React", "PostgreSQL"],
    categories: ["AI/ML"],
    metric: "1st Place — National Hackathon",
    color: "from-sky-500/20 to-cyan-500/20",
    year: "Feb 2024",
    href: "https://github.com/shashankbaswa007/HireLog",
    github: "https://github.com/shashankbaswa007/HireLog",
  },
  {
    id: 3,
    title: "Melanoma Detection System",
    description: "Clinical-grade binary classifier for skin lesion images fine-tuned on 10,000+ dermoscopic images using two-phase transfer learning. Deployed on Hugging Face Spaces with 4-tier risk scoring and real-time confidence output.",
    tags: ["TensorFlow", "EfficientNetB3", "Python", "Gradio", "Hugging Face"],
    categories: ["AI/ML"],
    metric: "92% accuracy · 97% AUC",
    color: "from-amber-500/20 to-orange-500/20",
    year: "March 2024",
    href: "https://huggingface.co/spaces/shashankbaswa007/melanoma-skincancer-detector",
    github: "https://github.com/shashankbaswa007/melanoma-skin-cancer-detection-model",
  },
  {
    id: 4,
    title: "SportsHub",
    description: "Real-time sports management platform sustaining 50+ concurrent matches with Gemini AI match predictions at 78% accuracy and Firebase sub-100ms sync. Role-based admin dashboard cut coordinator workload by 60%.",
    tags: ["Next.js", "Firebase", "Gemini AI", "Tailwind CSS"],
    categories: ["Full Stack"],
    metric: "500+ users · 95% retention",
    color: "from-emerald-500/20 to-teal-500/20",
    year: "Oct 2024",
    href: "https://trysportshub.vercel.app",
    github: "https://github.com/shashankbaswa007/SportsHub",
  },
  {
    id: 5,
    title: "FinSight",
    description: "Production-grade FinTech platform with automated anomaly detection reducing financial discrepancies by 35% across $50K+ in tracked transactions. 40+ REST APIs, banking-grade JWT security, Docker containerized with full CI/CD pipeline.",
    tags: ["Java", "Spring Boot", "React", "MySQL", "JWT", "Docker"],
    categories: ["Full Stack"],
    metric: "40+ REST APIs · 85% test coverage",
    color: "from-rose-500/20 to-pink-500/20",
    year: "March 2025",
    href: "https://github.com/shashankbaswa007/FinSight",
    github: "https://github.com/shashankbaswa007/FinSight",
  },
];

type FilterType = "All" | "AI/ML" | "Full Stack";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.categories.includes(activeFilter as "AI/ML" | "Full Stack")
  );

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24" id="projects-section">
      {/* Section header */}
      <motion.div
        className="max-w-7xl mx-auto mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-violet-400 to-transparent" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-light">
            Selected Work
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient">Projects</span>
        </h2>
        <p className="mt-4 text-lg text-white/40 font-light max-w-xl">
          Systems and applications engineered for performance, scale, and intelligence.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div 
        className="max-w-7xl mx-auto flex flex-wrap gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {(["All", "AI/ML", "Full Stack"] as FilterType[]).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
              activeFilter === filter
                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-105"
                : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      {/* Project grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 min-h-[500px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    setMouseX(clientX - left);
    setMouseY(clientY - top);
  }

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      layout
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[2rem] bg-white/[0.02] border border-white/5 cursor-pointer overflow-hidden block no-underline"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Dynamic Background Spotlight (Follows mouse) */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-screen"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(139,92,246,0.06), transparent 40%)`
        }}
      />
      
      {/* Dynamic Border Spotlight (Follows mouse linearly) */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.4), transparent 40%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px" // 1px glowing border
        }}
      />

      {/* Static Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* Internal Content Frame */}
      <div className="relative p-8 md:p-10 flex flex-col min-h-[400px] h-full justify-between z-10">
        <div>
          {/* Top row: Metric Badge + Link Icons */}
          <div className="flex items-start justify-between mb-8 gap-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-white/70 tracking-wide backdrop-blur-md shadow-xl group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              {project.metric}
            </div>
            
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300 bg-black/20 backdrop-blur-md">
                {/* Custom modern arrow icon */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white/40 group-hover:text-white/90 transition-all duration-300">
                  <path d="M1.16669 12.8333L12.8334 1.16667M12.8334 1.16667H2.33335M12.8334 1.16667V11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Title and Category */}
          <h3 className="text-2xl md:text-3xl font-bold text-white/90 group-hover:text-white transition-colors duration-300 mb-3 tracking-tight">
            {project.title}
          </h3>
          <div className="text-xs tracking-widest text-[#a78bfa] font-semibold mb-5 pb-5 border-b border-white/[0.05]">
            {project.categories.join(" × ")}
          </div>

          {/* Description */}
          <p className="text-[15px] md:text-base text-white/50 group-hover:text-white/70 font-light leading-[1.7] transition-colors duration-300 mb-8 max-w-lg">
            {project.description}
          </p>
        </div>

        {/* Tags bottom aligned */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white/40 group-hover:text-white/60 group-hover:bg-white/[0.06] group-hover:border-white/[0.1] transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
