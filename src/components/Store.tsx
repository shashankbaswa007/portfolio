"use client";

import { motion } from "framer-motion";
import MagneticElement from "./MagneticElement";
import Script from "next/script";

export default function Store() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24" id="store-section">
      <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />
      
      {/* Section header */}
      <motion.div
        className="max-w-7xl mx-auto mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-violet-400 to-transparent" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-light">
            Resources
          </span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient">Store</span>
        </h2>
        <p className="mt-4 text-lg text-white/40 font-light max-w-xl">
          Premium templates and assets I&apos;ve designed for developers.
        </p>
      </motion.div>

      {/* Store Items Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 min-h-[400px]">
        
        {/* Resume Template Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-[2rem] bg-white/[0.02] border border-white/5 overflow-hidden flex flex-col justify-between"
        >
          {/* Static Noise Texture */}
          <div 
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none transform-gpu" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
          />
          
          <div className="relative p-8 md:p-10 flex flex-col h-full z-10 space-y-6">
            <div className="flex items-start justify-between">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-400 tracking-wide">
                Best Seller
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black/20 backdrop-blur-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white/90 mb-3 tracking-tight group-hover:text-white transition-colors">
                Premium Resume Template
              </h3>
              <p className="text-[15px] md:text-base text-white/50 leading-[1.7] mb-8 font-light max-w-md">
                The exact battle-tested resume template I used to secure high-ticket roles and hackathon wins. Clean, ATS-friendly, and engineered to highlight what engineering managers actually look for.
              </p>
            </div>

            <div className="mt-auto">
              <MagneticElement spread={0.1}>
                {/* 
                  Adding data-gumroad-overlay-checkout allows the checkout process 
                  to happen natively within our site as an overlay instead of redirecting.
                */}
                <a 
                  href="https://baswashashank.gumroad.com/l/Resume_template"
                  data-gumroad-overlay-checkout="true"
                  className="w-full inline-flex font-semibold text-center items-center justify-center px-8 py-3.5 rounded-full bg-white text-black tracking-wide hover:scale-105 active:scale-95 transition-all duration-300 transform-gpu"
                >
                  Get Template
                </a>
              </MagneticElement>
            </div>
          </div>
        </motion.div>

        {/* Placeholder for future products, maintaining grid balance */}
        <div className="opacity-0 hidden md:block"></div>
      </div>
    </section>
  );
}
