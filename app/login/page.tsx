"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Loader2 } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result) {
      result.role === "admin" ? router.push("/admin") : router.push("/dashboard");
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-base text-ink px-4 sm:px-6 pt-8 pb-16 overflow-hidden selection:bg-gold-primary selection:text-ink">

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeUpReveal {
          0% { opacity: 0; transform: translateY(30px); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes shine { 100% { transform: translateX(100%); } }
      `}} />

      {/* ── SUBTLE BACKGROUND ACCENTS ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gold-primary/10 blur-[120px] rounded-full animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-blue/5 blur-[120px] rounded-full animate-[pulse_12s_ease-in-out_infinite_reverse]" />
      </div>

      {/* ── BACK BUTTON ── */}
      <Link href="/" className="absolute top-8 left-6 md:left-12 z-20 flex items-center gap-3 text-ink-secondary hover:text-gold-primary transition-colors font-inter text-sm group font-medium">
        <div className="w-9 h-9 rounded-full border border-border bg-base-white shadow-sm flex items-center justify-center group-hover:border-gold-primary/50 transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Back to Home
      </Link>

      {/* ── LOGIN CARD ── */}
      <div
        className="relative z-10 w-full max-w-[440px] opacity-0"
        style={{ animation: "fadeUpReveal 1s cubic-bezier(0.16,1,0.3,1) forwards" }}
      >
        <div className="relative bg-base-white border border-border p-8 sm:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(1,24,64,0.05)] overflow-hidden">

          {/* Top Edge Highlight */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent opacity-70" />

          {/* ── HEADER ── */}
          <div className="flex flex-col items-center text-center mb-10">
            {/* Brand */}
            <Link href="/" className="flex items-baseline gap-1.5 mb-8 group">
              <span className="font-family-soria text-3xl text-ink group-hover:text-gold-primary transition-colors">Lexxes</span>
              <span className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
              <span className="font-inter text-ink-secondary tracking-[0.25em] uppercase text-[9px] font-bold">Group</span>
            </Link>

            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-gold-primary/20 bg-gold-primary/5 shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-primary" />
              </span>
              <span className="font-inter text-[10px] font-bold tracking-[0.3em] text-gold-primary uppercase">Member Login</span>
            </div>

            <h1 className="font-family-soria text-4xl sm:text-5xl text-ink mb-3 tracking-tight">Welcome Back.</h1>
            <p className="font-inter text-sm text-ink-secondary font-light">Sign in to access your Lexxes Group member dashboard.</p>
          </div>

          {/* ── FORM ── */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Email Field */}
            <div className="flex flex-col gap-2.5">
              <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-ink-secondary uppercase pl-1">Email Address</label>
              <div className="relative group/input">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-light group-focus-within/input:text-gold-primary transition-colors pointer-events-none">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-base border border-border rounded-xl py-4 pl-12 pr-4 text-sm text-ink placeholder:text-ink-light focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 transition-all font-inter"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between pl-1 pr-1">
                <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-ink-secondary uppercase">Password</label>
                <Link href="/forgot-password" className="font-inter text-[10px] font-bold text-gold-primary hover:text-gold-dark transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative group/input">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-light group-focus-within/input:text-gold-primary transition-colors pointer-events-none">
                  <Lock size={18} strokeWidth={1.5} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-base border border-border rounded-xl py-4 pl-12 pr-12 text-sm text-ink placeholder:text-ink-light focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 transition-all font-inter tracking-wider"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-light hover:text-gold-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={18} strokeWidth={1.5} /> : <Eye size={18} strokeWidth={1.5} />}
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="font-inter text-xs font-medium text-red-600 text-center bg-red-50 border border-red-100 rounded-xl py-3 px-4 shadow-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" disabled={isLoading}
              className="group relative mt-2 flex items-center justify-center w-full py-4 bg-ink text-base-white rounded-xl font-inter font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-primary hover:text-ink transition-all duration-300 shadow-lg shadow-ink/10 disabled:opacity-70 overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
              {isLoading ? <Loader2 size={18} className="animate-spin relative z-10" /> : <span className="relative z-10">Sign In</span>}
            </button>

          </form>

          {/* ── FOOTER ── */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="font-inter text-sm text-ink-secondary font-light">
              Not a member yet?{" "}
              <Link href="/register" className="font-bold text-gold-primary hover:text-gold-dark transition-colors border-b border-transparent hover:border-gold-dark pb-0.5">
                Register Now
              </Link>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}