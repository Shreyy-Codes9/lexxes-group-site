"use client";

import { useState, useEffect } from "react"; import Link from "next/link";
import {
  User, Mail, Lock, Eye, EyeOff, Phone, Gift,
  ArrowLeft, Loader2, CheckCircle2, Circle
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<"3000" | "30000" | null>(null);

  useEffect(() => {
    alert("🚧 This site is currently under construction. Some features may not work as expected.");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <main className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-navy-dark px-4 sm:px-6 py-20 overflow-y-auto selection:bg-gold-primary selection:text-navy-dark">

      {/* --- SIMPLE BACKGROUND --- */}
      {/* A single, soft ambient glow in the center to prevent complete flatness */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gold-primary/5 blur-[120px] rounded-full" />
      </div>

      {/* --- BACK BUTTON --- */}
      <Link href="/" className="absolute top-6 left-4 sm:top-8 sm:left-8 z-20 flex items-center gap-2 text-text-secondary hover:text-gold-primary transition-colors font-inter text-sm group">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="hidden sm:inline">Back to Home</span>
        <span className="sm:hidden">Back</span>
      </Link>

      {/* --- CENTERED REGISTRATION CARD --- */}
      <div className="relative z-10 w-full max-w-2xl mx-auto mt-auto mb-auto bg-navy-secondary/80 backdrop-blur-xl border border-navy-border p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <Link href="/" className="flex items-baseline gap-1 mb-4">
            <span className="font-playfair font-bold text-2xl sm:text-3xl text-text-primary">Lexxes</span>
            <span className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
            <span className="font-inter text-text-secondary ml-1 tracking-[0.25em] uppercase text-[10px] font-bold">Group</span>
          </Link>

          <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-text-primary mb-2">
            Create Account.
          </h1>
          <p className="font-inter text-sm text-text-secondary font-light">
            Start your journey to financial freedom.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase pl-1">Full Name</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
                  <User size={16} strokeWidth={1.5} />
                </div>
                <input type="text" required placeholder="John Doe"
                  className="w-full bg-navy-dark/50 border border-navy-border rounded-xl py-3.5 pl-11 pr-4 text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50 transition-colors font-inter" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase pl-1">Phone Number</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
                  <Phone size={16} strokeWidth={1.5} />
                </div>
                <input type="tel" required placeholder="+91 00000 00000"
                  className="w-full bg-navy-dark/50 border border-navy-border rounded-xl py-3.5 pl-11 pr-4 text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50 transition-colors font-inter" />
              </div>
            </div>
          </div>

          {/* Row 2: Email */}
          <div className="flex flex-col gap-2">
            <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase pl-1">Email Address</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
                <Mail size={16} strokeWidth={1.5} />
              </div>
              <input type="email" required placeholder="name@example.com"
                className="w-full bg-navy-dark/50 border border-navy-border rounded-xl py-3.5 pl-11 pr-4 text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50 transition-colors font-inter" />
            </div>
          </div>

          {/* Row 3: Passwords */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase pl-1">Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
                  <Lock size={16} strokeWidth={1.5} />
                </div>
                <input type={showPassword ? "text" : "password"} required placeholder="••••••••"
                  className="w-full bg-navy-dark/50 border border-navy-border rounded-xl py-3.5 pl-11 pr-10 text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50 transition-colors font-inter tracking-wider" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-secondary hover:text-white transition-colors p-1">
                  {showPassword ? <EyeOff size={16} strokeWidth={1.5} /> : <Eye size={16} strokeWidth={1.5} />}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase pl-1">Confirm Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
                  <Lock size={16} strokeWidth={1.5} />
                </div>
                <input type={showConfirm ? "text" : "password"} required placeholder="••••••••"
                  className="w-full bg-navy-dark/50 border border-navy-border rounded-xl py-3.5 pl-11 pr-10 text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50 transition-colors font-inter tracking-wider" />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-secondary hover:text-white transition-colors p-1">
                  {showConfirm ? <EyeOff size={16} strokeWidth={1.5} /> : <Eye size={16} strokeWidth={1.5} />}
                </button>
              </div>
            </div>
          </div>

          {/* Row 4: Package Selection */}
          <div className="flex flex-col gap-2 mt-2">
            <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase pl-1">Select Package</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { value: "3000", label: "Starter", price: "₹3,000", reward: "Goa Trip Reward" },
                { value: "30000", label: "Premium", price: "₹30,000", reward: "Switzerland Trip", popular: true },
              ].map((pkg) => (
                <button
                  key={pkg.value}
                  type="button"
                  onClick={() => setSelectedPackage(pkg.value as "3000" | "30000")}
                  className={`relative flex flex-col items-start p-4 sm:p-5 rounded-xl border transition-colors text-left ${selectedPackage === pkg.value
                      ? "border-gold-primary bg-gold-primary/10"
                      : "border-navy-border bg-navy-dark/40 hover:border-gold-primary/40"
                    }`}
                >
                  <div className="absolute top-4 sm:top-5 right-4 sm:right-5">
                    {selectedPackage === pkg.value
                      ? <CheckCircle2 size={18} className="text-gold-primary" />
                      : <Circle size={18} className="text-navy-border" />
                    }
                  </div>

                  {pkg.popular && (
                    <span className="inline-flex mb-2 px-2 py-0.5 bg-gold-primary text-navy-dark font-inter font-bold text-[9px] uppercase tracking-wider rounded-sm">
                      Popular
                    </span>
                  )}

                  <span className={`font-inter font-bold text-sm mb-0.5 ${selectedPackage === pkg.value ? "text-gold-light" : "text-text-primary"}`}>
                    {pkg.label}
                  </span>
                  <span className="font-playfair font-bold text-2xl text-gold-primary">
                    {pkg.price}
                  </span>
                  <span className="font-inter text-[10px] text-text-secondary mt-1 uppercase tracking-wide">
                    Includes {pkg.reward}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Row 5: Referral Code */}
          <div className="flex flex-col gap-2 mt-1">
            <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase pl-1">
              Referral Code <span className="text-text-secondary/40 normal-case tracking-normal font-normal ml-1">(Optional)</span>
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
                <Gift size={16} strokeWidth={1.5} />
              </div>
              <input type="text" placeholder="e.g. LXG-RA47"
                className="w-full bg-navy-dark/50 border border-navy-border rounded-xl py-3.5 pl-11 pr-4 text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50 transition-colors font-inter uppercase tracking-widest" />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || !selectedPackage}
            className="mt-4 flex items-center justify-center w-full py-4 bg-gold-primary text-navy-dark rounded-xl font-inter font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-light transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 size={18} className="animate-spin text-navy-dark" />
            ) : (
              <span>Create Account</span>
            )}
          </button>

        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-navy-border/60 text-center">
          <p className="font-inter text-sm text-text-secondary font-light">
            Already a member?{" "}
            <Link href="/login" className="font-semibold text-gold-primary hover:text-gold-light transition-colors">
              Sign In
            </Link>
          </p>
        </div>

      </div>
    </main>
  );
}