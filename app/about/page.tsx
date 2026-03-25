"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Building2, Plane, Target, Eye, Heart } from "lucide-react";
import * as motion from "framer-motion/client"; // Importing for static-safe rendering

const services =[
  {
    icon: TrendingUp,
    company: "Tred India",
    title: "Stock Market Education",
    desc: "Expert-curated courses, live mentorship and daily market analysis for every level of investor.",
    href: "/services/stock-market",
  },
  {
    icon: Building2,
    company: "Alliance Real Estate",
    title: "Premium Properties",
    desc: "Bank auction properties and premium listings at 20–40% below market value across Maharashtra.",
    href: "/services/real-estate",
  },
  {
    icon: Plane,
    company: "Travel Asia",
    title: "Reward Travel",
    desc: "Earn all-expenses-paid trips to Goa and Switzerland as you grow with Lexxes Group.",
    href: "/services/tourism",
  },
];

const values =[
  { icon: Target, title: "Our Mission", desc: "To give every individual the tools, knowledge and network to achieve financial independence — regardless of their background or starting point." },
  { icon: Eye,    title: "Our Vision",  desc: "A future where financial freedom is not a privilege of the few, but a reality for anyone willing to learn, grow and take action." },
  { icon: Heart,  title: "Our Values",  desc: "Integrity, transparency and genuine growth. We succeed only when our members succeed — that is the foundation Lexxes Group is built on." },
];

// Setting Y to 0 and opacity to 1 immediately to remove "pop-in" effect
const fadeUp = {
  hidden:  { opacity: 1, y: 0 }, 
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden:  { opacity: 1 },
  visible: { opacity: 1 },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen mb-4 bg-base text-ink overflow-x-hidden selection:bg-ink selection:text-base-white">

      {/* ══════════════════════════════════════
          HERO (RAW IMAGE, NO OVERLAYS)
      ══════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-[85vh] flex items-center overflow-hidden">

        {/* Pure Background image - No gradients, no overlays, no opacity filters */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/heroimg/tour.png" 
            alt="About Lexxes Group" 
            fill 
            className="object-cover" 
            priority 
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
          {/* Using initial="visible" to force static state */}
          <motion.div variants={staggerContainer} initial="visible" animate="visible" className="max-w-4xl">

            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8 drop-shadow-md">
              <span className="w-12 h-px bg-gold-primary" />
              <p className="font-inter text-[10px] md:text-xs tracking-[0.4em] text-gold-primary uppercase font-bold drop-shadow-md">
                About Us — Lexxes Group
              </p>
            </motion.div>

            {/* Added drop-shadow-2xl to ensure text is readable over the raw background image */}
            <motion.h1 variants={fadeUp} className="font-family-soria text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-base-white mb-8 leading-[1.05] tracking-tight drop-shadow-2xl">
              We Believe in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-gold-light to-gold-primary italic inline-block pr-4 pb-2 drop-shadow-lg">
                Financial Freedom.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="font-inter text-base md:text-lg lg:text-xl text-base-white max-w-2xl font-medium leading-relaxed mb-14 drop-shadow-lg">
              Lexxes Group is a Mumbai-based network organization founded on a simple belief — financial freedom is not a privilege. It is a right. We give people the tools, knowledge and community to make it happen.
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5 mb-14 max-w-xl">
              {[
                { label: "Founded", value: "2024", sub: "Mumbai, Maharashtra" },
                { label: "Verticals", value: "3",    sub: "Stock, Property, Travel" },
              ].map((f) => (
                <div key={f.label} className="group px-6 py-6 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-md hover:bg-black/60 hover:border-gold-primary/50 transition-all duration-500 shadow-xl">
                  <p className="font-inter text-[10px] uppercase tracking-widest text-white/70 mb-3 font-bold group-hover:text-gold-primary transition-colors">{f.label}</p>
                  <p className="font-family-soria text-4xl font-bold text-white group-hover:text-gold-primary transition-colors">{f.value}</p>
                  <p className="font-inter text-[11px] text-white/70 mt-2">{f.sub}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5">
              <Link href="/register"
                className="group relative flex items-center justify-center gap-3 bg-gold-primary text-ink px-9 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl shadow-[0_4px_20px_rgba(201,168,76,0.5)] overflow-hidden w-fit hover:bg-gold-dark hover:scale-105"
              >
                <span className="relative z-10">Join Lexxes Group</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact"
                className="flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 border border-white/20 text-white px-9 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl backdrop-blur-md w-fit hover:border-white/40 shadow-xl"
              >
                Contact Us
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OUR STORY
      ══════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-base-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <motion.div
              initial="visible" animate="visible"
              variants={staggerContainer}
            >
              <motion.p variants={fadeUp} className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-6 font-bold flex items-center gap-4">
                <span className="w-8 h-px bg-gold-primary" /> Our Story
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-family-soria text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-[1.1]">
                Born in Mumbai.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-dark italic inline-block">Built for India.</span>
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-6 font-inter text-base text-ink-secondary font-light leading-relaxed">
                <p>Lexxes Group was founded in Mumbai with a clear mission — to create a platform where ordinary people could access extraordinary opportunities. We believe that the traditional paths to wealth are often gated, keeping the majority out.</p>
                <p>We saw a gap. Millions of Indians wanted to invest, learn and grow — but they lacked the guidance, the network, and the capital to start. We built Lexxes to be that bridge.</p>
                <p>Today we operate three verticals: stock market education through Tred India, real estate investment through Alliance Real Estate, and reward travel through Travel Asia. All designed to work together to accelerate your financial journey.</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="visible" animate="visible"
              className="relative"
            >
              <div className="relative h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image src="/logo.png" alt="Our Story" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-base-white/10 backdrop-blur-xl border border-base-white/20 rounded-2xl p-8 shadow-2xl">
                    <p className="font-family-soria text-2xl font-bold text-base-white mb-3 leading-snug">
                      "Financial freedom is not a privilege. It is a right."
                    </p>
                    <p className="font-inter text-[10px] text-gold-primary uppercase tracking-widest font-bold">— Lexxes Group</p>
                  </div>
                </div>
              </div>

              {/* Circular floating badge */}
              <div className="absolute -top-8 -right-8 lg:-right-12 bg-gold-primary rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl shadow-gold-primary/20 border-4 border-base-white">
                <p className="font-family-soria text-3xl font-bold text-ink">2024</p>
                <p className="font-inter text-[9px] uppercase tracking-widest text-ink/70 mt-1 font-bold">Est. Mumbai</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MISSION VISION VALUES
      ══════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-ink text-base-white overflow-hidden">

        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-values" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-values)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

          <motion.div
            initial="visible" animate="visible"
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeUp} className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-4 font-bold flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-gold-primary/40" /> What Drives Us <span className="w-12 h-px bg-gold-primary/40" />
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-family-soria text-4xl md:text-5xl lg:text-6xl font-bold">
              Mission. Vision. <span className="text-gold-primary italic">Values.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="visible" animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {values.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="p-10 rounded-[2rem] bg-base-white/5 border border-base-white/10 hover:border-gold-primary/30 transition-all duration-500 group backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center mb-8 group-hover:bg-gold-primary transition-colors duration-500">
                    <item.icon size={24} className="text-gold-primary group-hover:text-ink transition-colors duration-500" />
                  </div>
                  <h3 className="font-family-soria text-2xl lg:text-3xl font-bold text-base-white mb-4">{item.title}</h3>
                  <p className="font-inter text-sm text-base-white/50 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          3 SERVICES OVERVIEW
      ══════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-base-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <motion.div
            initial="visible" animate="visible"
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeUp} className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-4 font-bold flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-gold-primary/40" /> What We Do <span className="w-12 h-px bg-gold-primary/40" />
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-family-soria text-4xl md:text-5xl lg:text-6xl font-bold text-ink">
              Three Ways to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-dark italic">Build Wealth.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="visible" animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {services.map((svc) => (
              <motion.div key={svc.company} variants={fadeUp} className="h-full">
                <Link
                  href={svc.href}
                  className="group block h-full p-10 rounded-[2rem] bg-base border border-border hover:border-gold-primary/50 hover:shadow-2xl hover:shadow-gold-primary/5 transition-all duration-500 flex flex-col relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="w-14 h-14 rounded-2xl bg-base-white border border-border flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-gold-primary/10 group-hover:border-gold-primary/20 transition-all duration-500 flex-shrink-0 relative z-10">
                    <svc.icon size={24} className="text-ink-secondary group-hover:text-gold-primary transition-colors duration-500" />
                  </div>

                  <h3 className="font-family-soria text-2xl lg:text-3xl font-bold text-ink mb-2 relative z-10">{svc.company}</h3>
                  <p className="font-inter text-[10px] font-bold uppercase tracking-widest text-gold-primary mb-6 relative z-10">{svc.title}</p>
                  <p className="font-inter text-sm text-ink-secondary font-light leading-relaxed mb-10 flex-grow relative z-10">{svc.desc}</p>

                  <div className="flex items-center gap-3 font-inter text-xs font-bold uppercase tracking-widest text-ink group-hover:text-gold-primary transition-colors mt-auto relative z-10">
                    Learn More
                    <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-gold-primary group-hover:bg-gold-primary group-hover:text-ink transition-all duration-300">
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section className="py-32 bg-ink relative overflow-hidden">

        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-cta" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-cta)" />
          </svg>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80vw] max-w-3xl h-[300px] bg-gold-primary/10 blur-[120px] rounded-full" />
        </div>

        <motion.div
          initial="visible" animate="visible"
          variants={staggerContainer}
          className="relative max-w-3xl mx-auto px-6 md:px-8 text-center z-10"
        >
          <motion.p variants={fadeUp} className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-6 font-bold">Join Us</motion.p>
          <motion.h2 variants={fadeUp} className="font-family-soria text-5xl md:text-6xl lg:text-7xl font-bold text-base-white mb-8 leading-tight">
            Be Your Own<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-gold-light to-gold-primary italic pr-4">Boss.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-inter text-base md:text-lg text-base-white/50 font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Join Lexxes Group today and get access to stock market education, real estate deals and travel rewards — all in one membership.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register"
              className="group relative flex items-center justify-center gap-3 bg-gold-primary text-ink px-10 py-5 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl shadow-[0_4px_20px_rgba(201,168,76,0.3)] overflow-hidden hover:bg-gold-dark"
            >
              <span className="relative z-10">Join Now — From ₹4,600</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact"
              className="flex items-center justify-center gap-2 bg-base-white/5 hover:bg-base-white/10 border border-base-white/10 text-base-white px-10 py-5 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

      </section>

    </main>
  );
}