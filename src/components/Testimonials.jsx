import React from "react";
import useReveal from "./useReveal";
import solarReal from "../assets/hero-solar.jpg";

const tData = [
  {
    stars: 5, name: "Ramesh Sharma", loc: "Bikaner, Rajasthan", tag: "Solar Installation — 5kW",
    initials: "RS", bgFrom: "#0c4a6e", bgTo: "#0369a1", label: "Rooftop Solar — 5kW System",
    quote: "\"Shree DSB Solar ne humara 5kW ka system bahut hi achhe tarike se install kiya. Ab bijli ka bill almost zero ho gaya hai. Bahut khush hain!\""
  },
  {
    stars: 5, name: "Priya Vyas", loc: "Nokha, Bikaner", tag: "Panel Washing",
    initials: "PV", bgFrom: "#1e3a5f", bgTo: "#1d4ed8", label: "Commercial Panel Washing",
    quote: "\"Panel washing is excellent. After cleaning, generation went up by 25%! Very professional team, on time and very careful.\""
  },
  {
    stars: 5, name: "Mahesh Kumar", loc: "Kolayat, Bikaner", tag: "Installation + Subsidy",
    initials: "MK", bgFrom: "#14532d", bgTo: "#15803d", label: "3kW + ₹78,000 Subsidy Saved",
    quote: "\"They helped me claim PM Surya Ghar subsidy — saved ₹78,000! Full process was managed by their team. Highly recommended!\""
  },
  {
    stars: 4, name: "Sunita Joshi", loc: "Bikaner City", tag: "Annual Maintenance",
    initials: "SJ", bgFrom: "#312e81", bgTo: "#4338ca", label: "Annual Maintenance AMC",
    quote: "\"AMC service is great value. They visit twice a year, check everything and provide a detailed performance report. System running 3+ years!\""
  },
  {
    stars: 5, name: "Arun Jangid", loc: "Dungargarh, Bikaner", tag: "Solar Consulting",
    initials: "AJ", bgFrom: "#7c2d12", bgTo: "#c2410c", label: "Free Solar Consultation",
    quote: "\"Free consulting session cleared all confusion. They suggested the right system size, saved me from over-spending. Great team!\""
  },
  {
    stars: 5, name: "Dinesh Pareek", loc: "Bikaner, Rajasthan", tag: "Battery Storage",
    initials: "DP", bgFrom: "#064e3b", bgTo: "#065f46", label: "Solar + Battery Backup",
    quote: "\"Battery storage solution is brilliant. No more power cuts! Installation was clean and the team explained everything perfectly. 10/10!\""
  },
];

function TestiCard({ t, index }) {
  return (
    <div className={`reveal card card-hover overflow-hidden delay-${(index % 3 + 1) * 100}`}>
      {/* Image Area — real solar photo with gradient overlay */}
      <div className="testi-img-wrap relative h-44 overflow-hidden">
        <img src={solarReal} alt="Solar installation" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${t.bgFrom}cc, ${t.bgTo}99)` }} />
        <div className="absolute bottom-0 left-0 right-0 bg-[rgba(12,31,63,.8)] px-4 py-2.5">
          <span className="text-[10px] font-bold text-white/85 uppercase tracking-wider">{t.label}</span>
        </div>
        {/* Initials badge */}
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-xs font-black text-white">
          {t.initials}
        </div>
      </div>

      <div className="p-6">
        <div className="flex gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-base ${i < t.stars ? "text-amber-400" : "text-slate-200"}`}>★</span>
          ))}
        </div>
        <p className="text-sm text-slate-600 leading-[1.78] italic mb-5">{t.quote}</p>
        <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center text-xs font-black text-[#0c1f3f] flex-shrink-0">
            {t.initials}
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">{t.name}</div>
            <div className="text-xs text-slate-400">{t.loc}</div>
            <div className="mt-1 inline-block text-[10px] font-bold bg-blue-50 text-[#0c1f3f] px-2.5 py-0.5 rounded-full border border-blue-100 tracking-wide">{t.tag}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  useReveal();
  return (
    <section id="testimonials" className="py-20 md:py-24 px-6 md:px-[6%] bg-slate-50">
      <div className="reveal mb-14">
        <div className="section-label">Customer Reviews</div>
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-sub">Real feedback from real customers across Bikaner and Rajasthan — with actual solar setups.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tData.map((t, i) => <TestiCard key={i} t={t} index={i} />)}
      </div>
    </section>
  );
}
