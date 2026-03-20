"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "9.06 / 10", label: "GPA — Dean's List" },
  { value: "5", label: "Production Projects" },
  { value: "1st Place", label: "National Hackathon" },
  { value: "500+", label: "Active Users Served" },
];

export default function StatsBar() {
  return (
    <section className="relative py-12 md:py-20 border-y border-white/[0.04] bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/[0.05]">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-mono text-sky-400/80 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
