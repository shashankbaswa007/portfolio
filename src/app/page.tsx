import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#121212]">
      {/* Global Navigation */}
      <Navbar />

      {/* Cinematic Hero Group: Video scrolls continuously beneath Hero, Stats, and About */}
      <div className="relative w-full" id="cinematic-hero-group">
        {/* Background video canvas (absolute, covers the height of everything in this group) */}
        <ScrollyCanvas />

        {/* Parallax Hero Text Overlay (h-[350vh] defines the primary scroll length) */}
        <Overlay />

        {/* Normal flow components layered natively over the sticky canvas */}
        <div className="relative z-10 w-full pt-12 md:pt-0">
          <StatsBar />

          {/* Section divider */}
          <div className="relative h-px w-full max-w-[1400px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          </div>

          {/* About Section */}
          <About />
        </div>
      </div>

      {/* Section divider */}
      <div className="relative h-px w-full max-w-[1400px] mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* Experience section */}
      <Experience />

      {/* Skills Infinite Marquee */}
      <Skills />

      {/* Section divider */}
      <div className="relative h-px w-full max-w-[1400px] mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* Projects section */}
      <Projects />

      {/* Section divider */}
      <div className="relative h-px w-full max-w-[1400px] mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* Certifications section */}
      <Certifications />

      {/* Section divider */}
      <div className="relative h-px w-full max-w-[1400px] mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
