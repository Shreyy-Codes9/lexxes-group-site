"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Plane, Building, TrendingUp } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Goa, India",
    category: "Tourism",
    tag: "Starter Package",
    description: "Earn all-expenses-paid trips as you grow with Lexxes Group.",
    price: "₹4,600",
    img: "/heroimg/tour.png",
    icon: Plane,
    link: "/services/tourism"
  },
  {
    id: "02",
    title: "Zurich, Switzerland",
    category: "Premium Travel",
    tag: "Premium Package",
    description: "Experience snow-capped peaks & alpine luxury in Europe.",
    price: "₹30,000",
    img: "/pageimages/tourism/switzerland.png",
    icon: Plane,
    link: "/services/tourism"
  },
  {
    id: "03",
    title: "Alliance Real Estate",
    category: "Wealth & Property",
    tag: "Investment",
    description: "Bank auction & premium property listings at unbeatable prices across Maharashtra.",
    price: "Explore",
    img: "/pageimages/realestate/house2.png",
    icon: Building,
    link: "/services/real-estate"
  },
  {
    id: "04",
    title: "Tred India",
    category: "Stock Market",
    tag: "Education",
    description: "Master the markets with expert courses, live mentorship, and real-time insights.",
    price: "Learn",
    img: "/pageimages/stockmarket/lapy.png",
    icon: TrendingUp,
    link: "/services/stock-market"
  }
];

export default function FeaturedServices() {
  return (
    <section className="bg-base text-ink relative overflow-visible">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">

        {/* ── LEFT STICKY COLUMN ── */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit z-10">

          <p className="label-upper mb-4">
            What We Offer
          </p>

          <h2 className="font-soria text-6xl sm:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.85]  uppercase text-ink">
            Three<br />Ways To<br />
            <span className="italic text-gold-dark">Grow.</span>
          </h2>

          <p className="text-ink-secondary text-sm mb-12 max-w-md">
            A curated path to travel, invest, and grow — designed for those who want more than just income.
          </p>

          <Link
            href="/contact"
            className="group relative flex h-14 w-64 items-center justify-center overflow-hidden rounded-full border border-ink bg-white transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
          >
            {/* 1. Background Fill (Wipes up from the bottom) */}
            <span
              className="absolute inset-0 translate-y-full bg-ink transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"
              aria-hidden="true"
            />

            {/* Content Wrapper to align text and icon together */}
            <span className="relative z-10 flex items-center justify-center gap-2">

              {/* 2. Text Roll Container */}
              <span className="relative flex h-4 flex-col overflow-hidden">
                {/* Outgoing Text (Pushes up and out) */}
                <span className="flex h-full items-center font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-ink transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                  Join Now & Earn
                </span>
                {/* Incoming Text (Follows the background wipe up) */}
                <span className="absolute left-0 top-full flex h-full items-center font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                  Join Now & Earn
                </span>
              </span>

              {/* 3. Icon Roll Container */}
              <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
                {/* Outgoing Arrow (Shoots diagonally Up & Right) */}
                <ArrowRight
                  size={16}
                  className="absolute text-ink transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-5 group-hover:translate-x-5"
                />
                {/* Incoming Arrow (Flies in diagonally from Bottom & Left) */}
                <ArrowRight
                  size={16}
                  className="absolute -translate-x-5 translate-y-5 text-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </span>

            </span>
          </Link>
        </div>

        {/* ── RIGHT SCROLLING CARDS ── */}
        <div className="lg:w-2/3 flex flex-col gap-8 md:gap-12 pb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={service.link}
                className="group block bg-base-white rounded-[2rem] p-4 md:p-6 shadow-[0_8px_32px_rgba(1,24,64,0.05)] border border-border hover:shadow-[0_16px_48px_rgba(1,24,64,0.1)] transition-all duration-500 sticky will-change-transform"
                style={{ top: `calc(5rem + ${index * 2.5}rem)` }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-[1.5rem] aspect-[16/9] md:aspect-[2/1] mb-6 md:mb-8 bg-base-secondary">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Floating Pill */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-base-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm border border-border/50">
                    <Icon size={14} className="text-gold-primary" />
                    <span className="font-inter text-[10px] font-bold uppercase tracking-wider text-ink pt-0.5">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="px-2 md:px-4 pb-2 md:pb-3 flex flex-col md:flex-row md:items-end justify-between gap-6 bg-base-white">

                  {/* Title & Description */}
                  <div className="max-w-md">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-inter text-sm font-bold text-ink-light">{service.id}</span>
                      <h3 className="font-soria text-3xl md:text-4xl tracking-tight text-ink">
                        {service.title}
                      </h3>
                    </div>
                    <p className="font-inter text-sm font-medium text-ink-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Price & Action Button */}
                  <div className="flex items-center justify-between md:flex-col md:items-end gap-4 shrink-0">
                    <div className="flex flex-col md:items-end">
                      <span className="label-upper !tracking-widest !text-[9px] mb-1 opacity-70">
                        {service.tag}
                      </span>
                      <span className="font-inter text-lg md:text-xl font-bold text-gold-primary">
                        {service.price}
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-ink group-hover:bg-ink group-hover:border-ink group-hover:text-base-white transition-colors duration-300">
                      <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}