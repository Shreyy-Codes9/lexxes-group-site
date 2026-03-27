"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Pause, ArrowRight, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";

export default function VideoReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // ── VIDEO PILL → FULLSCREEN ──
  const borderRadius = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.58],
    [9999, 48, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.58],
    [0.3, 0.68, 1]
  );
  const videoOpacity = useTransform(scrollYProgress, [0.08, 0.18], [0, 1]);

  // ── SURROUNDING CONTENT ──
  const surroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.32],
    [1, 1, 0]
  );
  const surroundY = useTransform(scrollYProgress, [0.06, 0.32], [0, -40]);

  // ── PLAY ICON fades out as pill expands ──
  const pillIconOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.22, 0.4],
    [1, 1, 0]
  );

  // ── FINAL TEXT + CONTROLS ──
  const textOpacity = useTransform(scrollYProgress, [0.58, 0.74], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.58, 0.74], [28, 0]);

  // ── AUTO-START when scroll enters section ──
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const video = videoRef.current;
      if (!video) return;

      if (latest > 0.08 && latest < 0.92) {
        // Auto-start once when section comes into view
        if (video.paused && !isPlaying) {
          video.play().catch(() => {});
          setIsPlaying(true);
        }
      } else {
        // Pause when scrolled past the section
        if (!video.paused) {
          video.pause();
          setIsPlaying(false);
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, isPlaying]);

  // ── MANUAL PLAY/PAUSE ──
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // ── MUTE TOGGLE ──
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] bg-base-secondary"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── PRE-SCROLL CONTENT ── */}
        <motion.div
          style={{ opacity: surroundOpacity, y: surroundY }}
          className="absolute inset-0 z-0 flex flex-col justify-between px-6 md:px-12 lg:px-24 pt-28 md:pt-32 pb-10 md:pb-12 pointer-events-none"
        >
          <div className="max-w-lg">
            <p className="font-inter text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-ink-secondary mb-3 md:mb-4">
              Lexxes Group — Our Story
            </p>
            <h2 className="font-family-soria text-[clamp(2.5rem,8vw,5.5rem)] text-ink leading-[0.9] tracking-tight mb-4">
              MORE THAN
              <br />
              <span className="italic text-gold-primary">A BUSINESS.</span>
              <br />
              A MOVEMENT.
            </h2>
            <p className="font-inter text-ink-secondary text-xs md:text-sm lg:text-base font-medium max-w-sm md:max-w-lg leading-relaxed">
              Lexxes Group is building a community of ambitious individuals who travel the world, invest in real estate, and master the markets — together.
            </p>
          </div>

          <div className="flex justify-center md:justify-end items-end w-full">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-5 md:w-4 md:h-6 rounded-full border border-ink-secondary/30 flex justify-center pt-1">
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="w-1 h-1 rounded-full bg-ink-secondary"
                />
              </div>
              <span className="font-inter text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-ink-secondary/80">
                Scroll to watch
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── VIDEO PILL → FULLSCREEN ── */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <motion.div
            style={{
              borderRadius,
              scale,
              opacity: videoOpacity,
              willChange: "transform, border-radius, opacity",
            }}
            className="relative w-full h-full overflow-hidden pointer-events-auto shadow-2xl"
          >
            {/* Video */}
            <video
              ref={videoRef}
              src="/herovideo.mp4"
              muted
              playsInline
              loop
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/60" />

            {/* ── PILL ICON — fades out as video expands ── */}
            <motion.div
              style={{ opacity: pillIconOpacity }}
              className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-3 pointer-events-none"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                <Play size={20} className="text-white ml-1" fill="white" />
              </div>
              <span className="font-inter text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/90">
                Our Story
              </span>
            </motion.div>

            {/* ── FULLSCREEN CONTENT + CONTROLS ── */}
            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className="absolute inset-0 z-20 flex flex-col justify-end md:justify-start px-6 pb-12 pt-28 md:p-14 lg:p-20 pointer-events-none"
            >
              <div className="max-w-xl pointer-events-auto">
                <p className="font-inter text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-gold-primary mb-3 md:mb-4">
                  Lexxes Group — Our Story
                </p>
                <h2 className="font-family-soria text-[clamp(2.5rem,6vw,5rem)] text-white leading-[0.9] tracking-tight mb-4 drop-shadow-xl">
                  MORE THAN
                  <br />
                  <span className="italic text-gold-light">A BUSINESS.</span>
                  <br />
                  A MOVEMENT.
                </h2>
                <p className="font-inter text-white/80 text-xs md:text-sm lg:text-base font-medium max-w-md leading-relaxed mb-6 md:mb-8">
                  Lexxes Group is building a community of ambitious individuals who travel the world, invest in real estate, and master the markets — together.
                </p>
                <Link
                  href="/about"
                  className="relative overflow-hidden inline-flex items-center gap-2 bg-gold-primary text-ink px-6 py-3.5 md:px-7 md:py-4 rounded-xl text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] group/cta shadow-lg"
                >
                  <span className="absolute inset-0 bg-gold-dark translate-x-[-101%] group-hover/cta:translate-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                  <span className="relative z-10 flex items-center gap-2">
                    Our Story
                    <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* ── BOTTOM RIGHT CONTROLS ── */}
            <motion.div
              style={{ opacity: textOpacity }}
              className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-30 flex items-center gap-3 pointer-events-auto"
            >
              {/* Mute toggle */}
              <button
                onClick={toggleMute}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Toggle sound"
              >
                {isMuted
                  ? <VolumeX size={16} className="text-white" />
                  : <Volume2 size={16} className="text-white" />
                }
              </button>

              {/* Play / Pause */}
              <button
                onClick={togglePlay}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying
                  ? <Pause size={16} className="text-white" />
                  : <Play size={16} className="text-white ml-0.5" fill="white" />
                }
              </button>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
