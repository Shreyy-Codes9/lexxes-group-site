"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { User, LayoutDashboard, LogOut, Shield, ChevronRight, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const navLinks =[
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Real Estate", href: "/services/real-estate" },
  { name: "Stock Market", href: "/services/stock-market" },
  { name: "Tourism", href: "/services/tourism" },
  { name: "Contact", href: "/contact" },
];

// --- Refined Smooth Animation Variants ---
const menuVars = {
  initial: { y: "-100%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  exit: { y: "-100%", opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const containerVars = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const linkVars = {
  initial: { y: "20%", opacity: 0, filter: "blur(4px)" },
  animate: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  exit: { y: "10%", opacity: 0, transition: { duration: 0.3 } },
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, token, logout } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const[isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const isLoggedIn = !!token || (typeof window !== "undefined" && !!localStorage.getItem("lexxes_token"));
  const storedUser = typeof window !== "undefined" ? localStorage.getItem("lexxes_user") : null;
  const currentUser = user || (storedUser ? JSON.parse(storedUser) : null);
  const isAdmin = currentUser?.role === "admin";

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  },[]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  if (["/login", "/register", "/dashboard", "/admin"].includes(pathname)) return null;

  return (
    <>
      {/* ── NAVBAR ── */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-base/90 backdrop-blur-xl border-b border-border shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        {/* CHANGED: Removed max-width entirely and set w-full with small padding for "edge-to-edge" look */}
        <div className="w-full px-4 md:px-6">
          <nav className="relative flex items-center justify-between h-16 md:h-20">

            {/* ── LOGO (Left Edge) ── */}
            <Link href="/" className="flex items-center gap-3 md:gap-4 shrink-0 group z-10">
              <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 transition-transform duration-500 group-hover:scale-105">
                <Image src="/logo1.png" alt="Lexxes Group" fill className="object-contain drop-shadow-sm" />
              </div>
              <div className="hidden lg:flex items-baseline gap-1">
                <span className="font-soria font-bold text-4xl md:text-5xl text-ink tracking-wide group-hover:text-blue transition-colors duration-500 leading-9  drop-shadow-sm">
                  Lexxes
                </span>
                <span className="w-2.5 h-2.5 bg-gold-primary rounded-full shadow-[0_0_12px_rgba(201,168,76,0.6)]" />
                <span className="font-inter text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-ink-secondary ">Group</span>
              </div>
            </Link>

            {/* ── RIGHT SIDE — ALL-IN-ONE PILL (Right Edge) ── */}
            <div className="hidden lg:flex items-center p-1.5 bg-base-secondary/60 backdrop-blur-md rounded-full border border-border shadow-md">

              {/* Nav Links */}
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                      isActive ? "text-ink" : "text-ink-secondary hover:text-ink"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-base-white rounded-full shadow-sm border border-border/60"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {isActive && <span className="w-1.5 h-1.5 bg-gold-primary rounded-full shadow-[0_0_4px_rgba(201,168,76,0.4)]" />}
                      {link.name}
                    </span>
                  </Link>
                );
              })}

              {/* Divider */}
              <div className="w-px h-6 bg-border mx-2" />

              {/* Profile or Login — Inside the pill */}
              {isLoggedIn && currentUser ? (
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2.5 px-2 py-1.5 pr-3.5 rounded-full bg-base-white border border-border hover:border-blue/30 shadow-sm transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-base-secondary flex items-center justify-center shrink-0 group-hover:bg-blue transition-colors duration-300">
                      {isAdmin
                        ? <Shield size={13} className="text-ink group-hover:text-base-white transition-colors" />
                        : <User size={13} className="text-ink group-hover:text-base-white transition-colors" />}
                    </div>
                    <span className="font-inter text-[11px] font-bold text-ink whitespace-nowrap">
                      {currentUser.name.split(" ")[0]}
                    </span>
                    <ChevronRight size={14} className={`text-ink-secondary transition-transform duration-300 ${isProfileOpen ? "rotate-90" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 12 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="absolute right-0 top-[calc(100%+0.75rem)] w-64 bg-base-white border border-border rounded-2xl p-2 shadow-[0_24px_48px_rgba(0,0,0,0.08)] origin-top-right"
                      >
                        <div className="px-4 py-4 mb-2 bg-base-secondary rounded-xl border border-border">
                          <p className="text-sm font-bold text-ink truncate">{currentUser.name}</p>
                          <p className="text-[11px] text-ink-secondary truncate mt-0.5">{currentUser.email}</p>
                          {isAdmin && (
                            <span className="inline-block mt-2 font-inter text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-gold-primary/15 text-gold-dark border border-gold-primary/30">
                              Administrator
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col gap-1">
                          <Link
                            href={isAdmin ? "/admin" : "/dashboard"}
                            className="flex items-center justify-between px-4 py-3 text-[13px] font-semibold text-ink-secondary hover:text-ink hover:bg-base-secondary rounded-xl transition-colors group/item"
                          >
                            <span className="flex items-center gap-3">
                              {isAdmin ? <Shield size={15} /> : <LayoutDashboard size={15} />}
                              {isAdmin ? "Admin Panel" : "Dashboard"}
                            </span>
                            <ChevronRight size={13} className="text-ink-light group-hover/item:text-ink transition-colors" />
                          </Link>
                          <div className="h-px bg-border mx-2 my-1" />
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-4 py-3 text-[13px] font-semibold text-red-500 hover:text-red-600 hover:bg-red-50/50 rounded-xl transition-colors w-full text-left group/out"
                          >
                            <LogOut size={15} className="group-hover/out:translate-x-1 transition-transform" /> Sign Out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* ── LOGIN BUTTON ── */
                <Link href="/login" className="relative overflow-hidden flex items-center px-6 py-2.5 bg-ink text-base-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full group transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
                  <span className="absolute inset-0 bg-blue translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1] rounded-full" />
                  <span className="relative z-10">Member Login</span>
                </Link>
              )}
            </div>

            {/* ── MOBILE HAMBURGER ── */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-base-white border border-border text-ink hover:bg-base-secondary shadow-sm transition-colors group"
              aria-label="Open Menu"
            >
              <div className="flex flex-col items-end justify-center gap-[5px] w-5">
                <span className="w-full h-[1.5px] bg-ink rounded-full transition-all duration-300" />
                <span className="w-[80%] h-[1.5px] bg-ink rounded-full transition-all duration-300 group-hover:w-full" />
                <span className="w-[60%] h-[1.5px] bg-ink rounded-full transition-all duration-300 group-hover:w-full" />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* ── MOBILE FULLSCREEN MENU ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="lg:hidden fixed inset-0 z-[110] bg-base flex flex-col overflow-hidden"
          >
            {/* Top bar */}
            <div className="w-full px-6 md:px-8 shrink-0 border-b border-border/40">
              <div className="flex items-center justify-between h-16 md:h-20">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 shrink-0">
                  <div className="relative w-12 h-12 md:w-16 md:h-16 shrink-0">
                    <Image src="/logo1.png" alt="Lexxes Group" fill className="object-contain" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-relieve font-bold text-4xl md:text-5xl text-ink leading-none pb-1 drop-shadow-sm">Lexxes</span>
                    <span className="w-2.5 h-2.5 bg-gold-primary rounded-full shadow-[0_0_8px_rgba(201,168,76,0.6)]" />
                    <span className="font-inter text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-ink-secondary ml-0.5">Group</span>
                  </div>
                </Link>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-base-white border border-border text-ink hover:bg-base-secondary shadow-sm transition-colors group"
                  aria-label="Close Menu"
                >
                  <X size={20} className="group-hover:rotate-90 transition-transform duration-500" />
                </button>
              </div>
            </div>

            {/* Nav Links */}
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 flex flex-col justify-center px-8 md:px-12 py-6 overflow-y-auto"
            >
              <nav className="flex flex-col gap-4 md:gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div key={link.name} variants={linkVars} className="overflow-hidden">
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center justify-between pb-4 border-b border-border/60"
                      >
                        <span className={`font-relieve text-4xl md:text-5xl tracking-tight transition-colors duration-300 ${
                          isActive ? "text-blue" : "text-ink group-hover:text-blue"
                        }`}>
                          {link.name}
                        </span>
                        <div className="flex items-center gap-4">
                           {isActive && <span className="w-2.5 h-2.5 rounded-full bg-gold-primary shadow-[0_0_8px_rgba(201,168,76,0.5)]" />}
                           <ChevronRight size={24} className={`transition-transform duration-300 ${isActive ? "text-blue translate-x-1" : "text-border group-hover:text-blue group-hover:translate-x-1"}`} />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>

            {/* Bottom auth */}
            <motion.div
              variants={linkVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="px-8 md:px-12 pb-12 pt-6 bg-base-secondary/50 border-t border-border"
            >
              {isLoggedIn && currentUser ? (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-base-white border border-border shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-blue/10 border border-blue/20 flex items-center justify-center shrink-0">
                      {isAdmin ? <Shield size={20} className="text-blue" /> : <User size={20} className="text-blue" />}
                    </div>
                    <div className="min-w-0">
                      <p className="font-inter text-[15px] font-bold text-ink truncate">{currentUser.name}</p>
                      <p className="font-inter text-[13px] text-ink-secondary truncate mt-0.5">{currentUser.email}</p>
                    </div>
                  </div>

                  <Link
                    href={isAdmin ? "/admin" : "/dashboard"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative overflow-hidden flex items-center justify-between px-6 py-5 bg-ink text-base-white rounded-2xl font-inter font-bold text-[11px] uppercase tracking-[0.2em] shadow-lg shadow-ink/10 group"
                  >
                    <span className="absolute inset-0 bg-blue translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                    <span className="relative z-10 flex items-center gap-3">
                      {isAdmin ? <Shield size={16} /> : <LayoutDashboard size={16} />}
                      {isAdmin ? "Admin Panel" : "My Dashboard"}
                    </span>
                    <ChevronRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                    className="flex items-center gap-3 px-6 py-5 bg-base-white border border-border text-red-500 rounded-2xl font-inter font-bold text-[11px] uppercase tracking-[0.2em] w-full hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors group"
                  >
                    <LogOut size={16} className="group-hover:translate-x-1 transition-transform" /> Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative overflow-hidden flex items-center justify-center px-6 py-6 bg-ink text-base-white text-xs font-bold uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-ink/10 group"
                >
                  <span className="absolute inset-0 bg-blue translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                  <span className="relative z-10 flex items-center gap-2">
                    Member Login
                    <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75" />
                  </span>
                </Link>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}