"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  category: string;
  skills: string[];
  accent: string; // border/glow color on hover
  dotColor: string; // category dot color
}

const skillCategories: SkillCategory[] = [
  {
    category: "Full-Stack & Backend",
    skills: ["Next.js 14", "TypeScript", "React", "Python", "FastAPI", "Spring Boot", "Firebase Firestore", "Apache Kafka", "MySQL", "Redis", "Docker", "Microservices"],
    accent: "hover:border-violet-400/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]",
    dotColor: "bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]",
  },
  {
    category: "AI / LLM Layer",
    skills: ["LangChain", "LangGraph", "FAISS", "Agentic RAG", "LLM Inference", "Gemini 2.0 Flash", "Groq Llama 3.3 70B", "Hugging Face", "Ollama", "Prompt Engineering", "Fine-Tuning", "SHAP/LIME"],
    accent: "hover:border-emerald-400/40 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)]",
    dotColor: "bg-emerald-500 shadow-[0_0_10px_rgba(52,211,153,0.8)]",
  },
  {
    category: "Testing & DevOps",
    skills: ["Jest", "Playwright", "GitHub Actions", "ServiceNow ATF", "Git", "Linux", "SQL", "Shell Scripting"],
    accent: "hover:border-sky-400/40 hover:shadow-[0_0_15px_rgba(56,189,248,0.15)]",
    dotColor: "bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.8)]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const groupVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.03,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Skills() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24" id="skills-section">
      <div className="max-w-7xl mx-auto mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-violet-400 to-transparent" />
            <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-light">
              Technical Stack
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="mt-4 text-lg text-white/40 font-light max-w-xl">
            A comprehensive toolkit for building production-ready applications and intelligent AI systems.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillCategories.map((group) => (
          <motion.div key={group.category} variants={groupVariants} className="flex flex-col">
            <h3 className="text-lg md:text-xl font-semibold text-white/80 mb-6 flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full ${group.dotColor}`} />
              {group.category}
            </h3>
            <motion.div className="flex flex-wrap gap-3" variants={groupVariants}>
              {group.skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={pillVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`px-4 py-2 rounded-full glass border border-white/10 text-sm md:text-base text-white/70 tracking-wide hover:bg-white/10 hover:text-white transition-all duration-300 cursor-default will-change-transform ${group.accent}`}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
