"use client";

import { useState, useEffect } from "react";
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
    <main className="relative min-h-screen flex items-center justify-center bg-navy-dark px-4 sm:px-6 pt-8 pb-16 overflow-hidden selection:bg-gold-primary selection:text-navy-dark">

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeUpReveal {
          0% { opacity: 0; transform: translateY(30px); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes shine { 100% { transform: translateX(100%); } }
      `}} />

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[80vw] max-w-[800px] h-[80vw] max-h-[800px] rounded-full border border-gold-primary/5" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[80vw] max-w-[800px] h-[80vw] max-h-[800px] rounded-full border border-gold-primary/5" />
        <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-gold-primary/10 blur-[150px] rounded-full animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full animate-[pulse_12s_ease-in-out_infinite_reverse]" />
      </div>

      {/* Back button */}
      <Link href="/" className="absolute top-8 left-6 md:left-12 z-20 flex items-center gap-3 text-text-secondary hover:text-gold-primary transition font-inter text-sm group">
        <div className="w-8 h-8 rounded-full border border-navy-border bg-navy-secondary/50 backdrop-blur-sm flex items-center justify-center group-hover:border-gold-primary/50 transition">
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
        </div>
        Back to Home
      </Link>

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-[440px] opacity-0"
        style={{ animation: "fadeUpReveal 1s cubic-bezier(0.16,1,0.3,1) forwards" }}
      >
        <div className="relative bg-navy-secondary/60 backdrop-blur-2xl border border-navy-border p-8 sm:p-12 rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent opacity-70" />

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-10">
            <Link href="/" className="flex items-baseline gap-1 mb-6 group">
              <span className="font-playfair font-bold text-2xl text-text-primary group-hover:text-gold-primary transition">Lexxes</span>
              <span className="w-2 h-2 bg-gold-primary rounded-full" />
              <span className="font-inter text-text-secondary ml-1 tracking-[0.2em] uppercase text-[10px] font-semibold">Group</span>
            </Link>

            <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-gold-primary/20 bg-gold-primary/5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-primary" />
              </span>
              <span className="font-inter text-[10px] font-bold tracking-[0.3em] text-gold-primary uppercase">Member Login</span>
            </div>

            <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-text-primary mb-3">Welcome Back.</h1>
            <p className="font-inter text-sm text-text-secondary font-light">Sign in to access your Lexxes Group member dashboard.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Email */}
            <div className="flex flex-col gap-2.5">
              <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase pl-1">Email Address</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-gold-primary transition pointer-events-none">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-navy-dark/40 border border-navy-border rounded-xl py-4 pl-12 pr-4 text-sm text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-gold-primary/50 focus:bg-navy-dark/80 focus:ring-1 focus:ring-gold-primary/50 transition font-inter"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between pl-1 pr-1">
                <label className="font-inter text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase">Password</label>
                <Link href="/forgot-password" className="font-inter text-[10px] font-semibold text-gold-primary/80 hover:text-gold-light transition">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-gold-primary transition pointer-events-none">
                  <Lock size={18} strokeWidth={1.5} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-navy-dark/40 border border-navy-border rounded-xl py-4 pl-12 pr-12 text-sm text-text-primary placeholder:text-text-secondary/30 focus:outline-none focus:border-gold-primary/50 focus:bg-navy-dark/80 focus:ring-1 focus:ring-gold-primary/50 transition font-inter tracking-wider"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-gold-primary transition">
                  {showPassword ? <EyeOff size={18} strokeWidth={1.5} /> : <Eye size={18} strokeWidth={1.5} />}
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <p className="font-inter text-xs text-red-400 text-center bg-red-400/10 border border-red-400/20 rounded-xl py-2.5 px-4">
                {error}
              </p>
            )}

            {/* Submit */}
            <button type="submit" disabled={isLoading}
              className="group relative mt-2 flex items-center justify-center w-full py-4 bg-gold-primary text-navy-dark rounded-xl font-inter font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-light transition shadow-[0_4px_20px_rgba(201,168,76,0.15)] disabled:opacity-70 overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
              {isLoading ? <Loader2 size={18} className="animate-spin relative z-10" /> : <span className="relative z-10">Sign In</span>}
            </button>

          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-navy-border/60 text-center">
            <p className="font-inter text-sm text-text-secondary font-light">
              Not a member yet?{" "}
              <Link href="/register" className="font-semibold text-gold-primary hover:text-gold-light transition border-b border-transparent hover:border-gold-light pb-0.5">
                Register Now
              </Link>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
