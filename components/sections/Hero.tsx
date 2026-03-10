"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    id: "01",
    img: "/heroimg/realestate.png",
    badge: "ALLIANCE REAL ESTATE",
    heading: "Own Premium",
    highlight: "Properties.",
    sub: "Discover bank auction properties and premium real estate deals at unbeatable prices. Guided investment from discovery to ownership.",
    cta: { label: "View Properties", href: "/services/real-estate" },
  },
  {
    id: "02",
    img: "/heroimg/tour.png",
    badge: "TRAVEL ASIA • TOURISM",
    heading: "Your Success,",
    highlight: "Your Reward.",
    sub: "Earn exclusive travel packages to Goa and Switzerland as you grow with Lexxes Group. Luxury experiences await every achiever.",
    cta: { label: "See Packages", href: "/services/tourism" },
  },
  {
    id: "03",
    img: "/heroimg/stock.png",
    badge: "TRED INDIA • STOCK MARKET",
    heading: "Learn The Market,",
    highlight: "Master Your Money.",
    sub: "Access expert-curated stock market courses, live mentorship and real-time market insights. Start your wealth-building journey today.",
    cta: { label: "Explore Courses", href: "/services/stock-market" },
  },
];

const AUTO_PLAY_INTERVAL = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-advance — always runs, never pauses
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prevSlide = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  const s = slides[current];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#030712] text-white selection:bg-gold-primary selection:text-navy-dark">

      {/* --- ANIMATIONS --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeUpReveal {
          0% { opacity: 0; transform: translateY(30px); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes fillProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-reveal {
          opacity: 0;
          animation: fadeUpReveal 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .animate-progress {
          animation: fillProgress ${AUTO_PLAY_INTERVAL}ms linear forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}} />

      {/* --- BACKGROUND SLIDES --- */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              current === i ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.img}
              alt={slide.heading}
              fill
              priority={i === 0}
              className={`object-cover transition-transform ease-out ${
                current === i ? "scale-[1.05] duration-[15000ms]" : "scale-100 duration-1000"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-[#030712]/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/80 via-transparent to-[#030712]/80" />
          </div>
        ))}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay z-20 pointer-events-none" />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-30 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-10 h-full">
        <div key={`content-${current}`} className="max-w-4xl mx-auto flex flex-col items-center pt-12">

          <div className="inline-flex items-center gap-4 mb-6 px-5 py-2 animate-reveal backdrop-blur-sm bg-white/[0.03] border border-white/10 rounded-full shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-gold-primary animate-pulse" />
            <span className="font-inter text-[0.65rem] md:text-xs font-semibold tracking-[0.3em] text-gold-primary uppercase">
              {s.badge}
            </span>
          </div>

          <h1 className="font-playfair text-[clamp(3.5rem,7vw,7rem)] font-bold tracking-tight mb-6 leading-[1.05] text-white animate-reveal delay-100 drop-shadow-2xl">
            {s.heading}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-[#FFF4D2] to-gold-primary mt-1 italic pr-4">
              {s.highlight}
            </span>
          </h1>

          <p className="font-inter text-base md:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed animate-reveal delay-200 font-light drop-shadow-md">
            {s.sub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto animate-reveal delay-300">
            <Link
              href={s.cta.href}
              className="group relative flex items-center justify-center gap-3 w-full sm:w-auto font-inter px-10 py-4 bg-gold-primary text-navy-dark font-semibold hover:bg-[#ebd594] transition-all duration-300 uppercase tracking-[0.15em] text-sm rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 text-black">{s.cta.label}</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform text-black" />
            </Link>
          </div>

        </div>
      </div>

      {/* --- CONTROLS --- */}
      <div className="absolute bottom-8 right-1/2 translate-x-1/2 md:translate-x-0 md:right-12 lg:right-16 z-40">
        <div className="flex items-center gap-6 px-6 py-3.5 rounded-full bg-[#030712]/60 border border-white/10 backdrop-blur-xl shadow-2xl">

          <button onClick={prevSlide} className="text-white/50 hover:text-gold-primary transition-colors duration-300 focus:outline-none" aria-label="Previous Slide">
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-4 font-inter text-xs font-medium tracking-widest text-white/50">
            <span className="text-white">{s.id}</span>
            <div className="relative w-16 md:w-24 h-[2px] bg-white/10 overflow-hidden rounded-full">
              <div
                key={current}
                className="absolute top-0 left-0 h-full bg-gold-primary animate-progress"
              />
            </div>
            <span>0{slides.length}</span>
          </div>

          <button onClick={nextSlide} className="text-white/50 hover:text-gold-primary transition-colors duration-300 focus:outline-none" aria-label="Next Slide">
            <ChevronRight size={20} />
          </button>

        </div>
      </div>

    </section>
  );
}
