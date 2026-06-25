import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2, Zap, ShieldCheck, Clock3,
  Home, Building2, Factory, ArrowRight, Star
} from "lucide-react";
import useReveal from "../components/useReveal";

const residential = [
  {
    name: "Starter Home",
    popular: false,
    price: "₹65,000",
    unit: "/ kW",
    panels: "4–8 panels",
    capacity: "1–2 kW",
    battery: "Not included",
    installation: "Included",
    warranty: "25 years",
    emi: "From ₹2,800 / month",
    features: ["Basic on-grid inverter", "App-based monitoring", "Free site survey", "PM Surya Ghar subsidy support", "1 free service visit / year"],
  },
  {
    name: "Premium Home",
    popular: true,
    price: "₹62,000",
    unit: "/ kW",
    panels: "12–20 panels",
    capacity: "3–5 kW",
    battery: "Optional add-on",
    installation: "Included",
    warranty: "25 years",
    emi: "From ₹4,900 / month",
    features: ["Smart hybrid-ready inverter", "Real-time monitoring app", "Free site survey + design", "Subsidy claim managed", "2 free service visits / year", "Priority support"],
  },
  {
    name: "Luxury Home",
    popular: false,
    price: "₹60,000",
    unit: "/ kW",
    panels: "20–32 panels",
    capacity: "6–10 kW",
    battery: "Included",
    installation: "Included",
    warranty: "25 years",
    emi: "From ₹8,500 / month",
    features: ["Hybrid inverter + battery", "Remote monitoring + alerts", "Full turnkey project", "Subsidy + net metering setup", "4 free service visits / year", "Dedicated project manager"],
  },
];

const commercial = [
  {
    name: "Small Business",
    popular: false,
    price: "₹58,000",
    unit: "/ kW",
    panels: "20–40 panels",
    capacity: "10–25 kW",
    battery: "Optional",
    installation: "Included",
    warranty: "25 years",
    emi: "From ₹12,500 / month",
    features: ["On-grid inverter system", "Energy audit report", "Load scheduling support", "Net metering application", "Quarterly AMC visits"],
  },
  {
    name: "Business Pro",
    popular: true,
    price: "₹55,000",
    unit: "/ kW",
    panels: "40–100 panels",
    capacity: "25–50 kW",
    battery: "Available",
    installation: "Included",
    warranty: "25 years",
    emi: "From ₹24,000 / month",
    features: ["Hybrid inverter system", "Advanced energy management", "Remote performance monitoring", "Priority 24hr support", "Bi-annual AMC visits", "Performance guarantees"],
  },
  {
    name: "Enterprise",
    popular: false,
    price: "₹52,000",
    unit: "/ kW",
    panels: "100+ panels",
    capacity: "50–100 kW",
    battery: "Included",
    installation: "Included",
    warranty: "25 years",
    emi: "Custom financing",
    features: ["Custom multi-inverter design", "SCADA monitoring system", "Dedicated O&M team", "SLA-backed response time", "Monthly performance reports", "On-site commissioning"],
  },
];

const industrial = [
  {
    name: "Industrial Starter",
    popular: false,
    price: "₹50,000",
    unit: "/ kW",
    panels: "200+ panels",
    capacity: "100–200 kW",
    battery: "Optional",
    installation: "Included",
    warranty: "25 years",
    emi: "Custom EMI available",
    features: ["Central inverter system", "SCADA monitoring", "Grid compliance certification", "Bi-annual O&M plan", "Performance reporting"],
  },
  {
    name: "Industrial Max",
    popular: true,
    price: "Custom",
    unit: "pricing",
    panels: "500+ panels",
    capacity: "200 kW – 1 MW+",
    battery: "Available",
    installation: "Included",
    warranty: "25 years",
    emi: "Project financing available",
    features: ["String / central inverter design", "24/7 SCADA + remote monitoring", "Dedicated site engineer", "Monthly energy audits", "Annual performance contract", "Open-access / captive models"],
  },
];

const highlights = [
  { icon: Clock3,      label: "Fast Installation",    value: "7–14 days" },
  { icon: ShieldCheck, label: "Warranty Coverage",    value: "25 Years" },
  { icon: Zap,         label: "Avg Savings / Year",  value: "₹1.8 Lakh+" },
  { icon: CheckCircle2, label: "Transparent Pricing", value: "No Hidden Fees" },
];

function PackageCard({ pkg }) {
  return (
    <div
      className={`relative card p-8 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl
        ${pkg.popular ? "border-[#FBBF24] ring-2 ring-[#FBBF24]/30 shadow-[0_8px_40px_rgba(251,191,36,.15)]" : "border-[#E2E8F0]"}`}
    >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FBBF24] text-[#0F172A] text-xs font-bold uppercase tracking-[1.5px] px-5 py-1.5 rounded-full flex items-center gap-1">
          <Star size={11} fill="#0F172A" /> Most Popular
        </div>
      )}

      <div className="mb-6">
        <p className="text-xs uppercase tracking-[2px] text-[#F59E0B] font-bold mb-2">{pkg.emi}</p>
        <h3 className="text-2xl font-bold text-[#0F172A] mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{pkg.name}</h3>
        <div className="flex items-baseline gap-1 mt-3">
          <span className="text-3xl font-black text-[#0F172A]" style={{ fontFamily: "Poppins, sans-serif" }}>{pkg.price}</span>
          <span className="text-sm text-[#94A3B8]">{pkg.unit}</span>
        </div>
      </div>

      <div className="space-y-3 mb-6 pb-6 border-b border-[#E2E8F0]">
        {[
          ["Panels",       pkg.panels],
          ["Capacity",     pkg.capacity],
          ["Battery",      pkg.battery],
          ["Installation", pkg.installation],
          ["Warranty",     pkg.warranty],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between text-sm">
            <span className="text-[#94A3B8]">{label}</span>
            <span className="font-semibold text-[#0F172A]">{value}</span>
          </div>
        ))}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-[#475569]">
            <CheckCircle2 size={15} className="text-[#16A34A] flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={pkg.popular ? "btn-primary w-full" : "btn-secondary w-full"}
      >
        Schedule Consultation <ArrowRight size={15} />
      </Link>
    </div>
  );
}

function CategorySection({ icon: Icon, title, desc, packages, bg }) {
  return (
    <div className={`py-16 px-6 md:px-[6%] ${bg}`}>
      <div className="max-w-[1300px] mx-auto">
        <div className="reveal flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-[#0F172A] text-[#FBBF24] flex items-center justify-center flex-shrink-0">
            <Icon size={24} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h2>
            <p className="text-sm text-[#475569]">{desc}</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} />)}
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  useReveal();

  return (
    <div className="overflow-hidden">

      {/* ── Page Hero ── */}
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="page-hero-overlay" />
        <div className="page-hero-gradient" />
        <div className="page-hero-content text-white">
          <p className="section-tag text-[#FBBF24]">Pricing</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
            Clear, Premium Solar Packages<br className="hidden md:block" /> for Every Scale
          </h1>
          <p className="text-lg text-[#CBD5E1] max-w-xl leading-8">
            Transparent pricing for residential, commercial and industrial solar — with EMI options, subsidies and 25-year warranties on every package.
          </p>
        </div>
      </div>

      {/* ── Highlights strip ── */}
      <div className="bg-[#FBBF24] py-6 px-6 md:px-[6%]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F172A]/10 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-[#0F172A]" />
              </div>
              <div>
                <p className="text-sm font-black text-[#0F172A]" style={{ fontFamily: "Poppins, sans-serif" }}>{value}</p>
                <p className="text-xs text-[#0F172A]/60">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Residential ── */}
      <CategorySection
        icon={Home}
        title="Residential Packages"
        desc="Solar systems designed for homes, villas and apartments — with full subsidy support."
        packages={residential}
        bg="bg-[#F8FAFC]"
      />

      {/* ── Commercial ── */}
      <CategorySection
        icon={Building2}
        title="Commercial Packages"
        desc="Scalable solutions for offices, retail stores, hospitals and hospitality businesses."
        packages={commercial}
        bg="bg-white"
      />

      {/* ── Industrial ── */}
      <CategorySection
        icon={Factory}
        title="Industrial Packages"
        desc="High-capacity solar for factories, warehouses and large industrial facilities."
        packages={industrial.concat({
          name: "Need a Custom Quote?",
          popular: false,
          price: "Talk to Us",
          unit: "",
          panels: "Any scale",
          capacity: "Any capacity",
          battery: "As required",
          installation: "Included",
          warranty: "25 years",
          emi: "Flexible project financing",
          features: ["Site survey & feasibility study", "Custom system design", "Project financing options", "Captive / open-access models", "Performance contracts", "Dedicated project team"],
        })}
        bg="bg-[#F8FAFC]"
      />

      {/* ── EMI Section ── */}
      <section className="py-16 px-6 md:px-[6%] bg-[#0F172A]">
        <div className="max-w-[1300px] mx-auto">
          <div className="reveal grid gap-10 lg:grid-cols-[1fr_1fr] items-center">
            <div className="text-white">
              <p className="section-tag text-[#FBBF24]">Flexible Financing</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
                Affordable Monthly EMI Options
              </h2>
              <p className="text-[#94A3B8] leading-7 mb-6">
                Don't let upfront cost stop you from going solar. We offer flexible EMI financing through leading banks and NBFCs — with zero-cost processing for eligible customers.
              </p>
              <ul className="space-y-3">
                {[
                  "0% processing fee for select bank partnerships",
                  "EMI starting from ₹2,800 / month for 1kW system",
                  "Loan tenure up to 7 years",
                  "Instant loan approval for eligible applicants",
                  "Government subsidy reduces your loan amount",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-[#CBD5E1]">
                    <CheckCircle2 size={15} className="text-[#16A34A] flex-shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/contact" className="btn-primary w-full">
                Calculate Your EMI <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-ghost-white w-full">
                Talk to a Financing Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
