import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    title: "Shashank Baswa — Full-Stack & AI Engineer",
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
    <html lang="en" className={`dark ${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-500 selection:bg-violet-500/30">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
