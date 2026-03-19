import React from "react";
import Link from "next/link";

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
    <section className="relative bg-navy-dark py-24 overflow-hidden">
      
      {/* MATCHING GRID PATTERN */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern-packages"
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
          <rect width="100%" height="100%" fill="url(#grid-pattern-packages)" />
        </svg>
      </div>

      <div className="container-main relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-gold-primary/30 bg-navy-secondary rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
            <span className="font-inter text-xs tracking-[0.3em] text-gold-primary uppercase font-bold">
              Membership Plans
            </span>
          </div>
          <h2 className="font-playfair font-bold text-text-primary text-4xl md:text-5xl leading-tight">
            Choose Your{" "}
            {/* Removed text gradient */}
            <span className="text-gold-primary">
              Path To Freedom.
            </span>
          </h2>
          <p className="font-inter text-text-secondary mt-4 text-base">
            One membership. All three services. Two levels to match where you are — and where you're going.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* ── STARTER ── */}
          <div className="group relative rounded-3xl border border-navy-border bg-navy-secondary hover:border-gold-primary/30 transition-all duration-500 overflow-hidden p-8 flex flex-col">

            {/* Hover line - Solid Gold */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold-primary group-hover:w-full transition-all duration-700" />

            {/* Label */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase font-semibold">
                  Starter
                </span>
                <h3 className="font-playfair text-3xl font-bold text-text-primary mt-1">
                  ₹4,600
                </h3>
                <p className="font-inter text-sm text-text-secondary mt-1">
                  One-time membership fee
                </p>
              </div>
              <div className="flex flex-col items-center gap-1 px-4 py-3 rounded-2xl border border-navy-border bg-navy-dark text-center">
                <svg className="size-5 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-inter text-[10px] font-bold text-text-secondary uppercase tracking-wide leading-tight">
                  Goa<br />Reward
                </span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-navy-border mb-6" />

            <ul className="space-y-3 flex-1">
              {starterFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border border-gold-primary/40 flex items-center justify-center shrink-0">
                    <svg className="size-2.5 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-inter text-sm text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-8 w-full border border-gold-primary/50 hover:border-gold-primary text-gold-primary hover:bg-gold-primary/10 py-3.5 rounded-xl font-inter font-bold text-sm text-center transition-all duration-300"
            >
              Get Started
            </Link>

          </div>

          {/* ── PREMIUM ── */}
          <div className="group relative rounded-3xl overflow-hidden p-[1px] transition-all duration-500 hover:-translate-y-1">

            {/* Solid Gold Border (Replaced gradient) */}
            <div className="absolute inset-0 rounded-3xl bg-gold-primary/40 group-hover:bg-gold-primary/60 transition-colors duration-500" />

            <div className="relative h-full rounded-3xl bg-navy-secondary p-8 flex flex-col overflow-hidden">
              
              {/* Removed Inner Glow Blur div */}
              {/* Removed Top Shimmer Gradient div */}

              <div className="flex items-start justify-between mb-8 relative z-10">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase font-semibold">
                      Premium
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-gold-primary text-navy-dark text-[9px] font-bold uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-text-primary">
                    ₹30,000
                  </h3>
                  <p className="font-inter text-sm text-text-secondary mt-1">
                    One-time membership fee
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 px-4 py-3 rounded-2xl border border-gold-primary/30 bg-gold-primary/10 text-center">
                  <svg className="size-5 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-inter text-[10px] font-bold text-gold-primary uppercase tracking-wide leading-tight">
                    Switzerland<br />Reward
                  </span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-gold-primary/20 mb-6 relative z-10" />

              <ul className="space-y-3 flex-1 relative z-10">
                {premiumFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-gold-primary/20 border border-gold-primary/50 flex items-center justify-center shrink-0">
                      <svg className="size-2.5 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`font-inter text-sm ${i === 0 ? "text-gold-primary font-semibold" : "text-text-secondary"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="relative z-10 mt-8 w-full bg-gold-primary hover:bg-gold-light text-navy-dark py-3.5 rounded-xl font-inter font-bold text-sm text-center transition-all duration-300 shadow-lg shadow-gold-primary/20 flex items-center justify-center gap-2 group/btn"
              >
                Go Premium
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </Link>

            </div>
          </div>
        </div>

        <p className="text-center font-inter text-xs text-text-secondary/60 mt-8">
          All memberships are one-time fees. No hidden charges. No monthly subscriptions.
        </p>

      </div>
    </section>
  );
}