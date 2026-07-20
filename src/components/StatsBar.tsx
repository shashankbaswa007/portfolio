"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";

/* ── Animated Number Component ────────────────────────────────────── */

function AnimatedNumber({ value, suffix = "", duration = 1.2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const displayValue = useTransform(springValue, (latest) => {
    if (value % 1 !== 0) {
      return latest.toFixed(2);
    }
    return Math.round(latest).toString();
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue as any}</motion.span>
      {suffix}
    </span>
  );
}

/* ── Data ─────────────────────────────────────────────────────────── */

const stats = [
  { value: 9.03, suffix: " / 10", label: "GPA — Dean's List", accent: "from-violet-500 to-fuchsia-500" },
  { value: 5, suffix: "", label: "Production Projects", accent: "from-sky-500 to-cyan-500" },
  { value: 1, suffix: "st Place", label: "National Hackathon", accent: "from-emerald-500 to-teal-500" },
];

/* ── Component ────────────────────────────────────────────────────── */

export default function StatsBar() {
  return (
    <section className="relative py-12 md:py-20 border-y border-white/[0.04] bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-4 divide-x divide-white/[0.05]">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm font-mono text-sky-400/80 uppercase tracking-widest mb-4">
                {stat.label}
              </div>
              {/* Animated accent bar */}
              <motion.div
                className="h-[2px] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`w-full h-full bg-gradient-to-r ${stat.accent} rounded-full`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
