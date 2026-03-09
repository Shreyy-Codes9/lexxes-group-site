import React from "react";
import { ArrowRight } from "lucide-react";

const STATS_DATA = [
  { value: "₹3,000", label: "Starter Package" },
  { value: "₹30,000", label: "Premium Package" },
  { value: "3", label: "Core Services" },
  { value: "Nagpur", label: "Headquarters" },
];

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-navy-dark pt-20 lg:pt-32"
    >
      {/* SIMPLE PATTERN BACKGROUND (No Gradients) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern"
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
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT */}
          <header className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-3 border border-gold-primary/30 bg-navy-secondary rounded-full px-5 py-2 mb-8">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-gold-primary" />
              <span className="font-inter text-xs tracking-[0.3em] text-gold-primary uppercase font-bold">
                Who We Are
              </span>
            </div>

            <h2
              id="about-heading"
              className="font-playfair font-black leading-[0.95] text-text-primary tracking-tight"
            >
              <span className="block text-6xl md:text-8xl xl:text-9xl italic">
                Be Your
              </span>
              <span className="block text-6xl md:text-8xl xl:text-9xl">
                Own
              </span>
              {/* Removed gradient from text to keep it consistent with "simple/no gradient" request */}
              <span className="block text-7xl md:text-9xl xl:text-[10rem] text-gold-primary mt-2 drop-shadow-sm">
                Boss.
              </span>
            </h2>

            <div className="mt-10 w-32 h-[3px] bg-gold-primary" />
          </header>

          {/* RIGHT */}
          <div className="flex flex-col justify-center h-full pt-4 lg:pt-24">
            <p className="font-inter text-xl md:text-2xl text-text-primary font-medium leading-snug">
              Lexxes Group exists to make that possible. We are a movement of
              ambitious individuals in Nagpur and beyond.
            </p>

            <div className="space-y-6 mt-8">
              <p className="font-inter text-lg text-text-secondary leading-relaxed">
                We are united by one core belief:{" "}
                <span className="text-gold-light font-semibold">
                  financial freedom is not a privilege, it is a right.
                </span>{" "}
                Through a unique ecosystem of education and investment, we
                bridge the gap between where you are and where you deserve to be.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex flex-col gap-2 border-l-2 border-gold-primary/20 pl-4">
                  <h4 className="text-text-primary font-bold uppercase text-xs tracking-widest">
                    Our Mission
                  </h4>
                  <p className="text-text-secondary text-sm">
                    To democratize wealth creation through actionable insights.
                  </p>
                </div>

                <div className="flex flex-col gap-2 border-l-2 border-gold-primary/20 pl-4">
                  <h4 className="text-text-primary font-bold uppercase text-xs tracking-widest">
                    Our Vision
                  </h4>
                  <p className="text-text-secondary text-sm">
                    Empowering 10,000+ families to achieve lifetime independence.
                  </p>
                </div>
              </div>

              <button className="group inline-flex items-center gap-3 text-gold-primary font-bold text-sm uppercase tracking-widest mt-6 hover:text-gold-light transition-colors">
                Learn our story
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="mt-20 lg:mt-24 lg:mb-2 w-full bg-navy-secondary border-t border-navy-border py-12 lg:py-8 relative z-10">
        <div className="container-main">
          <dl className="grid grid-cols-2 gap-y-12 md:gap-y-0 md:flex md:flex-row md:items-center md:justify-around text-center w-full">
            {STATS_DATA.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center justify-center">
                  <dt className="order-2 font-inter text-xs md:text-sm lg:text-base uppercase tracking-[0.2em] text-text-secondary mt-3 md:mt-4">
                    {stat.label}
                  </dt>
                  <dd className="order-1 font-playfair text-4xl lg:text-5xl font-bold text-gold-primary">
                    {stat.value}
                  </dd>
                </div>
                {index !== STATS_DATA.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden md:block w-px h-16 bg-navy-border/50"
                  />
                )}
              </React.Fragment>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}