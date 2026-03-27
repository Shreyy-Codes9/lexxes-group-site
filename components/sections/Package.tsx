"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Check } from "lucide-react";

const starterFeatures = [
  "Access to Tred India stock courses",
  "Alliance Real Estate listings",
  "Travel Asia membership",
  "Goa trip reward",
  "Member dashboard",
  "Network building tools",
];

const premiumFeatures = [
  "Everything in Starter",
  "Priority stock mentorship sessions",
  "Exclusive real estate deals",
  "Switzerland trip reward",
  "Premium member badge",
  "Dedicated support",
  "Early access to new services",
  "Higher network earning potential",
];

export default function PackagesSection() {
  return (
    <section className="relative bg-base py-20 md:py-28 px-4 md:px-6 overflow-hidden">

      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #011840 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="font-inter text-[9px] font-bold uppercase tracking-[0.4em] text-gold-primary mb-4">
              Membership Plans
            </p>
            <h2 className="font-family-soria text-[clamp(2.5rem,5vw,5rem)] text-ink leading-[0.9] tracking-tight">
              CHOOSE YOUR
              <br />
              <span className="italic text-gold-primary">PATH TO</span>
              <br />
              FREEDOM.
            </h2>
          </div>
          <p className="font-inter text-ink-secondary text-sm md:text-base font-medium max-w-xs leading-relaxed md:text-right">
            One membership. All three services. Two levels to match where you are — and where you're going.
          </p>
        </div>

        {/* ── CARDS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* ── PREMIUM (3/5) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-ink/10 flex flex-col bg-ink"
          >
            {/* Gold top line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
            {/* Subtle glow */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{ background: "radial-gradient(ellipse at top right, #C9A84C, transparent 60%)" }}
            />

            <div className="relative z-10 p-7 md:p-10 flex flex-col h-full">

              {/* Top row */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-inter text-[9px] font-bold uppercase tracking-[0.3em] text-gold-primary">
                      Premium
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-gold-primary text-ink text-[9px] font-bold uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="font-family-soria text-5xl md:text-6xl text-base-white leading-none">
                    ₹30,000
                  </h3>
                  <p className="font-inter text-xs text-ink-light mt-2 uppercase tracking-[0.15em]">
                    One-time membership fee
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1.5 px-4 py-3.5 rounded-xl border border-gold-primary/25 bg-gold-primary/10 text-center shrink-0">
                  <MapPin size={18} className="text-gold-primary" />
                  <span className="font-inter text-[9px] font-bold text-gold-primary uppercase tracking-wide leading-tight">
                    Switzerland<br />Reward
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 mb-7" />

              {/* Features */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
                {premiumFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                      i === 0
                        ? "bg-gold-primary/20 border border-gold-primary/50"
                        : "bg-white/5 border border-white/15"
                    }`}>
                      <Check size={9} className={i === 0 ? "text-gold-primary" : "text-white/50"} />
                    </div>
                    <span className={`font-inter text-sm ${
                      i === 0 ? "text-gold-primary font-semibold" : "text-ink-light"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/register"
                className="relative overflow-hidden mt-8 w-full flex items-center justify-center gap-2 bg-gold-primary text-ink py-4 rounded-xl font-inter font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-gold-primary/20 group/cta"
              >
                <span className="absolute inset-0 bg-gold-dark translate-x-[-101%] group-hover/cta:translate-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                <span className="relative z-10 flex items-center gap-2">
                  Go Premium
                  <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* ── STARTER (2/5) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 relative rounded-2xl border border-border bg-base-secondary flex flex-col overflow-hidden group hover:border-ink/20 transition-colors duration-300"
          >
            {/* Bottom ink line on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] w-0 bg-ink group-hover:w-full transition-all duration-700" />

            <div className="relative z-10 p-7 md:p-8 flex flex-col h-full">

              <div className="flex items-start justify-between mb-7">
                <div>
                  <span className="font-inter text-[9px] font-bold uppercase tracking-[0.3em] text-ink-secondary mb-3 block">
                    Starter
                  </span>
                  <h3 className="font-family-soria text-4xl md:text-5xl text-ink leading-none">
                    ₹4,600
                  </h3>
                  <p className="font-inter text-xs text-ink-secondary mt-2 uppercase tracking-[0.15em]">
                    One-time membership fee
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1.5 px-3.5 py-3 rounded-xl border border-border bg-base-white text-center shrink-0">
                  <MapPin size={16} className="text-ink-secondary" />
                  <span className="font-inter text-[9px] font-bold text-ink-secondary uppercase tracking-wide leading-tight">
                    Goa<br />Reward
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-border mb-6" />

              <ul className="space-y-3 flex-1">
                {starterFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full border border-border bg-base-white flex items-center justify-center shrink-0">
                      <Check size={9} className="text-ink-secondary" />
                    </div>
                    <span className="font-inter text-sm text-ink-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/register"
                className="relative overflow-hidden mt-8 w-full flex items-center justify-center gap-2 bg-ink text-base-white py-4 rounded-xl font-inter font-bold text-xs uppercase tracking-[0.2em] group/cta"
              >
                <span className="absolute inset-0 bg-blue translate-x-[-101%] group-hover/cta:translate-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ── FOOTNOTE ── */}
        <p className="text-center font-inter text-xs text-ink-secondary/40 mt-8 uppercase tracking-[0.2em]">
          All memberships are one-time fees · No hidden charges · No monthly subscriptions
        </p>

      </div>
    </section>
  );
}
