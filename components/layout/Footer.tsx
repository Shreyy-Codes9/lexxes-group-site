import React from "react";
import Link from "next/link";

const services = [
  { label: "Stock Market", href: "/services/stock-market" },
  { label: "Real Estate", href: "/services/real-estate" },
  { label: "Tourism", href: "/services/tourism" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Network", href: "/network" },
  { label: "Contact", href: "/contact" },
];

const member = [
  { label: "Member Login", href: "/login" },
  { label: "Register", href: "/register" },
  { label: "Dashboard", href: "/dashboard" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-dark border-t border-navy-border overflow-hidden">
      
      {/* MATCHING GRID PATTERN */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern-footer"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-gold-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-footer)" />
        </svg>
      </div>

      <div className="container-main relative z-10">

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16">

          {/* Brand col */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <span className="font-playfair text-2xl font-bold text-text-primary tracking-tight">
                Lexxes<span className="text-gold-primary">•</span>
              </span>
              <span className="font-inter text-xs tracking-[0.3em] text-text-secondary uppercase mt-0.5">
                Group
              </span>
            </Link>

            <p className="font-inter text-sm text-text-secondary leading-relaxed max-w-xs">
              A movement of ambitious individuals united by one belief — financial freedom is not a privilege. It is a right.
            </p>

            {/* Contact */}
            <div className="mt-8 space-y-2">
              <div className="flex items-center gap-3">
                <svg className="size-4 text-gold-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-inter text-xs text-text-secondary">Nagpur, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="size-4 text-gold-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-inter text-xs text-text-secondary">contact@lexxesgroup.com</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="size-4 text-gold-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-inter text-xs text-text-secondary">+91 95038 62213</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-inter text-xs tracking-[0.25em] text-gold-primary uppercase font-bold mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-inter text-sm text-text-secondary hover:text-gold-primary transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-inter text-xs tracking-[0.25em] text-gold-primary uppercase font-bold mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-inter text-sm text-text-secondary hover:text-gold-primary transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Member */}
          <div className="lg:col-span-3">
            <h4 className="font-inter text-xs tracking-[0.25em] text-gold-primary uppercase font-bold mb-5">
              Members
            </h4>
            <ul className="space-y-3">
              {member.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-inter text-sm text-text-secondary hover:text-gold-primary transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/network"
              className="group mt-8 inline-flex items-center gap-2 bg-gold-primary hover:bg-gold-light text-navy-dark px-6 py-3 rounded-xl font-inter font-bold text-sm transition-all duration-300 shadow-md shadow-gold-primary/20"
            >
              Join Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

        </div>

        {/* SOLID DIVIDER */}
        <div className="w-full h-[1px] bg-navy-border" />

        {/* BOTTOM BAR */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="font-inter text-xs text-text-secondary/50 text-center sm:text-left">
            © {new Date().getFullYear()} Lexxes Group. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-text-secondary/40">
            <span className="font-inter text-xs">Built with</span>
            <span className="text-gold-primary/60 text-xs mx-1">♦</span>
            <span className="font-inter text-xs">in Nagpur</span>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="font-inter text-xs text-text-secondary/50 hover:text-gold-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-inter text-xs text-text-secondary/50 hover:text-gold-primary transition-colors duration-200">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

