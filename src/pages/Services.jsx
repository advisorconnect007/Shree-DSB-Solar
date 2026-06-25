import React from "react";
import { Link } from "react-router-dom";
import {
  Home, Sun, Zap, Wrench, BatteryCharging, MessageCircle,
  CheckCircle2, ArrowRight
} from "lucide-react";
import useReveal from "../components/useReveal";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    tagline: "Reliable home energy that lowers monthly bills",
    desc: "Modern rooftop solar systems for luxury homes, villas and gated communities with a premium finish and smart monitoring.",
    benefits: [
      "Custom design for each roof type and size",
      "Smart metering with mobile app monitoring",
      "High-efficiency Tier-1 solar modules",
      "Government subsidy claim support",
    ],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    color: "#3B82F6",
  },
  {
    icon: Sun,
    title: "Commercial Solar",
    tagline: "Built for repeatable savings and corporate sustainability",
    desc: "Scalable solar systems for retail complexes, offices and hospitality businesses with optimized space and financing guidance.",
    benefits: [
      "Smart load balancing for peak demand",
      "Turnkey project management",
      "Energy audit & ROI analysis",
      "Priority technical support",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    color: "#F59E0B",
  },
  {
    icon: Zap,
    title: "Industrial Solar",
    tagline: "Industrial-grade energy independence with maximum uptime",
    desc: "High-capacity power solutions for factories, warehouses and manufacturing facilities with dedicated O&M plans.",
    benefits: [
      "Heavy-load performance systems",
      "Dedicated operations & maintenance plans",
      "Battery backup integration available",
      "On-site commissioning & training",
    ],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
    color: "#8B5CF6",
  },
  {
    icon: Wrench,
    title: "Solar Maintenance",
    tagline: "Expert care that extends life and improves output",
    desc: "Annual maintenance contracts (AMC), panel cleaning and performance tuning to keep your investment producing reliably for decades.",
    benefits: [
      "Bi-annual professional inspections",
      "Advanced panel cleaning & diagnostics",
      "Performance monitoring & reporting",
      "Warranty claim support",
    ],
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
    color: "#16A34A",
  },
  {
    icon: BatteryCharging,
    title: "Solar Battery Storage",
    tagline: "Store solar energy for night use and reliable power continuity",
    desc: "Smart battery storage and backup solutions for homes, businesses and sensitive operations ensuring power continuity.",
    benefits: [
      "Hybrid energy storage solutions",
      "Power cut protection & backup",
      "Optimized charging algorithms",
      "Remote battery monitoring",
    ],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    color: "#EF4444",
  },
  {
    icon: MessageCircle,
    title: "Solar Consultation",
    tagline: "Confident decisions backed by premium advisory service",
    desc: "System sizing, subsidy planning and financial modeling from certified solar experts — all at absolutely no cost to you.",
    benefits: [
      "Free feasibility study & site analysis",
      "EMI and financing guidance",
      "PM Surya Ghar subsidy claim support",
      "Customized savings projection",
    ],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
    color: "#06B6D4",
  },
];

export default function Services() {
  useReveal();

  return (
    <div className="overflow-hidden">

      {/* ── Page Hero ── */}
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="page-hero-overlay" />
        <div className="page-hero-gradient" />
        <div className="orb  absolute top-0 right-0 w-72 h-72 rounded-full bg-[#FBBF24]/5 blur-3xl pointer-events-none" />
        <div className="page-hero-content text-white">
          <p className="section-tag text-[#FBBF24]">Our Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
            Comprehensive Solar Services<br className="hidden md:block" /> for Every Stage of Your Project
          </h1>
          <p className="text-lg text-[#CBD5E1] max-w-xl leading-8">
            From concept to commission, our premium delivery model ensures unmatched quality, speed and support at every step.
          </p>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <section className="py-20 md:py-28 px-6 md:px-[6%] bg-[#F8FAFC]">
        <div className="max-w-[1300px] mx-auto space-y-10">
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`reveal card overflow-hidden ${i % 2 === 0 ? "" : ""}`}
            >
              <div className={`grid lg:grid-cols-[1fr_1fr] ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                {/* Image */}
                <div className="relative overflow-hidden h-72 lg:h-auto" style={{ direction: "ltr" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center" style={{ direction: "ltr" }}>
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                    style={{ backgroundColor: `${service.color}18`, color: service.color }}
                  >
                    <service.icon size={24} />
                  </div>

                  <p className="text-xs uppercase tracking-[2px] font-bold mb-2" style={{ color: service.color }}>
                    {service.tagline}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {service.title}
                  </h2>
                  <p className="text-[#475569] leading-7 mb-6">{service.desc}</p>

                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm text-[#475569]">
                        <CheckCircle2 size={16} className="text-[#16A34A] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="btn-primary self-start">
                    Get a Quote <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 md:px-[6%] bg-[#0F172A]">
        <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Not Sure Which Service You Need?
          </h2>
          <p className="text-[#94A3B8] mb-8 max-w-lg mx-auto">
            Our solar consultants will assess your property and recommend the perfect solution — completely free of charge.
          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            Get Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
