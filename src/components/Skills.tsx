"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Spring Boot", "React", "Next.js", "Node.js", "TensorFlow", "PyTorch"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "AI/ML",
    skills: ["NLP", "FAISS", "Computer Vision", "Transfer Learning", "LLM Integration", "Scikit-learn", "XGBoost", "Gradio"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Git", "Docker", "CI/CD", "REST APIs", "JWT", "Linux", "Maven"],
  },
  {
    category: "Developer Tools",
    skills: ["Postman", "Jupyter Notebook", "VS Code", "Hugging Face"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
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
          <motion.div key={group.category} variants={itemVariants} className="flex flex-col">
            <h3 className="text-lg md:text-xl font-semibold text-white/80 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 rounded-full glass border border-white/10 text-sm md:text-base text-white/70 tracking-wide hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
