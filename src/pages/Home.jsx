import React from "react";
import { Link } from "react-router-dom";
import {
  Zap, ShieldCheck, Clock3, Wrench, ArrowRight, CheckCircle2,
  PhoneCall, Star, TrendingDown, IndianRupee, Leaf, Sun,
  Home as HomeIcon, Building2, Factory, BatteryCharging,
  MapPin, Users, Award
} from "lucide-react";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import useReveal from "../components/useReveal";

/* ─── Data ─────────────────────────────────────── */

const partners = [
  "MNRE Approved", "PM Surya Ghar", "ISO 9001:2015",
  "BIS Certified", "DISCOM Registered", "SECI Partner",
];

const whySolarItems = [
  {
    icon: TrendingDown,
    title: "Save Up to 90%",
    desc: "Drastically cut your monthly electricity bills with solar energy powering your property day and night.",
    color: "#16A34A",
  },
  {
    icon: IndianRupee,
    title: "₹78,000 Subsidy",
    desc: "Get up to ₹78,000 as government subsidy under PM Surya Ghar Yojana — we manage the entire process for free.",
    color: "#F59E0B",
  },
  {
    icon: ShieldCheck,
    title: "25-Year Warranty",
    desc: "Every installation comes with industry-leading 25-year panel performance warranty and 5-year workmanship guarantee.",
    color: "#3B82F6",
  },
  {
    icon: Leaf,
    title: "Zero Carbon Footprint",
    desc: "Switch to 100% clean energy and contribute to a sustainable future while earning green energy credits.",
    color: "#16A34A",
  },
  {
    icon: TrendingDown,
    title: "Increase Property Value",
    desc: "Homes and commercial properties with solar installations attract higher resale values and premium buyers.",
    color: "#8B5CF6",
  },
  {
    icon: Zap,
    title: "Energy Independence",
    desc: "Protect yourself from rising electricity rates with your own private power plant generating free energy for decades.",
    color: "#EF4444",
  },
];

const services = [
  {
    icon: HomeIcon,
    title: "Residential Solar",
    desc: "Modern rooftop solar for luxury homes, villas and gated communities. Custom design, smart monitoring and subsidy support.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80",
    color: "#3B82F6",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    desc: "Scalable solar systems for retail, offices and hospitality. Cut operating costs dramatically with turnkey installation.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    color: "#F59E0B",
  },
  {
    icon: Factory,
    title: "Industrial Solar",
    desc: "High-capacity power for factories, warehouses and manufacturing. Maximum uptime with dedicated O&M plans.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80",
    color: "#8B5CF6",
  },
  {
    icon: BatteryCharging,
    title: "Solar Battery Storage",
    desc: "Smart battery backup for homes and businesses. No more power cuts — store solar energy and use it anytime.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80",
    color: "#16A34A",
  },
];

const features = [
  { icon: Zap,        title: "High Efficiency",   desc: "Premium Tier-1 modules and smart inverters for maximum yield every day." },
  { icon: ShieldCheck, title: "25-Year Warranty",  desc: "Comprehensive warranty on panels, mounting and workmanship for every project." },
  { icon: Clock3,     title: "7-Day Installation", desc: "Fast, professional installation completed in as little as 7 working days." },
  { icon: Wrench,     title: "Certified Engineers", desc: "NABL-approved, MNRE-certified installation teams with quality checks at every stage." },
];

const process = [
  { step: "01", title: "Free Consultation",    desc: "Personalized energy audit, roof analysis and subsidy eligibility check at no cost." },
  { step: "02", title: "Site Survey",          desc: "Certified engineer evaluates your roof, load profile and optimal panel placement." },
  { step: "03", title: "Installation",         desc: "Clean, safe installation with premium panels, smart inverters and professional electrical integration." },
  { step: "04", title: "Ongoing Maintenance",  desc: "24/7 monitoring, preventive care and dedicated support for peak performance always." },
];

const stats = [
  { icon: Users,  value: "1,200+",  label: "Happy Customers" },
  { icon: Award,  value: "450+",    label: "Projects Completed" },
  { icon: Sun,    value: "12+",     label: "Years of Experience" },
  { icon: Zap,    value: "18 GWh",  label: "Energy Generated" },
];

const projects = [
  {
    title: "Luxury Rooftop System",
    location: "Udaipur, Rajasthan",
    category: "Residential",
    capacity: "8 kW",
    savings: "₹1.8L / year",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Smart Commercial Array",
    location: "Jaipur, Rajasthan",
    category: "Commercial",
    capacity: "25 kW",
    savings: "₹5.2L / year",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Industrial Solar Campus",
    location: "Jodhpur, Rajasthan",
    category: "Industrial",
    capacity: "100 kW",
    savings: "₹22L / year",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
  },
];

/* ─── Main component ────────────────────────────── */
export default function Home() {
  useReveal();

  return (
    <div className="overflow-hidden">

      {/* ── 1. Hero ── */}
      <Hero />

      {/* ── 2. Trusted Partners strip ── */}
      <section className="bg-white border-b border-[#E2E8F0] py-5 px-6 md:px-10">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <p className="text-xs uppercase tracking-[2px] text-[#94A3B8] font-semibold whitespace-nowrap flex-shrink-0">
              Certified & Approved by
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {partners.map((p) => (
                <span
                  key={p}
                  className="text-xs font-bold text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full px-4 py-1.5 whitespace-nowrap"
                >
                  ✓ {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Why Choose Solar ── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F8FAFC]">
        <div className="max-w-[1300px] mx-auto">
          <div className="reveal text-center mb-14 max-w-2xl mx-auto">
            <p className="section-tag justify-center">Why Switch to Solar</p>
            <h2 className="section-heading">Solar Energy: Smart for Your Wallet,<br className="hidden md:block" /> Good for the Planet</h2>
            <p className="section-desc max-w-xl mx-auto">
              Millions of homeowners across India are switching to solar — and saving thousands every year. Here's why you should too.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whySolarItems.map((item, i) => (
              <article
                key={item.title}
                className={`reveal card card-hover p-7 flex items-start gap-5 delay-${(i % 3 + 1) * 100}`}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#0F172A] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-6">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Our Services ── */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1300px] mx-auto">
          <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="section-tag">Our Services</p>
              <h2 className="section-heading mb-0">Solar Solutions for Every Need</h2>
            </div>
            <Link to="/services" className="btn-outline whitespace-nowrap self-start">
              View All Services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <article
                key={s.title}
                className={`reveal card card-hover overflow-hidden group delay-${(i + 1) * 100}`}
              >
                <div className="relative overflow-hidden h-44">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div
                    className="absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${s.color}25`, color: s.color }}
                  >
                    <s.icon size={18} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[15px] font-bold text-[#0F172A] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-6 mb-4">{s.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F59E0B] hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Key Features / Benefits ── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#0F172A] relative overflow-hidden">
        <div className="orb  absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#FBBF24]/6 blur-3xl pointer-events-none" />
        <div className="orb2 absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1300px] mx-auto">
          <div className="reveal grid gap-12 lg:grid-cols-[1fr_1fr] items-center mb-16">
            <div className="text-white">
              <p className="section-tag text-[#FBBF24]">Why Choose DSB Solar</p>
              <h2 className="section-heading text-white mb-5">
                Premium Solar Engineering<br className="hidden md:block" /> You Can Trust
              </h2>
              <p className="text-[#94A3B8] leading-7 max-w-lg">
                We combine world-class equipment, certified engineering and a customer-first approach to deliver solar systems that perform flawlessly for 25+ years.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-white/8 bg-white/5 p-5 hover:border-[#FBBF24]/20 hover:bg-white/8 transition-all">
                  <Icon size={20} className="text-[#FBBF24] mb-3" />
                  <p className="text-sm font-bold text-white mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</p>
                  <p className="text-xs text-white/55 leading-5">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Why Choose Us (dark cards) ── */}
      <WhyUs />

      {/* ── 7. Installation Process ── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F8FAFC]">
        <div className="max-w-[1300px] mx-auto">
          <div className="reveal text-center mb-14">
            <p className="section-tag justify-center">Our Process</p>
            <h2 className="section-heading">From Consultation to Clean Energy in 4 Simple Steps</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, i) => (
              <div
                key={item.step}
                className={`reveal card p-8 relative overflow-hidden hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 delay-${(i + 1) * 100}`}
              >
                <span
                  className="absolute top-3 right-4 text-8xl font-black select-none leading-none pointer-events-none"
                  style={{ color: "#F8FAFC", fontFamily: "Poppins, sans-serif" }}
                >
                  {item.step}
                </span>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#FBBF24] text-[#0F172A] font-bold text-sm flex items-center justify-center mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {item.step}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0F172A] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-[#475569]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Statistics ── */}
      <section className="py-20 px-6 md:px-10 bg-[#FBBF24]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#0F172A]/10 flex items-center justify-center mx-auto mb-4">
                <Icon size={22} className="text-[#0F172A]" />
              </div>
              <p className="text-3xl md:text-4xl font-black text-[#0F172A] mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                {value}
              </p>
              <p className="text-sm font-medium text-[#0F172A]/65 uppercase tracking-[1px]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 9. Featured Projects ── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#F8FAFC]">
        <div className="max-w-[1300px] mx-auto">
          <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="section-tag">Featured Projects</p>
              <h2 className="section-heading mb-0">Real Installations, Real Savings</h2>
            </div>
            <Link to="/projects" className="btn-outline whitespace-nowrap self-start">
              View All Projects <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={`reveal card card-hover overflow-hidden group delay-${(i + 1) * 100}`}
              >
                <div className="overflow-hidden h-52 relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-[#FBBF24] px-3 py-1 text-[10px] font-bold text-[#0F172A] uppercase tracking-[1px]">
                    {p.category}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <span className="text-xs text-white/80 flex items-center gap-1">
                      <MapPin size={11} /> {p.location}
                    </span>
                    <span className="text-xs font-bold text-[#4ADE80]">{p.savings}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[15px] font-bold text-[#0F172A] mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mb-4">⚡ {p.capacity} system</p>
                  <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F172A] hover:text-[#F59E0B] transition-colors">
                    View Details <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Testimonials ── */}
      <Testimonials />

      {/* ── 11. CTA Banner ── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#0F172A] relative overflow-hidden">
        <div className="orb  absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FBBF24]/6 blur-3xl pointer-events-none" />
        <div className="orb2 absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1300px] mx-auto">
          <div className="reveal grid gap-10 lg:grid-cols-[1.4fr_0.6fr] items-center">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FBBF24" className="text-[#FBBF24]" />
                ))}
                <span className="text-sm text-[#94A3B8] ml-1">Rated 4.9/5 by 1,200+ customers</span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-5"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Ready to Switch to <span className="text-[#FBBF24]">Premium Solar?</span>
              </h2>
              <p className="text-[#94A3B8] leading-7 max-w-lg">
                Get a free site assessment, custom system design and savings estimate — all in one consultation. No commitment required.
              </p>
              <ul className="mt-6 space-y-2">
                {["Free site survey & energy audit", "Subsidy claim handled by us", "Installation in 7 working days"].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-[#CBD5E1]">
                    <CheckCircle2 size={15} className="text-[#16A34A] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Link to="/contact" className="btn-primary w-full">
                <PhoneCall size={17} /> Book Free Consultation
              </Link>
              <Link to="/pricing" className="btn-ghost-white w-full">
                View Pricing Packages
              </Link>
              <a
                href="tel:+919462982929"
                className="flex items-center justify-center gap-2 text-sm text-[#94A3B8] hover:text-white transition-colors"
              >
                <PhoneCall size={15} /> Call +91 94629 82929
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
