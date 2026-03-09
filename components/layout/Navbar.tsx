"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Process", href: "/process" },
  { name: "Network", href: "/network" },
  { name: "Contact", href: "/contact" },
];

const servicesLinks = [
  {
    name: "Stock Market",
    href: "/services/stock-market",
    subServices: [
      { name: "Stock Market Courses", href: "/services/stock-market" },
      { name: "Live Mentorship", href: "/services/stock-market" },
      { name: "Trading Strategies", href: "/services/stock-market" },
      { name: "Market Analysis", href: "/services/stock-market" },
    ],
  },
  {
    name: "Real Estate",
    href: "/services/real-estate",
    subServices: [
      { name: "Bank Auction Properties", href: "/services/real-estate" },
      { name: "Premium Listings", href: "/services/real-estate" },
      { name: "Property Guidance", href: "/services/real-estate" },
      { name: "Investment Consultation", href: "/services/real-estate" },
    ],
  },
  {
    name: "Tourism",
    href: "/services/tourism",
    subServices: [
      { name: "Goa Package", href: "/services/tourism" },
      { name: "Switzerland Package", href: "/services/tourism" },
      { name: "Group Tours", href: "/services/tourism" },
      { name: "Travel Rewards", href: "/services/tourism" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[70] h-20 transition-all duration-500 ${
          isScrolled || pathname !== "/" || isMobileMenuOpen
            ? "bg-navy-dark/95 backdrop-blur-xl border-b border-navy-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center justify-between relative">
          
          {/* Logo - Left */}
          <Link href="/" className="flex items-baseline gap-1 z-50 group">
            <span className="font-playfair font-bold text-2xl text-text-primary group-hover:text-gold-primary transition">
              Lexxes
            </span>
            <span className="w-2 h-2 bg-gold-primary rounded-full"></span>
            <span className="font-inter text-text-secondary ml-1 tracking-[0.2em] uppercase text-[10px] font-semibold">
              Group
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center">
            <ul className="flex items-center gap-8">
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1 text-text-secondary hover:text-gold-primary font-inter font-semibold text-sm uppercase tracking-widest transition"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isServicesOpen ? "rotate-180 text-gold-primary" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2 max-w-[800px] w-[90vw] transition-all duration-300 ${
                    isServicesOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-4 invisible"
                  }`}
                >
                  <div className="p-8 rounded-2xl bg-navy-secondary border border-navy-border shadow-2xl">
                    <div className="grid grid-cols-3 gap-10">
                      {servicesLinks.map((service) => (
                        <div key={service.name}>
                          <Link
                            href={service.href}
                            className="block font-playfair text-lg text-gold-light hover:text-gold-primary mb-4 border-b border-navy-border pb-3"
                          >
                            {service.name}
                          </Link>
                          <ul className="space-y-3">
                            {service.subServices.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  href={sub.href}
                                  className="text-sm text-text-secondary hover:text-gold-primary transition"
                                >
                                  → {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`font-inter font-semibold text-sm uppercase tracking-widest transition ${
                      pathname === link.href ? "text-gold-primary" : "text-text-secondary hover:text-gold-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button - Right */}
          <div className="hidden md:block">
            <Link
              href="/login"
              className="px-6 py-2.5 border border-gold-primary text-gold-primary rounded-xl font-inter font-bold uppercase tracking-widest hover:bg-gold-primary hover:text-navy-dark transition"
            >
              Member Login
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 p-2.5 border border-navy-border bg-navy-secondary/50 backdrop-blur-md rounded-xl hover:bg-navy-border transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} className="text-gold-primary"/> : <Menu size={24} className="text-text-primary"/>}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-navy-dark/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none translate-y-[-10px]"
        }`}
      >
        <nav className="flex flex-col h-full pt-28 pb-10 px-8 overflow-y-auto">
          {/* SERVICES SECTION */}
          <div 
            className={`transition-all duration-500 delay-100 transform ${
              isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex justify-between w-full text-2xl font-playfair text-gold-light border-b border-navy-border pb-4"
            >
              Services
              <ChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-gold-primary" : ""}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileServicesOpen ? "max-h-[800px] mt-6" : "max-h-0"}`}>
              <div className="flex flex-col gap-6 pl-2">
                {servicesLinks.map((service) => (
                  <div key={service.name} className="border-l border-navy-border pl-4">
                    <button
                      onClick={() =>
                        setMobileServiceOpen(
                          mobileServiceOpen === service.name ? null : service.name
                        )
                      }
                      className="flex justify-between w-full text-lg font-playfair text-text-primary py-1"
                    >
                      {service.name}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          mobileServiceOpen === service.name ? "rotate-180 text-gold-primary" : "opacity-50"
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileServiceOpen === service.name
                          ? "max-h-60 mt-3 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="flex flex-col gap-4 pl-2">
                        {service.subServices.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.href}
                              className="text-text-secondary hover:text-gold-primary text-sm flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-gold-primary/30 rounded-full"></span>
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MAIN NAV LINKS */}
          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                className={`text-2xl font-playfair border-b border-navy-border pb-4 transition-all transform ${
                  isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } ${pathname === link.href ? "text-gold-primary" : "text-text-primary"}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* LOGIN BUTTON */}
          <div 
            className={`mt-auto pt-10 transition-all duration-500 delay-500 transform ${
              isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Link
              href="/login"
              className="block w-full py-4 bg-gold-primary text-navy-dark rounded-xl font-bold text-center shadow-lg shadow-gold-primary/10 active:scale-[0.98] transition-transform"
            >
              Member Login
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}