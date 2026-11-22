"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section 
      className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden py-24 px-6 md:px-12 lg:px-24" 
      id="contact-section"
    >
      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* Header Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm tracking-[0.2em] uppercase text-white/50 font-light">
              Available for Opportunities & Internships
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Let&apos;s build
            <br />
            <span className="text-gradient">something together.</span>
          </h2>

          <p className="text-lg md:text-xl text-white/40 font-light mb-16 max-w-2xl">
            Open to engineering internships, collaborations, and discussions. Reach out anytime.
          </p>
        </motion.div>

        {/* Contact Links Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Email */}
          <a href="mailto:baswashashank123@gmail.com" aria-label="Send an email to Shashank Baswa" className="group glass rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/[0.04] transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/50 group-hover:text-violet-400 group-hover:border-violet-500/30 transition-all duration-300 mb-4 shadow-[0_4px_20px_transparent] group-hover:shadow-[0_4px_20px_rgba(139,92,246,0.15)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <span className="block text-xs uppercase tracking-[0.2em] text-white/30 mb-2">Email</span>
            <span className="text-sm font-light tracking-wide text-white/80 group-hover:text-white transition-colors duration-300 break-all">baswashashank123@gmail.com</span>
          </a>

          {/* Phone */}
          <a href="tel:+917032174043" aria-label="Call Shashank Baswa" className="group glass rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/[0.04] transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/50 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all duration-300 mb-4 shadow-[0_4px_20px_transparent] group-hover:shadow-[0_4px_20px_rgba(52,211,153,0.15)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span className="block text-xs uppercase tracking-[0.2em] text-white/30 mb-2">Phone</span>
            <span className="text-sm font-light tracking-wide text-white/80 group-hover:text-white transition-colors duration-300">+91 7032174043</span>
          </a>

          {/* Location */}
          <div className="group glass rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/[0.04] transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/50 group-hover:text-amber-400 group-hover:border-amber-500/30 transition-all duration-300 mb-4 shadow-[0_4px_20px_transparent] group-hover:shadow-[0_4px_20px_rgba(251,191,36,0.15)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="block text-xs uppercase tracking-[0.2em] text-white/30 mb-2">Location</span>
            <span className="text-sm font-light tracking-wide text-white/80 group-hover:text-white transition-colors duration-300">Hyderabad, India</span>
          </div>
          
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/shashank-baswa-27a783301/" target="_blank" rel="noopener noreferrer" aria-label="Visit Shashank Baswa's LinkedIn profile" className="group glass rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/[0.04] transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/50 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all duration-300 mb-4 shadow-[0_4px_20px_transparent] group-hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </div>
            <span className="block text-xs uppercase tracking-[0.2em] text-white/30 mb-2">LinkedIn</span>
            <span className="text-sm font-light tracking-wide text-white/80 group-hover:text-white transition-colors duration-300">shashank-baswa-27a783301</span>
          </a>

          {/* GitHub */}
          <a href="https://github.com/shashankbaswa007" target="_blank" rel="noopener noreferrer" aria-label="Visit Shashank Baswa's GitHub profile" className="group glass rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/[0.04] transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/30 transition-all duration-300 mb-4 shadow-[0_4px_20px_transparent] group-hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </div>
            <span className="block text-xs uppercase tracking-[0.2em] text-white/30 mb-2">GitHub</span>
            <span className="text-sm font-light tracking-wide text-white/80 group-hover:text-white transition-colors duration-300">shashankbaswa007</span>
          </a>

          {/* Kaggle */}
          <a href="https://kaggle.com/shashankbaswa" target="_blank" rel="noopener noreferrer" aria-label="Visit Shashank Baswa's Kaggle profile" className="group glass rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/[0.04] transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/50 group-hover:text-sky-400 group-hover:border-sky-500/30 transition-all duration-300 mb-4 shadow-[0_4px_20px_transparent] group-hover:shadow-[0_4px_20px_rgba(56,189,248,0.15)]">
              <span className="font-bold text-2xl font-serif">K</span>
            </div>
            <span className="block text-xs uppercase tracking-[0.2em] text-white/30 mb-2">Kaggle</span>
            <span className="text-sm font-light tracking-wide text-white/80 group-hover:text-white transition-colors duration-300">shashankbaswa</span>
          </a>
        </motion.div>
      </div>

      {/* Decorative base glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
