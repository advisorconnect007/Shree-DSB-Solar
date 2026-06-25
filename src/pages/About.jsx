import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck, Sparkles, Users, Globe2,
  Target, Eye, ArrowRight, CheckCircle2
} from "lucide-react";
import useReveal from "../components/useReveal";

const values = [
  { icon: ShieldCheck, title: "Integrity",        desc: "Transparent proposals, honest assessments and ethical project delivery every time." },
  { icon: Sparkles,    title: "Innovation",       desc: "We design intelligent systems that reduce energy costs and support clean power goals." },
  { icon: Users,       title: "Customer First",   desc: "Dedicated project managers keep every client informed and every system optimized." },
  { icon: Globe2,      title: "Quality",          desc: "Premium components, rigorous inspection and a commitment to long-term performance." },
];

const timeline = [
  { year: "2014", title: "Founded in Bikaner",  detail: "Started with residential solar installations and a passion for clean, affordable energy." },
  { year: "2017", title: "Commercial Growth",   detail: "Expanded to commercial rooftop and industrial solar projects across Rajasthan." },
  { year: "2020", title: "Warranty Leader",     detail: "Introduced industry-leading 25-year panel and workmanship guarantees for every system." },
  { year: "2022", title: "500+ Projects",       detail: "Crossed 500 successful installations with 98% customer satisfaction score." },
  { year: "2024", title: "Trusted Partner",     detail: "Serving clients nationwide with turnkey solutions, subsidy guidance and 24/7 support." },
];

const achievements = [
  { value: "5,500+", label: "kW Installed Capacity" },
  { value: "98%",    label: "Customer Satisfaction" },
  { value: "25 Yrs", label: "Panel Guarantee" },
  { value: "7 Days", label: "Average Installation" },
];

const team = [
  {
    name: "Dinesh Sharma",
    role: "Founder & CEO",
    desc: "12+ years in renewable energy, MNRE-certified solar expert.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Neha Joshi",
    role: "Lead Systems Engineer",
    desc: "IIT-trained engineer specializing in high-efficiency system design.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b2c0b14c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Rajiv Sharma",
    role: "Project Director",
    desc: "15 years overseeing commercial and industrial solar deployments.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
];

export default function About() {
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
        <div className="orb  absolute -top-20 right-0  w-80 h-80 rounded-full bg-[#FBBF24]/5 blur-3xl pointer-events-none" />
        <div className="page-hero-content text-white">
          <p className="section-tag text-[#FBBF24] mb-3">About DSB Solar</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
            A Premium Solar Company Built<br className="hidden md:block" /> for Modern Energy Ambitions
          </h1>
          <p className="text-lg text-[#CBD5E1] max-w-xl leading-8">
            We combine engineering excellence, high-quality equipment and customer-centered service to deliver solar systems that look premium, perform reliably and deliver long-term savings.
          </p>
        </div>
      </div>

      {/* ── Story + Mission + Vision ── */}
      <section className="py-20 md:py-28 px-6 md:px-[6%] bg-[#F8FAFC]">
        <div className="max-w-[1300px] mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">

          {/* Story */}
          <div className="reveal space-y-8">
            <div className="card p-10">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>Our Story</h2>
              <p className="text-[#475569] leading-8 mb-4">
                Founded in 2014 by renewable energy specialists in Bikaner, DSB Solar started with a simple mission: make premium solar accessible for homes, businesses and industries across Rajasthan.
              </p>
              <p className="text-[#475569] leading-8">
                Every project is designed with clean aesthetics, enduring value and seamless after-sales support. Over 12 years, we've grown from a local installer to one of Rajasthan's most trusted solar energy partners — serving clients from Bikaner to Jaipur, Udaipur, and beyond.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="card p-8">
                <Target size={24} className="text-[#FBBF24] mb-4" />
                <p className="text-xs uppercase tracking-[2px] text-[#F59E0B] font-bold mb-3">Our Mission</p>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Empower Clients with Clean Energy</h3>
                <p className="text-sm text-[#475569] leading-7">Deliver premium solar systems and guided subsidy support that help property owners switch confidently to sustainable energy.</p>
              </div>
              <div className="card p-8">
                <Eye size={24} className="text-[#FBBF24] mb-4" />
                <p className="text-xs uppercase tracking-[2px] text-[#F59E0B] font-bold mb-3">Our Vision</p>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Lead a Smarter Energy Future</h3>
                <p className="text-sm text-[#475569] leading-7">Build an ecosystem of renewable energy systems that reduce carbon footprint, strengthen reliability and reward every customer with genuine savings.</p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="reveal space-y-5 delay-200">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>Our Core Values</h2>
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-6 flex items-start gap-5 card-hover">
                <div className="feature-icon mb-0 flex-shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h3>
                  <p className="text-sm text-[#475569] leading-6">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="py-16 px-6 md:px-[6%] bg-[#FBBF24]">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map(({ value, label }) => (
              <div key={label} className="text-center p-6">
                <p className="text-3xl md:text-4xl font-black text-[#0F172A] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{value}</p>
                <p className="text-sm font-medium text-[#0F172A]/70 uppercase tracking-[1px]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 md:py-28 px-6 md:px-[6%]">
        <div className="max-w-[1300px] mx-auto">
          <div className="reveal text-center mb-14">
            <p className="section-tag justify-center">Our Journey</p>
            <h2 className="section-heading">Milestones that Shaped Our Growth</h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical connector line */}
            <div className="absolute left-[23px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#FBBF24] to-[#E2E8F0]" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`reveal flex gap-8 items-start delay-${(i + 1) * 100}`}
                >
                  {/* Year badge */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#FBBF24] flex items-center justify-center shadow-[0_4px_16px_rgba(251,191,36,.35)] z-10 relative">
                      <span className="text-[10px] font-black text-[#0F172A]">{item.year}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="card p-6 flex-1">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="text-xs font-bold uppercase tracking-[2px] text-[#FBBF24]">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{item.title}</h3>
                    <p className="text-sm text-[#475569] leading-6">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 md:py-28 px-6 md:px-[6%] bg-[#F8FAFC]">
        <div className="max-w-[1300px] mx-auto">
          <div className="reveal text-center mb-14">
            <p className="section-tag justify-center">Leadership Team</p>
            <h2 className="section-heading">The Experts Behind Every Installation</h2>
            <p className="section-desc max-w-xl mx-auto">
              Our certified professionals bring decades of combined experience in solar engineering, project management and customer service.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, i) => (
              <article
                key={member.name}
                className={`reveal card card-hover overflow-hidden delay-${(i + 1) * 100}`}
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{member.name}</h3>
                  <p className="text-sm font-semibold text-[#F59E0B] mb-3">{member.role}</p>
                  <p className="text-sm text-[#475569] leading-6">{member.desc}</p>
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
            Ready to Experience the DSB Solar Difference?
          </h2>
          <p className="text-[#94A3B8] mb-8 max-w-lg mx-auto">
            Connect with our team of certified solar specialists today and get a no-obligation site assessment.
          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            Speak to Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
