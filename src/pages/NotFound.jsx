import React from "react";
import { Link } from "react-router-dom";
import { Home, Phone, ArrowRight, Sun } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full text-center">

        {/* Logo */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#FBBF24] shadow-[0_16px_48px_rgba(251,191,36,.35)] mb-8">
          <Sun size={36} className="text-[#0F172A]" strokeWidth={2} />
        </div>

        {/* 404 number */}
        <p
          className="text-8xl md:text-9xl font-black text-[#E2E8F0] leading-none mb-4 select-none"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          404
        </p>

        {/* Message */}
        <p className="text-xs uppercase tracking-[2.5px] text-[#F59E0B] font-bold mb-4">
          Page Not Found
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
          Oops! This page doesn't exist
        </h1>
        <p className="text-[#475569] leading-7 mb-10 max-w-sm mx-auto">
          The page you're looking for has been moved or doesn't exist. Return to the homepage to explore our premium solar solutions.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary inline-flex">
            <Home size={16} /> Back to Home
          </Link>
          <a href="tel:+919462982929" className="btn-secondary inline-flex">
            <Phone size={16} /> Call Us Now
          </a>
        </div>

        {/* Quick nav links */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
          <p className="text-xs uppercase tracking-[2px] text-[#94A3B8] font-bold mb-5">Quick Links</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Services",  to: "/services" },
              { label: "Pricing",   to: "/pricing" },
              { label: "Projects",  to: "/projects" },
              { label: "About",     to: "/about" },
              { label: "Contact",   to: "/contact" },
            ].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#475569] hover:border-[#FBBF24] hover:text-[#0F172A] transition-all"
              >
                {label} <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
