"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Building2, Plane, Target, Eye, Heart } from "lucide-react";

const stats = [
  { value: "500+", label: "Active Members" },
  { value: "3", label: "Business Verticals" },
  { value: "₹3K", label: "Starting Investment" },
  { value: "2", label: "Travel Destinations" },
];

const services = [
  {
    icon: TrendingUp,
    company: "Tred India",
    title: "Stock Market Education",
    desc: "Expert-curated courses, live mentorship and daily market analysis for every level of investor.",
    href: "/services/stock-market",
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-500",
  },
  {
    icon: Building2,
    company: "Alliance Real Estate",
    title: "Premium Properties",
    desc: "Bank auction properties and premium listings at 20–40% below market value across Maharashtra.",
    href: "/services/real-estate",
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "text-emerald-500",
  },
  {
    icon: Plane,
    company: "Travel Asia",
    title: "Reward Travel",
    desc: "Earn all-expenses-paid trips to Goa and Switzerland as you grow with Lexxes Group.",
    href: "/services/tourism",
    color: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-500",
  },
];

const values = [
  { icon: Target, title: "Our Mission", desc: "To give every individual the tools, knowledge and network to achieve financial independence — regardless of their background or starting point." },
  { icon: Eye, title: "Our Vision", desc: "A future where financial freedom is not a privilege of the few, but a reality for anyone willing to learn, grow and take action." },
  { icon: Heart, title: "Our Values", desc: "Integrity, transparency and genuine growth. We succeed only when our members succeed — that is the foundation Lexxes Group is built on." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F5] text-[#1a1a2e] overflow-x-hidden selection:bg-navy-dark selection:text-white">

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeUpReveal {
          0% { opacity: 0; transform: translateY(28px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes shine { 100% { transform: translateX(100%); } }
        .fade-up { animation: fadeUpReveal 1s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
      `}} />

      {/* ══════════════════════════════════════
                          HERO
          ══════════════════════════════════════ */}
      {/* Updated bg-navy-dark and relative for grid */}
      <section className="relative pt-22 min-h-screen flex items-end overflow-hidden bg-navy-dark">

        {/* ── GRID PATTERN BACKGROUND ── */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-hero)" />
          </svg>
        </div>

        {/* Background image */}
        <div className="absolute inset-0">
          <Image src="/heroimg/realestate.png" alt="About Lexxes Group" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-navy-dark/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pb-20 md:pb-28 w-full">
          <div className="fade-up max-w-4xl">
            <p className="font-inter text-[10px] tracking-[0.4em] text-gold-primary/70 uppercase mb-6 font-bold">
              About Us — Lexxes Group
            </p>

            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.0] tracking-tight">
              We Believe in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-[#ffeaab] to-gold-primary italic pr-4">
                Financial Freedom.
              </span>
            </h1>

            <p className="fade-up delay-1 font-inter text-base md:text-xl text-white/60 max-w-2xl font-light leading-relaxed mb-10">
              Lexxes Group is a Nagpur-based network organization founded on a simple belief — financial freedom is not a privilege. It is a right. We give people the tools, knowledge and community to make it happen.
            </p>

            <div className="fade-up delay-2 grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-2xl">
              {[
                { label: "Founded", value: "2024", sub: "Nagpur, Maharashtra" },
                { label: "Members", value: "500+", sub: "Across India" },
                { label: "Verticals", value: "3", sub: "Stock, Property, Travel" },
              ].map((f) => (
                <div key={f.label} className="px-5 py-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-inter text-[10px] uppercase tracking-widest text-white/40 mb-1">{f.label}</p>
                  <p className="font-playfair text-2xl font-bold text-gold-primary">{f.value}</p>
                  <p className="font-inter text-[10px] text-white/40 mt-0.5">{f.sub}</p>
                </div>
              ))}
            </div>

            <div className="fade-up delay-3 flex flex-col sm:flex-row gap-4">
              <Link href="/register"
                className="group relative flex items-center justify-center gap-3 bg-gold-primary text-navy-dark px-8 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl shadow-[0_4px_20px_rgba(201,168,76,0.3)] overflow-hidden w-fit"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
                <span className="relative z-10">Join Lexxes Group</span>
                <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact"
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl w-fit"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OUR STORY
      ══════════════════════════════════════ */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-4 font-bold flex items-center gap-2">
                <span className="w-4 h-px bg-gold-primary/50" /> Our Story
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-dark mb-6 leading-tight">
                Born in Mumbai.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-amber-600 italic">Built for India.</span>
              </h2>
              <div className="space-y-4 font-inter text-base text-slate-600 font-light leading-relaxed">
                <p>Lexxes Group was founded in Mumbai with a clear mission — to create a platform where ordinary people could access extraordinary opportunities...</p>
                <p>We saw a gap. Millions of Indians wanted to invest, learn and grow — but they lacked the guidance...</p>
                <p>Today we operate three verticals: stock market education through Tred India, real estate investment through Alliance Real Estate, and reward travel through Travel Asia...</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[480px] rounded-3xl overflow-hidden">
                <Image src="/logo.png" alt="Our Story" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                    <p className="font-playfair text-xl font-bold text-white mb-1">
                      "Financial freedom is not a privilege. It is a right."
                    </p>
                    <p className="font-inter text-xs text-white/60 uppercase tracking-widest">— Lexxes Group</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-gold-primary rounded-2xl p-5 shadow-xl shadow-gold-primary/20">
                <p className="font-playfair text-3xl font-bold text-navy-dark">2024</p>
                <p className="font-inter text-[10px] uppercase tracking-widest text-navy-dark/70 mt-0.5">Est. Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MISSION VISION VALUES
      ══════════════════════════════════════ */}
      {/* Updated bg-navy-dark and added grid */}
      <section className="relative py-24 bg-navy-dark text-white overflow-hidden">
        
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-values" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-values)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-14 text-center">
            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-gold-primary/40" /> What Drives Us <span className="w-8 h-px bg-gold-primary/40" />
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">
              Mission. Vision. <span className="text-gold-primary italic">Values.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-primary/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center mb-6 group-hover:bg-gold-primary/20 transition">
                  <item.icon size={20} className="text-gold-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="font-inter text-sm text-white/50 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3 SERVICES OVERVIEW
      ══════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-14 text-center">
            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-gold-primary/40" /> What We Do <span className="w-8 h-px bg-gold-primary/40" />
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-dark">
              Three Ways to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-amber-600 italic">Build Wealth.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {services.map((svc) => (
              <Link
                key={svc.company}
                href={svc.href}
                className={`group p-8 rounded-2xl border ${svc.color} hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                  <svc.icon size={22} className={svc.iconColor} />
                </div>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-navy-dark mb-1">{svc.company}</h3>
                <p className="font-inter text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">{svc.title}</p>
                <p className="font-inter text-sm text-slate-500 font-light leading-relaxed mb-8 flex-grow">{svc.desc}</p>
                <div className="flex items-center gap-2 font-inter text-xs font-bold uppercase tracking-widest text-navy-dark group-hover:text-gold-primary transition mt-auto">
                  Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      {/* Updated bg-navy-dark and added grid */}
      <section className="py-28 bg-navy-dark relative overflow-hidden">
        
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-cta" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-cta)" />
          </svg>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[60vw] h-[300px] bg-gold-primary/8 blur-[120px] rounded-full" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 md:px-8 text-center z-10">
          <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-5 font-bold">Join Us</p>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Be Your Own<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-[#ffeaab] to-gold-primary italic pr-4">Boss.</span>
          </h2>
          <p className="font-inter text-base text-white/50 font-light mb-10 max-w-lg mx-auto">
            Join Lexxes Group today and get access to stock market education, real estate deals and travel rewards — all in one membership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="group relative flex items-center justify-center gap-3 bg-gold-primary text-navy-dark px-10 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl shadow-[0_4px_20px_rgba(201,168,76,0.3)] overflow-hidden">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
              <span className="relative z-10">Join Now — From ₹3,000</span>
              <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}