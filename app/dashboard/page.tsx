"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User, TrendingUp, Home, Plane, LogOut, ChevronDown, ChevronRight,
  Copy, Check, Users, Star, Award, LayoutDashboard, AlertCircle, Phone, MessageCircle
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const services =[
  { icon: TrendingUp, label: "Stock Market", sub: "Tred India", href: "/services/stock-market", color: "text-blue-500" },
  { icon: Home, label: "Real Estate", sub: "Alliance Real Estate", href: "/services/real-estate", color: "text-emerald-500" },
  { icon: Plane, label: "Tourism", sub: "Travel Asia", href: "/services/tourism", color: "text-amber-500" },
];

// ── TREE NODE ──
function TreeNode({ node, depth = 0, isLast = false }: { node: any; depth?: number; isLast?: boolean }) {
  const [expanded, setExpanded] = useState(depth === 0);
  const hasChildren = node.children && node.children.length > 0;
  const isPremium = node.package === "premium";

  return (
    <div className="relative">
      {/* Vertical connection line */}
      {depth > 0 && <div className={`absolute left-0 top-0 w-px bg-border ${isLast ? "h-7" : "h-full"}`} />}
      {/* Horizontal connection line */}
      {depth > 0 && <div className="absolute left-0 top-7 w-5 h-px bg-border" />}

      <div className={`relative flex items-center gap-3 ${depth > 0 ? "ml-5 mt-3" : "mt-2"}`}>
        {hasChildren ? (
          <button onClick={() => setExpanded(!expanded)}
            className="w-5 h-5 rounded-md border border-border bg-base-white shadow-sm flex items-center justify-center hover:border-gold-primary/50 transition-colors shrink-0 z-10"
          >
            {expanded ? <ChevronDown size={12} className="text-gold-dark" /> : <ChevronRight size={12} className="text-ink-secondary" />}
          </button>
        ) : (
          <div className="w-5 h-5 flex items-center justify-center shrink-0 z-10">
            <div className="w-2 h-2 rounded-full border border-border bg-border" />
          </div>
        )}

        <div className={`flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-xl border transition-all duration-200 shadow-sm ${
          isPremium ? "bg-gold-primary/5 border-gold-primary/30 hover:border-gold-primary/50" : "bg-base-white border-border hover:border-ink/20"
        }`}>
          <div className="flex items-center gap-3 min-w-0">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-soria text-lg ${
              isPremium ? "bg-gold-primary/10 border border-gold-primary/30 text-gold-dark" : "bg-base border border-border text-ink-secondary"
            }`}>
              {node.name[0]}
            </div>
            <div className="min-w-0">
              <p className="font-inter text-sm font-bold text-ink truncate">{node.name}</p>
              <p className="font-inter text-[10px] text-ink-secondary mt-0.5 font-medium">{node.referrals} referral{node.referrals !== 1 ? "s" : ""}</p>
            </div>
          </div>
          <span className={`shrink-0 font-inter text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${
            isPremium ? "bg-gold-primary/10 text-gold-dark border-gold-primary/20" : "bg-base text-ink-secondary border-border"
          }`}>
            {isPremium ? "✦ Premium" : "Starter"}
          </span>
        </div>
      </div>

      {expanded && hasChildren && (
        <div className={`relative ${depth > 0 ? "ml-5" : ""}`}>
          <div className="absolute left-2.5 top-0 bottom-0 w-px bg-border" />
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
  const [networkTree, setNetworkTree] = useState<any[]>([]);
  const[totalReferrals, setTotalReferrals] = useState(0);

  const { user, token, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token && !localStorage.getItem("lexxes_token")) {
      router.push("/login");
    }
  },[token]);

  useEffect(() => {
    const fetchTree = async () => {
      const storedToken = localStorage.getItem("lexxes_token");
      if (!storedToken) return;
      try {
        const res = await fetch("https://lexxes-group-backend.onrender.com/api/auth/my-tree", {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        const data = await res.json();
        if (data.success) {
          setNetworkTree(data.tree);
          setTotalReferrals(data.totalReferrals);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchTree();
  },[]);

  const member = {
    name: user?.name || "Member",
    email: user?.email || "",
    phone: user?.phone || "",
    package: user?.package || "starter",
    joinDate: "March 2026",
    referralCode: user?.referralCode || "",
    isActive: user?.isActive || false,
    totalReferrals,
  };

  const isPremium = member.package === "premium";

  const copyReferral = () => {
    navigator.clipboard.writeText(member.referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-base text-ink selection:bg-gold-primary selection:text-ink flex">

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.4s ease-out forwards; }
      `}} />

      {/* ── SIDEBAR ── */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-[280px] bg-base-white border-r border-border flex-col z-50 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        {/* Brand */}
        <div className="px-8 py-8 border-b border-border">
          <Link href="/" className="flex items-baseline gap-1.5 group">
            <span className="font-soria text-3xl text-ink group-hover:text-gold-primary transition-colors">Lexxes</span>
            <span className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
            <span className="font-inter text-ink-secondary tracking-[0.25em] uppercase text-[9px] font-bold">Group</span>
          </Link>
        </div>

        {/* User Profile */}
        <div className="px-8 py-6 border-b border-border bg-base/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center shrink-0">
              <User size={20} className="text-gold-dark" />
            </div>
            <div className="min-w-0">
              <p className="font-inter text-sm font-bold text-ink truncate">{member.name}</p>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <p className={`font-inter text-[9px] font-bold uppercase tracking-widest ${isPremium ? "text-gold-dark" : "text-ink-secondary"}`}>
                  {isPremium ? "✦ Premium" : "Starter"}
                </p>
                <span className={`font-inter text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md ${
                  member.isActive
                    ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                    : "bg-amber-50 text-amber-600 border border-amber-200"
                }`}>
                  {member.isActive ? "Active" : "Pending"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-5 flex flex-col gap-2">
          {[
            { id: "overview", icon: LayoutDashboard, label: "Overview" },
            { id: "network", icon: Users, label: "My Network" },
          ].map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id as any)}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-inter text-sm font-bold transition-all ${
                activeTab === item.id
                  ? "bg-gold-primary/10 text-gold-dark border border-gold-primary/20 shadow-sm"
                  : "text-ink-secondary hover:text-ink hover:bg-base border border-transparent"
              }`}
            >
              <item.icon size={18} strokeWidth={2.5} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Footer Actions */}
        <div className="p-5 border-t border-border flex flex-col gap-2">
          <Link href="/"
            className="flex items-center gap-3 px-4 py-3.5 rounded-xl font-inter text-sm font-bold text-ink-secondary hover:text-ink hover:bg-base border border-transparent transition-all w-full"
          >
            <Home size={18} strokeWidth={2.5} />
            Back to Home
          </Link>
          <button onClick={() => { logout(); router.push("/login"); }}
            className="flex items-center gap-3 px-4 py-3.5 rounded-xl font-inter text-sm font-bold text-ink-secondary hover:text-red-600 hover:bg-red-50 hover:border-red-100 border border-transparent transition-all w-full"
          >
            <LogOut size={18} strokeWidth={2.5} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 md:ml-[280px] p-5 sm:p-8 md:p-12 max-w-6xl mx-auto w-full">

        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between mb-8 bg-base-white p-4 rounded-2xl border border-border shadow-sm">
          <Link href="/" className="flex items-baseline gap-1.5">
            <span className="font-soria text-2xl text-ink">Lexxes</span>
            <span className="w-1.5 h-1.5 bg-gold-primary rounded-full" />
          </Link>
          <button onClick={() => { logout(); router.push("/login"); }} className="w-9 h-9 rounded-full bg-red-50 border border-red-100 text-red-600 flex items-center justify-center">
            <LogOut size={16} />
          </button>
        </div>

        {/* Mobile tabs */}
        <div className="md:hidden flex gap-2 mb-8 bg-base-white rounded-xl p-1.5 border border-border shadow-sm">
          {[{ id: "overview", label: "Overview" }, { id: "network", label: "Network" }].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-3 rounded-lg font-inter text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                activeTab === tab.id ? "bg-ink text-base-white" : "bg-base text-ink-secondary border border-transparent hover:border-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── PENDING ACTIVATION BANNER ── */}
        {!member.isActive && (
          <div className="mb-10 p-6 md:p-8 rounded-[2rem] bg-amber-50 border border-amber-200 fade-in shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                <AlertCircle size={24} className="text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-inter font-bold text-sm text-amber-800 uppercase tracking-wider mb-2">Account Pending Activation</h3>
                <p className="font-inter text-sm text-ink-secondary font-medium leading-relaxed max-w-2xl">
                  Your account has been created successfully. To activate your membership and get full access, please complete your payment and contact our support team.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href="https://wa.me/919270312260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-inter font-bold text-xs uppercase tracking-widest transition-colors shadow-sm"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href="tel:+919270312260"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-base-white hover:bg-amber-100 border border-amber-200 text-amber-700 rounded-xl font-inter font-bold text-xs uppercase tracking-widest transition-colors shadow-sm"
                >
                  <Phone size={16} />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ── OVERVIEW TAB ── */}
        {activeTab === "overview" && (
          <div className="flex flex-col gap-10 fade-in">
            {/* Header */}
            <div>
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold flex items-center gap-3">
                <span className="w-6 h-px bg-gold-primary" /> Dashboard
              </p>
              <h1 className="font-soria text-5xl md:text-6xl text-ink tracking-tight">
                Welcome, {member.name.split(" ")[0]}.
              </h1>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {[
                { label: "Status", value: isPremium ? "Premium" : "Starter", icon: Award, gold: true },
                { label: "Network Size", value: totalReferrals, icon: Users, gold: false },
                { label: "Member Since", value: member.joinDate, icon: Star, gold: false },
              ].map((s) => (
                <div key={s.label} className={`p-6 md:p-8 rounded-[2rem] border shadow-sm ${s.gold ? "bg-gold-primary/5 border-gold-primary/20" : "bg-base-white border-border"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${s.gold ? "bg-gold-primary/10" : "bg-base"}`}>
                      <s.icon size={14} className={s.gold ? "text-gold-dark" : "text-ink-secondary"} />
                    </div>
                    <span className="font-inter text-[10px] uppercase tracking-widest text-ink-secondary font-bold">{s.label}</span>
                  </div>
                  <p className={`font-soria text-4xl ${s.gold ? "text-gold-dark" : "text-ink"}`}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* Referral & Package Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Referral Card */}
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-base-white border border-border shadow-sm flex flex-col justify-between">
                <div>
                  <p className="font-inter text-[10px] uppercase tracking-widest text-ink-secondary font-bold mb-2">Referral Code</p>
                  <p className="font-soria text-3xl text-ink mb-6">Share & Earn Rewards</p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch gap-3">
                  <div className="flex-1 bg-base border border-dashed border-border rounded-xl px-5 py-4 flex items-center justify-center sm:justify-start">
                    <span className="font-inter font-black text-xl tracking-[0.25em] text-gold-dark">{member.referralCode}</span>
                  </div>
                  <button onClick={copyReferral} className="flex items-center justify-center gap-2 px-8 py-4 bg-ink text-base-white rounded-xl font-inter text-xs font-bold uppercase tracking-widest transition-colors hover:bg-gold-primary hover:text-ink shadow-md">
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Copied" : "Copy Code"}
                  </button>
                </div>
              </div>

              {/* Package Card */}
              <div className={`p-8 md:p-10 rounded-[2.5rem] border shadow-sm flex flex-col justify-center ${isPremium ? "bg-gold-primary/5 border-gold-primary/30" : "bg-base-white border-border"}`}>
                <p className="font-inter text-[10px] uppercase tracking-widest text-ink-secondary font-bold mb-2">Active Package</p>
                <p className={`font-soria text-4xl mb-3 ${isPremium ? "text-gold-dark" : "text-ink"}`}>
                  {isPremium ? "Premium Plan" : "Starter Plan"}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-base-white border border-border w-fit">
                  <span className="font-inter font-bold text-sm text-ink">{isPremium ? "₹30,000" : "₹4,600"}</span>
                  <span className="w-1 h-1 bg-border rounded-full" />
                  <span className="font-inter text-xs text-ink-secondary font-medium">{isPremium ? "Switzerland Trip Reward" : "Goa Trip Reward"}</span>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div>
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-5 font-bold flex items-center gap-3">
                <span className="w-6 h-px bg-gold-primary" /> Your Services
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {services.map((svc) => (
                  <Link key={svc.label} href={svc.href}
                    className="group p-6 rounded-2xl bg-base-white border border-border shadow-sm hover:border-gold-primary/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-base flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <svc.icon size={20} className={svc.color} />
                    </div>
                    <p className="font-soria text-2xl text-ink mb-1 group-hover:text-gold-primary transition-colors">{svc.label}</p>
                    <p className="font-inter text-xs text-ink-secondary font-medium tracking-wide">{svc.sub}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── NETWORK TAB ── */}
        {activeTab === "network" && (
          <div className="flex flex-col gap-10 fade-in">
            {/* Header */}
            <div>
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-3 font-bold flex items-center gap-3">
                <span className="w-6 h-px bg-gold-primary" /> Organization
              </p>
              <h1 className="font-soria text-5xl md:text-6xl text-ink tracking-tight mb-2">
                Your Downline.
              </h1>
              <p className="font-inter text-base text-ink-secondary font-light">
                {totalReferrals} total members in your network.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5">
              {[
                { label: "Direct", value: networkTree.length, desc: "People you referred" },
                { label: "Level 2+", value: networkTree.reduce((a, n) => a + (n.children?.length || 0), 0), desc: "Their referrals" },
                { label: "Total", value: totalReferrals, desc: "Full network size" },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-2xl bg-base-white border border-border shadow-sm text-center">
                  <p className="font-soria text-4xl text-gold-dark">{s.value}</p>
                  <p className="font-inter text-[10px] uppercase tracking-widest text-ink font-bold mt-2">{s.label}</p>
                  <p className="font-inter text-[10px] text-ink-secondary mt-1 hidden md:block font-medium">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Network Tree */}
              <div className="rounded-[2.5rem] bg-base-white border border-border shadow-sm overflow-hidden flex flex-col">
                <div className="flex items-center justify-between px-8 py-6 border-b border-border bg-base/50">
                  <div>
                    <p className="font-inter text-xs font-bold uppercase tracking-widest text-ink">Network Tree</p>
                    <p className="font-inter text-[10px] text-ink-secondary mt-1 font-medium">Click nodes to expand</p>
                  </div>
                  <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-inter text-[9px] text-emerald-700 uppercase tracking-widest font-bold">Live</span>
                  </span>
                </div>

                <div className="p-8 overflow-x-auto flex-1 bg-base-white">
                  <div className="min-w-[280px]">
                    {/* Root Node (You) */}
                    <div className="flex items-center gap-4 px-5 py-4 rounded-xl bg-gold-primary/5 border border-gold-primary/30 mb-2 shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center shrink-0 font-soria text-xl text-gold-dark">
                        {member.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-inter text-sm font-bold text-ink truncate">{member.name}</p>
                        <p className="font-inter text-[10px] text-gold-dark mt-0.5 font-medium">You — Root Node</p>
                      </div>
                      <span className="font-inter text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-gold-primary/10 text-gold-dark border border-gold-primary/20">
                        {isPremium ? "✦ Premium" : "Starter"}
                      </span>
                    </div>
                    
                    {/* Connection line from root */}
                    {networkTree.length > 0 && <div className="ml-5 w-px h-4 bg-border" />}

                    {/* Children Nodes */}
                    {networkTree.length === 0 ? (
                      <div className="text-center py-10">
                        <p className="font-inter text-sm text-ink-secondary font-medium">No referrals yet.</p>
                        <p className="font-inter text-xs text-ink-light mt-1">Share your code to grow your network!</p>
                      </div>
                    ) : (
                      networkTree.map((node, i) => (
                        <TreeNode key={node.id} node={node} depth={0} isLast={i === networkTree.length - 1} />
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Direct Referrals List */}
              <div className="rounded-[2.5rem] bg-base-white border border-border shadow-sm overflow-hidden flex flex-col">
                <div className="px-8 py-6 border-b border-border bg-base/50">
                  <p className="font-inter text-xs font-bold uppercase tracking-widest text-ink">Direct Referrals</p>
                  <p className="font-inter text-[10px] text-ink-secondary mt-1 font-medium">People you personally brought in</p>
                </div>
                
                <div className="divide-y divide-border flex-1 overflow-y-auto max-h-[500px]">
                  {networkTree.length === 0 ? (
                    <div className="text-center py-16">
                      <Users size={32} className="mx-auto text-ink-light mb-3 opacity-50" />
                      <p className="font-inter text-sm text-ink-secondary font-medium">No direct referrals yet.</p>
                    </div>
                  ) : (
                    networkTree.map((node) => (
                      <div key={node.id} className="flex items-center gap-4 px-8 py-5 hover:bg-base/50 transition-colors">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-soria text-xl ${
                          node.package === "premium"
                            ? "bg-gold-primary/10 border border-gold-primary/20 text-gold-dark"
                            : "bg-base border border-border text-ink-secondary"
                        }`}>
                          {node.name[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-inter text-sm font-bold text-ink truncate">{node.name}</p>
                          <p className="font-inter text-[10px] text-ink-secondary mt-1 font-medium">
                            {node.referrals} total network • {node.children?.length || 0} direct
                          </p>
                        </div>
                        <span className={`shrink-0 font-inter text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-md border ${
                          node.package === "premium"
                            ? "bg-gold-primary/10 text-gold-dark border-gold-primary/20 shadow-sm"
                            : "bg-base text-ink-secondary border-border"
                        }`}>
                          {node.package === "premium" ? "✦ Premium" : "Starter"}
                        </span>
                      </div>
                    ))
                  )}
                </div>
                
                <div className="px-8 py-5 border-t border-border bg-base/50">
                  <div className="flex items-center justify-between">
                    <p className="font-inter text-[10px] text-ink-secondary uppercase tracking-widest font-bold">Premium Conversion</p>
                    <div className="flex items-center gap-2">
                      <p className="font-inter text-sm font-bold text-gold-dark">
                        {networkTree.filter(n => n.package === "premium").length} / {networkTree.length}
                      </p>
                      <span className="font-inter text-[10px] text-ink-secondary font-medium">Premium</span>
                    </div>
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