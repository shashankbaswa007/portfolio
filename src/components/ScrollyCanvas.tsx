"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent, useReducedMotion } from "framer-motion";

const TOTAL_FRAMES = 75;

function getFramePath(index: number): string {
  const padded = index.toString().padStart(2, "0");
  return `/sequence/frame_${padded}_delay-0.066s.png`;
}

export default function ScrollyCanvas() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);

  const targetFrameRef = useRef<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Draw a frame to canvas with object-fit: cover logic
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    const img = imagesRef.current[index];

    if (!ctx || !img || !img.complete || !img.naturalWidth) return;

    const dpr = window.devicePixelRatio || 1;
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    // Resize canvas if needed
    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // Rely on default fast smoothing for sequential frames
    ctx.imageSmoothingEnabled = true;

    // Object-fit: cover — 5% overscan to guarantee no gaps at any viewport
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = displayWidth / displayHeight;
    const overscan = 1.05;

    let drawWidth: number, drawHeight: number;

    if (imgRatio > canvasRatio) {
      drawHeight = displayHeight * overscan;
      drawWidth = drawHeight * imgRatio;
    } else {
      drawWidth = displayWidth * overscan;
      drawHeight = drawWidth / imgRatio;
    }

    const offsetX = (displayWidth - drawWidth) / 2;
    const offsetY = (displayHeight - drawHeight) / 2;

    // Fill background first
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, displayWidth, displayHeight);

    // Draw the frame
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Preload images: frame 0 first (instant visual), then remaining in parallel batches
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;
    let cancelled = false;

    const markLoaded = () => {
      loadedCount++;
      if (!cancelled) {
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
      }
      if (loadedCount === TOTAL_FRAMES && !cancelled) {
        setIsLoaded(true);
        drawFrame(0);
      }
    };

    const loadImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => { markLoaded(); resolve(); };
        img.onerror = () => { markLoaded(); resolve(); }; // Don't block on broken frames
        img.src = getFramePath(index);
        images[index] = img;
      });
    };

    // Load in two phases: frame 0 first for instant display, then the rest in batches
    const loadAll = async () => {
      // Phase 1: Load first frame immediately
      await loadImage(0);
      if (!cancelled && images[0]?.complete && images[0]?.naturalWidth) {
        imagesRef.current = images;
        drawFrame(0); // Show first frame while rest loads
      }

      // Phase 2: Load remaining frames in concurrent batches of 10
      const BATCH_SIZE = 10;
      for (let batch = 1; batch < TOTAL_FRAMES; batch += BATCH_SIZE) {
        if (cancelled) break;
        const end = Math.min(batch + BATCH_SIZE, TOTAL_FRAMES);
        const promises: Promise<void>[] = [];
        for (let i = batch; i < end; i++) {
          promises.push(loadImage(i));
        }
        await Promise.all(promises);
        imagesRef.current = images;
      }
    };

    loadAll();

    return () => {
      cancelled = true;
      images.forEach((img) => {
        if (img) { img.onload = null; img.onerror = null; }
      });
    };
  }, [drawFrame]);

  // Handle resize — reset canvas and redraw
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = 0;
        canvas.height = 0;
      }
      drawFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  // Smooth frame interpolation via requestAnimationFrame
  useEffect(() => {
    let rafId: number;
    let running = true;

    const tick = () => {
      if (!running) return;
      const target = targetFrameRef.current;
      const current = currentFrameRef.current;

      if (current !== target) {
        // Interpolate toward target — move at least 1 frame per tick for responsiveness
        const diff = target - current;
        const step = Math.sign(diff) * Math.max(1, Math.abs(diff) * 0.3);
        const next = Math.abs(diff) < 1.5
          ? target
          : Math.round(current + step);

        const clamped = Math.max(0, Math.min(next, TOTAL_FRAMES - 1));
        if (clamped !== current) {
          currentFrameRef.current = clamped;
          drawFrame(clamped);
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      running = false;
      cancelAnimationFrame(rafId);
    };
  }, [drawFrame]);

  // Subscribe to scroll frame changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    targetFrameRef.current = Math.max(0, Math.min(Math.round(latest), TOTAL_FRAMES - 1));
  });

  if (shouldReduceMotion) {
    return (
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none bg-[#121212]" id="scroll-canvas-container" />
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 w-full h-full pointer-events-none" id="scroll-canvas-container">
      {/* Sticky canvas wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212] transform-gpu" style={{ willChange: "transform" }}>
        {/* Loading indicator with progress */}
        {!isLoaded && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#121212]">
            <div className="flex flex-col items-center gap-5">
              <div className="relative w-14 h-14">
                <div className="absolute inset-0 border-2 border-violet-400/20 rounded-full" />
                <div className="absolute inset-0 border-2 border-transparent border-t-violet-400 rounded-full animate-spin" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-white/40 tracking-widest uppercase font-light">
                  Loading experience
                </span>
                <span className="text-xs text-violet-400/60 font-mono tabular-nums">
                  {loadProgress}%
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Canvas — flush to viewport edges */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full transform-gpu"
          style={{ background: "#121212", willChange: "transform" }}
        />

        {/* 
          Edge overlays — these mask the canvas edges and watermark with natural gradients
          that blend seamlessly into the #121212 background. The vignette creates a 
          cinematic theater-like effect.
        */}

        {/* Top edge gradient */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none z-[2]"
          style={{
            height: "20%",
            background: "linear-gradient(to bottom, rgba(18,18,18,0.5) 0%, rgba(18,18,18,0.15) 40%, transparent 100%)",
          }}
        />

        {/* Bottom edge gradient — also covers Veo watermark */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none z-[2]"
          style={{
            height: "28%",
            background: "linear-gradient(to top, #121212 0%, #121212 10%, rgba(18,18,18,0.8) 35%, rgba(18,18,18,0.3) 65%, transparent 100%)",
          }}
        />

        {/* Left edge gradient */}
        <div
          className="absolute top-0 bottom-0 left-0 pointer-events-none z-[2]"
          style={{
            width: "15%",
            background: "linear-gradient(to right, rgba(18,18,18,0.5) 0%, rgba(18,18,18,0.15) 50%, transparent 100%)",
          }}
        />

        {/* Right edge gradient */}
        <div
          className="absolute top-0 bottom-0 right-0 pointer-events-none z-[2]"
          style={{
            width: "15%",
            background: "linear-gradient(to left, rgba(18,18,18,0.5) 0%, rgba(18,18,18,0.15) 50%, transparent 100%)",
          }}
        />

        {/* Bottom-right radial — extra watermark coverage */}
        <div
          className="absolute bottom-0 right-0 pointer-events-none z-[3]"
          style={{
            width: "250px",
            height: "120px",
            background: "radial-gradient(ellipse at 100% 100%, #121212 0%, #121212 35%, rgba(18,18,18,0.6) 65%, transparent 100%)",
          }}
        />

        {/* Full-screen cinematic vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: "radial-gradient(ellipse at center, transparent 50%, rgba(18,18,18,0.3) 75%, rgba(18,18,18,0.6) 100%)",
          }}
        />
      </div>
    </div>
  );
}
