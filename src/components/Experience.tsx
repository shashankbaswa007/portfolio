"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  type: "full-time" | "contract" | "freelance" | "part-time";
  image: string;
  imageAlt: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Machine Learning Research Assistant",
    company: "AI and Data Science Department, CBIT",
    period: "March 2024 — Present",
    description:
      "Developing clinical inference systems and fine-tuning computer vision models for automated medical diagnostics and classification.",
    highlights: [
      "Fine-tuned EfficientNetB3 on 10,000+ dermoscopic images using two-phase transfer learning, achieving 92% test accuracy and 97% AUC for melanoma classification",
      "Handled class imbalance via sklearn class weights with augmentation and callbacks, improving model convergence by 12%",
      "Deployed clinical inference system on Hugging Face Spaces via Gradio with 4-tier risk scoring, processing 100+ daily images and reducing diagnostic turnaround by 25%",
    ],
    type: "part-time",
    image: "/experience/velocity-labs.png",
    imageAlt: "Advanced AI and Machine Learning workspace with data visualizations",
  },
  {
    id: 2,
    role: "Placement Coordinator & Events Head",
    company: "AI and Data Science Department, CBIT",
    period: "August 2024 — Present",
    description:
      "Leading departmental initiatives, managing campus recruitment, and organizing technical development programs to bridge the gap between students and industry.",
    highlights: [
      "Increased industry partner participation by 30% through targeted outreach and relationship building",
      "Mentored 20+ juniors achieving a 90% internship placement rate",
      "Organized technical workshops and coding competitions for 100+ students covering full-stack and AI/ML topics",
      "Managed campus recruitment coordination and industry partnerships",
    ],
    type: "full-time",
    image: "/experience/studio-mono.png",
    imageAlt: "Collaborative event planning and leadership environment",
  },
];

const typeLabels: Record<string, string> = {
  "full-time": "Full-Time",
  contract: "Contract",
  freelance: "Freelance",
  "part-time": "Part-Time Research",
};

const typeColors: Record<string, string> = {
  "full-time": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  contract: "bg-sky-500/15 text-sky-400 border-sky-500/20",
  freelance: "bg-violet-500/15 text-violet-400 border-violet-500/20",
  "part-time": "bg-sky-500/15 text-sky-400 border-sky-500/20",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
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
  return (
    <section
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24"
      id="experience-section"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-sky-600/[0.02] rounded-full blur-[100px] pointer-events-none" />

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
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient">Experience</span>
        </h2>
        <p className="mt-4 text-lg text-white/40 font-light max-w-xl">
          A track record of building exceptional digital products and leading
          engineering teams.
        </p>
      </motion.div>

      {/* Experience entries */}
      <motion.div
        className="max-w-7xl mx-auto space-y-8 lg:space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group"
            >
              <div className="glass glass-hover rounded-2xl overflow-hidden transition-all duration-500">
                <div
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image side */}
                  <div className="relative lg:w-[42%] h-56 sm:h-64 lg:h-auto lg:min-h-[340px] overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
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
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
