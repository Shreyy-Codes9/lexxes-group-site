"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = {
  Services:[
    { label: "Tourism", href: "/services/tourism" },
    { label: "Real Estate", href: "/services/real-estate" },
    { label: "Stock Market", href: "/services/stock-market" },
  ],
  Company:[
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Members:[
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
    { label: "Dashboard", href: "/dashboard" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ink overflow-hidden">
      
      {/* ── TOP — BIG NAME + LINKS ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-20">

          {/* Left — Brand */}
          <div className="shrink-0 flex flex-col items-start">
            {/* Reduced the clamp slightly so it's elegant, not overpowering */}
            <h2 className="font-soria text-[clamp(3rem,8vw,6.5rem)] text-base-white leading-[0.9] tracking-tight">
              Lexxes
              <br />
              <span className="text-gold-primary italic pr-4">Group.</span>
            </h2>
            <div className="flex items-center gap-3 mt-6">
              <div className="h-px w-8 bg-gold-primary/50" />
              <p className="font-inter text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
                Be Your Own Boss
              </p>
            </div>
          </div>

          {/* Right — Nav links */}
          {/* Changed to 2 cols on mobile, 3 on tablet+ to prevent squishing */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 pb-2 w-full lg:w-auto">
            {Object.entries(links).map(([title, items]) => (
              <div key={title} className="flex flex-col gap-4">
                <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-primary">
                  {title}
                </p>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-2 font-inter text-sm text-white/40 hover:text-base-white transition-all duration-300"
                      >
                        {/* Sleek animated line on hover */}
                        <span className="w-0 h-px bg-gold-primary transition-all duration-300 group-hover:w-3" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ELEGANT GRADIENT DIVIDER ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
      </div>

      {/* ── BOTTOM BAR ── */}
      {/* Used balanced flex-1 columns for perfect alignment */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        
        {/* Copyright */}
        <div className="w-full md:flex-1 text-center md:text-left">
          <p className="font-inter text-[10px] uppercase tracking-widest text-white/30">
            © {new Date().getFullYear()} Lexxes Group · Mumbai, India
          </p>
        </div>

        {/* Call to Action */}
        <div className="w-full md:flex-1 flex justify-center">
          <Link
            href="/register"
            className="group flex items-center gap-2 font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-gold-primary hover:text-gold-light transition-all duration-300"
          >
            Join Now
            <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-gold-primary/10 group-hover:bg-gold-primary/20 transition-colors duration-300">
              <ArrowUpRight 
                size={12} 
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" 
              />
            </span>
          </Link>
        </div>

        {/* Legal Links */}
        <div className="w-full md:flex-1 flex justify-center md:justify-end gap-6">
          <Link 
            href="/privacy" 
            className="font-inter text-[10px] uppercase tracking-widest text-white/30 hover:text-white/70 transition-colors duration-300"
          >
            Privacy
          </Link>
          <Link 
            href="/terms" 
            className="font-inter text-[10px] uppercase tracking-widest text-white/30 hover:text-white/70 transition-colors duration-300"
          >
            Terms
          </Link>
        </div>

      </div>
    </footer>
  );
}