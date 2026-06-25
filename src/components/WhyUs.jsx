import React from "react";
import {
  Award, Leaf, Landmark, Headphones, Shield, MapPin,
  CheckCircle, TrendingUp, Clock, Users
} from "lucide-react";
import useReveal from "./useReveal";

const reasons = [
  {
    icon: Award,
    title: "12+ Years of Excellence",
    desc: "Over a decade of successful solar installations across Bikaner and Rajasthan, with hundreds of premium systems running strong.",
  },
  {
    icon: Leaf,
    title: "Eco-Certified Equipment",
    desc: "Only MNRE-approved, high-efficiency panels with minimal environmental impact and maximum energy output.",
  },
  {
    icon: Landmark,
    title: "Subsidy Specialists",
    desc: "We manage your entire PM Surya Ghar subsidy application end-to-end — saving you thousands at zero extra charge.",
  },
  {
    icon: Headphones,
    title: "24/7 After-Sales Support",
    desc: "Dedicated support team available around the clock for emergencies, performance queries, and quick technical fixes.",
  },
  {
    icon: Shield,
    title: "25-Year Panel Warranty",
    desc: "Every installation is backed by a comprehensive 25-year performance warranty. Invest with complete confidence.",
  },
  {
    icon: MapPin,
    title: "Local & Dependable",
    desc: "Based in Sudarshana Nagar, Bikaner — we're your neighbours, not a distant company. On-site response within 24 hours.",
  },
];

const highlights = [
  { icon: TrendingUp, value: "₹1.8 Lakh+", label: "Avg annual savings per home" },
  { icon: Users,      value: "1,200+",     label: "Satisfied customers" },
  { icon: Clock,      value: "7 Days",     label: "Average installation time" },
  { icon: CheckCircle, value: "100%",      label: "Projects on time" },
];

export default function WhyUs() {
  useReveal();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="orb  absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#FBBF24]/6  blur-3xl pointer-events-none" />
      <div className="orb2 absolute top-0     right-0   w-64 h-64 rounded-full bg-blue-500/6  blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-[6%]">

        {/* Header */}
        <div className="reveal mb-14 max-w-2xl">
          <p className="section-tag text-[#FBBF24]">Why choose us</p>
          <h2 className="section-heading text-white mb-4">
            Bikaner's Most Trusted Solar Company
          </h2>
          <p className="section-desc text-white/55">
            Hundreds of families and businesses across Rajasthan trust DSB Solar with their energy future.
          </p>
        </div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`reveal group rounded-2xl border border-white/8 bg-white/5 p-7 backdrop-blur-sm
                          hover:bg-white/10 hover:-translate-y-1.5 hover:border-[#FBBF24]/20
                          transition-all duration-300 delay-${(i % 3 + 1) * 100}`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FBBF24]/12 border border-[#FBBF24]/20 mb-5 group-hover:scale-105 group-hover:bg-[#FBBF24]/18 transition-all">
                <Icon size={22} className="text-[#FBBF24]" />
              </div>
              <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                {title}
              </h3>
              <p className="text-sm text-white/55 leading-7">{desc}</p>
            </div>
          ))}
        </div>

        {/* Highlight stats strip */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map(({ icon: Icon, value, label }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center">
              <Icon size={20} className="text-[#FBBF24] mx-auto mb-3" />
              <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{value}</p>
              <p className="text-xs text-white/50 uppercase tracking-[1px]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
