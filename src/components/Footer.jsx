import React from "react";
import { Link } from "react-router-dom";
import { Sun, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const navLinks = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Pricing",  to: "/pricing" },
  { label: "Projects", to: "/projects" },
  { label: "FAQ",      to: "/faq" },
  { label: "Blog",     to: "/blog" },
  { label: "Contact",  to: "/contact" },
];

const socials = [
  { icon: Facebook,  href: "#", label: "Facebook",  color: "#1877F2" },
  { icon: Instagram, href: "#", label: "Instagram", color: "#E1306C" },
  { icon: Linkedin,  href: "#", label: "LinkedIn",  color: "#0A66C2" },
  { icon: Youtube,   href: "#", label: "YouTube",   color: "#FF0000" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-[1300px] px-6 md:px-10 pt-12 pb-8 grid gap-10 md:grid-cols-[1.6fr_1fr_1.2fr]">

        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
            <div className="h-10 w-10 rounded-xl bg-[#FBBF24] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Sun size={18} className="text-[#0F172A]" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <p className="text-[9px] uppercase tracking-[2px] text-white/40 font-semibold">DSB Solar</p>
              <p className="text-[15px] font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>Premium Solar</p>
            </div>
          </Link>

          <p className="text-sm text-white/50 leading-6 mb-5 max-w-[260px]">
            Premium solar installations for homes, businesses and industries across Rajasthan.
          </p>

          <div className="flex items-center gap-2.5">
            {socials.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-white/55 transition-all duration-200"
                style={{ "--brand": color }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = color;
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "";
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.color = "";
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Links — 2-column grid */}
        <div>
          <p className="text-[10px] uppercase tracking-[2.5px] text-[#FBBF24] font-bold mb-4">Quick Links</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] uppercase tracking-[2.5px] text-[#FBBF24] font-bold mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-white/55">
            <li>
              <a href="tel:+919462982929" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone size={13} className="text-[#FBBF24] flex-shrink-0" />
                +91 94629 82929
              </a>
            </li>
            <li>
              <a href="mailto:hello@dsbsolar.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail size={13} className="text-[#FBBF24] flex-shrink-0" />
                hello@dsbsolar.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={13} className="text-[#FBBF24] flex-shrink-0 mt-0.5" />
              <span className="leading-5">Y67, Sudarshana Nagar,<br />Bikaner, Rajasthan 334001</span>
            </li>
            <li className="text-white/35 text-xs pt-1">
              {/* Mon–Sat: 9 AM – 7 PM &nbsp;|&nbsp; Sun: By appointment */}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-[1300px] px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>© 2026 DSB Solar. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
