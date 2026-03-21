"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Mail, Phone, Circle } from "lucide-react";

const FOOTER_DATA = {
  services: {
    title: "Services",
    links: [
      { label: "Stock Market", href: "/services/stock-market" },
      { label: "Real Estate", href: "/services/real-estate" },
      { label: "Tourism", href: "/services/tourism" },
    ]
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      // { label: "How It Works", href: "/process" },
      // { label: "Join Network", href: "/network" },
      { label: "Contact", href: "/contact" },
    ]
  },
  access: {
    title: "Members",
    links: [
      { label: "Member Login", href: "/login" },
      { label: "Register", href: "/register" },
      { label: "Dashboard", href: "/dashboard" },
    ]
  }
};

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] text-slate-400 overflow-hidden border-t border-white/5">

      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* ── CTA ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-10 gap-6 border-b border-white/5">
          <div>
            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-1">Be Your Own Boss</p>
            <h3 className="font-playfair text-2xl md:text-3xl text-white font-bold">
              Grow. Invest. <span className="text-gold-primary italic">Travel.</span>
            </h3>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-lg bg-gold-primary hover:bg-gold-light text-navy-dark px-6 py-3 font-inter font-bold text-xs uppercase tracking-widest transition-all shrink-0"
          >
            Join Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ── GRID ── */}
        <div className="py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 border-b border-white/5">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1 space-y-4">
            <Link href="/" className="flex items-baseline gap-1 group w-fit">
              <span className="font-playfair text-xl font-bold text-white group-hover:text-gold-light transition">Lexxes</span>
              <span className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
              <span className="font-inter text-[9px] tracking-[0.4em] text-gold-primary uppercase font-black">Group</span>
            </Link>
            <div className="flex flex-col gap-1.5 font-inter text-xs">
              <a href="mailto:contact@lexxesgroup.com" className="hover:text-gold-primary transition truncate">contact@lexxesgroup.com</a>
              <a href="tel:+9270312260" className="hover:text-gold-primary transition">+91 92703 12260</a>
              <span className="text-slate-600">Mumbai, Maharashtra</span>
            </div>
          </div>

          {/* Nav columns */}
          {Object.values(FOOTER_DATA).map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase font-bold">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-inter text-xs text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── BOTTOM ── */}
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-3 border-white/5  font-inter text-[10px] uppercase tracking-widest text-slate-600">
          <span>© {new Date().getFullYear()} Lexxes Group. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <Circle size={4} className="fill-gold-primary text-gold-primary" />
            <span>in Mumbai</span>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gold-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gold-primary transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}