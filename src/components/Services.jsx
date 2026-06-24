import React, { useEffect } from "react";
import { Sun, Droplets, Wrench, Search, BatteryCharging, MessageCircle, ArrowRight } from "lucide-react";
import useReveal from "./useReveal";

const services = [
  { icon: Sun, title: "Solar Panel Installation", desc: "Professional rooftop solar for homes, shops & commercial buildings. On-grid and off-grid systems with 10-year warranty.", link: "Get a quote" },
  { icon: Droplets, title: "Solar Panel Washing", desc: "Dusty panels lose 30% efficiency. Our soft-brush + RO water cleaning restores peak output safely and quickly.", link: "Book cleaning" },
  { icon: Wrench, title: "System Maintenance", desc: "Scheduled AMC plans keeping your system at 100%. Full wiring checks, inverter servicing & performance reports.", link: "View AMC plans" },
  { icon: Search, title: "Inspection & Audit", desc: "Detailed performance audit of existing systems. Identify faults, energy loss & deliver a full improvement report.", link: "Book audit" },
  { icon: BatteryCharging, title: "Battery Storage", desc: "Store solar energy for nights & power cuts. Lithium & lead-acid solutions, 100Ah–200Ah with 2-year warranty.", link: "Explore options" },
  { icon: MessageCircle, title: "Solar Consulting", desc: "Expert guidance on system sizing, subsidy applications, and ROI planning. First consultation is completely free.", link: "Free consult" },
];

export default function Services({ onNav }) {
  useReveal();
  return (
    <section id="services" className="py-20 md:py-24 px-6 md:px-[6%] bg-white">
      <div className="reveal mb-14">
        <div className="section-label">What We Offer</div>
        <h2 className="section-title">Our Solar Services</h2>
        <p className="section-sub">Complete solar solutions from day one to ongoing care — all under one roof in Bikaner.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc, link }, i) => (
          <div key={i} className={`svc-card reveal relative bg-slate-50 border-[1.5px] border-slate-200 rounded-2xl p-8 overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200 delay-${(i % 3 + 1) * 100}`}>
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-blue-600 group-hover:rotate-[-6deg] group-hover:scale-110">
              <Icon size={26} className="text-blue-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
            </div>
            <h3 className="text-[17px] font-bold text-slate-900 mb-2.5 tracking-tight">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            <button onClick={() => onNav("contact")} className="inline-flex items-center gap-1.5 mt-5 text-sm font-bold text-blue-600 hover:gap-3 transition-all duration-200 group/link">
              {link}
              <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
