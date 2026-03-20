import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Shashank Baswa — Full-Stack & AI Engineer",
  description:
    "Portfolio of Shashank Sai Sri Baswa, a Full-Stack Software Engineer and AI/ML Engineer based in Hyderabad. Building production-grade AI applications.",
  keywords: ["shashank baswa", "software engineer", "full stack developer", "ai engineer", "machine learning", "portfolio"],
  openGraph: {
    title: "Shashank Baswa — Software & AI Engineer",
    description: "Building production-grade AI systems and robust full-stack applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#121212] text-white selection:bg-violet-500/30">
        {children}
      </body>
    </html>
  );
}
