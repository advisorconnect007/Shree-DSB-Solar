import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Zap, Clock3, TrendingUp, ArrowRight } from "lucide-react";
import useReveal from "../components/useReveal";

const categories = ["All", "Residential", "Commercial", "Industrial"];

const projects = [
  {
    id: 1,
    category: "Residential",
    title: "Elegant Rooftop Solar System",
    location: "Jaipur, Rajasthan",
    capacity: "6.2 kW",
    savings: "₹1,45,000 / year",
    date: "Jan 2025",
    before: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80",
    after:  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    highlight: "Roof-integrated design on a luxury duplex villa. Saved over ₹12,000 in the very first month.",
  },
  {
    id: 2,
    category: "Commercial",
    title: "Business Campus Solar Array",
    location: "Udaipur, Rajasthan",
    capacity: "18.8 kW",
    savings: "₹4,25,000 / year",
    date: "Mar 2025",
    before: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    after:  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    highlight: "Retail complex covering 95% of monthly electricity demand with rooftop solar.",
  },
  {
    id: 3,
    category: "Industrial",
    title: "Factory Energy Transformation",
    location: "Jodhpur, Rajasthan",
    capacity: "42 kW",
    savings: "₹9,80,000 / year",
    date: "May 2025",
    before: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    after:  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80",
    highlight: "Manufacturing plant reduced electricity cost by 78%, with full backup during grid outages.",
  },
  {
    id: 4,
    category: "Residential",
    title: "Luxury Villa Solar Installation",
    location: "Jaisalmer, Rajasthan",
    capacity: "9.5 kW",
    savings: "₹2,90,000 / year",
    date: "Jun 2025",
    before: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    after:  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    highlight: "Heritage-style villa with a seamlessly integrated solar design and battery backup.",
  },
  {
    id: 5,
    category: "Commercial",
    title: "Retail Rooftop Solar Project",
    location: "Bikaner, Rajasthan",
    capacity: "15.6 kW",
    savings: "₹3,60,000 / year",
    date: "Jul 2025",
    before: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80",
    after:  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80",
    highlight: "Retail showroom now fully solar-powered with smart energy management integration.",
  },
  {
    id: 6,
    category: "Industrial",
    title: "Warehouse Energy Upgrade",
    location: "Bikaner, Rajasthan",
    capacity: "65 kW",
    savings: "₹14,20,000 / year",
    date: "Aug 2025",
    before: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    after:  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80",
    highlight: "Large cold-storage warehouse now runs 24/7 on solar + battery hybrid with zero downtime.",
  },
];

const stats = [
  { value: "450+",   label: "Total Projects Completed" },
  { value: "5.5 MW", label: "Total Capacity Installed" },
  { value: "98%",    label: "Client Satisfaction Rate" },
  { value: "₹18 Cr", label: "Total Annual Savings Delivered" },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="overflow-hidden">

      {/* ── Page Hero ── */}
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="page-hero-overlay" />
        <div className="page-hero-gradient" />
        <div className="page-hero-content text-white">
          <p className="section-tag text-[#FBBF24]">Project Gallery</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
            Solar Projects with Measurable<br className="hidden md:block" /> Impact and Premium Execution
          </h1>
          <p className="text-lg text-[#CBD5E1] max-w-xl leading-8">
            Browse real before & after installations across residential, commercial and industrial categories — each with capacity and savings details.
          </p>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="bg-[#FBBF24] py-8 px-6 md:px-[6%]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-black text-[#0F172A]" style={{ fontFamily: "Poppins, sans-serif" }}>{value}</p>
              <p className="text-xs font-medium text-[#0F172A]/60 uppercase tracking-[1px]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Filter + Grid ── */}
      <section className="py-20 md:py-28 px-6 md:px-[6%]">
        <div className="max-w-[1300px] mx-auto">

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  filter === cat
                    ? "bg-[#FBBF24] text-[#0F172A] border-[#FBBF24] shadow-[0_4px_16px_rgba(251,191,36,.35)]"
                    : "border-[#E2E8F0] bg-white text-[#475569] hover:border-[#FBBF24]/50 hover:text-[#0F172A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project cards */}
          <div className="grid gap-8 xl:grid-cols-2">
            {filtered.map((project, i) => (
              <article
                key={project.id}
                className={`card overflow-hidden card-hover`}
              >
                {/* Before / After images */}
                <div className="grid sm:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden h-60">
                    <img
                      src={project.before}
                      alt={`${project.title} before`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <span className="before-badge">Before</span>
                  </div>
                  <div className="relative overflow-hidden h-60">
                    <img
                      src={project.after}
                      alt={`${project.title} after`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <span className="after-badge">After</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-xs text-[#94A3B8] mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#FBBF24]" /> {project.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Zap size={13} className="text-[#FBBF24]" /> {project.capacity}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 size={13} className="text-[#FBBF24]" /> {project.date}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: "Poppins, sans-serif" }}>
                      {project.title}
                    </h2>
                    <span className="flex-shrink-0 rounded-full bg-[#FBBF24]/10 px-3 py-1 text-xs font-bold text-[#0F172A] uppercase tracking-[1px]">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-[#475569] leading-6 mb-4">{project.highlight}</p>

                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#E2E8F0]">
                    <div className="flex items-center gap-2">
                      <TrendingUp size={16} className="text-[#16A34A]" />
                      <span className="text-sm font-bold text-[#16A34A]">{project.savings}</span>
                      <span className="text-xs text-[#94A3B8]">annual savings</span>
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] hover:text-[#F59E0B] transition-colors">
                      Get similar <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 md:px-[6%] bg-[#0F172A]">
        <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Want a Project Like This?
          </h2>
          <p className="text-[#94A3B8] mb-8 max-w-lg mx-auto">
            Get a free consultation and custom quote for your property. Our engineers will design the perfect solar system for you.
          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
