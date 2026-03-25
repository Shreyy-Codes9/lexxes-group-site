"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Star, Check, Plane, ChevronLeft, ChevronRight, Users, Trophy, Globe } from "lucide-react";
import { motion } from "framer-motion";

const heroSlides =[
  { img: "/pageimages/tourism/jaipur.png", place: "Jaipur, India", label: "Starter Reward — ₹4,600", desc: "Sun, sand & luxury stays on India's most iconic coastline." },
  { img: "/pageimages/tourism/switzerland.png", place: "Zurich, Switzerland", label: "Premium Reward — ₹30,000", desc: "Snow-capped peaks, world-class hospitality and alpine luxury." },
  { img: "/pageimages/tourism/dubai.png", place: "Dubai, UAE", label: "Group Tour", desc: "Skyline cruises, desert safaris and five-star everything." },
  { img: "/pageimages/tourism/rajesthan.png", place: "Rajasthan, India", label: "Group Tour", desc: "Royal palaces, desert dunes and timeless heritage." },
];

const destinations =[
  { img: "/pageimages/tourism/jaipur.png", place: "Jaipur, India", tag: "Starter Reward", desc: "The Pink City — royal palaces, vibrant bazaars and Rajput grandeur.", highlights:["5 Days / 4 Nights", "Heritage Hotel", "Sightseeing", "Group Activities"] },
  { img: "/pageimages/tourism/switzerland.png", place: "Zurich, Switzerland", tag: "Premium Reward", desc: "Snow-capped peaks, world-class hospitality and alpine luxury.", highlights:["7 Days / 6 Nights", "5-Star Hotel", "Alps Day Trip", "City Tour"] },
  { img: "/pageimages/tourism/dubai.png", place: "Dubai, UAE", tag: "Group Tour", desc: "Skyline cruises, desert safaris and five-star everything.", highlights:["5 Days / 4 Nights", "City Hotel", "Desert Safari", "Burj Khalifa"] },
  { img: "/pageimages/tourism/rajesthan.png", place: "Rajasthan, India", tag: "Group Tour", desc: "Royal forts, camel rides and the magic of the Thar Desert.", highlights:["6 Days / 5 Nights", "Palace Hotel", "Fort Visits", "Desert Safari"] },
  { img: "/pageimages/tourism/tajmahal.png", place: "Agra, India", tag: "Group Tour", desc: "The eternal symbol of love — the Taj Mahal and Mughal heritage.", highlights:["3 Days / 2 Nights", "Boutique Hotel", "Taj Mahal Tour", "Agra Fort"] },
  { img: "/pageimages/tourism/switzerland.png", place: "Maldives", tag: "Premium Reward", desc: "Crystal lagoons, overwater bungalows and total serenity.", highlights:["5 Days / 4 Nights", "Overwater Villa", "Snorkeling", "Sunset Cruise"] },
];

const packages =[
  {
    name: "Starter Package", price: "₹4,600", destination: "Jaipur, India", img: "/pageimages/tourism/jaipur.png",
    includes:["5 Days / 4 Nights in Jaipur", "Heritage hotel accommodation", "Daily breakfast included", "Guided sightseeing tour", "Airport transfers", "Group activities"],
  },
  {
    name: "Premium Package", price: "₹30,000", destination: "Zurich, Switzerland", img: "/pageimages/tourism/switzerland.png",
    popular: true,
    includes:["7 Days / 6 Nights in Switzerland", "5-star hotel accommodation", "All meals included", "Alps day trip & cable car", "Private city tour", "Flight tickets included", "Travel insurance"],
  },
];

const steps =[
  { step: "01", title: "Join Lexxes Group", desc: "Register and choose your starter or premium package to become a member." },
  { step: "02", title: "Grow Your Network", desc: "Refer members, build your downline and unlock travel milestones." },
  { step: "03", title: "Earn Your Trip", desc: "Hit your target and your travel package gets activated automatically." },
  { step: "04", title: "Travel in Style", desc: "Pack your bags — flights, hotels and itinerary are arranged for you." },
];

const INTERVAL = 5000;

export default function TourismPage() {
  const [current, setCurrent] = useState(0);
  const [activeDest, setActiveDest] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), INTERVAL);
    return () => clearInterval(timer);
  },[]);

  const prev = useCallback(() => setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length),[]);
  const next = useCallback(() => setCurrent((p) => (p + 1) % heroSlides.length),[]);

  return (
    <main className="min-h-screen pb-5 bg-base text-ink overflow-x-hidden">

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeUpReveal {
          0% { opacity: 0; transform: translateY(30px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes fillBar { 0% { width: 0%; } 100% { width: 100%; } }
        .fade-up { animation: fadeUpReveal 1s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .bar-fill { animation: fillBar ${INTERVAL}ms linear forwards; }
      `}} />

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${current === i ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
            <Image src={slide.img} alt={slide.place} fill priority={i === 0}
              className={`object-cover transition-transform ease-out ${current === i ? "scale-[1.05] duration-[12000ms]" : "scale-100 duration-1000"}`}
            />
            {/* Very subtle overlay to ensure text pops */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}

        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20">
          <div key={`slide-${current}`} className="max-w-4xl">
            <div className="fade-up inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm drop-shadow-md">
              <Plane size={13} className="text-gold-primary" />
              <span className="font-inter text-[10px] font-bold tracking-[0.3em] text-white uppercase drop-shadow-md">Travel Asia • Tourism</span>
            </div>

            <h1 className="fade-up delay-1 font-soria text-5xl md:text-7xl lg:text-[5.5rem] text-white mb-4 leading-[0.9] tracking-tight drop-shadow-2xl">
              Your Success,<br />
              <span className="italic text-gold-light drop-shadow-xl">Your Reward.</span>
            </h1>

            <div className="fade-up delay-2 flex items-center gap-2 mb-3 drop-shadow-md">
              <MapPin size={14} className="text-gold-primary" />
              <span className="font-inter text-sm text-white font-semibold drop-shadow-md">{heroSlides[current].place}</span>
              <span className="font-inter text-[10px] text-white/90 uppercase tracking-widest ml-1 drop-shadow-md">— {heroSlides[current].label}</span>
            </div>

            <p className="fade-up delay-2 font-inter text-base md:text-lg text-white max-w-xl font-medium mb-8 leading-relaxed drop-shadow-lg">
              {heroSlides[current].desc}
            </p>

            <div className="fade-up delay-3 flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/register" className="relative overflow-hidden group flex items-center justify-center gap-3 bg-gold-primary text-ink px-8 py-4 font-inter font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg w-fit">
                <span className="absolute inset-0 bg-gold-dark translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  Join & Earn Rewards
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <a href="#packages" className="flex items-center justify-center gap-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 text-white px-8 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl w-fit drop-shadow-lg">
                View Packages
              </a>
            </div>

            <div className="flex items-center gap-5">
              <button onClick={prev} className="w-9 h-9 rounded-full border border-white/20 bg-black/30 flex items-center justify-center hover:border-gold-primary/50 transition text-white hover:text-gold-primary backdrop-blur-md">
                <ChevronLeft size={16} />
              </button>
              <div className="flex items-center gap-2 drop-shadow-md">
                {heroSlides.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className="relative h-[2px] rounded-full overflow-hidden transition-all duration-300" style={{ width: current === i ? 48 : 16, background: "rgba(255,255,255,0.4)" }}>
                    {current === i && <div key={current} className="absolute top-0 left-0 h-full bg-gold-primary bar-fill" />}
                  </button>
                ))}
              </div>
              <button onClick={next} className="w-9 h-9 rounded-full border border-white/20 bg-black/30 flex items-center justify-center hover:border-gold-primary/50 transition text-white hover:text-gold-primary backdrop-blur-md">
                <ChevronRight size={16} />
              </button>
              <span className="font-inter text-[10px] text-white/90 uppercase tracking-widest ml-2 drop-shadow-md font-bold">
                {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-20 hidden lg:flex items-center gap-10 px-10 py-5 bg-black/40 backdrop-blur-xl border-t border-l border-white/10 rounded-tl-2xl">
          {[{ value: "2+", label: "Destinations" }, { value: "100%", label: "Trip Covered" }, { value: "₹4.6K", label: "Starts From" }].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-soria text-xl text-gold-primary drop-shadow-md">{s.value}</p>
              <p className="font-inter text-[9px] uppercase tracking-widest text-white/80 mt-0.5 drop-shadow-md">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY TRAVEL WITH LEXXES ── */}
      <section className="py-24 bg-ink text-base-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-4 font-bold">Why Travel With Us</p>
              <h2 className="font-soria text-4xl md:text-5xl mb-6 leading-[0.9] tracking-tight">
                Travel is not a gift.<br />
                <span className="italic text-gold-light">It's your reward.</span>
              </h2>
              <p className="font-inter text-base text-base-white/60 font-light leading-relaxed mb-8 max-w-lg">
                At Lexxes Group, we believe your hard work deserves more than just money. Every milestone you hit unlocks a real travel experience — fully paid, fully planned, fully yours.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { icon: Trophy, title: "Milestone Based", desc: "Hit your network target and your trip gets unlocked automatically." },
                  { icon: Globe, title: "All Expenses Paid", desc: "Flights, hotels, meals — everything is covered. Zero hidden costs." },
                  { icon: Users, title: "Travel with Your Team", desc: "Go with the people you built your network with. Group travel included." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center shrink-0">
                      <item.icon size={17} className="text-gold-primary" />
                    </div>
                    <div>
                      <p className="font-inter font-bold text-sm text-base-white mb-1">{item.title}</p>
                      <p className="font-inter text-sm text-base-white/50 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/register" className="relative overflow-hidden group mt-10 inline-flex items-center gap-3 bg-gold-primary text-ink px-8 py-4 font-inter font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg">
                <span className="absolute inset-0 bg-gold-dark translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  Join Now & Start Earning
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 h-[500px]">
              <div className="relative rounded-2xl overflow-hidden row-span-2">
                <Image src="/heroimg/tour.png" alt="Goa" fill className="object-cover" />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/15" />
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 drop-shadow-md bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                  <MapPin size={10} className="text-gold-primary" />
                  <span className="font-inter text-[10px] font-bold uppercase tracking-wider text-white">Goa, India</span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="/pageimages/tourism/switzerland.png" alt="Switzerland" fill className="object-cover" />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/15" />
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 drop-shadow-md bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                  <MapPin size={10} className="text-gold-primary" />
                  <span className="font-inter text-[10px] font-bold uppercase tracking-wider text-white">Switzerland</span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="/pageimages/tourism/dubai.png" alt="Dubai" fill className="object-cover" />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/15" />
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 drop-shadow-md bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                  <MapPin size={10} className="text-gold-primary" />
                  <span className="font-inter text-[10px] font-bold uppercase tracking-wider text-white">Dubai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ACCORDION ── */}
      <section className="pt-24 bg-base-secondary text-ink">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold flex items-center gap-2">
                <span className="w-4 h-px bg-gold-primary/50" /> Destinations
              </p>
              <h2 className="font-soria text-4xl md:text-5xl leading-[0.9] tracking-tight">
                Where Will You <span className="italic text-gold-primary">Go?</span>
              </h2>
            </div>
            <Link href="/register" className="group flex items-center gap-2 font-inter text-xs font-bold uppercase tracking-widest text-ink-secondary hover:text-gold-primary transition">
              Join to unlock all <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="w-full h-[120vh] md:h-[75vh] flex flex-col md:flex-row border-y border-border overflow-hidden">
          {destinations.map((dest, i) => {
            const isActive = activeDest === i;
            const parts = dest.place.split(", ");
            const city = parts[0];
            const country = parts.length > 1 ? parts[1] : "";

            return (
              <div
                key={i}
                onMouseEnter={() => setActiveDest(i)}
                onClick={() => setActiveDest(i)}
                className={`group relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer border-t md:border-t-0 md:border-l border-border flex flex-col md:flex-row items-center justify-between md:justify-start
                  ${isActive ? "h-[60vh] md:h-full md:flex-[8] bg-ink" : "h-[12vh] md:h-full md:flex-[1] bg-base-secondary hover:bg-base"}`}
              >
                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-30 group-hover:opacity-50"}`}>
                  <Image src={dest.img} alt={dest.place} fill className={`object-cover ${isActive ? "scale-105" : "grayscale group-hover:grayscale-0 transition-all duration-700"}`} />
                  {/* Subtle overlay for active/hover states */}
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative z-10 w-full h-full flex flex-col justify-end md:justify-center p-6 md:p-12 lg:p-16"
                  >
                    <div className="max-w-2xl">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        className="text-[10px] font-inter uppercase tracking-[0.4em] text-gold-primary mb-6 flex items-center gap-4 font-bold drop-shadow-md"
                      >
                        <span className="w-8 h-px bg-gold-primary drop-shadow-md" />
                        Chapter {String(i + 1).padStart(2, "0")} // {dest.tag}
                      </motion.p>
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                        className="text-[12vw] md:text-[6vw] leading-[0.85] font-soria mb-6 tracking-tight text-white uppercase drop-shadow-2xl"
                      >
                        {city} {country && <><br /><span className="italic font-light text-white/90">{country}</span></>}
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                        className="text-sm md:text-base text-white font-medium leading-relaxed max-w-md mb-8 drop-shadow-lg"
                      >
                        {dest.desc}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-2 mb-8"
                      >
                        {dest.highlights.map((h) => (
                          <span key={h} className="text-[9px] font-inter uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/40 bg-black/40 backdrop-blur-md text-white font-bold drop-shadow-md">
                            {h}
                          </span>
                        ))}
                      </motion.div>
                      <motion.a
                        href="#packages"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                        className="relative overflow-hidden inline-flex items-center gap-3 bg-gold-primary text-ink px-8 py-4 rounded-xl text-xs font-bold font-inter uppercase tracking-widest group/cta shadow-xl"
                      >
                        <span className="absolute inset-0 bg-gold-dark translate-x-[-101%] group-hover/cta:translate-x-0 transition-transform duration-500" />
                        <span className="relative z-10 flex items-center gap-2">
                          View Package
                          <ArrowRight size={16} className="group-hover/cta:translate-x-1 transition-transform" />
                        </span>
                      </motion.a>
                    </div>
                  </motion.div>
                )}

                {!isActive && (
                  <div className="absolute inset-0 flex flex-row md:flex-col items-center justify-between p-6 md:py-12 z-10">
                    <div className="flex items-center gap-4 md:flex-col relative z-10 drop-shadow-md">
                      <span className="text-[10px] font-inter text-white font-bold group-hover:text-gold-primary transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <MapPin size={16} className="text-white group-hover:text-gold-primary transition-colors" />
                    </div>
                    <span className="text-xs md:text-sm tracking-[0.4em] font-inter uppercase font-bold text-white group-hover:text-gold-light transition-colors md:[writing-mode:vertical-rl] md:rotate-180 relative z-10 whitespace-nowrap drop-shadow-md">
                      {city}
                    </span>
                    <div className="hidden md:block w-px h-12 bg-white/40 group-hover:bg-gold-primary transition-colors relative z-10 drop-shadow-md" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className="py-24 bg-base">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-16 text-center">
            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-4 font-bold flex items-center justify-center gap-2">
              <span className="w-4 h-px bg-gold-primary/50" /> Reward Packages <span className="w-4 h-px bg-gold-primary/50" />
            </p>
            <h2 className="font-soria text-4xl md:text-5xl text-ink leading-[0.9] tracking-tight">
              Choose Your <span className="italic text-gold-primary">Destination.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`group relative flex flex-col rounded-2xl border bg-base-secondary hover:-translate-y-2 transition-transform duration-500 overflow-hidden shadow-sm ${pkg.popular ? "border-gold-primary/30" : "border-border"}`}>
                {pkg.popular && (
                  <div className="absolute top-5 right-5 z-20 px-4 py-1.5 bg-gold-primary text-ink font-inter font-bold text-[9px] uppercase tracking-widest rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="relative h-56 overflow-hidden rounded-xl m-4">
                  <Image src={pkg.img} alt={pkg.destination} fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/20" />
                  
                  <div className="absolute bottom-5 left-5">
                    <div className="flex items-center gap-2 mb-2 drop-shadow-md bg-black/40 w-fit px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                      <MapPin size={11} className="text-gold-primary" />
                      <span className="font-inter text-[10px] font-bold text-white uppercase tracking-widest">{pkg.destination}</span>
                    </div>
                    <span className={`inline-block px-3 py-1.5 rounded-lg border text-[9px] font-bold uppercase tracking-widest font-inter backdrop-blur-md drop-shadow-md ${pkg.popular ? "bg-gold-primary/90 text-ink border-gold-primary" : "bg-black/60 text-white border-white/30"}`}>
                      {pkg.name}
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col p-7 md:p-8 text-center">
                  <div className="mb-7 pb-7 border-b border-border">
                    <p className="font-soria text-5xl text-ink">{pkg.price}</p>
                    <p className="font-inter text-[10px] uppercase tracking-widest text-ink-secondary mt-2 font-bold">One-Time Membership</p>
                  </div>
                  <ul className="inline-flex flex-col gap-3.5 text-left mx-auto mb-8">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-3 font-inter text-sm text-ink-secondary">
                        <div className="w-5 h-5 rounded-full bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center shrink-0">
                          <Check size={10} className="text-gold-primary" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/register" className="relative overflow-hidden mt-auto flex items-center justify-center gap-2 w-full py-4 bg-ink text-base-white rounded-xl font-inter font-bold text-xs uppercase tracking-widest group/cta">
                    <span className="absolute inset-0 bg-blue translate-x-[-101%] group-hover/cta:translate-x-0 transition-transform duration-500" />
                    <span className="relative z-10 flex items-center gap-2">
                      Get This Package
                      <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-ink text-base-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-14">
            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold">How It Works</p>
            <h2 className="font-soria text-4xl md:text-5xl leading-[0.9] tracking-tight">
              Earn Your Trip in <span className="italic text-gold-light">4 Steps.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div key={step.step} className="relative p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-primary/30 transition-all duration-300 group">
                <div className="absolute -top-3 -right-2 font-soria text-7xl text-white/[0.03] leading-none select-none">{step.step}</div>
                <p className="font-inter text-[10px] font-bold uppercase tracking-widest text-gold-primary/60 mb-3">{step.step}</p>
                <h3 className="font-soria text-xl text-base-white mb-2">{step.title}</h3>
                <p className="font-inter text-sm text-base-white/50 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-base-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-14 text-center">
            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-gold-primary/50" /> Member Stories <span className="w-8 h-px bg-gold-primary/50" />
            </p>
            <h2 className="font-soria text-4xl md:text-5xl text-ink leading-[0.9] tracking-tight">
              They Grew. <span className="italic text-gold-primary">They Traveled.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "Priya Sharma", location: "Nagpur", trip: "Jaipur — Starter", quote: "I joined Lexxes Group 3 months ago and already earned my Jaipur trip. The whole experience was taken care of — hotel, transport, everything." },
              { name: "Rahul Mehta", location: "Pune", trip: "Switzerland — Premium", quote: "Switzerland was a dream. Lexxes Group made it happen for real. The 5-star hotel, the Alps trip — I still can't believe it was my reward for growing my network." },
              { name: "Anjali Desai", location: "Mumbai", trip: "Dubai — Group Tour", quote: "Best decision I made was joining this network. Within 2 months I hit my target and went on the Dubai trip with my team." },
            ].map((t) => (
              <div key={t.name} className="p-7 rounded-2xl bg-base-white border border-border hover:border-gold-primary/20 transition-colors flex flex-col shadow-sm">
                <div className="flex gap-0.5 mb-5">
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={13} className="text-gold-primary fill-gold-primary" />)}
                </div>
                <p className="font-inter text-base text-ink font-light leading-relaxed mb-6 italic flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center font-soria text-base text-gold-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-inter font-bold text-sm text-ink">{t.name}</p>
                    <p className="font-inter text-[9px] font-bold text-gold-primary uppercase tracking-widest mt-0.5">{t.location} • {t.trip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[60vw] h-[300px] bg-gold-primary/8 blur-[120px] rounded-full" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 md:px-8 text-center z-10">
          <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-5 font-bold">Start Today</p>
          <h2 className="font-soria text-5xl md:text-6xl text-base-white mb-6 leading-[0.9] tracking-tight">
            Your next trip is<br />
            <span className="italic text-gold-light">waiting for you.</span>
          </h2>
          <p className="font-inter text-base text-base-white/50 font-light mb-10 max-w-lg mx-auto">
            Join Lexxes Group, build your network, hit your milestone and earn your all-expenses-paid travel reward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="relative overflow-hidden group flex items-center justify-center gap-3 bg-gold-primary text-ink px-10 py-4 font-inter font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg">
              <span className="absolute inset-0 bg-gold-dark translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                Join Now — From ₹4,600
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-base-white px-10 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}