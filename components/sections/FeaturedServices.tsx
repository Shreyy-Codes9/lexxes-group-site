"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { useRef } from "react";

const tourismDestinations = [
  {
    img: "/heroimg/tour.png",
    place: "Goa, India",
    label: "Starter Reward",
    tag: "₹3,000 Package",
    desc: "Sun, sand & luxury stays on India's most iconic coastline.",
  },
  {
    img: "/heroimg/tour2.png",
    place: "Zurich, Switzerland",
    label: "Premium Reward",
    tag: "₹30,000 Package",
    desc: "Snow-capped peaks, world-class hospitality and alpine luxury.",
  },
  {
    img: "/heroimg/tour3.png",
    place: "Bali, Indonesia",
    label: "Group Tour",
    tag: "Exclusive",
    desc: "Tropical paradise — temples, terraces and turquoise waters.",
  },
  {
    img: "/heroimg/tour4.png",
    place: "Dubai, UAE",
    label: "Group Tour",
    tag: "Exclusive",
    desc: "Skyline cruises, desert safaris and five-star everything.",
  },
];

export default function FeaturedServices() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-navy-dark py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* ── SECTION HEADER ── */}
        <div className="mb-16">
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
            TOURISM — MAIN FEATURE
        ══════════════════════════════════════ */}
        <div className="mb-4">

          {/* Tourism heading block */}
          <div className="relative rounded-3xl overflow-hidden bg-navy-secondary border border-navy-border mb-4">

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent z-10" />

            <div className="flex flex-col lg:flex-row">

              {/* Left: text */}
              <div className="lg:w-[38%] p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-gold-primary/10 border border-gold-primary/20">
                    <Star size={11} className="text-gold-primary fill-gold-primary" />
                    <span className="font-inter text-[10px] font-bold tracking-[0.3em] text-gold-primary uppercase">Main Focus</span>
                  </div>

                  <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3">
                    Travel Asia • Tourism
                  </p>

                  <h3 className="font-playfair text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight">
                    Your Success,<br />
                    <span className="text-gold-primary italic">Your Reward.</span>
                  </h3>

                  <p className="font-inter text-sm text-text-secondary font-light leading-relaxed max-w-sm mb-8">
                    Grow with Lexxes Group and earn all-expenses-paid travel to dream destinations across the world. From Goa to Switzerland — every milestone comes with a reward.
                  </p>

                  {/* Package pills */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {[
                      { label: "Goa Trip", sub: "Starter — ₹3,000" },
                      { label: "Switzerland Trip", sub: "Premium — ₹30,000" },
                    ].map((p) => (
                      <div key={p.label} className="px-4 py-2.5 rounded-xl border border-gold-primary/20 bg-gold-primary/5">
                        <p className="font-inter font-bold text-xs text-gold-primary">{p.label}</p>
                        <p className="font-inter text-[10px] text-text-secondary mt-0.5">{p.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/services/tourism"
                  className="group flex items-center gap-3 bg-gold-primary hover:bg-gold-light text-navy-dark px-6 py-3.5 font-inter font-bold text-xs uppercase tracking-widest transition w-fit rounded-xl shadow-[0_4px_20px_rgba(201,168,76,0.2)]"
                >
                  See All Packages
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right: scroll strip */}
              <div className="lg:w-[62%] p-4 lg:p-6 lg:pl-0">
                <div
                  ref={scrollRef}
                  className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth h-[340px] lg:h-[420px]"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {tourismDestinations.map((dest, i) => (
                    <div
                      key={i}
                      className="group relative shrink-0 w-[220px] lg:w-[250px] h-full rounded-2xl overflow-hidden snap-start"
                    >
                      <Image
                        src={dest.img}
                        alt={dest.place}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/20 to-transparent" />

                      {/* Badge */}
                      <div className="absolute top-3 left-3 px-2 py-1 bg-gold-primary text-navy-dark font-inter font-bold text-[9px] uppercase tracking-wider rounded-sm">
                        {dest.label}
                      </div>
                      <div className="absolute top-3 right-3 px-2 py-1 bg-navy-dark/70 backdrop-blur-sm text-gold-primary font-inter font-bold text-[9px] uppercase tracking-wider rounded-sm border border-gold-primary/20">
                        {dest.tag}
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <MapPin size={10} className="text-gold-primary shrink-0" />
                          <span className="font-inter text-[10px] font-bold uppercase tracking-widest text-gold-primary truncate">
                            {dest.place}
                          </span>
                        </div>
                        <p className="font-inter text-[11px] text-white/65 font-light leading-relaxed">
                          {dest.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Swipe hint */}
                <p className="font-inter text-[10px] text-text-secondary/40 uppercase tracking-widest mt-3 text-right">
                  Swipe to explore →
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            REAL ESTATE + STOCK MARKET
        ══════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Real Estate */}
          <Link
            href="/services/real-estate"
            className="group relative w-full h-[260px] overflow-hidden rounded-2xl"
          >
            <Image src="/heroimg/realestate.png" alt="Real Estate" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/92 via-[#020617]/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-1.5">Alliance Real Estate</p>
              <h3 className="font-playfair text-2xl font-bold text-white mb-1">Own Premium Properties.</h3>
              <p className="font-inter text-xs text-white/60 font-light mb-3">Bank auction & premium listings at unbeatable prices.</p>
              <div className="flex items-center gap-2 font-inter text-xs font-bold uppercase tracking-widest text-gold-primary group-hover:text-gold-light transition">
                View Properties <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Stock Market */}
          <Link
            href="/services/stock-market"
            className="group relative w-full h-[260px] overflow-hidden rounded-2xl"
          >
            <Image src="/heroimg/stock.png" alt="Stock Market" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/92 via-[#020617]/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-1.5">Tred India • Stock Market</p>
              <h3 className="font-playfair text-2xl font-bold text-white mb-1">Learn The Market.</h3>
              <p className="font-inter text-xs text-white/60 font-light mb-3">Expert courses, live mentorship & real-time market insights.</p>
              <div className="flex items-center gap-2 font-inter text-xs font-bold uppercase tracking-widest text-gold-primary group-hover:text-gold-light transition">
                Explore Courses <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}
