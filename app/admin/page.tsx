"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import {
  Users, LogOut, Check, X, Trash2, TrendingUp,
  Phone, Mail, RefreshCw, Shield, ChevronDown, ChevronRight, GitBranch
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

// ── TREE NODE (same as dashboard) ──
function TreeNode({ node, depth = 0, isLast = false }: { node: any; depth?: number; isLast?: boolean }) {
  const [expanded, setExpanded] = useState(depth === 0);
  const hasChildren = node.children && node.children.length > 0;
  const isPremium = node.package === "premium";

  return (
    <div className="relative">
      {depth > 0 && <div className={`absolute left-0 top-0 w-px bg-navy-border ${isLast ? "h-7" : "h-full"}`} />}
      {depth > 0 && <div className="absolute left-0 top-7 w-5 h-px bg-navy-border" />}

      <div className={`relative flex items-center gap-3 ${depth > 0 ? "ml-5 mt-3" : "mt-2"}`}>
        {hasChildren ? (
          <button onClick={() => setExpanded(!expanded)}
            className="w-5 h-5 rounded-md border border-navy-border bg-navy-secondary flex items-center justify-center hover:border-gold-primary/50 transition shrink-0 z-10"
          >
            {expanded ? <ChevronDown size={11} className="text-gold-primary" /> : <ChevronRight size={11} className="text-text-secondary" />}
          </button>
        ) : (
          <div className="w-5 h-5 flex items-center justify-center shrink-0 z-10">
            <div className="w-2 h-2 rounded-full border border-navy-border bg-navy-dark" />
          </div>
        )}

        <div className={`flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-xl border transition-all duration-200 ${
          isPremium ? "bg-gold-primary/5 border-gold-primary/20" : "bg-navy-secondary/40 border-navy-border"
        }`}>
          <div className="flex items-center gap-3 min-w-0">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-playfair font-bold text-sm ${
              isPremium ? "bg-gold-primary/15 border border-gold-primary/30 text-gold-primary" : "bg-navy-border/50 border border-navy-border text-text-secondary"
            }`}>
              {node.name[0]}
            </div>
            <div className="min-w-0">
              <p className="font-inter text-sm font-semibold text-text-primary truncate">{node.name}</p>
              <p className="font-inter text-[10px] text-text-secondary mt-0.5">{node.referrals} referral{node.referrals !== 1 ? "s" : ""}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className={`font-inter text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
              node.isActive ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : "bg-amber-400/10 text-amber-400 border-amber-400/20"
            }`}>
              {node.isActive ? "Active" : "Pending"}
            </span>
            <span className={`font-inter text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${
              isPremium ? "bg-gold-primary/10 text-gold-primary border-gold-primary/20" : "bg-navy-dark text-text-secondary border-navy-border"
            }`}>
              {isPremium ? "✦ Premium" : "Starter"}
            </span>
          </div>
        </div>
      </div>

      {expanded && hasChildren && (
        <div className={`relative ${depth > 0 ? "ml-5" : ""}`}>
          <div className="absolute left-2.5 top-0 bottom-0 w-px bg-navy-border" />
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
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"members" | "network">("members");
  const [search, setSearch] = useState("");
  const [filterPackage, setFilterPackage] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  // Tree panel state
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [memberTree, setMemberTree] = useState<any[]>([]);
  const [treeLoading, setTreeLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("lexxes_user");
    if (!storedUser) { router.push("/login"); return; }
    const parsed = JSON.parse(storedUser);
    if (parsed.role !== "admin") { router.push("/dashboard"); return; }
  }, []);

  const getToken = () => token || localStorage.getItem("lexxes_token");

  const fetchMembers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/admin/members", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();
      if (data.success) setMembers(data.members);
    } catch (err) { console.error(err); }
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchMembers(); }, []);

  const openTree = async (member: Member) => {
    setSelectedMember(member);
    setMemberTree([]);
    setTreeLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/admin/members/${member._id}/tree`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();
      if (data.success) setMemberTree(data.tree);
    } catch (err) { console.error(err); }
    finally { setTreeLoading(false); }
  };

  const toggleActivate = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/admin/members/${id}/toggle`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data = await res.json();
      if (data.success) setMembers(prev => prev.map(m => m._id === id ? { ...m, isActive: data.isActive } : m));
    } catch (err) { console.error(err); }
  };

  const changePackage = async (id: string, pkg: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/admin/members/${id}/package`, {
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
      const res = await fetch(`http://localhost:5000/api/admin/members/${id}`, {
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
    <div className="min-h-screen bg-navy-dark text-text-primary">

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-secondary/80 backdrop-blur-xl border-b border-navy-border px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield size={18} className="text-gold-primary" />
          <div>
            <p className="font-playfair font-bold text-lg text-text-primary">Lexxes Admin</p>
            <p className="font-inter text-[10px] text-text-secondary uppercase tracking-widest">Management Panel</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="font-inter text-sm text-text-secondary hidden md:block">
            Signed in as <span className="text-gold-primary font-semibold">{user?.name}</span>
          </p>
          <button onClick={() => { logout(); router.push("/login"); }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-inter text-xs font-bold uppercase tracking-wider text-red-400 hover:bg-red-400/10 transition border border-transparent hover:border-red-400/20"
          >
            <LogOut size={14} />
            Sign Out
          </button>
        </div>
      </header>

      <div className="pt-24 max-w-7xl mx-auto px-6 md:px-10 pb-16">

        {/* ── TABS ── */}
        <div className="flex gap-2 mb-8 bg-navy-secondary rounded-xl p-1 border border-navy-border w-fit">
          {[{ id: "members", icon: Users, label: "Members" }, { id: "network", icon: TrendingUp, label: "Network" }].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-inter text-sm font-bold uppercase tracking-wider transition ${
                activeTab === tab.id ? "bg-gold-primary text-navy-dark" : "text-text-secondary hover:text-white"
              }`}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── MEMBERS TAB ── */}
        {activeTab === "members" && (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Total Members", value: stats.total, color: "text-white" },
                { label: "Active", value: stats.active, color: "text-emerald-400" },
                { label: "Pending", value: stats.pending, color: "text-amber-400" },
                { label: "Premium", value: stats.premium, color: "text-gold-primary" },
              ].map((s) => (
                <div key={s.label} className="p-5 rounded-2xl bg-navy-secondary border border-navy-border">
                  <p className="font-inter text-[10px] uppercase tracking-widest text-text-secondary font-bold mb-2">{s.label}</p>
                  <p className={`font-playfair text-3xl font-bold ${s.color}`}>{s.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input type="text" placeholder="Search by name, email or phone..." value={search} onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-navy-secondary border border-navy-border rounded-xl py-3 px-4 text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-gold-primary/50 font-inter"
              />
              <select value={filterPackage} onChange={(e) => setFilterPackage(e.target.value)}
                className="bg-navy-secondary border border-navy-border rounded-xl py-3 px-4 text-sm text-text-primary font-inter focus:outline-none focus:border-gold-primary/50"
              >
                <option value="all">All Packages</option>
                <option value="starter">Starter</option>
                <option value="premium">Premium</option>
              </select>
              <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-navy-secondary border border-navy-border rounded-xl py-3 px-4 text-sm text-text-primary font-inter focus:outline-none focus:border-gold-primary/50"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Pending</option>
              </select>
              <button onClick={fetchMembers} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-navy-secondary border border-navy-border text-text-secondary hover:text-gold-primary hover:border-gold-primary/30 transition font-inter text-sm">
                <RefreshCw size={14} />
                Refresh
              </button>
            </div>

            {isLoading ? (
              <div className="text-center py-20 text-text-secondary font-inter">Loading members...</div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20 text-text-secondary font-inter">No members found.</div>
            ) : (
              <div className="flex flex-col gap-3">
                {filtered.map((member) => (
                  <div key={member._id} className={`p-5 rounded-2xl border transition-all ${
                    member.isActive ? "bg-navy-secondary border-navy-border" : "bg-navy-secondary/40 border-navy-border/50"
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-playfair font-bold text-lg ${
                          member.isActive ? "bg-gold-primary/10 border border-gold-primary/30 text-gold-primary" : "bg-navy-border/40 border border-navy-border text-text-secondary"
                        }`}>
                          {member.name[0]}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-inter font-bold text-sm text-white">{member.name}</p>
                            <span className={`font-inter text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                              member.isActive ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : "bg-amber-400/10 text-amber-400 border-amber-400/20"
                            }`}>
                              {member.isActive ? "Active" : "Pending"}
                            </span>
                            <span className={`font-inter text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                              member.package === "premium" ? "bg-gold-primary/10 text-gold-primary border-gold-primary/20" : "bg-navy-border/50 text-text-secondary border-navy-border"
                            }`}>
                              {member.package}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-3 mt-1">
                            <a href={`mailto:${member.email}`} className="flex items-center gap-1 font-inter text-xs text-text-secondary hover:text-gold-primary transition">
                              <Mail size={11} /> {member.email}
                            </a>
                            <a href={`tel:${member.phone}`} className="flex items-center gap-1 font-inter text-xs text-text-secondary hover:text-gold-primary transition">
                              <Phone size={11} /> {member.phone}
                            </a>
                          </div>
                          <p className="font-inter text-[10px] text-text-secondary/40 mt-0.5">
                            Code: {member.referralCode} • Joined {new Date(member.createdAt).toLocaleDateString("en-IN")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        {/* View Tree */}
                        <button onClick={() => openTree(member)}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl font-inter text-xs font-bold uppercase tracking-wider bg-gold-primary/10 text-gold-primary border border-gold-primary/20 hover:bg-gold-primary/20 transition"
                        >
                          <GitBranch size={12} /> View Tree
                        </button>

                        {/* Toggle activate */}
                        <button onClick={() => toggleActivate(member._id)}
                          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-inter text-xs font-bold uppercase tracking-wider transition border ${
                            member.isActive ? "bg-red-400/10 text-red-400 border-red-400/20 hover:bg-red-400/20" : "bg-emerald-400/10 text-emerald-400 border-emerald-400/20 hover:bg-emerald-400/20"
                          }`}
                        >
                          {member.isActive ? <><X size={12} /> Deactivate</> : <><Check size={12} /> Activate</>}
                        </button>

                        {/* Change package */}
                        <select value={member.package} onChange={(e) => changePackage(member._id, e.target.value)}
                          className="bg-navy-dark border border-navy-border rounded-xl py-2 px-3 text-xs text-text-primary font-inter focus:outline-none focus:border-gold-primary/50 cursor-pointer"
                        >
                          <option value="starter">Starter</option>
                          <option value="premium">Premium</option>
                        </select>

                        {/* Delete */}
                        <button onClick={() => deleteMember(member._id, member.name)}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl font-inter text-xs font-bold uppercase tracking-wider bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20 transition"
                        >
                          <Trash2 size={12} /> Delete
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
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-inter text-[10px] tracking-[0.3em] text-gold-primary uppercase mb-2 font-bold">Overview</p>
              <h1 className="font-playfair text-3xl font-bold text-white">Full Network</h1>
              <p className="font-inter text-sm text-text-secondary mt-1">Click "View Tree" on any member to see their downline.</p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-secondary border border-navy-border">
              {members.length === 0 ? (
                <p className="text-text-secondary font-inter text-sm text-center py-10">No members yet.</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {members.map((member) => (
                    <div key={member._id} className="flex items-center gap-4 p-4 rounded-xl bg-navy-dark/40 border border-navy-border/50 hover:border-gold-primary/20 transition-colors">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-playfair font-bold text-sm ${
                        member.package === "premium" ? "bg-gold-primary/10 border border-gold-primary/20 text-gold-primary" : "bg-navy-border/40 border border-navy-border text-text-secondary"
                      }`}>
                        {member.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-inter text-sm font-semibold text-white">{member.name}</p>
                        <p className="font-inter text-[10px] text-text-secondary mt-0.5">
                          {member.referredBy ? `Referred by: ${member.referredBy}` : "Direct member"} • Code: {member.referralCode}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`font-inter text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border ${
                          member.isActive ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : "bg-amber-400/10 text-amber-400 border-amber-400/20"
                        }`}>
                          {member.isActive ? "Active" : "Pending"}
                        </span>
                        <span className={`font-inter text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border ${
                          member.package === "premium" ? "bg-gold-primary/10 text-gold-primary border-gold-primary/20" : "bg-navy-border/50 text-text-secondary border-navy-border"
                        }`}>
                          {member.package}
                        </span>
                        <button onClick={() => openTree(member)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-inter text-xs font-bold uppercase tracking-wider bg-gold-primary/10 text-gold-primary border border-gold-primary/20 hover:bg-gold-primary/20 transition"
                        >
                          <GitBranch size={11} /> Tree
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

      {/* ── TREE PANEL (SLIDE IN FROM RIGHT) ── */}
      {selectedMember && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-[60] bg-navy-dark/60 backdrop-blur-sm" onClick={() => setSelectedMember(null)} />

          {/* Panel */}
          <div className="fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-navy-secondary border-l border-navy-border flex flex-col shadow-2xl">

            {/* Panel Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-navy-border">
              <div>
                <p className="font-inter text-[10px] text-gold-primary uppercase tracking-widest font-bold mb-0.5">Network Tree</p>
                <h2 className="font-playfair text-xl font-bold text-white">{selectedMember.name}</h2>
                <p className="font-inter text-[10px] text-text-secondary mt-0.5">Code: {selectedMember.referralCode}</p>
              </div>
              <button onClick={() => setSelectedMember(null)}
                className="w-8 h-8 rounded-xl bg-navy-border/50 flex items-center justify-center text-text-secondary hover:text-white hover:bg-navy-border transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Root node */}
            <div className="px-6 pt-5 pb-2">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gold-primary/10 border border-gold-primary/25 mb-1">
                <div className="w-9 h-9 rounded-full bg-gold-primary/20 border border-gold-primary/40 flex items-center justify-center shrink-0 font-playfair font-bold text-sm text-gold-primary">
                  {selectedMember.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-inter text-sm font-bold text-gold-primary truncate">{selectedMember.name}</p>
                  <p className="font-inter text-[10px] text-gold-primary/60 mt-0.5">Root Node</p>
                </div>
                <span className={`font-inter text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${
                  selectedMember.package === "premium" ? "bg-gold-primary/20 text-gold-primary border-gold-primary/30" : "bg-navy-dark text-text-secondary border-navy-border"
                }`}>
                  {selectedMember.package === "premium" ? "✦ Premium" : "Starter"}
                </span>
              </div>
              <div className="ml-4 w-px h-3 bg-navy-border" />
            </div>

            {/* Tree content */}
            <div className="flex-1 overflow-y-auto px-6 pb-6">
              {treeLoading ? (
                <p className="font-inter text-sm text-text-secondary text-center py-10">Loading tree...</p>
              ) : memberTree.length === 0 ? (
                <p className="font-inter text-sm text-text-secondary text-center py-10">No referrals yet.</p>
              ) : (
                <div className="min-w-0">
                  {memberTree.map((node, i) => (
                    <TreeNode key={node.id} node={node} depth={0} isLast={i === memberTree.length - 1} />
                  ))}
                </div>
              )}
            </div>

            {/* Panel footer stats */}
            <div className="px-6 py-4 border-t border-navy-border bg-navy-dark/30 grid grid-cols-3 gap-3">
              {[
                { label: "Direct", value: memberTree.length },
                { label: "Level 2", value: memberTree.reduce((a, n) => a + (n.children?.length || 0), 0) },
                { label: "Premium", value: memberTree.filter(n => n.package === "premium").length },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-playfair text-xl font-bold text-gold-primary">{s.value}</p>
                  <p className="font-inter text-[9px] uppercase tracking-widest text-text-secondary mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
