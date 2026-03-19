 "use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, BookOpen, Users, BarChart2, ShieldCheck, ChevronLeft, ChevronRight, Play, Clock, Star } from "lucide-react";

const heroSlides = [
  { img: "/heroimg/stock.png", label: "Stock Market Courses", sub: "Beginner to Advanced" },
  { img: "/heroimg/stock.png", label: "Live Mentorship", sub: "Real-time Guidance" },
  { img: "/heroimg/stock.png", label: "Market Analysis", sub: "Daily Insights" },
];

const courses = [
  {
    title: "Stock Market for Beginners",
    level: "Beginner",
    duration: "4 Weeks",
    lessons: 24,
    rating: 4.9,
    students: "1,200+",
    desc: "Learn the fundamentals of the stock market, how to read charts and make your first trade with confidence.",
    topics: ["Market basics", "Reading charts", "Order types", "Risk management"],
    color: "border-emerald-200",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    title: "Technical Analysis Masterclass",
    level: "Intermediate",
    duration: "6 Weeks",
    lessons: 36,
    rating: 4.8,
    students: "850+",
    desc: "Deep dive into technical analysis — candlestick patterns, indicators, support & resistance and trend trading.",
    topics: ["Candlestick patterns", "RSI & MACD", "Fibonacci levels", "Trend analysis"],
    color: "border-gold-primary/30",
    badge: "bg-gold-primary/10 text-gold-primary border-gold-primary/20",
    popular: true,
  },
  {
    title: "Advanced Trading Strategies",
    level: "Advanced",
    duration: "8 Weeks",
    lessons: 48,
    rating: 4.9,
    students: "420+",
    desc: "Master advanced strategies including options trading, futures, swing trading and building a consistent system.",
    topics: ["Options basics", "Futures trading", "Swing strategies", "System building"],
    color: "border-blue-200",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
  },
];

const whyUs = [
  { icon: TrendingUp, title: "Live Market Sessions", desc: "Trade alongside our mentors in real-time market sessions every weekday." },
  { icon: BookOpen, title: "Structured Curriculum", desc: "From zero to advanced — a clear learning path with video lessons and assignments." },
  { icon: BarChart2, title: "Real-time Analysis", desc: "Daily market analysis, stock picks and sector updates shared with all members." },
  { icon: ShieldCheck, title: "Risk-First Approach", desc: "We teach capital preservation first — no get-rich-quick promises, just real skills." },
];

const steps = [
  { step: "01", title: "Join Lexxes Group", desc: "Register and choose your package to unlock access to all Tred India courses and mentorship." },
  { step: "02", title: "Pick Your Course", desc: "Start from beginner basics or jump into advanced strategies — learn at your own pace." },
  { step: "03", title: "Join Live Sessions", desc: "Attend live mentorship calls, ask questions and trade alongside experienced mentors." },
  { step: "04", title: "Build Your Portfolio", desc: "Apply what you learn, build consistent returns and grow your financial independence." },
];

const INTERVAL = 5000;

export default function StockMarketPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const prev = useCallback(() => setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length), []);
  const next = useCallback(() => setCurrent((p) => (p + 1) % heroSlides.length), []);

  return (
    <main className="min-h-screen pt-15  bg-[#F8F7F5] text-[#1a1a2e] overflow-x-hidden selection:bg-navy-dark selection:text-white">

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
      <section className="relative h-screen min-h-[640px] overflow-hidden">

        {heroSlides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${current === i ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
            <Image src={slide.img} alt={slide.label} fill priority={i === 0}
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
                  Tred India
                </span>
                <span className="w-px h-8 bg-gold-primary/40" />
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-primary/30 bg-gold-primary/10">
                  <TrendingUp size={12} className="text-gold-primary" />
                  <span className="font-inter text-[10px] font-bold tracking-[0.2em] text-gold-primary uppercase">
                    Stock Market Division
                  </span>
                </div>
              </div>
            </div>

            <h1 className="fade-up delay-1 font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-[1.0] tracking-tight">
              Learn The Market,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-[#ffeaab] to-gold-primary italic pr-4">
                Master Your Money.
              </span>
            </h1>

            <div className="fade-up delay-2 flex items-center gap-3 mb-5">
              <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="font-inter text-[10px] font-bold text-white uppercase tracking-widest">{heroSlides[current].label}</span>
              </div>
              <span className="font-inter text-[10px] text-white/40 uppercase tracking-widest">{heroSlides[current].sub}</span>
            </div>

            <p className="fade-up delay-2 font-inter text-base md:text-lg text-white/70 max-w-xl font-light mb-8 leading-relaxed">
              Access expert-curated stock market courses, live mentorship and real-time market insights. Start your wealth-building journey today.
            </p>

            <div className="fade-up delay-3 flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/register" className="group relative flex items-center justify-center gap-3 bg-gold-primary text-navy-dark px-8 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl shadow-[0_4px_20px_rgba(201,168,76,0.3)] overflow-hidden w-fit">
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
                <span className="relative z-10">Start Learning</span>
                <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#courses" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl w-fit">
                <Play size={13} />
                View Courses
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
            { value: "3", label: "Courses" },
            { value: "2,400+", label: "Students" },
            { value: "Live", label: "Mentorship" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-playfair text-xl font-bold text-gold-primary">{s.value}</p>
              <p className="font-inter text-[9px] uppercase tracking-widest text-white/40 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          LIVE MENTORSHIP HIGHLIGHT
      ══════════════════════════════════════ */}
      <section className="py-16 bg-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold">Live Every Weekday</p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-2">
                Live Mentorship — <span className="text-gold-primary italic">Trade with the Experts.</span>
              </h2>
              <p className="font-inter text-sm text-white/50 font-light max-w-lg">
                Every weekday our mentors go live with real trades, market breakdowns and stock picks. Members can ask questions and learn in real time — not from recorded videos.
              </p>
            </div>
            <div className="flex gap-6 shrink-0">
              {[
                { value: "5x", label: "Per Week" },
                { value: "Live", label: "Real Trades" },
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
          COURSES
      ══════════════════════════════════════ */}
      <section id="courses" className="py-24 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="mb-14">
            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold flex items-center gap-2">
              <span className="w-4 h-px bg-gold-primary/50" /> Our Courses
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a1a2e]">
              Learn at Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-amber-600 italic">Own Pace.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.title} className={`group relative flex flex-col bg-white rounded-2xl border ${course.color} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>

                {course.popular && (
                  <div className="absolute top-5 right-5 z-10 px-3 py-1 bg-gold-primary text-navy-dark font-inter font-bold text-[9px] uppercase tracking-widest rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="p-7 flex-1 flex flex-col">

                  {/* Level badge */}
                  <span className={`inline-block w-fit px-3 py-1 rounded-lg border text-[9px] font-bold uppercase tracking-widest font-inter mb-4 ${course.badge}`}>
                    {course.level}
                  </span>

                  <h3 className="font-playfair text-xl font-bold text-[#1a1a2e] mb-3">{course.title}</h3>
                  <p className="font-inter text-sm text-slate-500 font-light leading-relaxed mb-5">{course.desc}</p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.topics.map((t) => (
                      <span key={t} className="font-inter text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-6 mt-auto pt-5 border-t border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} className="text-slate-400" />
                      <span className="font-inter text-xs text-slate-500">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen size={13} className="text-slate-400" />
                      <span className="font-inter text-xs text-slate-500">{course.lessons} Lessons</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star size={13} className="text-amber-400 fill-amber-400" />
                      <span className="font-inter text-xs font-bold text-[#1a1a2e]">{course.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-inter text-xs text-slate-400">{course.students} students</span>
                    <Link href="/register" className="group/btn flex items-center gap-2 font-inter text-xs font-bold uppercase tracking-widest text-[#1a1a2e] hover:text-gold-primary transition">
                      Enroll Now <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="font-inter text-sm text-slate-400 mb-4">All courses are included with your Lexxes Group membership.</p>
            <Link href="/register" className="group inline-flex items-center gap-2 font-inter text-sm font-bold uppercase tracking-widest text-gold-primary hover:text-amber-600 transition border-b border-gold-primary/30 hover:border-amber-600/50 pb-0.5">
              Join to Access All Courses <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY LEARN WITH US
      ══════════════════════════════════════ */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-14 text-center">
            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-gold-primary/40" /> Why Tred India <span className="w-8 h-px bg-gold-primary/40" />
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a1a2e]">
              Why Learn <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-amber-600 italic">With Us?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="p-7 rounded-2xl bg-[#F8F7F5] border border-slate-100 hover:border-gold-primary/30 hover:shadow-sm transition-all duration-300 text-center group">
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
          HOW IT WORKS
      ══════════════════════════════════════ */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-14">
            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold">Process</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a1a2e]">
              From Zero to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-amber-600 italic">Confident Trader.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.step} className="relative p-7 rounded-2xl bg-white border border-slate-100 hover:border-gold-primary/30 hover:shadow-sm transition-all duration-300 group">
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
          CTA
      ══════════════════════════════════════ */}
      <section className="py-28 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[60vw] h-[300px] bg-gold-primary/8 blur-[120px] rounded-full" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 md:px-8 text-center z-10">
          <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-5 font-bold">Start Today</p>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The market won't<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-[#ffeaab] to-gold-primary italic pr-4">wait for you.</span>
          </h2>
          <p className="font-inter text-base text-white/50 font-light mb-10 max-w-lg mx-auto">
            Join Lexxes Group, access Tred India's full course library and start learning the stock market with live expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="group relative flex items-center justify-center gap-3 bg-gold-primary text-navy-dark px-10 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl shadow-[0_4px_20px_rgba(201,168,76,0.3)] overflow-hidden">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
              <span className="relative z-10">Join & Start Learning</span>
              <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 font-inter font-bold text-xs uppercase tracking-widest transition rounded-xl">
              Talk to a Mentor
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
