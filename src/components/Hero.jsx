import React, { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const bullets = [
  "₹78,000 govt subsidy available",
  "25-year performance warranty",
  "Free site survey & consultation",
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0F172A] flex items-center overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Gradient overlay — strong left, fade right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/88 to-[#0F172A]/40" />

      {/* Decorative gold orb */}
      <div className="orb absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-[#FBBF24]/8 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-10 pt-28 pb-20">
        <div className={`max-w-2xl transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          {/* Badge */}
          <div className="chip-pulse inline-flex items-center gap-2.5 rounded-full border border-[#FBBF24]/25 bg-[#FBBF24]/12 backdrop-blur-sm px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse flex-shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#FBBF24]">
              India's Most Trusted Solar Energy Partner
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.06] tracking-[-0.02em] text-white mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Power Your Future
            <br />
            with <span className="text-[#FBBF24]">Solar Energy</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-[#CBD5E1] leading-8 mb-8 max-w-lg">
            Premium solar installations for homes, businesses and industries across Rajasthan.
            Save up to 90% on your electricity bills.
          </p>

          {/* Bullet points */}
          <ul className="space-y-3 mb-10">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-[#CBD5E1] text-sm">
                <CheckCircle2 size={17} className="text-[#FBBF24] flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="btn-primary text-sm px-8 py-4 rounded-full shadow-[0_12px_40px_rgba(251,191,36,.45)]"
            >
              Get Free Consultation <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+919462982929"
              className="btn-ghost-white text-sm px-8 py-4 rounded-full"
            >
              <Phone size={16} /> +91 94629 82929
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
    </section>
  );
}
