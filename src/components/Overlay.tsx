"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface OverlaySectionProps {
  children: React.ReactNode;
  scrollRange: [number, number]; // [fadeIn start, fadeOut end] as % of scroll
  alignment?: "center" | "left" | "right";
  containerProgress: import("framer-motion").MotionValue<number>;
}

function OverlaySection({
  children,
  scrollRange,
  alignment = "center",
  containerProgress,
}: OverlaySectionProps) {
  const [start, end] = scrollRange;
  const mid = (start + end) / 2;

  // Fade in → hold → fade out
  const opacity = useTransform(
    containerProgress,
    [start, start + 0.04, mid, end - 0.04, end],
    [0, 1, 1, 1, 0]
  );

  // Parallax: moves up faster than scroll for a cinematic feel
  const y = useTransform(
    containerProgress,
    [start, end],
    [60, -60]
  );

  // Subtle scale
  const scale = useTransform(
    containerProgress,
    [start, start + 0.06, end - 0.06, end],
    [0.95, 1, 1, 0.95]
  );

  const alignmentClasses = {
    center: "items-center justify-center text-center",
    left: "items-start justify-center text-left pl-8 md:pl-16 lg:pl-24",
    right: "items-end justify-center text-right pr-8 md:pr-16 lg:pr-24",
  };

  return (
    <motion.div
      className={`absolute inset-0 flex flex-col ${alignmentClasses[alignment]} pointer-events-none px-6`}
      style={{ opacity, y, scale }}
    >
      {children}
    </motion.div>
  );
}

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative z-10 w-full h-[350vh]"
      id="overlay-container"
    >
      <div className="sticky top-0 h-screen w-full">
        {/* Section 1: Hero — 0% to 100% of this 350vh block */}
        <OverlaySection
          scrollRange={[0, 0.8]}
          alignment="center"
          containerProgress={scrollYProgress}
        >
          <motion.div className="flex flex-col items-center gap-4 md:gap-6 mt-16 md:mt-24 w-full text-white">
            <motion.span className="text-xs md:text-sm tracking-[0.2em] uppercase text-white/50 font-light text-center px-4">
              B.E. AI & Data Science · CBIT Hyderabad · Open to internships
            </motion.span>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center px-4 leading-[1.1]">
              <span className="text-gradient">Shashank Sai Sri Baswa</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/70 tracking-wide text-center max-w-3xl px-6 leading-relaxed">
              I build AI systems and full-stack applications that ship to production.
            </p>

            {/* CTAs */}
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center gap-4 justify-center w-full px-6 pointer-events-auto">
              <a href="#projects-section" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 active:scale-95 transition-all duration-300 text-sm text-center">
                View My Work
              </a>
              <a href="#contact-section" className="w-full sm:w-auto px-8 py-3.5 rounded-full glass glass-hover border border-white/20 text-white font-medium tracking-wide hover:text-white hover:bg-white/10 transition-all duration-300 text-sm text-center">
                Get In Touch
              </a>
            </div>

            <div className="mt-12 md:mt-16 flex items-center justify-center text-white/30 hidden sm:flex">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
                <svg
                  width="16"
                  height="24"
                  viewBox="0 0 16 24"
                  fill="none"
                  className="opacity-50"
                >
                  <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
                  <motion.circle
                    cx="8"
                    cy="8"
                    r="2"
                    fill="currentColor"
                    animate={{ cy: [7, 14, 7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </OverlaySection>
      </div>
    </div>
  );
}
