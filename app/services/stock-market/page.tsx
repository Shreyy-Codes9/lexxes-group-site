"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, BookOpen, Users, BarChart2, ShieldCheck, Play, Clock, Star, Phone } from "lucide-react";

const courses =[
  {
    title: "Stock Market for Beginners",
    level: "Beginner",
    duration: "4 Weeks",
    lessons: 24,
    rating: 4.9,
    students: "1,200+",
    desc: "Learn the fundamentals of the stock market, how to read charts and make your first trade with confidence.",
    topics:["Market basics", "Reading charts", "Order types", "Risk management"],
    color: "border-border",
    badge: "bg-base text-ink-secondary border-border",
  },
  {
    title: "Technical Analysis Masterclass",
    level: "Intermediate",
    duration: "6 Weeks",
    lessons: 36,
    rating: 4.8,
    students: "850+",
    desc: "Deep dive into technical analysis — candlestick patterns, indicators, support & resistance and trend trading.",
    topics:["Candlestick patterns", "RSI & MACD", "Fibonacci levels", "Trend analysis"],
    color: "border-gold-primary/30",
    badge: "bg-gold-primary/10 text-gold-dark border-gold-primary/20",
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
    topics:["Options basics", "Futures trading", "Swing strategies", "System building"],
    color: "border-blue/20",
    badge: "bg-blue/10 text-blue border-blue/20",
  },
];

const whyUs =[
  { icon: TrendingUp, title: "Live Market Sessions", desc: "Trade alongside our mentors in real-time market sessions every weekday." },
  { icon: BookOpen, title: "Structured Curriculum", desc: "From zero to advanced — a clear learning path with video lessons and assignments." },
  { icon: BarChart2, title: "Real-time Analysis", desc: "Daily market analysis, stock picks and sector updates shared with all members." },
  { icon: ShieldCheck, title: "Risk-First Approach", desc: "We teach capital preservation first — no get-rich-quick promises, just real skills." },
];

const steps =[
  { step: "01", title: "Join Lexxes Group", desc: "Register and choose your package to unlock access to all Tred India courses and mentorship." },
  { step: "02", title: "Pick Your Course", desc: "Start from beginner basics or jump into advanced strategies — learn at your own pace." },
  { step: "03", title: "Join Live Sessions", desc: "Attend live mentorship calls, ask questions and trade alongside experienced mentors." },
  { step: "04", title: "Build Your Portfolio", desc: "Apply what you learn, build consistent returns and grow your financial independence." },
];

export default function StockMarketPage() {
  return (
    <main className="min-h-screen bg-base text-ink overflow-x-hidden selection:bg-gold-primary selection:text-ink">

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
          HERO — STATIC IMAGE WITH SUBTLE BREATHING
      ══════════════════════════════════════ */}
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/pageimages/stockmarket/lapy.png" 
            alt="Stock Market Trading" 
            fill 
            priority
            className="object-cover scale-105"
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-20 h-[calc(100%-5rem)] flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-16 pt-32">
          <div className="max-w-4xl">
            
            {/* Top Tags */}
            <div className="fade-up mb-6 drop-shadow-md">
              <p className="font-inter text-xs font-bold tracking-[0.4em] text-gold-primary uppercase mb-3">
                Lexxes Group Presents
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-soria text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
                  Tred India
                </span>
                <span className="w-px h-8 bg-gold-primary/40" />
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-md">
                  <TrendingUp size={12} className="text-gold-primary" />
                  <span className="font-inter text-[10px] font-bold tracking-[0.2em] text-white uppercase drop-shadow-md">
                    Stock Market Division
                  </span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="fade-up delay-1 font-soria text-5xl md:text-7xl lg:text-[5.5rem] text-white mb-6 leading-[0.95] tracking-tight drop-shadow-2xl">
              Learn The Market,<br />
              <span className="text-gold-light italic pr-4 drop-shadow-xl">
                Master Your Money.
              </span>
            </h1>

            {/* Description */}
            <p className="fade-up delay-2 font-inter text-base md:text-lg text-white max-w-xl font-medium mb-10 leading-relaxed drop-shadow-lg">
              Access expert-curated stock market courses, live mentorship, and real-time market insights. Start your wealth-building journey today.
            </p>

            {/* Buttons */}
            <div className="fade-up delay-3 flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="group relative flex items-center justify-center gap-3 bg-gold-primary text-ink px-9 py-4 font-inter font-bold text-xs uppercase tracking-widest transition-all rounded-xl shadow-lg w-fit overflow-hidden">
                <span className="absolute inset-0 bg-gold-dark translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  Start Learning
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <a href="#courses" className="flex items-center justify-center gap-2 bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/20 text-white px-9 py-4 font-inter font-bold text-xs uppercase tracking-widest transition-colors rounded-xl w-fit drop-shadow-md shadow-lg">
                <Play size={13} className="text-gold-primary" />
                View Courses
              </a>
            </div>

          </div>
        </div>

        {/* Floating Stats Bar */}
        <div className="absolute bottom-0 right-0 z-20 hidden lg:flex items-center gap-10 px-10 py-5 bg-black/40 backdrop-blur-xl border-t border-l border-white/10 rounded-tl-[2rem]">
          {[
            { value: "3", label: "Premium Courses" },
            { value: "2,400+", label: "Active Students" },
            { value: "Live", label: "Daily Mentorship" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-soria text-2xl text-gold-primary drop-shadow-md">{s.value}</p>
              <p className="font-inter text-[9px] uppercase tracking-widest text-white/80 mt-0.5 drop-shadow-md">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          LIVE MENTORSHIP HIGHLIGHT
      ══════════════════════════════════════ */}
      <section className="py-20 bg-ink text-base-white border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold">Live Every Weekday</p>
              <h2 className="font-soria text-4xl md:text-5xl mb-4 leading-[1.0] tracking-tight">
                Live Mentorship — <br className="hidden md:block" />
                <span className="text-gold-light italic">Trade with Experts.</span>
              </h2>
              <p className="font-inter text-base text-base-white/60 font-light max-w-lg leading-relaxed">
                Every weekday our mentors go live with real trades, market breakdowns, and stock picks. Members can ask questions and learn in real time — not just from recorded videos.
              </p>
            </div>
            <div className="flex gap-4 md:gap-6 shrink-0 w-full md:w-auto">
              {[
                { value: "5x", label: "Per Week" },
                { value: "Live", label: "Real Trades" },
              ].map((s) => (
                <div key={s.label} className="flex-1 md:flex-none text-center px-8 py-6 rounded-[2rem] bg-base-white/5 border border-base-white/10 shadow-sm">
                  <p className="font-soria text-3xl text-gold-primary">{s.value}</p>
                  <p className="font-inter text-[10px] uppercase tracking-widest text-base-white/60 mt-1 font-bold">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COURSES
      ══════════════════════════════════════ */}
      <section id="courses" className="py-24 bg-base">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-16 text-center md:text-left">
            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold flex items-center justify-center md:justify-start gap-3">
              <span className="w-6 h-px bg-gold-primary/50" /> Our Courses
            </p>
            <h2 className="font-soria text-4xl md:text-5xl text-ink tracking-tight">
              Learn at Your <span className="text-gold-primary italic">Own Pace.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.title} className={`group relative flex flex-col bg-base-white rounded-[2rem] border ${course.color} shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
                
                {course.popular && (
                  <div className="absolute top-6 right-6 z-10 px-3.5 py-1.5 bg-gold-primary text-ink font-inter font-bold text-[9px] uppercase tracking-widest rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col">
                  <span className={`inline-block w-fit px-3 py-1.5 rounded-lg border text-[9px] font-bold uppercase tracking-widest font-inter mb-5 ${course.badge}`}>
                    {course.level}
                  </span>
                  
                  <h3 className="font-soria text-2xl text-ink mb-3 leading-tight">{course.title}</h3>
                  <p className="font-inter text-sm text-ink-secondary font-light leading-relaxed mb-6">{course.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {course.topics.map((t) => (
                      <span key={t} className="font-inter text-[9px] font-bold uppercase tracking-wider text-ink-secondary bg-base border border-border px-2.5 py-1.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mb-6 mt-auto pt-6 border-t border-border">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-gold-primary" />
                      <span className="font-inter text-xs text-ink-secondary font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen size={14} className="text-gold-primary" />
                      <span className="font-inter text-xs text-ink-secondary font-medium">{course.lessons} Lessons</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-base px-5 py-4 rounded-xl border border-border">
                    <div className="flex items-center gap-1.5">
                      <Star size={14} className="text-gold-primary fill-gold-primary" />
                      <span className="font-inter text-xs font-bold text-ink">{course.rating}</span>
                      <span className="font-inter text-[10px] text-ink-light ml-1">({course.students})</span>
                    </div>
                    <Link href="/register" className="group/btn flex items-center gap-2 font-inter text-xs font-bold uppercase tracking-widest text-ink hover:text-gold-primary transition-colors">
                      Enroll <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-base-white border border-border rounded-2xl p-6 shadow-sm">
            <p className="font-inter text-sm text-ink-secondary mb-3 font-medium">All courses and live mentorship sessions are included with your Lexxes Group membership.</p>
            <Link href="/register" className="group inline-flex items-center gap-2 font-inter text-sm font-bold uppercase tracking-widest text-gold-primary hover:text-gold-dark transition-colors">
              Join to Access All Courses <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY LEARN WITH US
      ══════════════════════════════════════ */}
      <section className="py-24 bg-base-white border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-16 text-center">
            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-gold-primary/40" /> Why Tred India <span className="w-8 h-px bg-gold-primary/40" />
            </p>
            <h2 className="font-soria text-4xl md:text-5xl text-ink tracking-tight">
              Why Learn <span className="text-gold-primary italic">With Us?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="p-8 rounded-[2rem] bg-base border border-border hover:border-gold-primary/30 hover:shadow-md transition-all duration-300 text-center group">
                <div className="w-14 h-14 rounded-2xl bg-base-white border border-border shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:border-gold-primary/40 transition-transform duration-300">
                  <item.icon size={22} className="text-gold-primary" />
                </div>
                <h3 className="font-soria text-2xl text-ink mb-3 leading-tight">{item.title}</h3>
                <p className="font-inter text-sm text-ink-secondary font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════ */}
      <section className="py-24 bg-base">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-16">
            <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold">Process</p>
            <h2 className="font-soria text-4xl md:text-5xl text-ink tracking-tight">
              From Zero to <span className="text-gold-primary italic">Confident Trader.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.step} className="relative p-8 rounded-[2rem] bg-base-white border border-border hover:border-gold-primary/30 hover:shadow-md transition-all duration-300 group overflow-hidden">
                <div className="absolute -top-4 -right-2 font-soria text-7xl text-base leading-none select-none group-hover:text-gold-primary/10 transition-colors duration-500 z-0">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <p className="font-inter text-[10px] font-bold uppercase tracking-widest text-gold-primary mb-4">{step.step}</p>
                  <h3 className="font-soria text-2xl text-ink mb-3">{step.title}</h3>
                  <p className="font-inter text-sm text-ink-secondary font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section className="py-28 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[60vw] h-[300px] bg-gold-primary/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="relative max-w-3xl mx-auto px-6 md:px-8 text-center z-10">
          <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-5 font-bold">Start Today</p>
          <h2 className="font-soria text-5xl md:text-6xl text-base-white mb-6 leading-tight tracking-tight">
            The market won't <br />
            <span className="italic text-gold-light pr-2">wait for you.</span>
          </h2>
          <p className="font-inter text-base text-base-white/60 font-light mb-10 max-w-lg mx-auto leading-relaxed">
            Join Lexxes Group, access Tred India's full course library, and start learning the stock market with live expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="group relative flex items-center justify-center gap-3 bg-gold-primary text-ink px-10 py-4 font-inter font-bold text-xs uppercase tracking-widest transition-all rounded-xl shadow-lg overflow-hidden">
              <span className="absolute inset-0 bg-gold-dark translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                Join & Start Learning
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-base-white/5 hover:bg-base-white/10 border border-base-white/10 text-base-white px-10 py-4 font-inter font-bold text-xs uppercase tracking-widest transition-colors rounded-xl backdrop-blur-md">
              <Phone size={14} />
              Talk to a Mentor
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}