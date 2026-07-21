"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [lines, setLines] = useState<string[]>([]);
  
  useEffect(() => {
    if (!isOpen) {
      setLines([]);
      return;
    }

    const sequence = async () => {
      const wait = (ms: number) => new Promise(res => setTimeout(res, ms));
      
      setLines(["> shashank fetch --resume"]);
      await wait(600);
      setLines(l => [...l, "Connecting to servers... [OK]"]);
      await wait(400);
      setLines(l => [...l, "Authenticating... [OK]"]);
      await wait(500);
      setLines(l => [...l, "Downloading Shashank_portfolio_resume.docx ..."]);
      await wait(800);
      setLines(l => [...l, "100% [==============================]"]);
      setLines(l => [...l, "Done! File successfully extracted."]);
      
      // Trigger actual download
      const link = document.createElement('a');
      link.href = '/Shashank_portfolio_resume.docx';
      link.download = 'Shashank_portfolio_resume.docx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      await wait(2400);
      onClose();
    };

    sequence();
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={onClose}>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#0d1117]/90 border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono text-sm"
            onClick={e => e.stopPropagation()}
          >
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/5">
              <div className="flex gap-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" onClick={onClose} style={{cursor:'pointer'}} />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-white/40 text-xs">shashank@system: ~</span>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 h-64 overflow-y-auto flex flex-col gap-2">
              {lines.map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={line.startsWith(">") ? "text-violet-400 font-semibold" : "text-white/80"}
                >
                  {line}
                </motion.div>
              ))}
              {lines.length > 0 && lines.length < 6 && (
                <motion.div 
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-white/70 mt-1"
                />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
