"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  type: "full-time" | "contract" | "freelance" | "part-time" | "internship";
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  imageBg?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "ServiceNow x AICTE Intern",
    company: "ServiceNow (AICTE Certified)",
    period: "Jun 2026 — Jul 2026",
    description:
      "Designed Flow Designer automation scripts and ATF test workflows on a live enterprise platform; integrated Agentic AI into ITSM product flows and published structured execution reports — full-stack ownership of an AI-augmented enterprise feature.",
    highlights: [
      "Built Flow Designer automation scripts and ATF test workflows on a live ServiceNow enterprise instance",
      "Integrated Agentic AI into ITSM product flows, publishing structured execution reports for stakeholders",
      "Earned ServiceNow Micro Certification for platform proficiency",
    ],
    type: "internship",
    image: "/experience/upscalemedia-transformed (2).png",
    imageAlt: "ServiceNow enterprise platform workspace",
    imageFit: "contain",
    imageBg: "bg-white/[0.02]",
  },
  {
    id: 2,
    role: "Machine Learning Research Assistant",
    company: "AI and Data Science Department, CBIT",
    period: "Mar 2024 — Apr 2024",
    description:
      "Fine-tuned computer vision models for automated medical diagnostics and built an end-to-end MLOps pipeline for clinical inference.",
    highlights: [
      "Fine-tuned EfficientNetB3 on 10,000+ dermoscopic images using transfer learning, achieving 92% accuracy and 97% AUC with SHAP/LIME explainability",
      "Built end-to-end MLOps pipeline reducing diagnostic turnaround by 25%",
      "Deployed clinical inference system on Hugging Face Spaces via Gradio with 4-tier risk scoring",
    ],
    type: "part-time",
    image: "/experience/velocity-labs.png",
    imageAlt: "Advanced AI and Machine Learning workspace with data visualizations",
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "InAmigos Foundation (Remote)",
    period: "May 2026",
    description:
      "Engineered full-stack web interfaces and automation tooling in an Agile sprint workflow, improving operational efficiency for 10,000+ NGO beneficiaries following code review and delivery best practices.",
    highlights: [
      "Engineered full-stack web interfaces and automation tooling in an Agile sprint workflow",
      "Improved operational efficiency for 10,000+ NGO beneficiaries",
      "Followed code review and delivery best practices across multiple sprint cycles",
    ],
    type: "internship",
    image: "/experience/studio-mono.png",
    imageAlt: "Collaborative web development environment",
  },
];

const typeLabels: Record<string, string> = {
  "full-time": "Full-Time",
  contract: "Contract",
  freelance: "Freelance",
  "part-time": "Part-Time Research",
  internship: "Internship",
};

const typeColors: Record<string, string> = {
  "full-time": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  contract: "bg-sky-500/15 text-sky-400 border-sky-500/20",
  freelance: "bg-violet-500/15 text-violet-400 border-violet-500/20",
  "part-time": "bg-sky-500/15 text-sky-400 border-sky-500/20",
  internship: "bg-amber-500/15 text-amber-400 border-amber-500/20",
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24"
      id="experience-section"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/[0.03] rounded-full blur-[120px] pointer-events-none will-change-transform" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-sky-600/[0.02] rounded-full blur-[100px] pointer-events-none will-change-transform" />

      {/* Section header */}
      <motion.div
        className="max-w-7xl mx-auto mb-16 md:mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-violet-400 to-transparent" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-light">
            Career Journey
          </span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient">Experience</span>
        </h2>
        <p className="mt-4 text-lg text-white/40 font-light max-w-xl">
          A track record of building exceptional digital products and leading
          engineering teams.
        </p>
      </motion.div>

      {/* Experience entries with timeline */}
      <div className="max-w-7xl mx-auto relative">
        {/* Vertical Timeline Bar — hidden on mobile */}
        <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-[2px]">
          {/* Track (static background) */}
          <div className="absolute inset-0 bg-white/[0.04] rounded-full" />
          {/* Fill (scroll-driven) */}
          <motion.div
            className="absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-violet-500 via-fuchsia-500 to-sky-500"
            style={{ height: timelineHeight }}
          />
        </div>

        <div className="space-y-8 lg:space-y-12">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
              >
                {/* Timeline Dot — hidden on mobile */}
                <div className="hidden lg:flex absolute left-8 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-[#121212] border-2 border-violet-400/60 shadow-[0_0_12px_rgba(139,92,246,0.4)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                  />
                </div>

                {/* Card — offset on desktop to make room for timeline */}
                <div className="lg:ml-20">
                  <div className="glass glass-hover rounded-2xl overflow-hidden transition-all duration-500">
                    <div
                      className={`flex flex-col ${
                        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* Image side */}
                      <div
                        className={`relative lg:w-[42%] h-56 sm:h-64 lg:h-auto lg:min-h-[340px] overflow-hidden ${
                          exp.imageBg || ""
                        }`}
                      >
                        <Image
                          src={exp.image}
                          alt={exp.imageAlt}
                          fill
                          quality={100}
                          priority={index === 0}
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className={`${
                            exp.imageFit === "contain" ? "object-contain p-8" : "object-cover"
                          } transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform [image-rendering:-webkit-optimize-contrast]`}
                        />
                        {/* Image overlay gradient — blends into the card */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-${
                            isEven ? "r" : "l"
                          } from-transparent via-transparent to-[rgba(18,18,18,0.4)] hidden lg:block`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,18,18,0.6)] via-transparent to-transparent lg:hidden" />
                        {/* Subtle color overlay on hover */}
                        <div className="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/[0.08] transition-colors duration-700" />

                        {/* Period badge overlaid on image */}
                        <div
                          className={`absolute top-4 ${
                            isEven ? "left-4" : "right-4 lg:left-4 lg:right-auto"
                          }`}
                        >
                          <span className="text-[10px] px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 font-mono tabular-nums tracking-wider">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Content side */}
                      <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                        {/* Role and company */}
                        <div className="mb-4">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 className="font-display text-xl md:text-2xl font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
                              {exp.role}
                            </h3>
                            <span
                              className={`text-[10px] px-2.5 py-1 rounded-full border font-medium tracking-wider uppercase ${typeColors[exp.type]}`}
                            >
                              {typeLabels[exp.type] ?? exp.type}
                            </span>
                          </div>
                          <p className="text-sm text-white/45 font-light">
                            {exp.company}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base text-white/40 font-light leading-relaxed mb-5">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-2.5">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm">
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-400/60 flex-shrink-0" />
                              <span className="text-white/50 font-light leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
