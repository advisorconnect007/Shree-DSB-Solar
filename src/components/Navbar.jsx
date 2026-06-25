import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Sun, Menu, X, Phone, ChevronDown,
  Home as HomeIcon, Building2, Factory, Wrench, BatteryCharging, MessageCircle
} from "lucide-react";

const serviceDropdown = [
  { label: "Residential Solar", to: "/services", icon: HomeIcon,       desc: "For homes, villas & apartments" },
  { label: "Commercial Solar",  to: "/services", icon: Building2,      desc: "For offices, retail & hospitality" },
  { label: "Industrial Solar",  to: "/services", icon: Factory,        desc: "For factories & warehouses" },
  { label: "Solar Maintenance", to: "/services", icon: Wrench,         desc: "AMC, cleaning & support" },
  { label: "Solar Battery",     to: "/services", icon: BatteryCharging, desc: "Backup & hybrid storage" },
  { label: "Solar Consultation",to: "/services", icon: MessageCircle,  desc: "Free expert advisory" },
];

const mainLinks = [
  { label: "Home",     to: "/",        end: true },
  { label: "About",    to: "/about",   end: false },
  { label: "Pricing",  to: "/pricing", end: false },
  { label: "Projects", to: "/projects",end: false },
  { label: "FAQ",      to: "/faq",     end: false },
  { label: "Contact",  to: "/contact", end: false },
];

export default function Navbar() {
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [dropOpen,     setDropOpen]     = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const dropRef = useRef(null);

  /* ── Scroll detection ── */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── Close dropdown on outside click ── */
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMobile = () => { setMenuOpen(false); setMobileServices(false); };

  const isServicesActive = ["/services", "/solutions"].some((p) =>
    window.location.pathname.startsWith(p)
  );

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white shadow-[0_4px_24px_rgba(15,23,42,.10)] border-b border-[#E2E8F0]"
            : "bg-white/90 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex max-w-[1300px] items-center justify-between px-5 md:px-10 h-[70px]">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 flex-shrink-0 group" onClick={closeMobile}>
            <div className="h-10 w-10 rounded-xl bg-[#FBBF24] flex items-center justify-center shadow-[0_4px_16px_rgba(251,191,36,.4)] group-hover:scale-105 transition-transform">
              <Sun size={19} className="text-[#0F172A]" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <p className="text-[9px] uppercase tracking-[2.5px] text-[#94A3B8] font-semibold">DSB Solar</p>
              <p className="text-[15px] font-bold text-[#0F172A]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Premium Solar
              </p>
            </div>
          </NavLink>

          {/* ── Desktop nav ── */}
          <div className="hidden xl:flex items-center gap-1">

            {/* Home */}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `relative px-3 py-2 text-[13.5px] font-medium rounded-lg transition-colors ${
                  isActive ? "text-[#F59E0B]" : "text-[#475569] hover:text-[#0F172A]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && <ActiveBar />}
                </>
              )}
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative px-3 py-2 text-[13.5px] font-medium rounded-lg transition-colors ${
                  isActive ? "text-[#F59E0B]" : "text-[#475569] hover:text-[#0F172A]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  About
                  {isActive && <ActiveBar />}
                </>
              )}
            </NavLink>

            {/* Services dropdown */}
            <div ref={dropRef} className="relative">
              <button
                onClick={() => setDropOpen(!dropOpen)}
                className={`relative flex items-center gap-1 px-3 py-2 text-[13.5px] font-medium rounded-lg transition-colors ${
                  isServicesActive || dropOpen ? "text-[#F59E0B]" : "text-[#475569] hover:text-[#0F172A]"
                }`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`} />
                {isServicesActive && <ActiveBar />}
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_20px_60px_rgba(15,23,42,.14)] overflow-hidden transition-all duration-200 origin-top ${
                  dropOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="p-3 grid grid-cols-2 gap-1.5">
                  {serviceDropdown.map(({ label, to, icon: Icon, desc }) => (
                    <Link
                      key={label}
                      to={to}
                      onClick={() => setDropOpen(false)}
                      className="flex items-start gap-3.5 rounded-xl px-3.5 py-3 hover:bg-[#F8FAFC] transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#FBBF24]/10 text-[#F59E0B] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FBBF24]/20 transition-colors mt-0.5">
                        <Icon size={17} />
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-[#0F172A] group-hover:text-[#F59E0B] transition-colors">{label}</p>
                        <p className="text-[11.5px] text-[#94A3B8] mt-0.5">{desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-[#F1F5F9] px-4 py-3 bg-[#F8FAFC] flex items-center justify-between">
                  <p className="text-xs text-[#94A3B8]">Need help choosing a service?</p>
                  <Link
                    to="/contact"
                    onClick={() => setDropOpen(false)}
                    className="text-xs font-semibold text-[#F59E0B] hover:text-[#0F172A] transition-colors"
                  >
                    Get Free Consultation →
                  </Link>
                </div>
              </div>
            </div>

            {/* Rest of links */}
            {["Pricing", "Projects", "FAQ", "Contact"].map((label) => {
              const to = `/${label.toLowerCase()}`;
              return (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-[13.5px] font-medium rounded-lg transition-colors ${
                      isActive ? "text-[#F59E0B]" : "text-[#475569] hover:text-[#0F172A]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && <ActiveBar />}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:+919462982929"
              className="flex items-center gap-2 text-[13px] font-medium text-[#475569] hover:text-[#0F172A] transition-colors"
            >
              <Phone size={14} className="text-[#FBBF24]" />
              +91 94629 82929
            </a>
            <NavLink to="/contact" className="btn-primary text-[13px] px-5 py-2.5 rounded-full">
              Get Free Quote
            </NavLink>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#F8FAFC] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <X size={22} className="text-[#0F172A]" />
              : <Menu size={22} className="text-[#0F172A]" />
            }
          </button>
        </div>
      </nav>

      {/* ── Full-screen mobile menu ── */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: 70 }}
      >
        <div className="flex-1 overflow-y-auto px-5 py-6">

          {/* Main links */}
          <div className="space-y-1 mb-2">
            {mainLinks.map(({ label, to, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `block px-4 py-3.5 rounded-xl text-[15px] font-medium transition-colors ${
                    isActive
                      ? "bg-[#FBBF24]/10 text-[#F59E0B] font-semibold"
                      : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Mobile Services expandable */}
            <div>
              <button
                onClick={() => setMobileServices(!mobileServices)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-colors ${
                  mobileServices
                    ? "bg-[#FBBF24]/10 text-[#F59E0B]"
                    : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${mobileServices ? "rotate-180" : ""}`}
                />
              </button>

              {mobileServices && (
                <div className="mt-1 ml-4 space-y-0.5">
                  {serviceDropdown.map(({ label, to, icon: Icon }) => (
                    <Link
                      key={label}
                      to={to}
                      onClick={closeMobile}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#FBBF24]/10 text-[#F59E0B] flex items-center justify-center">
                        <Icon size={15} />
                      </div>
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile footer */}
        <div className="border-t border-[#E2E8F0] px-5 py-5 space-y-3">
          <a href="tel:+919462982929" className="flex items-center gap-2.5 text-sm text-[#475569]">
            <Phone size={16} className="text-[#FBBF24]" />
            +91 94629 82929
          </a>
          <NavLink to="/contact" onClick={closeMobile} className="btn-primary w-full justify-center">
            Get Free Quote
          </NavLink>
        </div>
      </div>
    </>
  );
}

function ActiveBar() {
  return (
    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#FBBF24]" />
  );
}
