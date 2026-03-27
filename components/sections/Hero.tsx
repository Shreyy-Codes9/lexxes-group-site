"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plane, Building, TrendingUp, MapPin, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-base-secondary text-ink p-4 md:p-6 pt-24 md:pt-25 flex flex-col">

      {/* ── MAIN BENTO GRID ── */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">

        {/* ── BLOCK 1: MAIN TOURISM HERO ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-8 relative rounded-3xl overflow-hidden group min-h-[75vh] lg:min-h-0 shadow-md border border-border"
        >
          {/* Background Image */}
          <Image
            src="/heroimg/tour1.jpg"
            alt="Lexxes Group Tourism"
            fill
            priority
            className="object-cover transition-transform duration-[3000ms] group-hover:scale-105"
          />

          {/* Mobile overlay — lighter top so image is visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/95 md:from-black/40 md:via-black/20 md:to-black/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent md:from-black/70 md:via-black/30" />

          {/* Content */}
          <div className="absolute inset-0 p-5 md:p-10 flex flex-col justify-between text-white">

            {/* Top bar */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 backdrop-blur-md bg-black/30 border border-white/20 shadow-sm rounded-full px-3 py-2 md:px-4">
                <Plane size={13} className="text-gold-primary" />
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">Travel Asia • Tourism</span>
              </div>
              <Link
                href="/services/tourism"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-md bg-black/30 border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-all duration-300 group/btn shadow-sm"
              >
                <ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>

            {/* Main headline & Info */}
            <div className="mt-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-family-soria text-[clamp(2.8rem,6.5vw,6.5rem)] leading-[0.9] tracking-tight drop-shadow-xl mb-3"
              >
                GROW RICH.
                <br />
                <span className="italic text-gold-light">TRAVEL FAR.</span>
                <br />
                LIVE FREE.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-white/80 text-sm font-medium max-w-lg leading-relaxed mb-5"
              >
                Grow with Lexxes Group and unlock exclusive travel packages to Goa and Switzerland. Luxury experiences are your reward.
              </motion.p>

              {/* Mobile package pills — visible only on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex md:hidden gap-3 mb-5 flex-wrap"
              >
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-3 py-2">
                  <MapPin size={12} className="text-gold-primary shrink-0" />
                  <span className="text-[11px] font-bold text-white">Goa — ₹4,600</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-3 py-2">
                  <MapPin size={12} className="text-gold-primary shrink-0" />
                  <span className="text-[11px] font-bold text-white">Switzerland — ₹30,000</span>
                </div>
              </motion.div>

              {/* Desktop info bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:flex items-center gap-6 lg:gap-8 backdrop-blur-lg bg-black/50 border border-white/15 rounded-2xl p-5 w-fit shadow-2xl"
              >
                <div className="flex flex-col gap-1.5 pr-6 lg:pr-8 border-r border-white/20">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Starter Package</span>
                  <div className="flex items-center gap-2 text-[15px] font-bold tracking-wide">
                    <MapPin size={15} className="text-gold-primary shrink-0" />
                    Goa, India — ₹4,600
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 pr-6 lg:pr-8 border-r border-white/20">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Premium Package</span>
                  <div className="flex items-center gap-2 text-[15px] font-bold tracking-wide">
                    <MapPin size={15} className="text-gold-primary shrink-0" />
                    Switzerland — ₹30,000
                  </div>
                </div>
                <Link
                  href="/register"
                  className="relative overflow-hidden flex items-center gap-2 bg-gold-primary text-ink px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-[0.15em] group/cta shadow-lg"
                >
                  <span className="absolute inset-0 bg-gold-dark translate-x-[-101%] group-hover/cta:translate-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                  <span className="relative z-10 flex items-center gap-2">
                    Join Now
                    <ArrowRight size={15} className="group-hover/cta:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>

              {/* Mobile CTA */}
              <Link
                href="/register"
                className="md:hidden relative overflow-hidden flex items-center justify-center gap-2 w-full bg-gold-primary text-ink px-6 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg group/cta"
              >
                <span className="absolute inset-0 bg-gold-dark translate-x-[-101%] group-hover/cta:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  Join Lexxes Group
                  <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN ── */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col gap-4 md:gap-5">

          {/* ── BLOCK 2: REAL ESTATE ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 rounded-3xl overflow-hidden relative group cursor-pointer shadow-md border border-border min-h-[200px] lg:min-h-0"
          >
            <Image
              src="/heroimg/realestate.png"
              alt="Premium Real Estate"
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />

            <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2 backdrop-blur-md bg-black/30 border border-white/20 rounded-full px-3 py-1.5">
                  <Building size={11} />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Real Estate</span>
                </div>
                <Link href="/services/real-estate" className="p-1">
                  <ArrowUpRight size={16} className="text-white/50 group-hover:text-white transition-colors duration-300" />
                </Link>
              </div>
              <div className="relative z-10">
                <h3 className="font-family-soria text-2xl md:text-3xl lg:text-4xl leading-[1.0] mb-2 drop-shadow-lg">
                  Alliance<br />Real Estate
                </h3>
                <p className="text-[11px] text-white/70 font-medium leading-relaxed hidden lg:block">
                  Bank auction properties at unbeatable prices across Nagpur.
                </p>
                <Link
                  href="/services/real-estate"
                  className="inline-flex items-center gap-1.5 mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-primary hover:text-gold-light transition-colors group/link"
                >
                  View Properties
                  <ArrowRight size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ── BLOCK 3: STOCK MARKET ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 rounded-3xl overflow-hidden relative group cursor-pointer shadow-md border border-border min-h-[200px] lg:min-h-0 bg-ink"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue/30 blur-[70px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:opacity-70 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gold-primary/15 blur-[60px] rounded-full pointer-events-none group-hover:opacity-60 transition-opacity duration-500" />

            <Image
              src="/heroimg/stock.png"
              alt="Stock Market"
              fill
              className="object-cover opacity-[0.25] group-hover:opacity-[0.35] transition-opacity duration-700 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />

            <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
              <div className="flex justify-between items-start relative z-10">
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1.5">
                  <TrendingUp size={11} className="text-gold-primary" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Stock Market</span>
                </div>
                <Link href="/services/stock-market" className="p-1">
                  <ArrowUpRight size={16} className="text-white/50 group-hover:text-gold-primary transition-colors duration-300" />
                </Link>
              </div>
              <div className="relative z-10">
                <h3 className="font-family-soria text-2xl md:text-3xl lg:text-4xl leading-[1.0] mb-2 drop-shadow-md">
                  Tred India<br />
                  <span className="text-gold-primary italic">Markets</span>
                </h3>
                <p className="text-[11px] text-white/70 font-medium leading-relaxed hidden lg:block">
                  Live mentorship, trading strategies and real-time market insights.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-primary animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-primary">Live Now</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── BOTTOM SCROLL HINT ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden md:flex justify-between items-center pt-6 px-2"
      >
        <div className="flex items-center gap-3">
          <div className="w-4 h-6 rounded-full border border-ink-secondary/30 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-ink-secondary"
            />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink-secondary">
            Scroll to explore
          </p>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink-secondary">
          Tourism • Real Estate • Stock Market
        </p>
      </motion.div>

    </section>
  );
}
  