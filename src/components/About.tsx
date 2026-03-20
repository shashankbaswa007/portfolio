"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden" id="about-section">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-600/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
            <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-light">
              About Me
            </span>
          </div>

          <div className="space-y-8 text-xl md:text-2xl lg:text-3xl font-light text-white/80 leading-[1.6]">
            <p>
              I am a third-year AI and Data Science student at CBIT, Hyderabad, building things that go beyond coursework — production AI systems, full-stack applications, and tools that real people use.
            </p>
            <p>
              I won 1st place at the CBIT National Hackathon, serve as Placement Coordinator and Events Head for my department, and play varsity football and table tennis.
            </p>
            <p>
              I am actively looking for software engineering or AI/ML internship opportunities where I can contribute from day one.
            </p>
          </div>

          <motion.div
            className="pt-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <a
              href="#contact-section"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Let&apos;s talk internships
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
