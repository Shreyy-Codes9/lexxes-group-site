"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Star } from "lucide-react";

const tourismPhotos = [
  { img: "/heroimg/tour.png", place: "Goa, India", tag: "Starter — ₹3,000", size: "large" },
  { img: "/pageimages/tourism/switzerland.png", place: "Zurich, Switzerland", tag: "Premium — ₹30,000", size: "tall" },
  { img: "/pageimages/tourism/rajesthan.png", place: "Rajasthan, India", tag: "Group Tour", size: "small" },
  { img: "/pageimages/tourism/dubai.png", place: "Dubai, UAE", tag: "Group Tour", size: "small" },
];

export default function FeaturedServices() {
  return (
    /* Added 'relative' to ensure background stays contained */
    <section className="relative bg-navy-dark py-24 overflow-hidden">
      
      {/* ── GRID PATTERN BACKGROUND ── */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern-services"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-gold-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-services)" />
        </svg>
      </div>

      {/* Added 'relative z-10' to keep content above the grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* ── HEADER ── */}
        <div className="mb-14">
          <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3">
            What We Offer
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text-primary">
              Three Ways to <span className="text-gold-primary italic">Grow.</span>
            </h2>
            <Link href="/network" className="group hidden md:flex items-center gap-2 font-inter text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-gold-primary transition">
              Join Now & Earn Rewards <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ══════════════════════════════════════
            TOURISM — FULL FEATURE
        ══════════════════════════════════════ */}
        <div className="mb-5">

          {/* Tourism label */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-primary/10 border border-gold-primary/20">
                <Star size={10} className="text-gold-primary fill-gold-primary" />
                <span className="font-inter text-[10px] font-bold tracking-[0.3em] text-gold-primary uppercase">Main Focus</span>
              </div>
              <div>
                <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase">Travel Asia • Tourism</p>
              </div>
            </div>
            <Link href="/services/tourism" className="group flex items-center gap-2 font-inter text-xs font-bold uppercase tracking-widest text-gold-primary hover:text-gold-light transition">
              See All <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ── MOSAIC GRID ── */}
          <div className="grid grid-cols-12 grid-rows-2 gap-3 h-[520px] md:h-[580px]">

            {/* BIG LEFT — Goa */}
            <Link href="/services/tourism" className="group col-span-12 md:col-span-5 row-span-2 relative rounded-2xl overflow-hidden">
              <Image src={tourismPhotos[0].img} alt={tourismPhotos[0].place} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/20 to-transparent" />
              <div className="absolute top-4 left-4 px-2.5 py-1 bg-gold-primary text-navy-dark font-inter font-bold text-[9px] uppercase tracking-wider rounded-sm">
                {tourismPhotos[0].tag}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1.5 mb-2">
                  <MapPin size={11} className="text-gold-primary" />
                  <span className="font-inter text-xs font-bold uppercase tracking-widest text-gold-primary">{tourismPhotos[0].place}</span>
                </div>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-2">Your Success,<br /><span className="text-gold-primary italic">Your Reward.</span></h3>
                <p className="font-inter text-xs text-white/60 font-light max-w-xs">
                  Earn all-expenses-paid trips as you grow with Lexxes Group.
                </p>
              </div>
            </Link>

            {/* TOP RIGHT — Switzerland */}
            <Link href="/services/tourism" className="group col-span-12 md:col-span-7 row-span-1 relative rounded-2xl overflow-hidden">
              <Image src={tourismPhotos[1].img} alt={tourismPhotos[1].place} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/20 to-transparent" />
              <div className="absolute top-4 left-4 px-2.5 py-1 bg-gold-primary text-navy-dark font-inter font-bold text-[9px] uppercase tracking-wider rounded-sm">
                {tourismPhotos[1].tag}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPin size={10} className="text-gold-primary" />
                    <span className="font-inter text-[10px] font-bold uppercase tracking-widest text-gold-primary">{tourismPhotos[1].place}</span>
                  </div>
                  <p className="font-inter text-xs text-white/60 font-light">Snow-capped peaks & alpine luxury.</p>
                </div>
              </div>
            </Link>

            {/* BOTTOM RIGHT — split into 2 */}
            <div className="col-span-12 md:col-span-7 row-span-1 grid grid-cols-2 gap-3">

              {/* Rajasthan */}
              <Link href="/services/tourism" className="group relative rounded-2xl overflow-hidden">
                <Image src={tourismPhotos[2].img} alt={tourismPhotos[2].place} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/10 to-transparent" />
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-navy-dark/70 backdrop-blur-sm text-gold-primary font-inter font-bold text-[8px] uppercase tracking-wider rounded-sm border border-gold-primary/20">
                  Group Tour
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={9} className="text-gold-primary" />
                    <span className="font-inter text-[9px] font-bold uppercase tracking-widest text-gold-primary truncate">{tourismPhotos[2].place}</span>
                  </div>
                </div>
              </Link>

              {/* Dubai */}
              <Link href="/services/tourism" className="group relative rounded-2xl overflow-hidden">
                <Image src={tourismPhotos[3].img} alt={tourismPhotos[3].place} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/10 to-transparent" />
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-navy-dark/70 backdrop-blur-sm text-gold-primary font-inter font-bold text-[8px] uppercase tracking-wider rounded-sm border border-gold-primary/20">
                  Group Tour
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={9} className="text-gold-primary" />
                    <span className="font-inter text-[9px] font-bold uppercase tracking-widest text-gold-primary truncate">{tourismPhotos[3].place}</span>
                  </div>
                </div>
              </Link>
            </div>

          </div>

          {/* Package pills below mosaic */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            {[
              { label: "Goa Trip", sub: "Starter — ₹3,000" },
              { label: "Switzerland Trip", sub: "Premium — ₹30,000" },
            ].map((p) => (
              <div key={p.label} className="px-4 py-2.5 rounded-xl border border-gold-primary/20 bg-gold-primary/5">
                <p className="font-inter font-bold text-xs text-gold-primary">{p.label}</p>
                <p className="font-inter text-[10px] text-text-secondary mt-0.5">{p.sub}</p>
              </div>
            ))}
            <Link href="/services/tourism"
              className="group ml-auto flex items-center gap-2 bg-gold-primary hover:bg-gold-light text-navy-dark px-5 py-2.5 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl"
            >
              See All Packages <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ══════════════════════════════════════
            REAL ESTATE + STOCK MARKET
        ══════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

          {/* Real Estate */}
          <Link href="/services/real-estate" className="group relative overflow-hidden rounded-2xl">
            <div className="relative h-[200px] overflow-hidden rounded-t-2xl">
              <Image src="/pageimages/realestate/house2.png" alt="Real Estate" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-secondary/90 to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-gold-primary text-navy-dark font-inter font-bold text-[9px] uppercase tracking-wider rounded-sm">
                Alliance Real Estate
              </div>
            </div>
            <div className="bg-navy-secondary border border-navy-border border-t-0 rounded-b-2xl p-5">
              <h3 className="font-playfair text-xl font-bold text-white mb-1">Own Premium Properties.</h3>
              <p className="font-inter text-xs text-text-secondary font-light mb-4">Bank auction & premium listings at unbeatable prices across Maharashtra.</p>
              <div className="flex items-center gap-2 font-inter text-xs font-bold uppercase tracking-widest text-gold-primary group-hover:text-gold-light transition">
                View Properties <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Stock Market */}
          <Link href="/services/stock-market" className="group relative overflow-hidden rounded-2xl">
            <div className="relative h-[200px] overflow-hidden rounded-t-2xl">
              <Image src="/pageimages/stockmarket/lapy.png" alt="Stock Market" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-secondary/90 to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-gold-primary text-navy-dark font-inter font-bold text-[9px] uppercase tracking-wider rounded-sm">
                Tred India
              </div>
            </div>
            <div className="bg-navy-secondary border border-navy-border border-t-0 rounded-b-2xl p-5">
              <h3 className="font-playfair text-xl font-bold text-white mb-1">Learn The Market.</h3>
              <p className="font-inter text-xs text-text-secondary font-light mb-4">Expert courses, live mentorship & real-time market insights for every level.</p>
              <div className="flex items-center gap-2 font-inter text-xs font-bold uppercase tracking-widest text-gold-primary group-hover:text-gold-light transition">
                Explore Courses <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}