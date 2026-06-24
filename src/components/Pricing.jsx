import React from "react";
import { Sun, Droplets, Wrench, Search, BatteryCharging, MessageCircle, CheckCircle } from "lucide-react";
import useReveal from "./useReveal";

const plans = [
  { icon: Sun, title: "Solar Installation", price: "₹40,000", unit: "/ kW onwards", hot: true, features: ["1kW to 10kW+ systems", "On-grid & Off-grid", "Govt. subsidy assistance", "10-year panel warranty", "Free site survey"] },
  { icon: Droplets, title: "Panel Washing", price: "₹500", unit: "/ session (10 panels)", features: ["Soft brush + RO water", "No panel damage risk", "AMC packages available", "Same-day service"] },
  { icon: Wrench, title: "AMC Maintenance", price: "₹2,500", unit: "/ year", features: ["2 site visits per year", "Inverter & wiring check", "Performance report", "Priority support"] },
  { icon: Search, title: "Inspection & Audit", price: "₹1,000", unit: "/ audit", features: ["Full system check", "Output analysis report", "Fault identification", "Improvement tips"] },
  { icon: BatteryCharging, title: "Battery Storage", price: "₹15,000", unit: "/ unit onwards", features: ["Lithium & lead-acid", "100Ah to 200Ah", "All inverter compatible", "2-year warranty"] },
  { icon: MessageCircle, title: "Solar Consulting", price: "FREE", unit: "/ first consult", features: ["System sizing advice", "ROI & savings planning", "Subsidy guidance", "No obligation"] },
];

export default function Pricing({ onNav }) {
  useReveal();
  return (
    <section id="pricing" className="py-20 md:py-24 px-6 md:px-[6%] bg-white">
      <div className="reveal mb-14">
        <div className="section-label">Transparent Pricing</div>
        <h2 className="section-title">Service Packages & Rates</h2>
        <p className="section-sub">Clear pricing with no hidden charges. Final quote based on site conditions.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map(({ icon: Icon, title, price, unit, hot, features }, i) => (
          <div key={i} className={`reveal relative rounded-2xl p-8 border-[1.5px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer delay-${(i % 3 + 1) * 100} ${hot ? "bg-gradient-to-br from-sky-50 to-blue-50 border-blue-400 shadow-[0_8px_32px_rgba(37,99,235,.1)]" : "bg-slate-50 border-slate-200 hover:border-blue-200"}`}>
            {hot && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0c1f3f] to-blue-700 text-white text-[10px] font-bold px-5 py-1.5 rounded-full whitespace-nowrap tracking-wide shadow-lg">⭐ Most Popular</div>}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 hover:rotate-[-6deg] hover:scale-110 ${hot ? "bg-blue-100" : "bg-blue-50"}`}>
              <Icon size={22} className="text-blue-600" strokeWidth={1.8} />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">{title}</h3>
            <div className="text-2xl font-black text-[#0c1f3f] tracking-tight mt-2.5 mb-1">{price}</div>
            <div className="text-xs text-slate-400 mb-4">{unit}</div>
            <ul className="border-t border-slate-200 pt-4 space-y-2.5">
              {features.map((f, j) => (
                <li key={j} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <CheckCircle size={14} className="text-blue-600 flex-shrink-0" strokeWidth={2.5} />{f}
                </li>
              ))}
            </ul>
            <button onClick={() => onNav("contact")} className="mt-6 w-full py-3 rounded-xl text-sm font-bold border-[1.5px] border-[#0c1f3f] text-[#0c1f3f] hover:bg-[#0c1f3f] hover:text-white transition-all duration-200">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
