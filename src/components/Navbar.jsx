import React, { useState, useEffect } from "react";
import { Sun, Menu, X } from "lucide-react";

const links = [
  { label: "Services", id: "services" },
  { label: "Calculator", id: "calculator" },
  { label: "Pricing", id: "pricing" },
  { label: "Reviews", id: "testimonials" },
  { label: "Why Us", id: "why" },
];

export default function Navbar({ onNav }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const nav = (id) => { onNav(id); setOpen(false); };

  return (
    <nav className={`nav-line fixed top-0 left-0 right-0 z-[999] h-[68px] flex items-center justify-between px-6 md:px-[6%] transition-all duration-300 ${solid ? "nav-solid bg-white/96 backdrop-blur-2xl shadow-[0_1px_0_#e2e8f0,0_4px_24px_rgba(0,0,0,.06)]" : "bg-transparent"}`}>
      {/* Logo */}
      <button onClick={() => onNav("hero")} className="flex items-center gap-3 cursor-pointer group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-[0_4px_14px_rgba(245,158,11,.35)] group-hover:scale-105 transition-transform">
          <Sun size={20} className="text-white" strokeWidth={2.5} />
        </div>
        <span className={`text-[17px] font-extrabold tracking-tight transition-colors ${solid ? "text-[#0c1f3f]" : "text-white"}`}>
          Shree DSB Solar
        </span>
      </button>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-1">
        {links.map((l) => (
          <li key={l.id}>
            <button onClick={() => nav(l.id)} className={`text-sm font-medium px-3.5 py-2 rounded-lg transition-all ${solid ? "text-slate-600 hover:text-[#0c1f3f] hover:bg-slate-100" : "text-white/80 hover:text-white hover:bg-white/10"}`}>
              {l.label}
            </button>
          </li>
        ))}
        <li className="ml-2">
          <button onClick={() => nav("contact")} className="text-sm font-bold px-4 py-2.5 rounded-xl bg-amber-400 text-amber-950 hover:bg-amber-500 shadow-[0_4px_14px_rgba(245,158,11,.3)] hover:shadow-[0_6px_20px_rgba(245,158,11,.4)] hover:-translate-y-0.5 transition-all">
            Get Free Quote
          </button>
        </li>
      </ul>

      {/* Hamburger */}
      <button className="md:hidden p-1.5" onClick={() => setOpen(!open)}>
        {open
          ? <X size={22} className={solid ? "text-[#0c1f3f]" : "text-white"} />
          : <Menu size={22} className={solid ? "text-[#0c1f3f]" : "text-white"} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[68px] left-0 right-0 bg-white/98 backdrop-blur-xl shadow-xl flex flex-col p-4 gap-1 border-t border-slate-100">
          {links.map((l) => (
            <button key={l.id} onClick={() => nav(l.id)} className="text-left text-sm font-medium text-slate-700 hover:text-[#0c1f3f] hover:bg-slate-50 px-4 py-3 rounded-xl transition-all">
              {l.label}
            </button>
          ))}
          <button onClick={() => nav("contact")} className="mt-2 text-sm font-bold px-4 py-3 rounded-xl bg-amber-400 text-amber-950 hover:bg-amber-500 transition-all text-center">
            Get Free Quote
          </button>
        </div>
      )}
    </nav>
  );
}
