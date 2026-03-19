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

const team = [
  {
    name: "Amit Rangari",
    role: "Founder & CEO",
    desc: "Visionary entrepreneur with a mission to make financial freedom accessible to every Indian.",
    img: null,
  },
  {
    name: "Team Member",
    role: "Stock Market Head",
    desc: "Certified trader and mentor with years of experience in technical analysis and live trading.",
    img: null,
  },
  {
    name: "Team Member",
    role: "Real Estate Head",
    desc: "Property investment specialist with deep expertise in bank auction deals across Maharashtra.",
    img: null,
  },
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
    <main className="min-h-screen pt-20 bg-[#F8F7F5] text-[#1a1a2e] overflow-x-hidden selection:bg-navy-dark selection:text-white">

      <style dangerouslySetInnerHTML={{__html: `
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
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-navy-dark">

        {/* Background image */}
        <div className="absolute inset-0">
          <Image src="/heroimg/realestate.png" alt="About Lexxes Group" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-navy-dark/40" />
        </div>

        {/* Navbar spacer */}
        <div className="absolute top-0 left-0 right-0 h-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pb-20 md:pb-28 w-full">

          <div className="fade-up">
            <p className="font-inter text-[10px] tracking-[0.4em] text-gold-primary/70 uppercase mb-4 font-bold">
              About Us
            </p>
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.0] tracking-tight max-w-4xl">
              We Believe in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-[#ffeaab] to-gold-primary italic pr-4">
                Financial Freedom.
              </span>
            </h1>
            <p className="fade-up delay-1 font-inter text-base md:text-xl text-white/60 max-w-2xl font-light leading-relaxed mb-10">
              Lexxes Group is a Mumbai-based network organization founded on a simple belief — financial freedom is not a privilege. It is a right. We give people the tools, knowledge and community to make it happen.
            </p>
            <div className="fade-up delay-2 flex flex-wrap gap-8 pt-8 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-playfair text-3xl font-bold text-gold-primary">{s.value}</p>
                  <p className="font-inter text-[10px] uppercase tracking-widest text-white/40 mt-1">{s.label}</p>
                </div>
              ))}
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
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6 leading-tight">
                Born in Mumbai.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-amber-600 italic">Built for India.</span>
              </h2>
              <div className="space-y-4 font-inter text-base text-slate-600 font-light leading-relaxed">
                <p>
                  Lexxes Group was founded in Mumbai with a clear mission — to create a platform where ordinary people could access extraordinary opportunities. The kind of opportunities that were previously only available to those with connections, capital or the right circles.
                </p>
                <p>
                  Our founder Amit Rangari saw a gap. Millions of Indians wanted to invest, learn and grow — but they lacked the guidance, the community and the access. Lexxes Group was built to bridge that gap.
                </p>
                <p>
                  Today we operate three verticals: stock market education through Tred India, real estate investment through Alliance Real Estate, and reward travel through Travel Asia. Every vertical serves the same purpose — helping our members build wealth and live better.
                </p>
              </div>
            </div>

            {/* Image / visual block */}
            <div className="relative">
              <div className="relative h-[480px] rounded-3xl overflow-hidden">
                <Image src="/heroimg/stock.png" alt="Our Story" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                    <p className="font-playfair text-xl font-bold text-white mb-1">
                      "Financial freedom is not a privilege. It is a right."
                    </p>
                    <p className="font-inter text-xs text-white/60 uppercase tracking-widest">— Amit Rangari, Founder</p>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
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
      <section className="py-24 bg-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

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
          STATS
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "500+", label: "Active Members", sub: "Across India" },
              { value: "3", label: "Business Verticals", sub: "Stock, Property, Travel" },
              { value: "₹3,000", label: "Starts From", sub: "Starter Package" },
              { value: "100%", label: "Member-First", sub: "We grow when you grow" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-playfair text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-1">{s.value}</p>
                <p className="font-inter text-sm font-bold text-[#1a1a2e] uppercase tracking-wider mb-1">{s.label}</p>
                <p className="font-inter text-xs text-slate-400">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TEAM
      ══════════════════════════════════════ */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="mb-14">
            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold flex items-center gap-2">
              <span className="w-4 h-px bg-gold-primary/50" /> The Team
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a1a2e]">
              The People Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-amber-600 italic">Lexxes Group.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {/* Avatar */}
                <div className="h-48 bg-gradient-to-br from-navy-dark to-[#1a1a2e] relative flex items-center justify-center">
                  {member.img ? (
                    <Image src={member.img} alt={member.name} fill className="object-cover" />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gold-primary/10 border-2 border-gold-primary/30 flex items-center justify-center">
                      <span className="font-playfair text-3xl font-bold text-gold-primary">
                        {member.name[0]}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-[#1a1a2e] mb-1">{member.name}</h3>
                  <p className="font-inter text-[10px] font-bold uppercase tracking-widest text-gold-primary mb-3">{member.role}</p>
                  <p className="font-inter text-sm text-slate-500 font-light leading-relaxed">{member.desc}</p>
                </div>
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
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a1a2e]">
              Three Ways to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-amber-600 italic">Build Wealth.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link key={svc.company} href={svc.href}
                className={`group p-8 rounded-2xl border ${svc.color} hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <svc.icon size={22} className={svc.iconColor} />
                </div>
                <p className="font-inter text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">{svc.company}</p>
                <h3 className="font-playfair text-xl font-bold text-[#1a1a2e] mb-3">{svc.title}</h3>
                <p className="font-inter text-sm text-slate-500 font-light leading-relaxed mb-5">{svc.desc}</p>
                <div className="flex items-center gap-2 font-inter text-xs font-bold uppercase tracking-widest text-[#1a1a2e] group-hover:text-gold-primary transition">
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
      <section className="py-28 bg-[#1a1a2e] relative overflow-hidden">
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
