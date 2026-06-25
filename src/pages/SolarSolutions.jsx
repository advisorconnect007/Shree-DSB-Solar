import React from "react";
import { Link } from "react-router-dom";
import {
  Home, Building2, Factory, Battery, Globe2, ShieldCheck,
  CheckCircle2, ArrowRight, Zap, Sun
} from "lucide-react";
import useReveal from "../components/useReveal";

const solutions = [
  {
    icon: Sun,
    title: "On-Grid Solar Systems",
    tagline: "Grid-tied for maximum savings",
    desc: "On-grid solar systems are directly connected to the electricity grid. Excess power is fed back, and you earn net metering credits. No battery needed — cost-effective for urban homes and offices.",
    features: [
      "No battery cost — lower upfront investment",
      "Net metering: earn credits for excess power",
      "Best suited for grid-stable areas",
      "Fast ROI — typically 3–5 years",
    ],
    color: "#F59E0B",
    bg: "#FFF8E1",
  },
  {
    icon: Battery,
    title: "Off-Grid Solar Systems",
    tagline: "Complete energy independence",
    desc: "Fully independent of the grid — off-grid systems use battery storage to power your property day and night. Ideal for remote locations, farms and areas with unstable electricity supply.",
    features: [
      "100% energy independence",
      "Battery backup for night and cloudy days",
      "Perfect for rural and remote areas",
      "No electricity bill — ever",
    ],
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    icon: Zap,
    title: "Hybrid Solar Systems",
    tagline: "The best of both worlds",
    desc: "Hybrid systems combine on-grid and off-grid technology. Store energy in batteries AND connect to the grid for backup. Premium solution offering maximum savings and zero power cuts.",
    features: [
      "Grid + battery storage combined",
      "Automatic grid failover protection",
      "Smart energy management system",
      "Ideal for premium homes and hospitals",
    ],
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    icon: Home,
    title: "Residential Solutions",
    tagline: "Perfect for homes and villas",
    desc: "Custom-designed rooftop solar for residential properties. From studio apartments to luxury villas — we design, install and maintain the perfect system for your home.",
    features: [
      "Custom design for your roof layout",
      "App-based production monitoring",
      "Subsidy-optimized system sizing",
      "25-year performance warranty",
    ],
    color: "#16A34A",
    bg: "#F0FDF4",
  },
  {
    icon: Building2,
    title: "Commercial Solutions",
    tagline: "Sustainability meets profitability",
    desc: "Solar for retail stores, offices, hospitals, hotels and educational institutions. Reduce operating costs significantly and demonstrate environmental responsibility.",
    features: [
      "Reduce commercial electricity bills by 80%+",
      "Priority installation & commissioning",
      "Load scheduling and energy management",
      "Corporate tax depreciation benefits",
    ],
    color: "#EF4444",
    bg: "#FEF2F2",
  },
  {
    icon: Factory,
    title: "Industrial Solutions",
    tagline: "Scale your energy, scale your savings",
    desc: "High-capacity solar systems for factories, warehouses, logistics parks and manufacturing facilities. Built for reliability, performance and maximum energy output at industrial scale.",
    features: [
      "100kW to multi-MW capacity systems",
      "Captive power and open-access models",
      "Dedicated operations & maintenance",
      "Performance-linked contracts available",
    ],
    color: "#06B6D4",
    bg: "#ECFEFF",
  },
];

const comparison = [
  { feature: "Grid Connection",   onGrid: "Required",     offGrid: "Not needed",  hybrid: "Optional" },
  { feature: "Battery Storage",   onGrid: "No",           offGrid: "Yes",         hybrid: "Yes" },
  { feature: "Power During Cut",  onGrid: "No",           offGrid: "Yes",         hybrid: "Yes" },
  { feature: "Net Metering",      onGrid: "Yes",          offGrid: "No",          hybrid: "Yes" },
  { feature: "Best For",          onGrid: "Urban homes",  offGrid: "Remote areas", hybrid: "Premium homes" },
  { feature: "Typical ROI",       onGrid: "3–5 years",    offGrid: "5–8 years",   hybrid: "4–7 years" },
];

export default function SolarSolutions() {
  useReveal();

  return (
    <div className="overflow-hidden">

      {/* ── Page Hero ── */}
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="page-hero-overlay" />
        <div className="page-hero-gradient" />
        <div className="page-hero-content text-white">
          <p className="section-tag text-[#FBBF24]">Solar Solutions</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
            Strategic Solar Systems for Homes,<br className="hidden md:block" /> Enterprises and Industries
          </h1>
          <p className="text-lg text-[#CBD5E1] max-w-xl leading-8">
            Designed for premium performance, lower bills and confident ownership — our solar solutions are engineered for lasting value.
          </p>
        </div>
      </div>

      {/* ── Solutions Grid ── */}
      <section className="py-20 md:py-28 px-6 md:px-[6%] bg-[#F8FAFC]">
        <div className="max-w-[1300px] mx-auto">
          <div className="reveal text-center mb-14">
            <p className="section-tag justify-center">All Solutions</p>
            <h2 className="section-heading">Choose the Right Solar Technology</h2>
            <p className="section-desc max-w-2xl mx-auto">
              We offer a full range of solar solutions — from simple on-grid systems to complex hybrid installations. Our experts will guide you to the perfect fit.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <article
                key={s.title}
                className={`reveal card card-hover p-8 delay-${(i % 3 + 1) * 100}`}
              >
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                  style={{ backgroundColor: s.bg, color: s.color }}
                >
                  <s.icon size={24} />
                </div>
                <p className="text-xs font-bold uppercase tracking-[2px] mb-2" style={{ color: s.color }}>
                  {s.tagline}
                </p>
                <h2 className="text-xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {s.title}
                </h2>
                <p className="text-sm text-[#475569] leading-7 mb-5">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#475569]">
                      <CheckCircle2 size={15} className="text-[#16A34A] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: s.color }}>
                  Learn more <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-20 md:py-28 px-6 md:px-[6%]">
        <div className="max-w-[1300px] mx-auto">
          <div className="reveal text-center mb-12">
            <p className="section-tag justify-center">Quick Comparison</p>
            <h2 className="section-heading">On-Grid vs Off-Grid vs Hybrid</h2>
            <p className="section-desc max-w-xl mx-auto">
              Not sure which system type fits your needs? This quick comparison will help you decide.
            </p>
          </div>

          <div className="reveal overflow-x-auto rounded-2xl border border-[#E2E8F0] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left px-6 py-4 font-semibold text-[#94A3B8]">Feature</th>
                  <th className="px-6 py-4 font-bold text-[#FBBF24]">On-Grid</th>
                  <th className="px-6 py-4 font-bold text-[#60A5FA]">Off-Grid</th>
                  <th className="px-6 py-4 font-bold text-[#A78BFA]">Hybrid</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-6 py-4 font-medium text-[#0F172A]">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-[#475569]">{row.onGrid}</td>
                    <td className="px-6 py-4 text-center text-[#475569]">{row.offGrid}</td>
                    <td className="px-6 py-4 text-center text-[#475569]">{row.hybrid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 md:px-[6%] bg-[#FBBF24]">
        <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Still Not Sure Which Solution is Right?
          </h2>
          <p className="text-[#0F172A]/70 mb-8 max-w-lg mx-auto">
            Our certified experts will assess your energy needs and recommend the best solar solution at zero cost to you.
          </p>
          <Link to="/contact" className="btn-secondary inline-flex">
            Get Expert Recommendation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
