import React, { useEffect, useRef, useState } from "react";
import { Zap, Calculator, ChevronDown } from "lucide-react";
import heroBg from "../assets/hero-solar.jpg";

const stats = [
  { num: 500, suffix: "+", label: "Installations" },
  { num: null, display: "10yr", label: "Warranty" },
  { num: 98, suffix: "%", label: "Happy Clients" },
  { num: null, display: "24/7", label: "Support" },
];

function CountUp({ target, suffix = "", duration = 1800 }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const step = target / (duration / 16);
        let v = 0;
        const t = setInterval(() => { v += step; if (v >= target) { v = target; clearInterval(t); } setVal(Math.floor(v)); }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function Hero({ onNav }) {
  const bgRef = useRef(null);
  useEffect(() => {
    const handler = () => { if (bgRef.current) bgRef.current.style.transform = `scale(1.1) translateY(${window.scrollY * 0.22}px)`; };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
      {/* BG */}
      <div ref={bgRef} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})`, transform: "scale(1.1)", willChange: "transform" }} />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,18,38,0.92)] via-[rgba(12,31,63,0.76)] to-[rgba(12,31,63,0.25)]" />
      {/* Orbs */}
      <div className="orb absolute w-96 h-96 rounded-full blur-[80px] opacity-20 bg-blue-500 -top-24 right-[10%] pointer-events-none" />
      <div className="orb2 absolute w-64 h-64 rounded-full blur-[70px] opacity-15 bg-amber-400 bottom-0 right-[35%] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-[6%] max-w-[700px]">
        {/* Chip */}
        <div className="chip-pulse inline-flex items-center gap-2.5 bg-amber-400/15 border border-amber-400/40 text-white/95 text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase" style={{ animationDelay: "200ms", animation: "fadeUp .7s .2s both" }}>
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          Bikaner's #1 Trusted Solar Partner
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(38px,6vw,68px)] font-black text-white leading-[1.04] tracking-[-2px] mb-5" style={{ animation: "fadeUp .75s .38s both" }}>
          Power Your Home<br />With{" "}
          <em className="text-amber-300 not-italic">Clean Solar</em><br />
          Energy ☀️
        </h1>

        <p className="text-lg text-white/75 leading-relaxed mb-9 max-w-lg" style={{ animation: "fadeUp .75s .55s both" }}>
          End-to-end solar solutions for homes & businesses across Rajasthan. Save up to <strong className="text-amber-300">₹3,500/month</strong> on electricity.
        </p>

        <div className="flex flex-wrap gap-3.5 mb-14" style={{ animation: "fadeUp .75s .7s both" }}>
          <button onClick={() => onNav("contact")} className="btn-gold">
            <Zap size={17} strokeWidth={2.5} /> Get Free Quote
          </button>
          <button onClick={() => onNav("calculator")} className="btn-ghost">
            <Calculator size={17} strokeWidth={2} /> Calculate Cost
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 bg-white/8 border border-white/12 rounded-2xl overflow-hidden backdrop-blur-xl max-w-[520px]" style={{ animation: "fadeUp .75s .85s both" }}>
          {stats.map((s, i) => (
            <div key={i} className={`py-4 px-2 text-center ${i < 3 ? "border-r border-white/10" : ""}`}>
              <div className="text-2xl font-black text-amber-300 leading-none">
                {s.num !== null ? <CountUp target={s.num} suffix={s.suffix} /> : s.display}
              </div>
              <div className="text-[10px] text-white/55 mt-1.5 font-medium tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={() => onNav("services")} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] text-white tracking-[2px] uppercase font-semibold">Scroll</span>
        <ChevronDown size={18} className="scroll-dot text-amber-300" />
      </button>

      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
