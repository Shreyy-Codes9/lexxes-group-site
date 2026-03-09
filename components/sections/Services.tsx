import React from "react";
import Link from "next/link";

const services = [
  {
    company: "TRED INDIA",
    title: "Stock Market Education",
    description:
      "Expert curated courses and live mentorship to help you understand and profit from the stock market. Built for beginners and advanced investors alike. Our courses cover everything from basics to advanced trading strategies with live mentorship sessions.",
    badge: "Courses + Mentorship",
    link: "/services/stock-market",
    image: "/heroimg/stock.png",
    large: true,
    icon: (
      <svg className="size-12 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18" />
      </svg>
    ),
  },
  {
    company: "ALLIANCE REAL ESTATE",
    title: "Premium Property Investment",
    description: "Bank auction properties and premium listings at below market prices.",
    badge: "Bank Auction Deals",
    link: "/services/real-estate",
    image: "/heroimg/realestate.png",
    large: false,
    icon: (
      <svg className="size-8 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    company: "TRAVEL ASIA",
    title: "Luxury Travel Rewards",
    description: "Goa for starters. Switzerland for achievers. Your success unlocks the world.",
    badge: "Goa + Switzerland",
    link: "/services/tourism",
    image: "/heroimg/tour.png",
    large: false,
    icon: (
      <svg className="size-8 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-navy-dark py-12 overflow-hidden">
      {/* MATCHING GRID PATTERN */}
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

      <div className="container-main relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="font-inter text-xs tracking-[0.35em] text-gold-primary uppercase">
            What We Offer
          </span>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-text-primary mt-6 leading-tight">
            Three Ways To Build{" "}
            <span className="block text-gold-primary">
              Your Future
            </span>
          </h2>
          <p className="font-inter text-lg text-text-secondary mt-6">
            From learning the markets to owning property and earning travel rewards — Lexxes Group gives you every tool you need.
          </p>
        </div>

        {/* ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ── LARGE LEFT CARD ── */}
          <div className="group relative rounded-3xl overflow-hidden border border-navy-border hover:border-gold-primary/50 transition-all duration-500 row-span-2 min-h-[520px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${services[0].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/40 to-transparent" />
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold-primary group-hover:w-full transition-all duration-700 z-20" />

            <div className="relative z-10 p-10 h-full flex flex-col justify-between min-h-[520px]">
              <div className="flex items-start justify-between">
                <div className="w-16 h-16 rounded-2xl border border-gold-primary/30 bg-black/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {services[0].icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-gold-primary/30 text-[10px] font-bold text-gold-primary uppercase tracking-wider">
                  {services[0].badge}
                </span>
              </div>

              <div>
                <span className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase font-semibold">
                  {services[0].company}
                </span>
                <h3 className="font-playfair text-4xl font-bold text-white mt-2 leading-tight drop-shadow-lg">
                  {services[0].title}
                </h3>
                <p className="font-inter text-sm text-white/70 mt-4 leading-relaxed max-w-sm">
                  {services[0].description}
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center">
                  <Link
                    href={services[0].link}
                    className="font-inter text-sm font-bold text-gold-primary flex items-center gap-2 group/link hover:text-gold-light transition-colors"
                  >
                    Explore{" "}
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── TWO SMALL RIGHT CARDS ── */}
          {services.slice(1).map((service, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden border border-navy-border hover:border-gold-primary/50 transition-all duration-500 hover:-translate-y-1 min-h-[248px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/75 to-navy-dark/30" />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold-primary group-hover:w-full transition-all duration-700 z-20" />

              <div className="relative z-10 p-7 h-full flex flex-col justify-between min-h-[248px]">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl border border-gold-primary/30 bg-black/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-gold-primary/30 text-[10px] font-bold text-gold-primary uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <span className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase font-semibold">
                    {service.company}
                  </span>
                  <h3 className="font-playfair text-2xl font-bold text-white mt-1 drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p className="font-inter text-xs text-white/65 mt-2 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="mt-4 inline-flex font-inter text-sm font-bold text-gold-primary items-center gap-2 group/link hover:text-gold-light transition-colors"
                  >
                    Explore{" "}
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BANNER */}
        <div className="mt-8 relative rounded-3xl overflow-hidden border border-gold-primary/20 bg-navy-dark">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gold-primary/30" />
          <div className="relative z-10 px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <p className="font-inter text-xs tracking-[0.3em] text-gold-primary uppercase mb-3">
                Get Started Today
              </p>
              <h4 className="font-playfair text-3xl md:text-4xl font-bold text-text-primary leading-tight">
                Ready to explore{" "}
                <span className="italic text-gold-primary">
                  all three?
                </span>
              </h4>
              <p className="font-inter text-text-secondary mt-3 text-sm max-w-md">
                Every Lexxes Group member gets full access to Stock Market, Real Estate, and Travel rewards — all in one membership.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/network"
                className="group relative bg-gold-primary hover:bg-gold-light text-navy-dark px-8 py-4 rounded-xl font-inter font-bold text-sm text-center transition-all duration-300 shadow-lg shadow-gold-primary/25 flex items-center justify-center gap-2"
              >
                Join Now
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/services/stock-market"
                className="border border-gold-primary/50 hover:border-gold-primary text-gold-primary hover:bg-gold-primary/10 px-8 py-4 rounded-xl font-inter font-bold text-sm text-center transition-all duration-300 flex items-center justify-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}