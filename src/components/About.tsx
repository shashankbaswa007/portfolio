"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function About() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden" id="about-section">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-600/[0.03] rounded-full blur-[150px] pointer-events-none will-change-transform" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Label */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
            <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-light">
              About Me
            </span>
          </motion.div>

          {/* Paragraph 1 */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-light text-white/80 leading-[1.6]"
          >
            I am a B.E. Artificial Intelligence & Data Science student at CBIT, Hyderabad (Sep 2023 – Sep 2027) with a <span className="text-white font-medium">9.03/10.0 GPA (Dean’s List, Top 10% all semesters)</span>. Currently an AI Automation Intern at Altera and Software Engineering Intern at Chrysolite United Development.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-light text-white/80 leading-[1.6]"
          >
            From winning 1st place at the CBIT National Hackathon to serving as Placement Coordinator and solving 370+ DSA problems, I thrive at the intersection of domain-specific AI automation, distributed backend systems, and high-performance product execution.
          </motion.p>

          {/* Education & Core Foundations Card */}
          <motion.div
            variants={itemVariants}
            className="w-full text-left bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-sm mt-6 relative overflow-hidden group"
          >
            {/* Animated left accent bar */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-violet-500 via-fuchsia-500 to-sky-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
            />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
              <h3 className="text-sm tracking-[0.2em] font-medium text-[#a78bfa] uppercase">Education & Core Foundations</h3>
              <span className="text-xs font-mono text-white/40 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
                Sep 2023 – Sep 2027
              </span>
            </div>

            <div className="mb-6 pb-6 border-b border-white/[0.05]">
              <h4 className="text-lg md:text-xl font-bold text-white/90">B.E. – Artificial Intelligence & Data Science</h4>
              <p className="text-sm text-sky-400/90 font-medium mt-1">Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad</p>
              <p className="text-sm text-white/50 font-light mt-2">
                GPA: <strong className="text-white font-medium">9.03 / 10.0</strong> · Dean’s List · Top 10% all semesters
              </p>
              <div className="mt-3 flex flex-wrap gap-2 items-center text-xs text-white/40 font-mono">
                <span className="text-white/60 font-sans font-medium">Relevant Coursework:</span>
                {["OOP", "DBMS", "Data Structures", "Algorithms", "OS"].map((c) => (
                  <span key={c} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/5 text-white/60">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-sm tracking-[0.2em] font-medium text-[#a78bfa] uppercase mb-5">How I Think & Build</h3>
            <motion.ul
              className="space-y-5 text-white/70 font-light text-base md:text-lg"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.li variants={bulletVariants} className="flex items-start gap-4">
                <span className="text-emerald-400 mt-1 flex-shrink-0">✦</span>
                <span><strong className="text-white/90 font-medium">Domain-Grounded AI:</strong> I bridge AI models with real engineering context—optimizing token budgets, designing verification agents, and enforcing confidentiality.</span>
              </motion.li>
              <motion.li variants={bulletVariants} className="flex items-start gap-4">
                <span className="text-sky-400 mt-1 flex-shrink-0">✦</span>
                <span><strong className="text-white/90 font-medium">End-to-End Ownership:</strong> From Java 17/Spring Boot backends, Kafka messaging, and schema design to responsive React frontends and rigorous CI/CD.</span>
              </motion.li>
              <motion.li variants={bulletVariants} className="flex items-start gap-4">
                <span className="text-fuchsia-400 mt-1 flex-shrink-0">✦</span>
                <span><strong className="text-white/90 font-medium">Pragmatic Execution:</strong> I focus on writing reliable, resilient code (circuit breakers, SAST audits, rate limits) that solves real problems without unnecessary complexity.</span>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-8"
          >
            <a
              href="#contact-section"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Let&apos;s talk opportunities
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
