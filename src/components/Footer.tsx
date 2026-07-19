"use client";

import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/shashankbaswa007",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shashank-baswa-27a783301/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Kaggle",
    href: "https://kaggle.com/shashankbaswa",
    icon: <span className="font-bold text-sm font-serif">K</span>,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-10 md:py-14 bg-[#121212] px-6" id="footer">
      {/* Top gradient border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      </motion.div>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Social links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="text-xs tracking-[0.2em] uppercase text-white/30 hover:text-white/60 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 10V2M6 2L2 6M6 2l4 4" />
          </svg>
          Back to top
        </button>

        {/* Credit */}
        <p className="text-xs md:text-sm text-white/40 font-light tracking-wide">
          Designed and built by Shashank Sai Sri Baswa · 2026
        </p>
      </div>
    </footer>
  );
}
