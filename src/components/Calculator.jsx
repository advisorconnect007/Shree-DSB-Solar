import React, { useState } from "react";
import { Zap, Receipt, SlidersHorizontal, ToggleLeft, BarChart2, PhoneCall } from "lucide-react";
import useReveal from "./useReveal";

const RATES = { ongrid: 45000, offgrid: 55000 };
const subsidy = (kw) => kw <= 1 ? 30000 : kw <= 2 ? 60000 : 78000;
const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function Calculator({ onNav }) {
  useReveal();
  const [mode, setMode] = useState("kw");
  const [kw, setKw] = useState(3);
  const [bill, setBill] = useState("");
  const [type, setType] = useState("ongrid");

  const activeKw = mode === "kw" ? kw : Math.min(10, Math.max(1, Math.ceil(((parseFloat(bill) || 0) / 6 / 180) * 2) / 2));
  const base = Math.round(activeKw * RATES[type]);
  const sub = subsidy(activeKw);
  const final = Math.max(base - sub, 0);

  const results = [
    { label: "Recommended Size", value: `${activeKw} kW`, color: "text-emerald-400" },
    { label: "Base Cost", value: fmt(base), color: "text-white" },
    { label: "Govt. Subsidy", value: `− ${fmt(sub)}`, color: "text-amber-300" },
    { label: "Final Estimate", value: fmt(final), color: "text-emerald-400" },
  ];

  return (
    <section id="calculator" className="py-20 md:py-24 px-6 md:px-[6%] bg-sky-50/60">
      <div className="reveal mb-14">
        <div className="section-label">Solar Calculator</div>
        <h2 className="section-title">Estimate Your Cost Instantly</h2>
        <p className="section-sub">Two ways — by system size or your current electricity bill.</p>
      </div>

      <div className="reveal delay-200 max-w-[860px] mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-[0_16px_64px_rgba(37,99,235,.1)] border border-slate-200">
        {/* Tabs */}
        <div className="flex bg-slate-100 rounded-2xl p-1.5 gap-1.5 mb-9">
          {[
            { id: "kw", label: "By System Size (kW)", icon: Zap },
            { id: "bill", label: "By Monthly Bill (₹)", icon: Receipt },
          ].map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setMode(id)} className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-250 ${mode === id ? "bg-[#0c1f3f] text-white shadow-[0_4px_14px_rgba(12,31,63,.22)]" : "text-slate-400 hover:text-slate-700"}`}>
              <Icon size={15} strokeWidth={2.5} />{label}
            </button>
          ))}
        </div>

        {/* Inputs */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {mode === "kw" ? (
            <div>
              <label className="flex items-center gap-2 text-xs font-bold text-slate-700 mb-3 uppercase tracking-widest"><SlidersHorizontal size={13} className="text-blue-600" /> System Size</label>
              <input type="range" min={1} max={10} step={0.5} value={kw} onChange={(e) => setKw(parseFloat(e.target.value))} className="w-full h-2 accent-[#0c1f3f] cursor-pointer" />
              <div className="flex justify-between items-center mt-3">
                <span className="text-3xl font-black text-[#0c1f3f]">{kw} kW</span>
                <span className="text-xs text-slate-400">1kW — 10kW</span>
              </div>
            </div>
          ) : (
            <div>
              <label className="flex items-center gap-2 text-xs font-bold text-slate-700 mb-3 uppercase tracking-widest">₹ Monthly Electricity Bill</label>
              <input type="number" placeholder="e.g. 3000" value={bill} onChange={(e) => setBill(e.target.value)} className="w-full px-4 py-3.5 border-[1.5px] border-slate-200 rounded-xl text-sm text-slate-800 bg-slate-50 focus:border-[#0c1f3f] focus:bg-white transition-all" />
              {bill && <p className="text-xs text-slate-400 mt-2">Recommended: <strong className="text-[#0c1f3f]">{activeKw} kW</strong> system</p>}
            </div>
          )}
          <div>
            <label className="flex items-center gap-2 text-xs font-bold text-slate-700 mb-3 uppercase tracking-widest"><ToggleLeft size={14} className="text-blue-600" /> System Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)} className="w-full px-4 py-3.5 border-[1.5px] border-slate-200 rounded-xl text-sm text-slate-800 bg-slate-50 focus:border-[#0c1f3f] focus:bg-white transition-all">
              <option value="ongrid">On-Grid System</option>
              <option value="offgrid">Off-Grid System</option>
            </select>
          </div>
        </div>

        {/* Result */}
        <div className="relative bg-gradient-to-br from-[#0c1f3f] to-[#1e40af] rounded-2xl p-8 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/5 rounded-full pointer-events-none" />
          <div className="flex items-center gap-2 text-[10px] font-bold text-white/60 uppercase tracking-[2px] mb-5">
            <BarChart2 size={14} className="text-amber-300" />Your Estimated Investment
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {results.map(({ label, value, color }, i) => (
              <div key={i} className="bg-white/10 border border-white/10 rounded-xl p-4">
                <div className="text-[10px] font-bold text-white/50 uppercase tracking-[1px] mb-1.5">{label}</div>
                <div className={`text-[22px] font-black ${color}`}>{value}</div>
              </div>
            ))}
          </div>
          <div className="bg-amber-400/12 border border-amber-400/25 rounded-xl p-4 mb-5 text-sm text-white/75 leading-relaxed">
            <strong className="text-amber-300">🏛️ PM Surya Ghar:</strong> Up to ₹30,000 for 1kW, ₹60,000 for 2kW, ₹78,000 for 3kW+. We handle the application free of cost.
          </div>
          <button onClick={() => onNav("contact")} className="btn-gold w-full justify-center">
            <PhoneCall size={17} strokeWidth={2.5} />Get Exact Quote from Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
