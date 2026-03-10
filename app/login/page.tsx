"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Loader2, User } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-navy-dark px-4 sm:px-6 pt-24 pb-16 overflow-hidden">

      {/* ANIMATIONS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUpReveal {
          0% { opacity: 0; transform: translateY(30px); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
      `}} />

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        <div className="hidden md:block absolute -top-[20%] -right-[10%] w-[80vw] max-w-[800px] h-[80vw] max-h-[800px] rounded-full border border-gold-primary/5" />

        <div className="absolute top-0 right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold-primary/10 blur-[120px] md:blur-[150px] rounded-full animate-pulse" />

        <div className="absolute bottom-0 left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/5 blur-[120px] md:blur-[150px] rounded-full animate-pulse" />

      </div>

      {/* BACK BUTTON */}
      <Link
        href="/"
        className="absolute top-6 left-4 md:top-8 md:left-12 z-20 flex items-center gap-2 md:gap-3 text-text-secondary hover:text-gold-primary transition text-xs md:text-sm group"
      >
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-navy-border bg-navy-secondary/50 backdrop-blur-sm flex items-center justify-center group-hover:border-gold-primary/50">
          <ArrowLeft size={14} />
        </div>
        Back
      </Link>

      {/* LOGIN CARD */}
      <div
        className="relative z-10 w-full max-w-md opacity-0"
        style={{ animation: "fadeUpReveal 1s cubic-bezier(0.16,1,0.3,1) forwards" }}
      >
        <div className="relative bg-navy-secondary/60 backdrop-blur-2xl border border-navy-border p-6 sm:p-10 rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent opacity-70" />

          {/* HEADER */}
          <div className="flex flex-col items-center text-center mb-6 sm:mb-8">

            <Link href="/" className="flex items-baseline gap-1 mb-5">
              <span className="font-playfair font-bold text-xl sm:text-2xl text-text-primary">Lexxes</span>
              <span className="w-2 h-2 bg-gold-primary rounded-full" />
              <span className="font-inter text-text-secondary tracking-[0.2em] uppercase text-[9px] sm:text-[10px] font-semibold">Group</span>
            </Link>

            {/* TOGGLE */}
            <div className="relative flex w-full max-w-[200px] sm:max-w-[240px] bg-navy-dark/50 border border-navy-border p-1 rounded-xl mb-5">

              <div
                className={`absolute inset-y-1 transition-all duration-300 bg-gold-primary rounded-lg w-[calc(50%-4px)] ${
                  authMode === "signup"
                    ? "translate-x-[calc(100%+4px)]"
                    : "translate-x-0"
                }`}
              />

              <button
                onClick={() => setAuthMode("login")}
                className={`relative z-10 w-1/2 py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest ${
                  authMode === "login" ? "text-navy-dark" : "text-text-secondary"
                }`}
              >
                Sign In
              </button>

              <button
                onClick={() => setAuthMode("signup")}
                className={`relative z-10 w-1/2 py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest ${
                  authMode === "signup"
                    ? "text-navy-dark"
                    : "text-text-secondary"
                }`}
              >
                Register
              </button>
            </div>

            <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-text-primary mb-2">
              {authMode === "login" ? "Welcome Back." : "Create Account."}
            </h1>

            <p className="text-xs sm:text-sm text-text-secondary">
              {authMode === "login"
                ? "Access your member dashboard."
                : "Join the Lexxes network."}
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* NAME */}
            {authMode === "signup" && (
              <div className="flex flex-col gap-2">
                <label className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase">
                  Full Name
                </label>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-navy-dark/40 border border-navy-border rounded-xl py-3 pl-12 pr-4 text-sm text-text-primary focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50"
                  />
                </div>
              </div>
            )}

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-text-secondary uppercase">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />

                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-navy-dark/40 border border-navy-border rounded-xl py-3 pl-12 pr-4 text-sm text-text-primary focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-2">

              <div className="flex justify-between text-[9px] sm:text-[10px]">
                <label className="font-bold tracking-[0.2em] text-text-secondary uppercase">
                  Password
                </label>

                {authMode === "login" && (
                  <Link href="/forgot-password" className="text-gold-primary">
                    Forgot?
                  </Link>
                )}
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full bg-navy-dark/40 border border-navy-border rounded-xl py-3 pl-12 pr-12 text-sm text-text-primary focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/50"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-gold-primary"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 w-full py-3 sm:py-4 bg-gold-primary text-navy-dark rounded-xl font-bold uppercase tracking-[0.2em] text-[11px] sm:text-xs hover:bg-gold-light transition"
            >
              {isLoading ? <Loader2 className="animate-spin mx-auto" /> : authMode === "login" ? "Sign In" : "Create Account"}
            </button>

          </form>

        </div>
      </div>
    </main>
  );
}