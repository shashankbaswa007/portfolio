"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{ scaleX }}
    >
      <div className="w-full h-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400" />
    </motion.div>
  );
}
