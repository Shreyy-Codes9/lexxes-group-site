"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Building2, TrendingUp, ShieldCheck, Users, ChevronLeft, ChevronRight, Check, Star, Phone } from "lucide-react";

const heroSlides = [
  { img: "/heroimg/realestate.png", place: "Mumbai, Maharashtra", label: "Bank Auction Properties" },
  { img: "/heroimg/realestate.png", place: "Pune, Maharashtra", label: "Premium Listings" },
  { img: "/heroimg/realestate.png", place: "Mumbai, Maharashtra", label: "Investment Consultation" },
];

const properties = [
  {
    img: "/heroimg/realestate.png",
    title: "3BHK Bank Auction Flat",
    location: "Mumbai, Maharashtra",
    price: "₹28,00,000",
    original: "₹45,00,000",
    discount: "38% below market",
    tag: "Bank Auction",
    details: ["1,200 sq ft", "3 BHK", "Ready to Move", "2nd Floor"],
  },
  {
    img: "/heroimg/realestate.png",
    title: "Premium 2BHK Apartment",
    location: "Wardha Road, Mumbai",
    price: "₹42,00,000",
    original: null,
    discount: null,
    tag: "Premium",
    details: ["950 sq ft", "2 BHK", "New Construction", "Gated Society"],
  },
  {
    img: "/heroimg/realestate.png",
    title: "Commercial Office Space",
    location: "Civil Lines, Mumbai",
    price: "₹65,00,000",
    original: "₹85,00,000",
    discount: "24% below market",
    tag: "Bank Auction",
    details: ["2,100 sq ft", "Commercial", "Ground Floor", "Main Road"],
  },
  {
    img: "/heroimg/realestate.png",
    title: "Residential Plot",
    location: "Hingna, Mumbai",
    price: "₹18,00,000",
    original: null,
    discount: null,
    tag: "Investment",
    details: ["1,800 sq ft", "Plot", "RERA Approved", "Clear Title"],
  },
  {
    img: "/heroimg/realestate.png",
    title: "4BHK Bank Auction Villa",
    location: "Amravati Road, Mumbai",
    price: "₹55,00,000",
    original: "₹90,00,000",
    discount: "39% below market",
    tag: "Bank Auction",
    details: ["2,800 sq ft", "4 BHK", "Independent Villa", "Corner Plot"],
  },
  {
    img: "/heroimg/realestate.png",
    title: "Studio Apartment",
    location: "Dharampeth, Mumbai",
    price: "₹22,00,000",
    original: null,
    discount: null,
    tag: "Premium",
    details: ["450 sq ft", "Studio", "Furnished", "City View"],
  },
];

const steps = [
  { step: "01", title: "Join as Member", desc: "Register with Lexxes Group to get exclusive access to bank auction listings and premium properties." },
  { step: "02", title: "Browse Listings", desc: "Explore verified property listings — bank auctions, premium homes and investment plots." },
  { step: "03", title: "Due Diligence", desc: "Our team verifies all legal documents, title deeds and property records before you invest." },
  { step: "04", title: "Own Your Property", desc: "Complete the purchase with our guided support and step into your new asset." },
];

const whyUs = [
  { icon: Building2, title: "Bank Auction Access", desc: "Get properties at 20-40% below market value through verified bank auction listings." },
  { icon: ShieldCheck, title: "Legal Verification", desc: "Every property is checked for clear title, RERA compliance and legal documentation." },
  { icon: TrendingUp, title: "Investment Guidance", desc: "Expert advice on which properties offer the best returns for your investment goals." },
  { icon: Users, title: "Member Network", desc: "Leverage the Lexxes network to find deals before they hit the open market." },
];

const INTERVAL = 5000;

export default function RealEstatePage() {
  const [current, setCurrent] = useState(0);
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const prev = useCallback(() => setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length), []);
  const next = useCallback(() => setCurrent((p) => (p + 1) % heroSlides.length), []);

  const tags = ["All", "Bank Auction", "Premium", "Investment"];
  const filtered = activeTag === "All" ? properties : properties.filter((p) => p.tag === activeTag);

  return (
    <main className="min-h-screen pt-11 bg-[#F8F7F5] text-[#1a1a2e] overflow-x-hidden selection:bg-navy-dark selection:text-white">

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUpReveal {
          0% { opacity: 0; transform: translateY(28px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes shine { 100% { transform: translateX(100%); } }
        @keyframes fillBar { 0% { width: 0%; } 100% { width: 100%; } }
        .fade-up { animation: fadeUpReveal 1s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .bar-fill { animation: fillBar 5000ms linear forwards; }
      `}} />

      {/* ══════════════════════════════════════
          HERO CAROUSEL
      ══════════════════════════════════════ */}
      <section className="relative  h-screen min-h-[640px] overflow-hidden">

        {heroSlides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${current === i ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
            <Image src={slide.img} alt={slide.place} fill priority={i === 0}
              className={`object-cover transition-transform ease-out ${current === i ? "scale-[1.05] duration-[12000ms]" : "scale-100 duration-1000"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/95 via-[#0a0f1e]/40 to-[#0a0f1e]/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/80 via-transparent to-transparent" />
          </div>
        ))}

        {/* Navbar spacer */}
        <div className="relative z-20 h-20" />

        {/* Content */}
        <div className="relative z-20 h-[calc(100%-5rem)] flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
          <div key={`slide-${current}`}>

            {/* Company name block */}
            <div className="fade-up mb-5">
              <p className="font-inter text-xs font-bold tracking-[0.4em] text-gold-primary/70 uppercase mb-2">
                Lexxes Group Presents
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-playfair text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Alliance Real Estate
                </span>
                <span className="w-px h-8 bg-gold-primary/40" />
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-primary/30 bg-gold-primary/10">
                  <Building2 size={12} className="text-gold-primary" />
                  <span className="font-inter text-[10px] font-bold tracking-[0.2em] text-gold-primary uppercase">
                    Property Division
                  </span>
                </div>
              </div>
            </div>

            <h1 className="fade-up delay-1 font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-[1.0] tracking-tight">
              Own Premium<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-[#ffeaab] to-gold-primary italic pr-4">
                Properties.
              </span>
            </h1>

            <div className="fade-up delay-2 flex items-center gap-2 mb-5">
              <MapPin size={14} className="text-gold-primary" />
              <span className="font-inter text-sm text-white/80 font-medium">{heroSlides[current].place}</span>
              <span className="font-inter text-[10px] text-white/40 uppercase tracking-widest ml-1">— {heroSlides[current].label}</span>
            </div>

            <p className="fade-up delay-2 font-inter text-base md:text-lg text-white/70 max-w-xl font-light mb-8 leading-relaxed">
              Access bank auction properties and premium real estate at unbeatable prices. Guided investment from discovery to ownership.
            </p>

            <div className="fade-up delay-3 flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/register" className="group relative flex items-center justify-center gap-3 bg-gold-primary text-navy-dark px-8 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl shadow-[0_4px_20px_rgba(201,168,76,0.3)] overflow-hidden w-fit">
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
                <span className="relative z-10">View Properties</span>
                <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#listings" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl w-fit">
                Browse Listings
              </a>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-5">
              <button onClick={prev} className="w-9 h-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:border-gold-primary/50 transition text-white/60 hover:text-gold-primary">
                <ChevronLeft size={16} />
              </button>
              <div className="flex items-center gap-2">
                {heroSlides.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className="relative h-[2px] rounded-full overflow-hidden transition-all duration-300" style={{ width: current === i ? 48 : 16, background: "rgba(255,255,255,0.2)" }}>
                    {current === i && <div key={current} className="absolute top-0 left-0 h-full bg-gold-primary bar-fill" />}
                  </button>
                ))}
              </div>
              <button onClick={next} className="w-9 h-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:border-gold-primary/50 transition text-white/60 hover:text-gold-primary">
                <ChevronRight size={16} />
              </button>
              <span className="font-inter text-[10px] text-white/30 uppercase tracking-widest ml-2">
                {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
              </span>
            </div>

          </div>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-0 right-0 z-20 hidden lg:flex items-center gap-10 px-10 py-5 bg-[#0a0f1e]/70 backdrop-blur-xl border-t border-l border-white/5 rounded-tl-2xl">
          {[
            { value: "40%", label: "Below Market" },
            { value: "100%", label: "Verified" },
            { value: "₹18L", label: "Starts From" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-playfair text-xl font-bold text-gold-primary">{s.value}</p>
              <p className="font-inter text-[9px] uppercase tracking-widest text-white/40 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          BANK AUCTION HIGHLIGHT
      ══════════════════════════════════════ */}
      <section className="py-16 bg-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold">Exclusive Access</p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-2">
                Bank Auction Properties — <span className="text-gold-primary italic">Up to 40% Off.</span>
              </h2>
              <p className="font-inter text-sm text-white/50 font-light max-w-lg">
                When banks seize properties for loan defaults, they auction them at significantly reduced prices. Lexxes Group members get first access to these exclusive deals.
              </p>
            </div>
            <div className="flex gap-6 shrink-0">
              {[
                { value: "20–40%", label: "Discount Range" },
                { value: "Legal", label: "100% Verified" },
              ].map((s) => (
                <div key={s.label} className="text-center px-6 py-5 rounded-2xl bg-white/5 border border-white/10">
                  <p className="font-playfair text-2xl font-bold text-gold-primary">{s.value}</p>
                  <p className="font-inter text-[10px] uppercase tracking-widest text-white/40 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROPERTY LISTINGS
      ══════════════════════════════════════ */}
      <section id="listings" className="py-24 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold flex items-center gap-2">
                <span className="w-4 h-px bg-gold-primary/50" /> Property Listings
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a1a2e]">
                Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-amber-600 italic">Properties.</span>
              </h2>
            </div>

            {/* Filter tabs */}
            <div className="flex items-center gap-2 flex-wrap">
              {tags.map((tag) => (
                <button key={tag} onClick={() => setActiveTag(tag)}
                  className={`px-4 py-2 rounded-xl font-inter text-xs font-bold uppercase tracking-wider transition ${
                    activeTag === tag
                      ? "bg-[#1a1a2e] text-white"
                      : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image src={property.img} alt={property.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 to-transparent" />

                  {/* Tags */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`font-inter text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      property.tag === "Bank Auction"
                        ? "bg-red-500/90 text-white"
                        : property.tag === "Premium"
                        ? "bg-gold-primary text-navy-dark"
                        : "bg-emerald-500/90 text-white"
                    }`}>
                      {property.tag}
                    </span>
                    {property.discount && (
                      <span className="font-inter text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/90 text-red-600">
                        {property.discount}
                      </span>
                    )}
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <MapPin size={11} className="text-gold-primary" />
                    <span className="font-inter text-[10px] font-bold text-white uppercase tracking-wider">{property.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-playfair text-lg font-bold text-[#1a1a2e] mb-1">{property.title}</h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-playfair text-2xl font-bold text-[#1a1a2e]">{property.price}</span>
                    {property.original && (
                      <span className="font-inter text-xs text-slate-400 line-through">{property.original}</span>
                    )}
                  </div>

                  {/* Details pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {property.details.map((d) => (
                      <span key={d} className="font-inter text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                        {d}
                      </span>
                    ))}
                  </div>

                  <Link href="/register" className="group/btn flex items-center justify-center gap-2 w-full py-3 bg-[#1a1a2e] hover:bg-[#2a2a4e] text-white rounded-xl font-inter font-bold text-xs uppercase tracking-widest transition">
                    Enquire Now
                    <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="font-inter text-sm text-slate-400 mb-4">More properties available exclusively for Lexxes Group members.</p>
            <Link href="/register" className="group inline-flex items-center gap-2 font-inter text-sm font-bold uppercase tracking-widest text-gold-primary hover:text-amber-600 transition border-b border-gold-primary/30 hover:border-amber-600/50 pb-0.5">
              Join to See All Listings <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════ */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-14">
            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold">Process</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a1a2e]">
              From Search to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-amber-600 italic">Ownership.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.step} className="relative p-7 rounded-2xl bg-[#F8F7F5] border border-slate-100 hover:border-gold-primary/30 hover:shadow-sm transition-all duration-300 group">
                <div className="absolute -top-3 -right-2 font-playfair font-black text-7xl text-slate-100 leading-none select-none group-hover:text-gold-primary/10 transition">
                  {step.step}
                </div>
                <p className="font-inter text-[10px] font-bold uppercase tracking-widest text-gold-primary/60 mb-3">{step.step}</p>
                <h3 className="font-playfair text-lg font-bold text-[#1a1a2e] mb-2">{step.title}</h3>
                <p className="font-inter text-sm text-slate-500 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY INVEST WITH US
      ══════════════════════════════════════ */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-14 text-center">
            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-gold-primary/40" /> Why Alliance Real Estate <span className="w-8 h-px bg-gold-primary/40" />
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a1a2e]">
              Why Invest <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-amber-600 italic">With Us?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="p-7 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center group">
                <div className="w-12 h-12 rounded-2xl bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-primary/20 transition">
                  <item.icon size={20} className="text-gold-primary" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
                <p className="font-inter text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </div>
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
          <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-5 font-bold">Get Started</p>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your dream property<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-[#ffeaab] to-gold-primary italic pr-4">is waiting.</span>
          </h2>
          <p className="font-inter text-base text-white/50 font-light mb-10 max-w-lg mx-auto">
            Join Lexxes Group to access exclusive bank auction properties and premium real estate listings across Maharashtra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="group relative flex items-center justify-center gap-3 bg-gold-primary text-navy-dark px-10 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl shadow-[0_4px_20px_rgba(201,168,76,0.3)] overflow-hidden">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
              <span className="relative z-10">Join & View Properties</span>
              <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl">
              <Phone size={14} />
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
