"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User, TrendingUp, Home, Plane, LogOut, ChevronDown, ChevronRight,
  Copy, Check, Users, Star, Award, LayoutDashboard, Lock, Shield
} from "lucide-react";

const member = {
  name: "Amit Rangari",
  email: "amitrangari1710@example.com",
  phone: "+91 98765 43210",
  package: "premium",
  joinDate: "March 2026",
  referralCode: "LXG-RA47",
  totalReferrals: 6,
};

const networkTree = [
  {
    id: "1", name: "Priya Verma", package: "premium", referrals: 3,
    children: [
      { id: "1a", name: "Ankit Joshi", package: "starter", referrals: 1, children: [] },
      { id: "1b", name: "Sneha Patil", package: "premium", referrals: 2, children: [
        { id: "1b1", name: "Rohan Mehta", package: "starter", referrals: 0, children: [] },
      ]},
    ],
  },
  {
    id: "2", name: "Vikas Nair", package: "starter", referrals: 1,
    children: [
      { id: "2a", name: "Pooja Singh", package: "starter", referrals: 0, children: [] },
    ],
  },
  {
    id: "3", name: "Deepak Rao", package: "premium", referrals: 0, children: [],
  },
];

const services = [
  { icon: TrendingUp, label: "Stock Market", sub: "Tred India", href: "/services/stock-market", color: "text-blue-400", locked: false },
  { icon: Home, label: "Real Estate", sub: "Alliance Real Estate", href: "/services/real-estate", color: "text-emerald-400", locked: false },
  { icon: Plane, label: "Tourism", sub: "Travel Asia", href: "/services/tourism", color: "text-amber-400", locked: false },
];

// ── TREE NODE ──
function TreeNode({ node, depth = 0, isLast = false }: { node: any; depth?: number; isLast?: boolean }) {
  const [expanded, setExpanded] = useState(depth === 0);
  const hasChildren = node.children && node.children.length > 0;
  const isPremium = node.package === "premium";

  return (
    <div className="relative">
      {/* Vertical line */}
      {depth > 0 && (
        <div className={`absolute left-0 top-0 w-px bg-navy-border ${isLast ? "h-7" : "h-full"}`} />
      )}
      {/* Horizontal line */}
      {depth > 0 && (
        <div className="absolute left-0 top-7 w-5 h-px bg-navy-border" />
      )}

      <div className={`relative flex items-center gap-3 ${depth > 0 ? "ml-5 mt-3" : "mt-2"}`}>

        {/* Expand/collapse button */}
        {hasChildren ? (
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-5 h-5 rounded-md border border-navy-border bg-navy-secondary flex items-center justify-center hover:border-gold-primary/50 transition shrink-0 z-10"
          >
            {expanded
              ? <ChevronDown size={11} className="text-gold-primary" />
              : <ChevronRight size={11} className="text-text-secondary" />
            }
          </button>
        ) : (
          <div className="w-5 h-5 flex items-center justify-center shrink-0 z-10">
            <div className="w-2 h-2 rounded-full border border-navy-border bg-navy-dark" />
          </div>
        )}

        {/* Node card */}
        <div className={`flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-xl border transition-all duration-200 ${
          isPremium
            ? "bg-gold-primary/5 border-gold-primary/20 hover:border-gold-primary/40"
            : "bg-navy-secondary/40 border-navy-border hover:border-navy-border/80"
        }`}>
          <div className="flex items-center gap-3 min-w-0">
            {/* Avatar */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-playfair font-bold text-sm ${
              isPremium
                ? "bg-gold-primary/15 border border-gold-primary/30 text-gold-primary"
                : "bg-navy-border/50 border border-navy-border text-text-secondary"
            }`}>
              {node.name[0]}
            </div>
            <div className="min-w-0">
              <p className="font-inter text-sm font-semibold text-text-primary truncate">{node.name}</p>
              <p className="font-inter text-[10px] text-text-secondary mt-0.5">
                {node.referrals} referral{node.referrals !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {/* Package badge */}
          <span className={`shrink-0 font-inter text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${
            isPremium
              ? "bg-gold-primary/10 text-gold-primary border-gold-primary/20"
              : "bg-navy-dark text-text-secondary border-navy-border"
          }`}>
            {isPremium ? "✦ Premium" : "Starter"}
          </span>
        </div>
      </div>

      {/* Children */}
      {expanded && hasChildren && (
        <div className={`relative ${depth > 0 ? "ml-5" : ""}`}>
          {/* Continuous vertical line through children */}
          <div className="absolute left-2.5 top-0 bottom-0 w-px bg-navy-border" />
          {node.children.map((child: any, i: number) => (
            <TreeNode key={child.id} node={child} depth={depth + 1} isLast={i === node.children.length - 1} />
          ))}
        </div>
      )}
    </div>
  );
}

// ── DASHBOARD ──
export default function DashboardPage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "network">("overview");

  const copyReferral = () => {
    navigator.clipboard.writeText(member.referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isPremium = member.package === "premium";

  return (
    <div className="min-h-screen bg-navy-dark text-text-primary selection:bg-gold-primary selection:text-navy-dark flex">

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn 0.4s ease-out forwards; }
      `}} />

      {/* ── SIDEBAR ── */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-[260px] bg-navy-secondary/40 backdrop-blur-2xl border-r border-navy-border flex-col z-50">
        <div className="px-7 py-7 border-b border-navy-border">
          <Link href="/" className="flex items-baseline gap-1.5 group">
            <span className="font-playfair font-bold text-2xl text-text-primary group-hover:text-gold-primary transition">Lexxes</span>
            <span className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
            <span className="font-inter text-text-secondary ml-1 tracking-[0.25em] uppercase text-[10px] font-bold">Group</span>
          </Link>
        </div>

        <div className="px-7 py-6 border-b border-navy-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center shrink-0">
              <User size={18} className="text-gold-primary" />
            </div>
            <div className="min-w-0">
              <p className="font-inter text-sm font-bold text-text-primary truncate">{member.name}</p>
              <p className={`font-inter text-[9px] font-bold uppercase tracking-widest mt-0.5 ${isPremium ? "text-gold-primary" : "text-text-secondary"}`}>
                {isPremium ? "✦ Premium" : "Starter"}
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-5 flex flex-col gap-1.5">
          {[
            { id: "overview", icon: LayoutDashboard, label: "Overview" },
            { id: "network", icon: Users, label: "My Network" },
          ].map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id as any)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-inter text-sm font-semibold transition-all ${
                activeTab === item.id
                  ? "bg-gold-primary/10 text-gold-primary border border-gold-primary/20"
                  : "text-text-secondary hover:text-white hover:bg-navy-border/40 border border-transparent"
              }`}
            >
              <item.icon size={16} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-5 border-t border-navy-border">
          <Link href="/login" className="flex items-center gap-3 px-4 py-3 rounded-xl font-inter text-sm font-semibold text-text-secondary hover:text-red-400 hover:bg-red-400/5 border border-transparent transition-all">
            <LogOut size={16} />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main className="flex-1 md:ml-[260px] p-5 sm:p-8 md:p-12 max-w-5xl">

        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between mb-8">
          <Link href="/" className="flex items-baseline gap-1.5">
            <span className="font-playfair font-bold text-xl text-text-primary">Lexxes</span>
            <span className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
          </Link>
          <Link href="/login" className="w-8 h-8 rounded-full bg-red-400/10 text-red-400 flex items-center justify-center">
            <LogOut size={14} />
          </Link>
        </div>

        {/* Mobile tabs */}
        <div className="md:hidden flex gap-2 mb-8 bg-navy-secondary rounded-xl p-1 border border-navy-border">
          {[{ id: "overview", label: "Overview" }, { id: "network", label: "Network" }].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-2.5 rounded-lg font-inter text-xs font-bold uppercase tracking-wider transition ${
                activeTab === tab.id ? "bg-gold-primary text-navy-dark" : "text-text-secondary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── OVERVIEW ── */}
        {activeTab === "overview" && (
          <div className="flex flex-col gap-8 fade-in">
            <div>
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-2 font-bold">Dashboard</p>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">Welcome, {member.name.split(" ")[0]}.</h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Status", value: isPremium ? "Premium" : "Starter", icon: Award, gold: true },
                { label: "Network Size", value: member.totalReferrals, icon: Users, gold: false },
                { label: "Member Since", value: member.joinDate, icon: Star, gold: false },
              ].map((s) => (
                <div key={s.label} className={`p-6 rounded-2xl border ${s.gold ? "bg-gold-primary/5 border-gold-primary/20" : "bg-navy-secondary border-navy-border"}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <s.icon size={13} className={s.gold ? "text-gold-primary" : "text-text-secondary"} />
                    <span className="font-inter text-[10px] uppercase tracking-widest text-text-secondary font-bold">{s.label}</span>
                  </div>
                  <p className={`font-playfair text-2xl font-bold ${s.gold ? "text-gold-primary" : "text-white"}`}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* Referral + Package */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-7 rounded-2xl bg-navy-secondary border border-navy-border">
                <p className="font-inter text-[10px] uppercase tracking-widest text-text-secondary font-bold mb-1">Referral Code</p>
                <p className="font-playfair text-lg font-bold text-white mb-5">Share & Earn Rewards</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-navy-dark border border-dashed border-gold-primary/30 rounded-xl px-5 py-3.5">
                    <span className="font-inter font-black text-lg tracking-[0.25em] text-gold-primary">{member.referralCode}</span>
                  </div>
                  <button onClick={copyReferral} className="flex items-center gap-2 px-5 py-3.5 bg-gold-primary text-navy-dark rounded-xl font-inter text-xs font-bold uppercase tracking-widest transition hover:bg-gold-light">
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              <div className={`p-7 rounded-2xl border ${isPremium ? "bg-gold-primary/5 border-gold-primary/20" : "bg-navy-secondary border-navy-border"}`}>
                <p className="font-inter text-[10px] uppercase tracking-widest text-text-secondary font-bold mb-1">Active Package</p>
                <p className={`font-playfair text-2xl font-bold mb-2 ${isPremium ? "text-gold-primary" : "text-white"}`}>
                  {isPremium ? "Premium Plan" : "Starter Plan"}
                </p>
                <p className="font-inter text-sm text-text-secondary font-light">
                  {isPremium ? "₹30,000 — Switzerland Trip Reward" : "₹3,000 — Goa Trip Reward"}
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="font-inter text-[10px] uppercase tracking-widest text-text-secondary font-bold mb-4">Your Services</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {services.map((svc) => (
                  <Link key={svc.label} href={svc.href}
                    className="group p-5 rounded-2xl bg-navy-secondary border border-navy-border hover:border-gold-primary/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <svc.icon size={20} className={`mb-3 ${svc.color}`} />
                    <p className="font-inter font-bold text-sm text-white mb-0.5">{svc.label}</p>
                    <p className="font-inter text-xs text-text-secondary">{svc.sub}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── NETWORK TAB ── */}
        {activeTab === "network" && (
          <div className="flex flex-col gap-8 fade-in">

            <div>
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-2 font-bold">Organization</p>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">Your Downline.</h1>
              <p className="font-inter text-sm text-text-secondary mt-2 font-light">
                {member.totalReferrals} total members in your network.
              </p>
            </div>

            {/* Network stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Direct", value: networkTree.length, desc: "People you referred" },
                { label: "Level 2", value: networkTree.reduce((a, n) => a + n.children.length, 0), desc: "Their referrals" },
                { label: "Total", value: member.totalReferrals, desc: "Full network size" },
              ].map((s) => (
                <div key={s.label} className="p-5 rounded-2xl bg-navy-secondary border border-navy-border text-center">
                  <p className="font-playfair text-3xl font-bold text-gold-primary">{s.value}</p>
                  <p className="font-inter text-[10px] uppercase tracking-widest text-white font-bold mt-1">{s.label}</p>
                  <p className="font-inter text-[10px] text-text-secondary mt-0.5 hidden md:block">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Tree + List */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Tree */}
              <div className="rounded-2xl bg-navy-secondary border border-navy-border overflow-hidden">
                <div className="flex items-center justify-between px-6 py-5 border-b border-navy-border">
                  <div>
                    <p className="font-inter text-xs font-bold uppercase tracking-widest text-white">Network Tree</p>
                    <p className="font-inter text-[10px] text-text-secondary mt-0.5">Click nodes to expand</p>
                  </div>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-inter text-[10px] text-emerald-400 uppercase tracking-wider font-bold">Live</span>
                  </span>
                </div>

                {/* Root node — YOU */}
                <div className="px-6 pt-5 pb-2">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gold-primary/10 border border-gold-primary/25 mb-1">
                    <div className="w-9 h-9 rounded-full bg-gold-primary/20 border border-gold-primary/40 flex items-center justify-center shrink-0 font-playfair font-bold text-sm text-gold-primary">
                      {member.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-inter text-sm font-bold text-gold-primary truncate">{member.name}</p>
                      <p className="font-inter text-[10px] text-gold-primary/60 mt-0.5">You — Root Node</p>
                    </div>
                    <span className="font-inter text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-gold-primary/20 text-gold-primary border border-gold-primary/30">
                      ✦ Premium
                    </span>
                  </div>

                  {/* Connector from root */}
                  <div className="ml-4 w-px h-3 bg-navy-border" />
                </div>

                <div className="px-6 pb-6 overflow-x-auto">
                  <div className="min-w-[280px]">
                    {networkTree.map((node, i) => (
                      <TreeNode key={node.id} node={node} depth={0} isLast={i === networkTree.length - 1} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct referrals list */}
              <div className="rounded-2xl bg-navy-secondary border border-navy-border overflow-hidden">
                <div className="px-6 py-5 border-b border-navy-border">
                  <p className="font-inter text-xs font-bold uppercase tracking-widest text-white">Direct Referrals</p>
                  <p className="font-inter text-[10px] text-text-secondary mt-0.5">People you personally brought in</p>
                </div>
                <div className="divide-y divide-navy-border">
                  {networkTree.map((node) => (
                    <div key={node.id} className="flex items-center gap-4 px-6 py-4 hover:bg-navy-dark/30 transition-colors">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-playfair font-bold text-sm ${
                        node.package === "premium"
                          ? "bg-gold-primary/10 border border-gold-primary/20 text-gold-primary"
                          : "bg-navy-border/40 border border-navy-border text-text-secondary"
                      }`}>
                        {node.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-inter text-sm font-semibold text-white truncate">{node.name}</p>
                        <p className="font-inter text-[10px] text-text-secondary mt-0.5">
                          {node.referrals} in their network • {node.children.length} direct
                        </p>
                      </div>
                      <span className={`shrink-0 font-inter text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${
                        node.package === "premium"
                          ? "bg-gold-primary/10 text-gold-primary border-gold-primary/20"
                          : "bg-navy-dark text-text-secondary border-navy-border"
                      }`}>
                        {node.package === "premium" ? "✦ Premium" : "Starter"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Summary footer */}
                <div className="px-6 py-4 border-t border-navy-border bg-navy-dark/30">
                  <div className="flex items-center justify-between">
                    <p className="font-inter text-[10px] text-text-secondary uppercase tracking-widest">Premium in network</p>
                    <p className="font-inter text-xs font-bold text-gold-primary">
                      {networkTree.filter(n => n.package === "premium").length} / {networkTree.length}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
}
