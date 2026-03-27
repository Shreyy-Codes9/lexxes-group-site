"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plane, Building, TrendingUp } from "lucide-react";

const tabs = [
  {
    id: "vision",
    label: "Vision",
    heading: "Where We're Headed",
    content:
      "To become India's most trusted network that empowers everyday people to achieve financial freedom — through smart investments, global travel rewards, and a community that grows together.",
  },
  {
    id: "mission",
    label: "Mission",
    heading: "What Drives Us",
    content:
      "To provide every member with real opportunities in real estate, stock market education, and curated travel experiences — so that success isn't just a dream, it's a lifestyle you live every day.",
  },
  {
    id: "values",
    label: "Values",
    heading: "What We Stand For",
    content:
      "We believe in transparency, community, and growth. At Lexxes Group, your network is your net worth — and we're here to make sure every connection you make takes you one step closer to the life you deserve.",
  },
];

const services = [
  { icon: Plane, label: "Travel Asia", sub: "Tourism" },
  { icon: Building, label: "Alliance Real Estate", sub: "Properties" },
  { icon: TrendingUp, label: "Tred India", sub: "Stock Market" },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("vision");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="bg-base py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        {/* ── MAIN SPLIT LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-start">

          {/* ── LEFT — 40% (2/5 columns) ── */}
          <div className="lg:col-span-2 flex flex-col justify-between lg:sticky lg:top-28">

            {/* Company name */}
            <div>
              <p className="font-inter text-[9px] font-bold uppercase tracking-[0.4em] text-ink-secondary mb-6 md:mb-8">
                Who We Are
              </p>
              <h2 className="font-family-soria text-[clamp(4rem,8vw,9rem)] leading-[0.85] tracking-tight text-ink">
                Lexxes
                <br />
                <span className="text-gold-primary">Group.</span>
              </h2>

              {/* Slogan */}
              <div className="mt-6 md:mt-8 flex items-center gap-3">
                <span className="w-8 h-px bg-ink-secondary/30" />
                <p className="font-inter text-sm md:text-base font-semibold text-ink-secondary uppercase tracking-[0.2em]">
                  Be Your Own Boss
                </p>
              </div>

              <p className="mt-5 font-inter text-ink-secondary text-sm leading-relaxed max-w-xs">
                Founded in Mumbai, Lexxes Group is a network-driven ecosystem built for people who want more — more income, more travel, more life.
              </p>
            </div>
          </div>

          {/* ── RIGHT — 60% (3/5 columns) ── */}
          <div className="lg:col-span-3 flex flex-col gap-5">

            {/* ── VISION/MISSION/VALUES CARD ── */}
            <div className="bg-base-secondary rounded-2xl border border-border overflow-hidden shadow-sm">

              {/* Tab bar */}
              <div className="flex border-b border-border">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex-1 py-4 font-inter text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                      activeTab === tab.id
                        ? "text-ink"
                        : "text-ink-secondary hover:text-ink"
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-primary"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="p-6 md:p-8 min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="font-inter text-[9px] font-bold uppercase tracking-[0.35em] text-gold-primary mb-3">
                      {active.heading}
                    </p>
                    <p className="font-inter text-ink text-base md:text-lg font-medium leading-relaxed">
                      {active.content}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ── SERVICES STRIP ── */}
            <div className="grid grid-cols-3 gap-3">
              {services.map((service, i) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-base-secondary rounded-xl border border-border p-4 md:p-5 flex flex-col gap-3 hover:border-gold-primary/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-base-white border border-border flex items-center justify-center group-hover:bg-ink group-hover:border-ink transition-colors duration-300">
                    <service.icon size={16} className="text-ink group-hover:text-base-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-inter text-[10px] font-bold uppercase tracking-[0.15em] text-ink-secondary">
                      {service.sub}
                    </p>
                    <p className="font-inter text-xs font-semibold text-ink mt-0.5 leading-tight">
                      {service.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── CTA ── */}
            <div className="flex items-center justify-between pt-2">
              <p className="font-inter text-xs text-ink-secondary max-w-xs leading-relaxed hidden md:block">
                Learn more about our journey, our people, and what makes Lexxes Group different.
              </p>
              <Link
                href="/about"
                className="relative overflow-hidden inline-flex items-center gap-2 bg-ink text-base-white px-7 py-4 rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] group/cta shadow-sm ml-auto"
              >
                <span className="absolute inset-0 bg-blue translate-x-[-101%] group-hover/cta:translate-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                <span className="relative z-10 flex items-center gap-2">
                  About Us
                  <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
