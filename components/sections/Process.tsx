import React from "react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Register Online",
    description: "Create your account and fill in your basic details. Takes under 2 minutes.",
    icon: (
      <svg className="size-5 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Choose Your Package",
    description: "Pick Starter at ₹3,000 for Goa rewards or Premium at ₹30,000 for Switzerland.",
    icon: (
      <svg className="size-5 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Access All Services",
    description: "Instantly unlock Tred India, Alliance Real Estate, and Travel Asia — all in one.",
    icon: (
      <svg className="size-5 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Grow Your Network",
    description: "Invite others, grow your income. Financial freedom built on your own terms.",
    icon: (
      <svg className="size-5 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="relative bg-navy-dark py-24 overflow-hidden">
      
      {/* MATCHING GRID PATTERN (Simple, no gradient) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern-process"
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
          <rect width="100%" height="100%" fill="url(#grid-pattern-process)" />
        </svg>
      </div>

      <div className="container-main relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-gold-primary/30 bg-navy-secondary rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
              <span className="font-inter text-xs tracking-[0.3em] text-gold-primary uppercase font-bold">
                How It Works
              </span>
            </div>
            <h2 className="font-playfair font-bold text-text-primary text-4xl md:text-5xl leading-tight">
              Four Steps To{" "}
              {/* Removed text gradient */}
              <span className="text-gold-primary">
                Financial Freedom.
              </span>
            </h2>
          </div>
          <Link
            href="/network"
            className="group shrink-0 self-start md:self-auto bg-gold-primary hover:bg-gold-light text-navy-dark px-6 py-3 rounded-xl font-inter font-bold text-sm flex items-center gap-2 transition-all duration-300 shadow-md shadow-gold-primary/20"
          >
            Join Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-navy-border bg-navy-secondary hover:border-gold-primary/30 transition-all duration-400 overflow-hidden p-6 hover:-translate-y-1"
            >
              {/* Hover bottom line - Solid Gold */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold-primary group-hover:w-full transition-all duration-600" />

              {/* Number + icon row */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-playfair text-5xl font-bold text-gold-primary/15 group-hover:text-gold-primary/25 transition-colors duration-300 leading-none">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-lg border border-gold-primary/20 bg-gold-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
                  {step.icon}
                </div>
              </div>

              {/* Divider */}
              <div className="w-8 h-[1px] bg-gold-primary/30 mb-4" />

              {/* Text */}
              <h3 className="font-playfair text-lg font-bold text-text-primary leading-snug">
                {step.title}
              </h3>
              <p className="font-inter text-sm text-text-secondary mt-2 leading-relaxed">
                {step.description}
              </p>

            </div>
          ))}
        </div>

        {/* Connector dots — desktop only - Removed gradient from connector */}
        <div className="hidden lg:flex items-center justify-between px-[12.5%] mt-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex-1 flex items-center gap-1 justify-center">
              <div className="w-1 h-1 rounded-full bg-gold-primary/40" />
              <div className="flex-1 h-[1px] bg-gold-primary/20" />
              <div className="w-1 h-1 rounded-full bg-gold-primary/40" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}