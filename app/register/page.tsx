"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User, Mail, Lock, Eye, EyeOff, Phone, Gift,
  ArrowLeft, Loader2, CheckCircle2, Circle,
  TrendingUp, Building2, Plane
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<"4600" | "30000" | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);

  // Form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");

  const { register, isLoading, error: authError } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    if (password !== confirmPassword) {
      setLocalError("Passwords do not match");
      return;
    }
    if (!selectedPackage) {
      setLocalError("Please select a package");
      return;
    }

    try {
      await register({
        name,
        email,
        phone,
        password,
        package: selectedPackage === "4600" ? "starter" : "premium",
        referralCode: referralCode || undefined,
      });
      router.push("/dashboard");
    } catch (err: any) {
      setLocalError(err.message);
    }
  };

  return (
    <main className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-base text-ink px-4 sm:px-6 py-12 md:py-20 overflow-y-auto selection:bg-gold-primary selection:text-ink">

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeUpReveal {
          0% { opacity: 0; transform: translateY(30px); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes shine { 100% { transform: translateX(100%); } }
      `}} />

      {/* ── SUBTLE BACKGROUND ACCENTS ── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gold-primary/10 blur-[120px] rounded-full animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-blue/5 blur-[120px] rounded-full animate-[pulse_12s_ease-in-out_infinite_reverse]" />
      </div>

      {/* ── SYMMETRICAL SPLIT CARD ── */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto bg-base-white border border-border rounded-[2.5rem] shadow-[0_20px_60px_rgba(1,24,64,0.05)] overflow-hidden flex flex-col lg:flex-row opacity-0"
        style={{ animation: "fadeUpReveal 1s cubic-bezier(0.16,1,0.3,1) forwards" }}
      >

        {/* ── LEFT PANEL — BRANDING & PERKS (50%) ── */}
        <div className="lg:w-1/2 bg-ink p-8 md:p-12 lg:p-16 relative flex flex-col justify-between overflow-hidden">
          {/* Dark panel background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-primary/15 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue/20 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <Link href="/" className="inline-flex items-center gap-3 text-base-white/60 hover:text-gold-primary transition-colors font-inter text-sm mb-12 group">
              <div className="w-8 h-8 rounded-full border border-base-white/20 flex items-center justify-center group-hover:border-gold-primary/50 transition-colors">
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              </div>
              Back to Home
            </Link>

            <h1 className="font-soria text-5xl md:text-6xl text-base-white mb-6 leading-[0.9] tracking-tight">
              Join the <span className="italic text-gold-primary">Network.</span>
            </h1>
            <p className="font-inter text-base text-base-white/60 font-light leading-relaxed mb-12 max-w-md">
              Create your account today and unlock a world of financial opportunities, exclusive real estate deals, and premium travel rewards.
            </p>

            {/* Perks List */}
            <div className="flex flex-col gap-8">
              {[
                { icon: TrendingUp, title: "Stock Market Education", desc: "Expert-curated courses and live mentorship." },
                { icon: Building2, title: "Premium Real Estate", desc: "Access to bank auction properties below market value." },
                { icon: Plane, title: "Luxury Travel Rewards", desc: "Earn fully-paid trips to Goa, Switzerland, and more." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-base-white/5 border border-base-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold-primary group-hover:border-gold-primary transition-all duration-500">
                    <item.icon size={18} className="text-gold-primary group-hover:text-ink transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-inter font-bold text-sm text-base-white mb-1 group-hover:text-gold-primary transition-colors">{item.title}</h3>
                    <p className="font-inter text-xs text-base-white/50 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-16 hidden lg:block">
            <div className="w-full h-px bg-gradient-to-r from-base-white/20 to-transparent mb-6" />
            <div className="flex items-baseline gap-1.5 opacity-50">
              <span className="font-soria text-2xl text-base-white">Lexxes</span>
              <span className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
              <span className="font-inter text-base-white tracking-[0.25em] uppercase text-[9px] font-bold">Group</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL — REGISTRATION FORM (50%) ── */}
        <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 bg-base-white flex flex-col justify-center">

          <div className="mb-8">
            <h2 className="font-soria text-3xl md:text-4xl text-ink mb-2">Create Account</h2>
            <p className="font-inter text-sm text-ink-secondary font-light">Fill in your details to get started.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Name & Phone (Symmetrical Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2.5">
                <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-ink-secondary uppercase pl-1">Full Name</label>
                <div className="relative group/input">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-light group-focus-within/input:text-gold-primary transition-colors pointer-events-none">
                    <User size={18} strokeWidth={1.5} />
                  </div>
                  <input type="text" required placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)}
                    className="w-full bg-base border border-border rounded-xl py-4 pl-12 pr-4 text-sm text-ink placeholder:text-ink-light focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 transition-all font-inter" />
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-ink-secondary uppercase pl-1">Phone</label>
                <div className="relative group/input">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-light group-focus-within/input:text-gold-primary transition-colors pointer-events-none">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                  <input type="tel" required placeholder="+91 00000 00000" value={phone} onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-base border border-border rounded-xl py-4 pl-12 pr-4 text-sm text-ink placeholder:text-ink-light focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 transition-all font-inter" />
                </div>
              </div>
            </div>

            {/* Email (Full Width) */}
            <div className="flex flex-col gap-2.5">
              <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-ink-secondary uppercase pl-1">Email Address</label>
              <div className="relative group/input">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-light group-focus-within/input:text-gold-primary transition-colors pointer-events-none">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <input type="email" required placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-base border border-border rounded-xl py-4 pl-12 pr-4 text-sm text-ink placeholder:text-ink-light focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 transition-all font-inter" />
              </div>
            </div>

            {/* Passwords (Symmetrical Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2.5">
                <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-ink-secondary uppercase pl-1">Password</label>
                <div className="relative group/input">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-light group-focus-within/input:text-gold-primary transition-colors pointer-events-none">
                    <Lock size={18} strokeWidth={1.5} />
                  </div>
                  <input type={showPassword ? "text" : "password"} required placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-base border border-border rounded-xl py-4 pl-12 pr-12 text-sm text-ink placeholder:text-ink-light focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 transition-all font-inter tracking-wider" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-light hover:text-gold-primary transition-colors">
                    {showPassword ? <EyeOff size={18} strokeWidth={1.5} /> : <Eye size={18} strokeWidth={1.5} />}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-ink-secondary uppercase pl-1">Confirm Password</label>
                <div className="relative group/input">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-light group-focus-within/input:text-gold-primary transition-colors pointer-events-none">
                    <Lock size={18} strokeWidth={1.5} />
                  </div>
                  <input type={showConfirm ? "text" : "password"} required placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-base border border-border rounded-xl py-4 pl-12 pr-12 text-sm text-ink placeholder:text-ink-light focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 transition-all font-inter tracking-wider" />
                  <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-light hover:text-gold-primary transition-colors">
                    {showConfirm ? <EyeOff size={18} strokeWidth={1.5} /> : <Eye size={18} strokeWidth={1.5} />}
                  </button>
                </div>
              </div>
            </div>

            {/* ── PACKAGE SELECTION (Symmetrical Grid) ── */}
            <div className="flex flex-col gap-2.5 mt-8"> {/* Added margin to accommodate the tag height */}
              <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-ink-secondary uppercase pl-1">
                Membership Package
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                {[
                  { value: "4600", label: "Starter", price: "₹4,600", reward: "Goa Trip" },
                  { value: "30000", label: "Premium", price: "₹30,000", reward: "Swiss Trip", popular: true },
                ].map((pkg) => (
                  <button
                    key={pkg.value}
                    type="button"
                    onClick={() => setSelectedPackage(pkg.value as "4600" | "30000")}
                    className={`relative flex flex-col items-start p-6 rounded-2xl border transition-all duration-300 text-left h-full ${selectedPackage === pkg.value
                        ? "border-gold-primary bg-gold-primary/5 shadow-md shadow-gold-primary/10"
                        : "border-border bg-base hover:border-gold-primary/40"
                      }`}
                  >
                    {/* Popular Tag - Positioned Absolute to sit ON TOP of the border */}
                    {pkg.popular && (
                      <div className="absolute -top-3 left-6 z-20">
                        <span className="bg-gold-primary text-ink font-inter font-bold text-[9px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Selection Icon */}
                    <div className="absolute top-6 right-6 z-10">
                      {selectedPackage === pkg.value
                        ? <CheckCircle2 size={20} className="text-gold-primary drop-shadow-sm" />
                        : <Circle size={20} className="text-border" />
                      }
                    </div>

                    {/* Card Content - Now perfectly aligned across both cards */}
                    <span className={`font-inter font-bold text-sm mb-1 ${selectedPackage === pkg.value ? "text-gold-dark" : "text-ink-secondary"
                      }`}>
                      {pkg.label}
                    </span>

                    <span className="font-soria text-3xl text-ink mb-1">
                      {pkg.price}
                    </span>

                    <span className="font-inter text-[10px] text-ink-light uppercase tracking-widest font-bold mt-4">
                      Includes {pkg.reward}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Referral Code */}
            <div className="flex flex-col gap-2.5 mt-2">
              <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-ink-secondary uppercase pl-1 flex items-center justify-between">
                Referral Code <span className="text-ink-light normal-case tracking-normal font-normal">Optional</span>
              </label>
              <div className="relative group/input">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-light group-focus-within/input:text-gold-primary transition-colors pointer-events-none">
                  <Gift size={18} strokeWidth={1.5} />
                </div>
                <input type="text" placeholder="e.g. LXG-RA47" value={referralCode} onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                  className="w-full bg-base border border-border rounded-xl py-4 pl-12 pr-4 text-sm text-ink placeholder:text-ink-light focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 transition-all font-inter uppercase tracking-widest" />
              </div>
            </div>

            {/* Errors */}
            {(localError || authError) && (
              <div className="font-inter text-xs font-medium text-red-600 text-center bg-red-50 border border-red-100 rounded-xl py-3 px-4 shadow-sm mt-2">
                {localError || authError}
              </div>
            )}

            {/* Submit */}
            <button type="submit" disabled={isLoading || !selectedPackage}
              className="group relative mt-2 flex items-center justify-center w-full py-5 bg-ink text-base-white rounded-xl font-inter font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-primary hover:text-ink transition-all duration-300 shadow-lg shadow-ink/10 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
              {isLoading
                ? <Loader2 size={18} className="animate-spin relative z-10" />
                : <span className="relative z-10">Create Account</span>
              }
            </button>

          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="font-inter text-sm text-ink-secondary font-light">
              Already a member?{" "}
              <Link href="/login" className="font-bold text-gold-primary hover:text-gold-dark transition-colors border-b border-transparent hover:border-gold-dark pb-0.5">
                Sign In
              </Link>
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}