"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, Send, Loader2, Instagram, Youtube, Facebook } from "lucide-react";

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

            {/* Contact info grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {[
                { icon: Phone, label: "Phone", value: "+91 95038 62213", href: "tel:+919503862213" },
                { icon: Mail, label: "Email", value: "contact@lexxesgroup.com", href: "mailto:contact@lexxesgroup.com" },
                { icon: MapPin, label: "Location", value: "Mumbai, India", href: "#" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="group flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center group-hover:bg-gold-primary/20 transition">
                    <item.icon size={16} className="text-gold-primary" />
                  </div>
                  <div>
                    <p className="font-inter text-[10px] uppercase tracking-widest text-text-secondary/50 mb-0.5">{item.label}</p>
                    <p className="font-inter text-sm text-text-primary group-hover:text-gold-primary transition">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp Center */}
            <a href="https://wa.me/919503862213?text=Hi%20Lexxes%20Group%2C%20I%20want%20to%20know%20more."
              target="_blank" rel="noreferrer"
              className="group flex flex-col items-center gap-3 w-fit"
            >
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/20 transition">
                <MessageCircle size={16} className="text-[#25D366]" />
              </div>
              <p className="font-inter text-sm text-[#25D366] group-hover:text-[#25D366]/80 transition flex items-center gap-1.5">
                Chat on WhatsApp <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </p>
            </a>

            {/* Socials Center */}
            <div className="flex flex-col items-center gap-5">
              <div className="w-20 h-px bg-navy-border" />
              <div className="flex items-center gap-4">
                {[
                  { icon: Instagram, href: "https://instagram.com/lexxesgroup", label: "Instagram" },
                  { icon: Youtube, href: "https://youtube.com/@lexxesgroup", label: "YouTube" },
                  { icon: Facebook, href: "https://facebook.com/lexxesgroup", label: "Facebook" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-navy-secondary border border-navy-border flex items-center justify-center hover:border-gold-primary/40 hover:bg-gold-primary/5 transition group"
                    title={s.label}
                  >
                    <s.icon size={15} className="text-text-secondary group-hover:text-gold-primary transition" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}