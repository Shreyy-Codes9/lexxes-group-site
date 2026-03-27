"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import {
  Users, LogOut, Check, X, Trash2, TrendingUp,
  Phone, Mail, RefreshCw, Shield, ChevronDown, ChevronRight, GitBranch, Home
} from "lucide-react";

interface Member {
  _id: string;
  name: string;
  email: string;
  phone: string;
  package: string;
  isActive: boolean;
  referralCode: string;
  referredBy: string | null;
  createdAt: string;
}

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

        <div className={`flex-1 flex flex-col md:flex-row md:items-center justify-between gap-3 px-4 py-3 rounded-xl border transition-all duration-200 shadow-sm ${
          isPremium ? "bg-gold-primary/5 border-gold-primary/30 hover:border-gold-primary/50" : "bg-base-white border-border hover:border-ink/20"
        }`}>
          <div className="flex items-center gap-3 min-w-0">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-family-soria text-lg ${
              isPremium ? "bg-gold-primary/10 border border-gold-primary/30 text-gold-dark" : "bg-base border border-border text-ink-secondary"
            }`}>
              {node.name[0]}
            </div>
            <div className="min-w-0">
              <p className="font-inter text-sm font-bold text-ink truncate">{node.name}</p>
              <p className="font-inter text-[10px] text-ink-secondary mt-0.5 font-medium">{node.referrals} referral{node.referrals !== 1 ? "s" : ""}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className={`font-inter text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
              node.isActive ? "bg-emerald-50 text-emerald-600 border-emerald-200" : "bg-amber-50 text-amber-600 border-amber-200"
            }`}>
              {node.isActive ? "Active" : "Pending"}
            </span>
            <span className={`font-inter text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${
              isPremium ? "bg-gold-primary/10 text-gold-dark border-gold-primary/20" : "bg-base text-ink-secondary border-border"
            }`}>
              {isPremium ? "✦ Premium" : "Starter"}
            </span>
          </div>
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

export default function AdminPage() {
  const { user, token, logout } = useAuth();
  const router = useRouter();

  const [members, setMembers] = useState<Member[]>([]);
  const[isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"members" | "network">("members");
  const [search, setSearch] = useState("");
  const[filterPackage, setFilterPackage] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  // Tree panel state
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const[memberTree, setMemberTree] = useState<any[]>([]);
  const [treeLoading, setTreeLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("lexxes_user");
    if (!storedUser) { router.push("/login"); return; }
    const parsed = JSON.parse(storedUser);
    if (parsed.role !== "admin") { router.push("/dashboard"); return; }
  },[]);

  const getToken = () => token || localStorage.getItem("lexxes_token");

  const fetchMembers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://lexxes-group-backend.onrender.com/api/admin/members", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();
      if (data.success) setMembers(data.members);
    } catch (err) { console.error(err); }
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchMembers(); },[]);

  const openTree = async (member: Member) => {
    setSelectedMember(member);
    setMemberTree([]);
    setTreeLoading(true);
    try {
      const res = await fetch(`https://lexxes-group-backend.onrender.com/api/admin/members/${member._id}/tree`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();
      if (data.success) setMemberTree(data.tree);
    } catch (err) { console.error(err); }
    finally { setTreeLoading(false); }
  };

  const toggleActivate = async (id: string) => {
    try {
      const res = await fetch(`https://lexxes-group-backend.onrender.com/api/admin/members/${id}/toggle`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();
      if (data.success) setMembers(prev => prev.map(m => m._id === id ? { ...m, isActive: data.isActive } : m));
    } catch (err) { console.error(err); }
  };

  const changePackage = async (id: string, pkg: string) => {
    try {
      const res = await fetch(`https://lexxes-group-backend.onrender.com/api/admin/members/${id}/package`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${getToken()}`, "Content-Type": "application/json" },
        body: JSON.stringify({ package: pkg }),
      });
      const data = await res.json();
      if (data.success) setMembers(prev => prev.map(m => m._id === id ? { ...m, package: pkg } : m));
    } catch (err) { console.error(err); }
  };

  const deleteMember = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete ${name}?`)) return;
    try {
      const res = await fetch(`https://lexxes-group-backend.onrender.com/api/admin/members/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();
      if (data.success) {
        setMembers(prev => prev.filter(m => m._id !== id));
        if (selectedMember?._id === id) setSelectedMember(null);
      }
    } catch (err) { console.error(err); }
  };

  const filtered = members.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.phone.includes(search);
    const matchPackage = filterPackage === "all" || m.package === filterPackage;
    const matchStatus = filterStatus === "all" || (filterStatus === "active" ? m.isActive : !m.isActive);
    return matchSearch && matchPackage && matchStatus;
  });

  const stats = {
    total: members.length,
    active: members.filter(m => m.isActive).length,
    premium: members.filter(m => m.package === "premium").length,
    pending: members.filter(m => !m.isActive).length,
  };

  return (
    <div className="min-h-screen bg-base text-ink selection:bg-gold-primary selection:text-ink flex flex-col">

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.4s ease-out forwards; }
      `}} />

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-base-white/90 backdrop-blur-xl border-b border-border shadow-sm px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield size={20} className="text-gold-dark" />
          <div>
            <p className="font-family-soria text-2xl text-ink leading-none mt-1">Lexxes Admin</p>
            <p className="font-inter text-[9px] text-ink-secondary uppercase tracking-widest font-bold">Management Panel</p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <p className="font-inter text-sm text-ink-secondary hidden md:block font-medium pr-2">
            Signed in as <span className="text-gold-dark font-bold">{user?.name}</span>
          </p>
          
          {/* Back to Home Button */}
          <Link href="/"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-inter text-xs font-bold uppercase tracking-wider text-ink-secondary hover:text-ink hover:bg-base hover:border-border transition-colors border border-transparent shadow-sm"
          >
            <Home size={16} />
            <span className="hidden sm:inline">Home</span>
          </Link>

          {/* Sign Out Button */}
          <button onClick={() => { logout(); router.push("/login"); }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-inter text-xs font-bold uppercase tracking-wider text-red-600 hover:bg-red-50 hover:border-red-100 transition-colors border border-transparent shadow-sm"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      <div className="pt-28 max-w-[1400px] mx-auto px-6 md:px-10 pb-16 w-full flex-1">

        {/* ── TABS ── */}
        <div className="flex gap-2 mb-8 bg-base-white rounded-xl p-1.5 border border-border shadow-sm w-fit">
          {[{ id: "members", icon: Users, label: "Members" }, { id: "network", icon: TrendingUp, label: "Network" }].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-inter text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                activeTab === tab.id ? "bg-ink text-base-white" : "bg-base text-ink-secondary hover:text-ink border border-transparent hover:border-border"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── MEMBERS TAB ── */}
        {activeTab === "members" && (
          <div className="flex flex-col gap-6 fade-in">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Total Members", value: stats.total, color: "text-ink" },
                { label: "Active", value: stats.active, color: "text-emerald-600" },
                { label: "Pending", value: stats.pending, color: "text-amber-600" },
                { label: "Premium", value: stats.premium, color: "text-gold-dark" },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-[2rem] bg-base-white border border-border shadow-sm">
                  <p className="font-inter text-[10px] uppercase tracking-widest text-ink-secondary font-bold mb-2">{s.label}</p>
                  <p className={`font-family-soria text-4xl ${s.color}`}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* Filters Row */}
            <div className="flex flex-col sm:flex-row gap-4 p-5 rounded-2xl bg-base-white border border-border shadow-sm">
              <input type="text" placeholder="Search by name, email or phone..." value={search} onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-base border border-border rounded-xl py-3 px-5 text-sm text-ink placeholder:text-ink-light focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 transition-all font-inter"
              />
              <div className="flex gap-4 sm:w-auto w-full">
                <select value={filterPackage} onChange={(e) => setFilterPackage(e.target.value)}
                  className="flex-1 sm:w-40 bg-base border border-border rounded-xl py-3 px-4 text-sm text-ink font-inter focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 cursor-pointer"
                >
                  <option value="all">All Packages</option>
                  <option value="starter">Starter</option>
                  <option value="premium">Premium</option>
                </select>
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
                  className="flex-1 sm:w-40 bg-base border border-border rounded-xl py-3 px-4 text-sm text-ink font-inter focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 cursor-pointer"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Pending</option>
                </select>
              </div>
              <button onClick={fetchMembers} className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-ink text-base-white hover:bg-gold-primary hover:text-ink transition-colors font-inter text-xs font-bold uppercase tracking-widest shadow-md">
                <RefreshCw size={14} />
                Refresh
              </button>
            </div>

            {/* Members List */}
            {isLoading ? (
              <div className="text-center py-20 text-ink-secondary font-inter font-medium">Loading members...</div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20 text-ink-secondary font-inter font-medium">No members found matching your criteria.</div>
            ) : (
              <div className="flex flex-col gap-4">
                {filtered.map((member) => (
                  <div key={member._id} className={`p-6 rounded-[2rem] border transition-all shadow-sm ${
                    member.isActive ? "bg-base-white border-border" : "bg-base/50 border-border/60"
                  }`}>
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
                      
                      {/* Left: Info */}
                      <div className="flex items-center gap-5 flex-1 min-w-0">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 font-family-soria text-2xl ${
                          member.isActive ? "bg-gold-primary/10 border border-gold-primary/30 text-gold-dark" : "bg-base border border-border text-ink-secondary"
                        }`}>
                          {member.name[0]}
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                            <p className="font-inter font-bold text-base text-ink">{member.name}</p>
                            <span className={`font-inter text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                              member.isActive ? "bg-emerald-50 text-emerald-600 border-emerald-200" : "bg-amber-50 text-amber-600 border-amber-200"
                            }`}>
                              {member.isActive ? "Active" : "Pending"}
                            </span>
                            <span className={`font-inter text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                              member.package === "premium" ? "bg-gold-primary/10 text-gold-dark border-gold-primary/20" : "bg-base text-ink-secondary border-border"
                            }`}>
                              {member.package}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 mb-2">
                            <a href={`mailto:${member.email}`} className="flex items-center gap-1.5 font-inter text-xs text-ink-secondary hover:text-gold-primary transition-colors font-medium">
                              <Mail size={12} /> {member.email}
                            </a>
                            <a href={`tel:${member.phone}`} className="flex items-center gap-1.5 font-inter text-xs text-ink-secondary hover:text-gold-primary transition-colors font-medium">
                              <Phone size={12} /> {member.phone}
                            </a>
                          </div>
                          <p className="font-inter text-[10px] text-ink-light font-medium">
                            Code: <span className="text-ink font-bold">{member.referralCode}</span> • Joined {new Date(member.createdAt).toLocaleDateString("en-IN")}
                          </p>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex flex-wrap items-center gap-3">
                        <button onClick={() => openTree(member)}
                          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-inter text-[10px] font-bold uppercase tracking-wider bg-gold-primary/10 text-gold-dark border border-gold-primary/20 hover:bg-gold-primary/20 transition-colors shadow-sm"
                        >
                          <GitBranch size={14} /> View Tree
                        </button>

                        <button onClick={() => toggleActivate(member._id)}
                          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-inter text-[10px] font-bold uppercase tracking-wider transition-colors shadow-sm border ${
                            member.isActive ? "bg-red-50 text-red-600 border-red-200 hover:bg-red-100" : "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100"
                          }`}
                        >
                          {member.isActive ? <><X size={14} /> Deactivate</> : <><Check size={14} /> Activate</>}
                        </button>

                        <select value={member.package} onChange={(e) => changePackage(member._id, e.target.value)}
                          className="bg-base border border-border rounded-xl py-2.5 px-4 text-xs font-bold text-ink font-inter focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/30 cursor-pointer shadow-sm"
                        >
                          <option value="starter">Starter Pkg</option>
                          <option value="premium">Premium Pkg</option>
                        </select>

                        <button onClick={() => deleteMember(member._id, member.name)}
                          className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-colors shadow-sm shrink-0"
                          title="Delete Member"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── NETWORK TAB ── */}
        {activeTab === "network" && (
          <div className="flex flex-col gap-6 fade-in">
            <div>
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-2 font-bold">Overview</p>
              <h1 className="font-family-soria text-4xl md:text-5xl font-bold text-ink tracking-tight">Full Network</h1>
              <p className="font-inter text-sm text-ink-secondary mt-2 font-medium">Click "View Tree" on any member to see their downline structure.</p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-base-white border border-border shadow-sm">
              {members.length === 0 ? (
                <p className="text-ink-secondary font-inter text-sm font-medium text-center py-10">No members yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {members.map((member) => (
                    <div key={member._id} className="flex flex-col gap-4 p-5 rounded-2xl bg-base border border-border hover:border-gold-primary/30 transition-colors shadow-sm group">
                      
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-family-soria text-xl ${
                          member.package === "premium" ? "bg-gold-primary/10 border border-gold-primary/30 text-gold-dark" : "bg-base-white border border-border text-ink-secondary"
                        }`}>
                          {member.name[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-inter text-sm font-bold text-ink truncate">{member.name}</p>
                          <p className="font-inter text-[10px] text-ink-secondary mt-0.5 font-medium truncate">
                            {member.referredBy ? `Ref: ${member.referredBy}` : "Direct Root"} • Code: {member.referralCode}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                        <div className="flex items-center gap-1.5">
                          <span className={`font-inter text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                            member.isActive ? "bg-emerald-50 text-emerald-600 border-emerald-200" : "bg-amber-50 text-amber-600 border-amber-200"
                          }`}>
                            {member.isActive ? "Active" : "Pending"}
                          </span>
                          <span className={`font-inter text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                            member.package === "premium" ? "bg-gold-primary/10 text-gold-dark border-gold-primary/20" : "bg-base-white text-ink-secondary border-border"
                          }`}>
                            {member.package}
                          </span>
                        </div>
                        <button onClick={() => openTree(member)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-inter text-[10px] font-bold uppercase tracking-wider bg-base-white text-ink-secondary border border-border group-hover:bg-gold-primary/10 group-hover:text-gold-dark group-hover:border-gold-primary/30 transition-colors shadow-sm"
                        >
                          <GitBranch size={12} /> Tree
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── TREE SLIDE-OVER PANEL ── */}
      {selectedMember && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity" onClick={() => setSelectedMember(null)} />

          {/* Panel */}
          <div className="fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-base-white border-l border-border flex flex-col shadow-[0_0_60px_rgba(1,24,64,0.15)] animate-fade-up">

            {/* Panel Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-border bg-base/50">
              <div>
                <p className="font-inter text-[10px] text-gold-primary uppercase tracking-widest font-bold mb-1">Network Tree</p>
                <h2 className="font-family-soria text-3xl text-ink tracking-tight">{selectedMember.name}</h2>
                <p className="font-inter text-[10px] text-ink-secondary mt-1 font-medium">Code: <span className="font-bold text-ink">{selectedMember.referralCode}</span></p>
              </div>
              <button onClick={() => setSelectedMember(null)}
                className="w-10 h-10 rounded-xl bg-base border border-border flex items-center justify-center text-ink-secondary hover:text-ink hover:bg-base-white transition-colors shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            {/* Root node */}
            <div className="px-8 pt-6 pb-2">
              <div className="flex items-center gap-4 px-5 py-4 rounded-xl bg-gold-primary/5 border border-gold-primary/20 mb-1 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center shrink-0 font-family-soria text-xl text-gold-dark">
                  {selectedMember.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-inter text-sm font-bold text-ink truncate">{selectedMember.name}</p>
                  <p className="font-inter text-[10px] text-gold-dark mt-0.5 font-medium">Root Node</p>
                </div>
                <span className={`font-inter text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${
                  selectedMember.package === "premium" ? "bg-gold-primary/10 text-gold-dark border-gold-primary/20" : "bg-base text-ink-secondary border-border"
                }`}>
                  {selectedMember.package === "premium" ? "✦ Premium" : "Starter"}
                </span>
              </div>
              <div className="ml-6 w-px h-4 bg-border" />
            </div>

            {/* Tree content */}
            <div className="flex-1 overflow-y-auto px-8 pb-8">
              {treeLoading ? (
                <div className="flex items-center justify-center py-20 gap-3 text-ink-secondary font-inter text-sm font-medium">
                  <RefreshCw size={16} className="animate-spin" /> Loading tree...
                </div>
              ) : memberTree.length === 0 ? (
                <div className="text-center py-20">
                  <Users size={32} className="mx-auto text-ink-light mb-3 opacity-50" />
                  <p className="font-inter text-sm text-ink-secondary font-medium">No referrals yet.</p>
                </div>
              ) : (
                <div className="min-w-0">
                  {memberTree.map((node, i) => (
                    <TreeNode key={node.id} node={node} depth={0} isLast={i === memberTree.length - 1} />
                  ))}
                </div>
              )}
            </div>

            {/* Panel footer stats */}
            <div className="px-8 py-5 border-t border-border bg-base/80 grid grid-cols-3 gap-4">
              {[
                { label: "Direct", value: memberTree.length },
                { label: "Level 2+", value: memberTree.reduce((a, n) => a + (n.children?.length || 0), 0) },
                { label: "Premium", value: memberTree.filter(n => n.package === "premium").length },
              ].map((s) => (
                <div key={s.label} className="text-center bg-base-white py-3 rounded-xl border border-border shadow-sm">
                  <p className="font-family-soria text-2xl text-gold-dark">{s.value}</p>
                  <p className="font-inter text-[9px] uppercase tracking-widest text-ink-secondary font-bold mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}