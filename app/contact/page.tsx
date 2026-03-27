"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, Phone, MessageCircle, Send, Loader2, ChevronDown } from "lucide-react";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => { setIsLoading(false); setSent(true); }, 2000);
  };

  return (
    <main className="min-h-screen bg-base text-ink selection:bg-gold-primary selection:text-ink relative overflow-hidden">

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine { 100% { transform: translateX(100%); } }
        @keyframes fadeUpReveal {
          0% { opacity: 0; transform: translateY(20px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-fade-up { animation: fadeUpReveal 0.8s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
      `}} />

      {/* ── SUBTLE BACKGROUND ACCENTS ── */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gold-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24">

        {/* ── HEADER ── */}
        <div className="mb-14 md:mb-20 animate-fade-up">
          <p className="font-inter text-[10px] tracking-[0.4em] text-gold-primary uppercase mb-4 font-bold flex items-center gap-4">
            <span className="w-8 h-px bg-gold-primary" /> Contact Us
          </p>
          <h1 className="font-family-soria text-5xl md:text-7xl lg:text-[5.5rem] text-ink leading-[0.9] tracking-tight mb-6">
            We'd love to <br className="hidden md:block" />
            <span className="italic text-gold-primary">hear from you.</span>
          </h1>
          <p className="font-inter text-base text-ink-secondary font-light max-w-md leading-relaxed">
            Whether you have questions about joining, our premium services, or need support — our team is ready to assist.
          </p>
        </div>

        {/* ── BENTO BOX GRID LAYOUT (50/50 SYMMETRICAL) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* LEFT SIDE — CONTACT INFO BLOCKS */}
          <div className="flex flex-col gap-6 animate-fade-up delay-100 h-full">
            
            {/* TOP BLOCK: Phone & WhatsApp (Dark Theme) */}
            <div className="flex-1 bg-ink rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center group">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-primary/20 blur-[60px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-125" />
              
              <div className="relative z-10">
                <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-gold-primary font-bold mb-8">Instant Connect</p>
                
                <div className="flex flex-col gap-8">
                  <a href="tel:+919270312260" className="group/link flex items-center justify-between border-b border-base-white/10 pb-6 hover:border-gold-primary/40 transition-colors">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-full bg-base-white/5 flex items-center justify-center group-hover/link:bg-gold-primary transition-colors duration-500">
                        <Phone size={18} className="text-base-white group-hover/link:text-ink transition-colors duration-500" />
                      </div>
                      <div>
                        <p className="font-inter text-[10px] uppercase tracking-widest text-base-white/40 mb-1">Phone</p>
                        <p className="font-family-soria text-2xl text-base-white group-hover/link:text-gold-primary transition-colors">+91 92703 12260</p>
                      </div>
                    </div>
                    <ArrowUpRight size={20} className="text-base-white/20 group-hover/link:text-gold-primary group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" />
                  </a>

                  <a href="https://chat.whatsapp.com/FYKfSuDs99cL7wepIadYoA" target="_blank" rel="noreferrer" className="group/link flex items-center justify-between border-b border-base-white/10 pb-6 hover:border-[#25D366]/40 transition-colors">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-full bg-base-white/5 flex items-center justify-center group-hover/link:bg-[#25D366] transition-colors duration-500">
                        <MessageCircle size={18} className="text-base-white group-hover/link:text-ink transition-colors duration-500" />
                      </div>
                      <div>
                        <p className="font-inter text-[10px] uppercase tracking-widest text-base-white/40 mb-1">WhatsApp</p>
                        <p className="font-family-soria text-2xl text-base-white group-hover/link:text-[#25D366] transition-colors">Chat with us</p>
                      </div>
                    </div>
                    <ArrowUpRight size={20} className="text-base-white/20 group-hover/link:text-[#25D366] group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" />
                  </a>
                </div>
              </div>
            </div>

            {/* BOTTOM BLOCK: Email (Light Theme) */}
            <div className="bg-base-secondary border border-border rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-base-white blur-[40px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="w-12 h-12 rounded-full bg-base-white flex items-center justify-center shadow-sm mb-6">
                    <Mail size={18} className="text-ink" />
                  </div>
                  <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-ink-secondary font-bold mb-2">Written Inquiries</p>
                  <p className="font-family-soria text-2xl md:text-3xl text-ink">contact@lexxesgroup.com</p>
                </div>
                <a 
                  href="mailto:contact@lexxesgroup.com" 
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-ink hover:text-base-white transition-all duration-300 shrink-0"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE — INQUIRY FORM */}
          <div className="bg-base-white border border-border rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] animate-fade-up delay-200 h-full flex flex-col justify-center">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
                <div className="w-20 h-20 rounded-full bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center">
                  <Send size={32} className="text-gold-primary ml-1" />
                </div>
                <div>
                  <h3 className="font-family-soria text-4xl text-ink mb-3">Message Sent.</h3>
                  <p className="font-inter text-base text-ink-secondary font-light max-w-sm mx-auto">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
                <button 
                  onClick={() => setSent(false)} 
                  className="mt-4 font-inter text-xs font-bold uppercase tracking-widest text-gold-primary hover:text-gold-dark transition-colors flex items-center gap-2"
                >
                  Send another <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="mb-4">
                  <h3 className="font-family-soria text-3xl md:text-4xl text-ink mb-2">Send an Inquiry</h3>
                  <p className="font-inter text-sm text-ink-secondary font-light">Fill out the details below and we'll be in touch.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2.5">
                    <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-ink-secondary uppercase">Name</label>
                    <input type="text" required placeholder="Your full name"
                      className="w-full bg-base border border-border rounded-xl py-4 px-5 text-sm text-ink placeholder:text-ink-light focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 transition-all font-inter" />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-ink-secondary uppercase">Phone</label>
                    <input type="tel" placeholder="+91 00000 00000"
                      className="w-full bg-base border border-border rounded-xl py-4 px-5 text-sm text-ink placeholder:text-ink-light focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 transition-all font-inter" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2.5">
                    <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-ink-secondary uppercase">Email</label>
                    <input type="email" required placeholder="name@example.com"
                      className="w-full bg-base border border-border rounded-xl py-4 px-5 text-sm text-ink placeholder:text-ink-light focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 transition-all font-inter" />
                  </div>
                  <div className="flex flex-col gap-2.5 relative">
                    <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-ink-secondary uppercase">Interested In</label>
                    <div className="relative">
                      <select className="w-full bg-base border border-border rounded-xl py-4 pl-5 pr-12 text-sm text-ink focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 transition-all font-inter appearance-none cursor-pointer">
                        <option value="joining">Joining Lexxes Group</option>
                        <option value="stock">Stock Market Courses</option>
                        <option value="realestate">Real Estate Properties</option>
                        <option value="travel">Travel Packages</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-ink-secondary pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-ink-secondary uppercase">Message</label>
                  <textarea required rows={4} placeholder="How can we help you?"
                    className="w-full bg-base border border-border rounded-xl py-4 px-5 text-sm text-ink placeholder:text-ink-light focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 transition-all font-inter resize-none" />
                </div>

                <button type="submit" disabled={isLoading}
                  className="group relative flex items-center justify-center gap-3 w-full py-5 mt-2 bg-ink text-base-white rounded-xl font-inter font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-primary hover:text-ink transition-all duration-300 disabled:opacity-60 overflow-hidden shadow-lg"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
                  {isLoading
                    ? <Loader2 size={16} className="animate-spin relative z-10" />
                    : <span className="relative z-10 flex items-center gap-2">Send Message <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
                  }
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}