import React, { useState } from "react";
import { CalendarDays, Clock, ArrowRight, Tag } from "lucide-react";
import useReveal from "../components/useReveal";

const posts = [
  {
    id: 1,
    title: "Top 5 Solar Upgrades for Luxury Homes in 2025",
    excerpt:
      "How premium Tier-1 modules, smart hybrid inverters and app-based monitoring are unlocking better yield and stronger energy independence for modern homeowners.",
    date: "June 12, 2025",
    readTime: "5 min read",
    tag: "Residential",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    tagColor: "#3B82F6",
  },
  {
    id: 2,
    title: "The Business Case for Commercial Solar: ROI & Payback in Detail",
    excerpt:
      "A practical guide to calculating ROI, accessing subsidies, financing with zero-cost EMI and building a reliable power infrastructure for enterprise facilities.",
    date: "May 24, 2025",
    readTime: "7 min read",
    tag: "Commercial",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    tagColor: "#F59E0B",
  },
  {
    id: 3,
    title: "Why Battery Backup is Essential for Every Solar Owner in 2025",
    excerpt:
      "Managing power outages, storing surplus solar energy and maximizing daily savings with smart lithium battery systems — the complete guide for home and business owners.",
    date: "April 18, 2025",
    readTime: "6 min read",
    tag: "Battery",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    tagColor: "#8B5CF6",
  },
  {
    id: 4,
    title: "PM Surya Ghar Yojana: Complete Guide to Claiming Your ₹78,000 Subsidy",
    excerpt:
      "Step-by-step walkthrough of the government's flagship solar subsidy scheme — eligibility criteria, documents required, application portal and how DSB Solar manages the entire process for you.",
    date: "March 30, 2025",
    readTime: "8 min read",
    tag: "Subsidy",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
    tagColor: "#16A34A",
  },
  {
    id: 5,
    title: "On-Grid vs Off-Grid vs Hybrid: Which Solar System is Right for You?",
    excerpt:
      "A clear, jargon-free comparison of all three solar system types — including cost differences, best use cases, battery requirements and payback periods for Rajasthan conditions.",
    date: "February 15, 2025",
    readTime: "6 min read",
    tag: "Technology",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
    tagColor: "#EF4444",
  },
  {
    id: 6,
    title: "How to Maintain Your Solar Panels for Maximum Performance",
    excerpt:
      "Expert tips on cleaning frequency, performance monitoring, inverter health checks and when to call for professional maintenance — to ensure your system delivers peak output for 25+ years.",
    date: "January 8, 2025",
    readTime: "4 min read",
    tag: "Maintenance",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
    tagColor: "#06B6D4",
  },
];

const allTags = ["All", "Residential", "Commercial", "Battery", "Subsidy", "Technology", "Maintenance"];

export default function Blog() {
  const [activeTag, setActiveTag] = useState("All");
  const filtered = activeTag === "All" ? posts : posts.filter((p) => p.tag === activeTag);

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
        <div className="page-hero-content text-white">
          <p className="section-tag text-[#FBBF24]">Solar Insights</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
            Industry Stories and Expert Guidance<br className="hidden md:block" /> for Clean Energy Decisions
          </h1>
          <p className="text-lg text-[#CBD5E1] max-w-xl leading-8">
            Stay informed with practical articles on solar design, subsidy strategy, battery technology and long-term savings.
          </p>
        </div>
      </div>

      {/* ── Blog Grid ── */}
      <section className="py-20 md:py-28 px-6 md:px-[6%]">
        <div className="max-w-[1300px] mx-auto">

          {/* Tag filter */}
          <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  activeTag === tag
                    ? "bg-[#FBBF24] text-[#0F172A] border-[#FBBF24]"
                    : "bg-white border-[#E2E8F0] text-[#475569] hover:border-[#FBBF24]/40"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Featured post (first one in filtered, full width) */}
          {filtered.length > 0 && (
            <article className="reveal card card-hover overflow-hidden mb-8">
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                <div className="overflow-hidden h-72 lg:h-auto">
                  <img
                    src={filtered[0].image}
                    alt={filtered[0].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[1px] text-white"
                      style={{ backgroundColor: filtered[0].tagColor }}
                    >
                      <Tag size={11} /> {filtered[0].tag}
                    </span>
                    <span className="text-xs text-[#94A3B8] font-medium">Featured</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4 leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {filtered[0].title}
                  </h2>
                  <p className="text-[#475569] leading-7 mb-6">{filtered[0].excerpt}</p>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-xs text-[#94A3B8]">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={13} /> {filtered[0].date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={13} /> {filtered[0].readTime}
                      </span>
                    </div>
                    <button className="btn-primary text-xs px-5 py-2.5 rounded-full">
                      Read Article <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Rest of articles */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(1).map((post, i) => (
              <article
                key={post.id}
                className={`reveal card card-hover overflow-hidden delay-${(i % 3 + 1) * 100}`}
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[1px] text-white"
                      style={{ backgroundColor: post.tagColor }}
                    >
                      <Tag size={11} /> {post.tag}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-[#0F172A] mb-3 leading-snug" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#475569] leading-6 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                    <div className="flex items-center gap-3 text-xs text-[#94A3B8]">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays size={12} /> {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                    <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] hover:text-[#F59E0B] transition-colors">
                      Read <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="py-16 px-6 md:px-[6%] bg-[#F8FAFC]">
        <div className="max-w-[1300px] mx-auto">
          <div className="reveal card p-10 md:p-14 text-center max-w-2xl mx-auto">
            <p className="section-tag justify-center">Stay Updated</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Subscribe to Solar Insights
            </h2>
            <p className="text-[#475569] mb-8">
              Get the latest solar news, subsidy updates and expert tips delivered to your inbox — no spam, ever.
            </p>
            <form className="flex gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#0F172A] outline-none"
              />
              <button type="submit" className="btn-primary rounded-2xl whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
