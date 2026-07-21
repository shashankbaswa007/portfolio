import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Footer from "@/components/Footer";

// Below-fold: dynamically imported to reduce initial JS bundle
const Experience = dynamic(() => import("@/components/Experience"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"));
const Certifications = dynamic(() => import("@/components/Certifications"));
const Achievements = dynamic(() => import("@/components/Achievements"));
const Contact = dynamic(() => import("@/components/Contact"));
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"));

/* ── Section Dividers ──────────────────────────────────────────────── */

/** Thin gradient line — lightweight transition between related sections */
function ThinDivider() {
  return (
    <div className="relative h-px w-full max-w-[1400px] mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  );
}

/** Fade spacer with radial glow — breathing room before major sections */
function FadeSpacer() {
  return (
    <div className="relative h-16 md:h-20 w-full max-w-[1400px] mx-auto flex items-center justify-center">
      <div className="w-1.5 h-1.5 rounded-full bg-violet-400/30 shadow-[0_0_20px_rgba(167,139,250,0.15)]" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative bg-[#121212]">
      {/* Global Navigation */}
      <Navbar />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Cinematic Hero Group: Video scrolls continuously beneath Hero, Stats, and About */}
      <div className="relative w-full" id="cinematic-hero-group">
        {/* Background video canvas (absolute, covers the height of everything in this group) */}
        <ScrollyCanvas />

        {/* Parallax Hero Text Overlay (h-[350vh] defines the primary scroll length) */}
        <Overlay />

        {/* Normal flow components layered natively over the sticky canvas */}
        <div className="relative z-10 w-full pt-12 md:pt-0">
          <StatsBar />

          <ThinDivider />

          {/* About Section */}
          <About />
        </div>
      </div>

      {/* Major transition → Experience */}
      <FadeSpacer />

      {/* Experience section */}
      <Experience />

      {/* Light transition → Skills */}
      <ThinDivider />

      {/* Skills Infinite Marquee */}
      <Skills />

      {/* Major transition → Projects */}
      <FadeSpacer />

      {/* Projects section */}
      <Projects />

      {/* Light transition → Certifications */}
      <ThinDivider />

      {/* Certifications section */}
      <Certifications />

      {/* Light transition → Achievements */}
      <ThinDivider />

      {/* Achievements Section */}
      <Achievements />

      {/* Major transition → Contact */}
      <FadeSpacer />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
