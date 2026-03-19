"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Star, Check, Plane, ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
    {
        img: "/heroimg/tour.png",
        place: "Goa, India",
        label: "Starter Reward — ₹3,000",
    },
    {
        img: "/heroimg/tour2.png",
        place: "Zurich, Switzerland",
        label: "Premium Reward — ₹30,000",
    },
    {
        img: "/heroimg/tour3.png",
        place: "Bali, Indonesia",
        label: "Group Tour",
    },
    {
        img: "/heroimg/tour4.png",
        place: "Dubai, UAE",
        label: "Group Tour",
    },
];

const destinations = [
    { img: "/heroimg/tour.png", place: "Goa, India", tag: "Starter Reward", desc: "Sun, sand & luxury stays on India's most iconic coastline.", highlights: ["5 Days / 4 Nights", "Beach Resort Stay", "Sightseeing Tours", "Group Activities"] },
    { img: "/heroimg/tour2.png", place: "Zurich, Switzerland", tag: "Premium Reward", desc: "Snow-capped peaks, world-class hospitality and alpine luxury.", highlights: ["7 Days / 6 Nights", "5-Star Hotel", "Alps Day Trip", "City Tour"] },
    { img: "/heroimg/tour3.png", place: "Bali, Indonesia", tag: "Group Tour", desc: "Tropical paradise — temples, terraces and turquoise waters.", highlights: ["6 Days / 5 Nights", "Villa Stay", "Temple Visits", "Spa Experience"] },
    { img: "/heroimg/tour4.png", place: "Dubai, UAE", tag: "Group Tour", desc: "Skyline cruises, desert safaris and five-star everything.", highlights: ["5 Days / 4 Nights", "City Hotel", "Desert Safari", "Burj Khalifa"] },
    { img: "/heroimg/tour.png", place: "Bangkok, Thailand", tag: "Group Tour", desc: "Street food, temples, rooftop bars and endless energy.", highlights: ["5 Days / 4 Nights", "Central Hotel", "Temple Tour", "Night Market"] },
    { img: "/heroimg/tour2.png", place: "Maldives", tag: "Premium Reward", desc: "Crystal lagoons, overwater bungalows and total serenity.", highlights: ["5 Days / 4 Nights", "Overwater Villa", "Snorkeling", "Sunset Cruise"] },
];

const packages = [
    {
        name: "Starter Package",
        price: "₹3,000",
        destination: "Goa, India",
        img: "/heroimg/tour.png",
        border: "border-slate-200",
        badge: "bg-amber-100 text-amber-700 border-amber-200",
        includes: ["5 Days / 4 Nights in Goa", "Beach resort accommodation", "Daily breakfast included", "Guided sightseeing tour", "Airport transfers", "Group activities"],
    },
    {
        name: "Premium Package",
        price: "₹30,000",
        destination: "Zurich, Switzerland",
        img: "/heroimg/tour2.png",
        border: "border-gold-primary/30",
        badge: "bg-gold-primary/10 text-gold-primary border-gold-primary/20",
        popular: true,
        includes: ["7 Days / 6 Nights in Switzerland", "5-star hotel accommodation", "All meals included", "Alps day trip & cable car", "Private city tour", "Flight tickets included", "Travel insurance"],
    },
];

const steps = [
    { step: "01", title: "Join Lexxes Group", desc: "Register and choose your starter or premium package to become a member." },
    { step: "02", title: "Grow Your Network", desc: "Refer members, build your downline and unlock travel milestones." },
    { step: "03", title: "Earn Your Trip", desc: "Hit your target and your travel package gets activated automatically." },
    { step: "04", title: "Travel in Style", desc: "Pack your bags — flights, hotels and itinerary are arranged for you." },
];

const INTERVAL = 5000;

export default function TourismPage() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), INTERVAL);
        return () => clearInterval(timer);
    }, []);

    const prev = useCallback(() => setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length), []);
    const next = useCallback(() => setCurrent((p) => (p + 1) % heroSlides.length), []);

    return (
        <main className="min-h-screen pt-10  bg-[#FAFAF8] text-navy-dark overflow-x-hidden selection:bg-gold-primary selection:text-navy-dark">

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeUpReveal {
          0% { opacity: 0; transform: translateY(30px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes shine { 100% { transform: translateX(100%); } }
        @keyframes fillBar { 0% { width: 0%; } 100% { width: 100%; } }
        .fade-up { animation: fadeUpReveal 1s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .bar-fill { animation: fillBar ${INTERVAL}ms linear forwards; }
      `}} />

            {/* ══════════════════════════════════════
    HERO CAROUSEL
══════════════════════════════════════ */}
            <section className="relative h-screen min-h-[640px] overflow-hidden">

                {/* Slides */}
                {heroSlides.map((slide, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${current === i ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                    >
                        <Image
                            src={slide.img}
                            alt={slide.place}
                            fill
                            priority={i === 0}
                            className={`object-cover transition-transform ease-out ${current === i ? "scale-[1.05] duration-[12000ms]" : "scale-100 duration-1000"}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/40 to-[#0a0f1e]/20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/70 via-transparent to-transparent" />
                    </div>
                ))}

                {/* Navbar spacer */}
                <div className="relative z-20 h-20" />

                {/* Content */}
                <div className="relative z-20 h-[calc(100%-5rem)] flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
                    <div key={`slide-${current}`}>

                        {/* Company name — big, prominent */}
                        <div className="fade-up mb-4">
                            <p className="font-inter text-xs font-bold tracking-[0.4em] text-gold-primary/70 uppercase mb-2">
                                Lexxes Group Presents
                            </p>
                            <div className="flex items-center gap-4">
                                <span className="font-playfair text-3xl md:text-4xl font-bold text-white tracking-tight">
                                    Travel Asia
                                </span>
                                <span className="w-px h-8 bg-gold-primary/40" />
                                <span className="font-inter text-sm md:text-base font-bold tracking-[0.2em] text-gold-primary uppercase">
                                    Tourism
                                </span>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-primary/30 bg-gold-primary/10">
                                    <Plane size={13} className="text-gold-primary" />
                                    <span className="font-inter text-[10px] font-bold tracking-[0.2em] text-gold-primary uppercase">
                                        Official Partner
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Heading */}
                        <h1 className="fade-up delay-1 font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-[1.0] tracking-tight">
                            Your Success,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-[#ffeaab] to-gold-primary italic pr-4">
                                Your Reward.
                            </span>
                        </h1>

                        {/* Current destination */}
                        <div className="fade-up delay-2 flex items-center gap-2 mb-6">
                            <MapPin size={14} className="text-gold-primary" />
                            <span className="font-inter text-sm text-white/80 font-medium">{heroSlides[current].place}</span>
                            <span className="font-inter text-[10px] text-white/40 uppercase tracking-widest ml-1">— {heroSlides[current].label}</span>
                        </div>

                        <p className="fade-up delay-2 font-inter text-base md:text-lg text-white/70 max-w-xl font-light mb-8 leading-relaxed">
                            Grow with Lexxes Group and earn all-expenses-paid travel to the world's most stunning destinations.
                        </p>

                        {/* CTAs */}
                        <div className="fade-up delay-3 flex flex-col sm:flex-row gap-4 mb-12">
                            <Link href="/register" className="group relative flex items-center justify-center gap-3 bg-gold-primary text-navy-dark px-8 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl shadow-[0_4px_20px_rgba(201,168,76,0.3)] overflow-hidden w-fit">
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
                                <span className="relative z-10">Join & Earn Rewards</span>
                                <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a href="#packages" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl w-fit">
                                View Packages
                            </a>
                        </div>

                        {/* Progress indicators + arrows */}
                        <div className="flex items-center gap-5">
                            <button onClick={prev} className="w-9 h-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:border-gold-primary/50 transition text-white/60 hover:text-gold-primary">
                                <ChevronLeft size={16} />
                            </button>

                            <div className="flex items-center gap-2">
                                {heroSlides.map((_, i) => (
                                    <button key={i} onClick={() => setCurrent(i)} className="relative h-[2px] rounded-full overflow-hidden transition-all duration-300" style={{ width: current === i ? 48 : 16, background: "rgba(255,255,255,0.2)" }}>
                                        {current === i && (
                                            <div key={current} className="absolute top-0 left-0 h-full bg-gold-primary bar-fill" />
                                        )}
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
                <div className="absolute bottom-0 right-0 z-20 hidden lg:flex items-center gap-10 px-10 py-5 bg-navy-dark/60 backdrop-blur-xl border-t border-l border-white/5 rounded-tl-2xl">
                    {[
                        { value: "2+", label: "Destinations" },
                        { value: "100%", label: "Trip Covered" },
                        { value: "₹3K", label: "Starts From" },
                    ].map((s) => (
                        <div key={s.label} className="text-center">
                            <p className="font-playfair text-xl font-bold text-gold-primary">{s.value}</p>
                            <p className="font-inter text-[9px] uppercase tracking-widest text-white/40 mt-0.5">{s.label}</p>
                        </div>
                    ))}
                </div>

            </section>

            {/* ══════════════════════════════════════
                                 PACKAGES
                ══════════════════════════════════════ */}
            <section id="packages" className="py-24 md:py-32 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6 md:px-8">

                    <div className="mb-16 text-center">
                        <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-4 font-bold flex items-center justify-center gap-2">
                            <span className="w-4 h-px bg-gold-primary/50" /> Reward Packages <span className="w-4 h-px bg-gold-primary/50" />
                        </p>
                        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-dark">
                            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-amber-600 italic">Destination.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {packages.map((pkg) => (
                            <div key={pkg.name} className={`group relative flex flex-col rounded-[2.5rem] border ${pkg.border} bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] overflow-hidden hover:-translate-y-2 transition-transform duration-500`}>

                                {pkg.popular && (
                                    <div className="absolute top-6 right-6 z-20 px-4 py-1.5 bg-gold-primary text-navy-dark font-inter font-bold text-[9px] uppercase tracking-widest rounded-full">
                                        Most Popular
                                    </div>
                                )}

                                <div className="relative h-64 overflow-hidden rounded-[2rem] m-4">
                                    <Image src={pkg.img} alt={pkg.destination} fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />
                                    <div className="absolute bottom-6 left-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <MapPin size={12} className="text-gold-primary" />
                                            <span className="font-inter text-[10px] font-bold text-white uppercase tracking-widest">{pkg.destination}</span>
                                        </div>
                                        <span className={`inline-block px-3 py-1 rounded-lg border text-[9px] font-bold uppercase tracking-widest font-inter backdrop-blur-md ${pkg.badge}`}>
                                            {pkg.name}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col p-8 md:p-10 text-center">
                                    <div className="mb-8 pb-8 border-b border-slate-100">
                                        <p className="font-playfair text-5xl font-bold text-navy-dark">{pkg.price}</p>
                                        <p className="font-inter text-[10px] uppercase tracking-widest text-slate-400 mt-2 font-bold">One-Time Membership</p>
                                    </div>

                                    <ul className="inline-flex flex-col gap-4 text-left mx-auto mb-10">
                                        {pkg.includes.map((item) => (
                                            <li key={item} className="flex items-center gap-3 font-inter text-sm text-slate-600 font-light">
                                                <div className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                                                    <Check size={10} className="text-amber-500" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href="/register" className="group/btn relative mt-auto flex items-center justify-center gap-3 w-full py-4 bg-navy-dark hover:bg-navy-dark/90 text-white rounded-2xl font-inter font-bold text-xs uppercase tracking-widest transition overflow-hidden">
                                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/btn:animate-[shine_1.5s_ease-in-out]" />
                                        <span className="relative z-10">Get This Package</span>
                                        <ArrowRight size={14} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════ */}
            <section className="py-24 bg-navy-dark text-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="mb-14">
                        <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold">How It Works</p>
                        <h2 className="font-playfair text-4xl md:text-5xl font-bold">
                            Earn Your Trip in <span className="text-gold-primary italic">4 Steps.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {steps.map((step) => (
                            <div key={step.step} className="relative p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-primary/30 transition-all duration-300 group">
                                <div className="absolute -top-3 -right-2 font-playfair font-black text-7xl text-white/[0.03] leading-none select-none">{step.step}</div>
                                <p className="font-inter text-[10px] font-bold uppercase tracking-widest text-gold-primary/60 mb-3">{step.step}</p>
                                <h3 className="font-playfair text-lg font-bold text-white mb-2">{step.title}</h3>
                                <p className="font-inter text-sm text-white/50 font-light leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          DESTINATIONS GALLERY
      ══════════════════════════════════════ */}
            <section className="py-24 bg-[#FAFAF8]">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold flex items-center gap-2">
                                <span className="w-4 h-px bg-gold-primary/50" /> Destinations
                            </p>
                            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy-dark">
                                Where Will You <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-amber-500 italic pr-2">Go?</span>
                            </h2>
                        </div>
                        <Link href="/register" className="group flex items-center gap-2 font-inter text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-gold-primary transition">
                            Join to unlock all <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {destinations.map((dest, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-sm h-[460px] cursor-pointer">
                                <Image src={dest.img} alt={dest.place} fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/10 to-transparent" />

                                {/* Frosted glass card */}
                                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xl border border-white/60 p-5 rounded-2xl translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={11} className="text-gold-primary" />
                                            <span className="font-inter text-[10px] font-bold uppercase tracking-widest text-navy-dark">{dest.place}</span>
                                        </div>
                                        <span className="font-inter text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
                                            {dest.tag}
                                        </span>
                                    </div>
                                    <p className="font-inter text-xs text-slate-500 font-light mb-3">{dest.desc}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {dest.highlights.map((h) => (
                                            <span key={h} className="font-inter text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{h}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-amber-50/60 border-t border-amber-100">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    {/* Symmetrical Header */}
                    <div className="mb-16 md:mb-20 text-center">
                        <p className="font-inter text-[10px] tracking-[0.3em] text-amber-600 uppercase mb-4 font-bold flex items-center justify-center gap-3">
                            <span className="w-10 h-px bg-amber-300/60" />
                            Member Stories
                            <span className="w-10 h-px bg-amber-300/60" />
                        </p>
                        <h2 className="font-playfair text-4xl md:text-6xl font-bold text-navy-dark tracking-tight">
                            They Grew. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400 italic pr-2">They Traveled.</span>
                        </h2>
                    </div>

                    {/* Grid: items-stretch ensures all cards are the same height */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                        {[
                            { name: "Priya Sharma", location: "Mumbai", trip: "Goa — Starter", quote: "I joined Lexxes Group 3 months ago and already earned my Goa trip. The whole experience was taken care of — hotel, transport, everything." },
                            { name: "Rahul Mehta", location: "Pune", trip: "Switzerland — Premium", quote: "Switzerland was a dream. Lexxes Group made it happen for real. The 5-star hotel, the Alps trip — I still can't believe it was my reward for growing my network." },
                            { name: "Anjali Desai", location: "Mumbai", trip: "Goa — Starter", quote: "Best decision I made was joining this network. Within 2 months I hit my target and went on the Goa trip with my team." },
                        ].map((t) => (
                            <div key={t.name} className="flex flex-col p-10 rounded-[2.5rem] bg-white border border-amber-100 shadow-[0_10px_30px_rgba(201,168,76,0.05)] hover:shadow-[0_20px_40px_rgba(201,168,76,0.1)] hover:border-amber-300 transition-all duration-500">

                                {/* Stars: Centered to match card focus */}
                                <div className="flex gap-1 mb-8">
                                    {Array(5).fill(0).map((_, i) => (
                                        <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                                    ))}
                                </div>

                                {/* Quote: Flex-grow ensures this area takes up available space */}
                                <div className="flex-grow">
                                    <p className="font-playfair text-xl text-slate-700 font-light leading-relaxed mb-10 italic">
                                        "{t.quote}"
                                    </p>
                                </div>

                                {/* Author Info: mt-auto anchors this to the bottom for perfect alignment */}
                                <div className="flex items-center gap-4 pt-8 border-t border-amber-50 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center font-playfair font-bold text-lg text-amber-700 shrink-0">
                                        {t.name[0]}
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="font-inter font-bold text-sm text-navy-dark truncate">
                                            {t.name}
                                        </p>
                                        <p className="font-inter text-[10px] font-bold text-amber-600 uppercase tracking-widest mt-1 truncate">
                                            {t.location} • {t.trip}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
            <section className="py-28 bg-navy-dark relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[60vw] h-[300px] bg-gold-primary/10 blur-[120px] rounded-full animate-[pulse_6s_ease-in-out_infinite]" />
                </div>
                <div className="relative max-w-3xl mx-auto px-6 md:px-8 text-center z-10">
                    <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-5 font-bold">Start Today</p>
                    <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Your next trip is<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-[#ffeaab] to-gold-primary italic pr-4">waiting for you.</span>
                    </h2>
                    <p className="font-inter text-base text-white/50 font-light mb-10 max-w-lg mx-auto">
                        Join Lexxes Group, build your network, hit your milestone and earn your all-expenses-paid travel reward.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/register" className="group relative flex items-center justify-center gap-3 bg-gold-primary text-navy-dark px-10 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl shadow-[0_4px_20px_rgba(201,168,76,0.3)] overflow-hidden">
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
                            <span className="relative z-10">Join Now — From ₹3,000</span>
                            <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/contact" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl">
                            Ask a Question
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
