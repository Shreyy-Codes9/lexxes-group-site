"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, User, LayoutDashboard, LogOut } from "lucide-react";

// ── FLATTENED NAVIGATION ──
const navLinks =[
  { name: "About", href: "/about" },
  { name: "Real Estate", href: "/services/real-estate" },
  { name: "Stock Market", href: "/services/stock-market" },
  { name: "Tourism", href: "/services/tourism" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  // ── STATE HOOKS ──
  const[isScrolled, setIsScrolled] = useState(false);
  const[isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  // 🔁 Replace with real auth check later (e.g. check JWT from localStorage/context)
  const isLoggedIn = false;
  const memberName = "Rahul S."; 

  // ── EFFECTS ──
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
  }, [pathname]);

  // Click outside & Escape key handler for profile dropdown
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  // Hide Navbar entirely on the Login page
  if (pathname === "/login") return null;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[70] h-20 transition-all duration-500 ${
        isScrolled || pathname !== "/" || isMobileMenuOpen
          ? "bg-navy-dark/95 backdrop-blur-xl border-b border-navy-border shadow-lg"
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-full flex items-center justify-between relative">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-baseline gap-1.5 z-50 group">
            <span className="font-playfair font-bold text-3xl md:text-4xl text-text-primary group-hover:text-gold-primary transition-colors">
              Lexxes
            </span>
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gold-primary rounded-full shadow-[0_0_8px_rgba(201,168,76,0.6)]" />
            <span className="font-inter text-text-secondary ml-1.5 tracking-[0.25em] uppercase text-xs md:text-sm font-semibold">
              Group
            </span>
          </Link>

          {/* ── DESKTOP NAV (Hidden below lg breakpoint) ── */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={`font-inter font-semibold text-sm uppercase tracking-widest relative group transition-colors ${
                    pathname === link.href ? "text-gold-primary" : "text-text-secondary hover:text-gold-primary"
                  }`}>
                    {link.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-gold-primary transition-all duration-300 group-hover:w-full rounded-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── RIGHT SIDE BUTTONS ── */}
          <div className="hidden lg:flex items-center gap-3">

            {isLoggedIn ? (
              /* Profile dropdown */
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-gold-primary/30 bg-gold-primary/5 hover:border-gold-primary/60 hover:bg-gold-primary/10 transition-all group"
                >
                  <div className="w-7 h-7 rounded-full bg-gold-primary/20 border border-gold-primary/40 flex items-center justify-center">
                    <User size={14} className="text-gold-primary" />
                  </div>
                  <span className="font-inter text-sm font-semibold text-text-primary">{memberName}</span>
                  <ChevronDown size={14} className={`text-text-secondary transition-transform ${isProfileOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Profile dropdown menu */}
                <div className={`absolute top-[calc(100%+0.75rem)] right-0 w-48 transition-all duration-200 ${
                  isProfileOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                }`}>
                  <div className="bg-navy-secondary border border-navy-border rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden">
                    <div className="p-1">
                      <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl font-inter text-sm text-text-secondary hover:text-gold-primary hover:bg-gold-primary/5 transition-colors">
                        <LayoutDashboard size={15} />
                        Dashboard
                      </Link>
                      <Link href="/login" className="flex items-center gap-3 px-4 py-3 rounded-xl font-inter text-sm text-red-400/80 hover:text-red-400 hover:bg-red-400/5 transition-colors">
                        <LogOut size={15} />
                        Sign Out
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Login button */
              <Link href="/login" className="px-6 py-2.5 border border-gold-primary text-gold-primary rounded-xl font-inter font-bold uppercase tracking-widest text-sm hover:bg-gold-primary hover:text-navy-dark transition-colors shadow-lg">
                Member Login
              </Link>
            )}
          </div>

          {/* ── MOBILE MENU TOGGLE ── */}
          <button
            className="lg:hidden z-50 p-2.5 border border-navy-border bg-navy-secondary/50 backdrop-blur-md rounded-xl hover:bg-navy-border transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} className="text-gold-primary" /> : <Menu size={24} className="text-text-primary" />}
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-navy-dark/98 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col h-full pt-28 pb-10 px-8 overflow-y-auto">

            {/* Nav links */}
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="font-playfair text-2xl text-text-primary border-b border-navy-border pb-4 hover:text-gold-primary transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Bottom auth buttons */}
            <div className="mt-auto pt-10 flex flex-col gap-3">
              {isLoggedIn ? (
                <>
                  <Link href="/dashboard" className="flex items-center justify-center gap-2 w-full py-4 bg-gold-primary/10 border border-gold-primary/30 text-gold-primary rounded-xl font-inter font-bold text-sm uppercase tracking-widest transition-colors hover:bg-gold-primary/20">
                    <LayoutDashboard size={16} />
                    My Dashboard
                  </Link>
                  <Link href="/login" className="flex items-center justify-center gap-2 w-full py-4 bg-red-400/10 border border-red-400/20 text-red-400 rounded-xl font-inter font-bold text-sm uppercase tracking-widest transition-colors hover:bg-red-400/20">
                    <LogOut size={16} />
                    Sign Out
                  </Link>
                </>
              ) : (
                <Link href="/login" className="block w-full py-4 bg-gold-primary text-navy-dark rounded-xl font-inter font-bold text-center uppercase tracking-widest hover:bg-gold-light transition-colors shadow-lg">
                  Member Login
                </Link>
              )}
            </div>

          </nav>
        </div>
      )}
    </>
  );
}