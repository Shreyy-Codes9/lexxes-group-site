"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, Send, Loader2, Instagram } from "lucide-react";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); setSent(true); }, 2000);
  };

  return (
    <main className="min-h-screen bg-navy-dark text-text-primary selection:bg-gold-primary selection:text-navy-dark">

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine { 100% { transform: translateX(100%); } }
      `}} />

      {/* Subtle background glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-primary/5 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 pt-36 pb-24">

        {/* ── HEADER (Center Aligned) ── */}
        <div className="mb-20 text-center">
          <p className="font-inter text-[10px] tracking-[0.4em] text-gold-primary uppercase mb-4 font-bold">Contact</p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-5">
            Let's Talk.
          </h1>
          <p className="font-inter text-base text-text-secondary font-light max-w-md mx-auto">
            Questions about joining or our services? Reach out — we reply within 24 hours.
          </p>
        </div>

        {/* ── CENTERED CONTENT STACK ── */}
        <div className="flex flex-col gap-20">

          {/* TOP — Form (Primary Action) */}
          <div className="order-1 lg:order-2">
            {sent ? (
              <div className="flex flex-col items-center text-center gap-5 pt-4">
                <div className="w-12 h-12 rounded-xl bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center">
                  <Send size={18} className="text-gold-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-text-primary">Message Sent.</h3>
                <p className="font-inter text-sm text-text-secondary font-light">We'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="font-inter text-xs font-bold uppercase tracking-widest text-gold-primary hover:text-gold-light transition mt-2">
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-text-secondary/60 uppercase">Name</label>
                    <input type="text" required placeholder="Your name"
                      className="bg-navy-secondary border border-navy-border rounded-xl py-3.5 px-4 text-sm text-text-primary placeholder:text-text-secondary/20 focus:outline-none focus:border-gold-primary/40 transition font-inter" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-text-secondary/60 uppercase">Phone</label>
                    <input type="tel" placeholder="+91 00000 00000"
                      className="bg-navy-secondary border border-navy-border rounded-xl py-3.5 px-4 text-sm text-text-primary placeholder:text-text-secondary/20 focus:outline-none focus:border-gold-primary/40 transition font-inter" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-text-secondary/60 uppercase">Email</label>
                  <input type="email" required placeholder="name@example.com"
                    className="bg-navy-secondary border border-navy-border rounded-xl py-3.5 px-4 text-sm text-text-primary placeholder:text-text-secondary/20 focus:outline-none focus:border-gold-primary/40 transition font-inter" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-text-secondary/60 uppercase">I'm Interested In</label>
                  <select className="bg-navy-secondary border border-navy-border rounded-xl py-3.5 px-4 text-sm text-text-primary focus:outline-none focus:border-gold-primary/40 transition font-inter appearance-none">
                    <option className="bg-navy-dark">Joining Lexxes Group</option>
                    <option className="bg-navy-dark">Stock Market Courses</option>
                    <option className="bg-navy-dark">Real Estate Properties</option>
                    <option className="bg-navy-dark">Travel Packages</option>
                    <option className="bg-navy-dark">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-text-secondary/60 uppercase">Message</label>
                  <textarea required rows={4} placeholder="How can we help you?"
                    className="bg-navy-secondary border border-navy-border rounded-xl py-3.5 px-4 text-sm text-text-primary placeholder:text-text-secondary/20 focus:outline-none focus:border-gold-primary/40 transition font-inter resize-none" />
                </div>

                <button type="submit" disabled={isLoading}
                  className="group relative flex items-center justify-center gap-3 w-full py-4 bg-gold-primary text-navy-dark rounded-xl font-inter font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-light transition disabled:opacity-60 overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
                  {isLoading
                    ? <Loader2 size={16} className="animate-spin relative z-10" />
                    : <span className="relative z-10">Send Message</span>
                  }
                </button>

              </form>
            )}
          </div>

          {/* BOTTOM — Contact info (Secondary Info) */}
          <div className="order-2 lg:order-1 flex flex-col items-center gap-12 text-center">

            {/* Combined Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 w-full max-w-3xl">
              {[
                { icon: Phone, label: "Phone", value: "+91 92703 12260", href: "tel:+919270312260", color: "text-gold-primary", bg: "bg-gold-primary/10", border: "border-gold-primary/20" },
                { icon: Mail, label: "Email", value: "contact@lexxesgroup.com", href: "mailto:contact@lexxesgroup.com", color: "text-gold-primary", bg: "bg-gold-primary/10", border: "border-gold-primary/20" },
                { icon: MapPin, label: "Location", value: "Mumbai, India", href: "#", color: "text-gold-primary", bg: "bg-gold-primary/10", border: "border-gold-primary/20" },
                { icon: Instagram, label: "Instagram", value: "@lexxesgroup", href: "https://www.instagram.com/lexxes_group?utm_source=qr&igsh=MXhjZ3hmcXN6azV2ag==", color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://chat.whatsapp.com/FYKfSuDs99cL7wepIadYoA", color: "text-[#25D366]", bg: "bg-[#25D366]/10", border: "border-[#25D366]/20" },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? "_blank" : undefined} rel="noreferrer" className="group flex flex-col items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={20} className={item.color} />
                  </div>
                  <div>
                    <p className="font-inter text-[10px] uppercase tracking-widest text-text-secondary/50 mb-1">{item.label}</p>
                    <p className="font-inter text-sm text-text-primary group-hover:text-gold-primary transition flex items-center justify-center gap-1">
                      {item.value} {item.label === "WhatsApp" && <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-navy-border to-transparent" />

          </div>

        </div>
      </div>
    </main>
  );
}