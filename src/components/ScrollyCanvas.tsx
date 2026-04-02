"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const VIDEO_DURATION = 5.0; // 75 frames at 15fps

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const timeIndex = useTransform(scrollYProgress, [0, 1], [0, VIDEO_DURATION - 0.05]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.readyState >= 3) {
      setIsLoaded(true);
      setLoadProgress(100);
    }

    const onCanPlay = () => {
      setIsLoaded(true);
      setLoadProgress(100);
    };

    const onProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const duration = video.duration || VIDEO_DURATION;
        const progress = Math.min(100, Math.floor((bufferedEnd / duration) * 100));
        setLoadProgress(progress);
      }
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("canplaythrough", onCanPlay);
    video.addEventListener("loadeddata", onCanPlay);
    video.addEventListener("progress", onProgress);

    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        video.pause();
        video.currentTime = 0;
      }).catch(() => {});
    }

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("canplaythrough", onCanPlay);
      video.removeEventListener("loadeddata", onCanPlay);
      video.removeEventListener("progress", onProgress);
    };
  }, []);

  useMotionValueEvent(timeIndex, "change", (latest) => {
    const video = videoRef.current;
    if (video && isLoaded) {
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = latest;
        }
      });
    }
  });

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 w-full h-full pointer-events-none" id="scroll-canvas-container">
      <div className="sticky top-0 h-screen w-full bg-[#121212] overflow-hidden transform-gpu" style={{ willChange: "transform" }}>
        
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

        <video
          ref={videoRef}
          src="/sequence.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transform-gpu scale-[1.05]"
          style={{ willChange: "transform" }}
        />

        <div className="absolute top-0 left-0 right-0 pointer-events-none z-[2]" style={{ height: "20%", background: "linear-gradient(to bottom, rgba(18,18,18,0.5) 0%, rgba(18,18,18,0.15) 40%, transparent 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-[2]" style={{ height: "28%", background: "linear-gradient(to top, #121212 0%, #121212 10%, rgba(18,18,18,0.8) 35%, rgba(18,18,18,0.3) 65%, transparent 100%)" }} />
        <div className="absolute top-0 bottom-0 left-0 pointer-events-none z-[2]" style={{ width: "15%", background: "linear-gradient(to right, rgba(18,18,18,0.5) 0%, rgba(18,18,18,0.15) 50%, transparent 100%)" }} />
        <div className="absolute top-0 bottom-0 right-0 pointer-events-none z-[2]" style={{ width: "15%", background: "linear-gradient(to left, rgba(18,18,18,0.5) 0%, rgba(18,18,18,0.15) 50%, transparent 100%)" }} />
        <div className="absolute bottom-0 right-0 pointer-events-none z-[3]" style={{ width: "250px", height: "120px", background: "radial-gradient(ellipse at 100% 100%, #121212 0%, #121212 35%, rgba(18,18,18,0.6) 65%, transparent 100%)" }} />
        <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(18,18,18,0.3) 75%, rgba(18,18,18,0.6) 100%)" }} />
      </div>
    </div>
  );
}
