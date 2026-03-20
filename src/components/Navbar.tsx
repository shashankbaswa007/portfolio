"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero-section" },
  { name: "About", href: "#about-section" },
  { name: "Experience", href: "#experience-section" },
  { name: "Skills", href: "#skills-section" },
  { name: "Projects", href: "#projects-section" },
  { name: "Certifications", href: "#certifications-section" },
  { name: "Contact", href: "#contact-section" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled down for styling
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      // Using a small offset to trigger early
      const scrollPosition = window.scrollY + 200;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].href);
        if (section && section instanceof HTMLElement) {
          if (section.offsetTop <= scrollPosition) {
            setActiveSection(navLinks[i].name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section && section instanceof HTMLElement) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4"
    >
      <nav
        className={`flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-3 rounded-full border border-white/5 transition-all duration-500 overflow-x-auto no-scrollbar ${
          isScrolled
            ? "glass shadow-2xl shadow-black/50"
            : "bg-transparent border-transparent"
        }`}
      >
        <span className="text-white/80 font-semibold tracking-wide pr-6 border-r border-white/10 hidden md:block">
          Shashank.
        </span>

        {navLinks.map((link) => {
          const isActive = activeSection === link.name;

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative px-3 sm:px-4 py-1.5 sm:py-2 text-sm transition-colors duration-300 whitespace-nowrap"
            >
              <span
                className={`relative z-10 ${
                  isActive ? "text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                {link.name}
              </span>

              {isActive && (
                <motion.div
                  layoutId="activeNavBackground"
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/5"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </a>
          );
        })}
      </nav>
    </motion.header>
  );
}
