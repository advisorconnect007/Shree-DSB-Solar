import React from "react";
import { Sun, Phone, MessageCircle, MapPin } from "lucide-react";

const services = ["Solar Installation", "Panel Washing", "Maintenance AMC", "Battery Storage", "Solar Consulting"];
const quickLinks = [
  { label: "Price Calculator", id: "calculator" },
  { label: "Pricing", id: "pricing" },
  { label: "Reviews", id: "testimonials" },
  { label: "Why Choose Us", id: "why" },
  { label: "Get Free Quote", id: "contact" },
];

export default function Footer({ onNav }) {
  return (
    <footer className="bg-[#0d1e3a] text-white/50 pt-16 pb-7 px-6 md:px-[6%]">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <Sun size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-extrabold text-white tracking-tight">Shree DSB Solar</span>
          </div>
          <p className="text-sm leading-[1.85] text-white/40">Bikaner's trusted solar energy partner. Providing clean, affordable solar solutions for over a decade across Rajasthan.</p>
          <div className="flex flex-col gap-2.5 mt-5">
            <a href="tel:9462982929" className="text-sm text-white/45 hover:text-blue-300 flex items-center gap-2.5 transition-colors">
              <Phone size={13} className="text-amber-400 flex-shrink-0" />+91 9462982929
            </a>
            <a href="https://wa.me/919462982929" target="_blank" rel="noreferrer" className="text-sm text-white/45 hover:text-blue-300 flex items-center gap-2.5 transition-colors">
              <MessageCircle size={13} className="text-amber-400 flex-shrink-0" />WhatsApp Us
            </a>
            <div className="text-sm text-white/45 flex items-center gap-2.5">
              <MapPin size={13} className="text-amber-400 flex-shrink-0" />Y67, Sudarshana Nagar, Bikaner 334001
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-white/75 mb-5">Services</h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s}><button onClick={() => onNav("services")} className="text-sm text-white/40 hover:text-white/90 transition-colors block">{s}</button></li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-white/75 mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map(({ label, id }) => (
              <li key={id}><button onClick={() => onNav(id)} className="text-sm text-white/40 hover:text-white/90 transition-colors block">{label}</button></li>
            ))}
            <li><a href="tel:9462982929" className="text-sm text-white/40 hover:text-white/90 transition-colors block">Call Us Now</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/6 pt-6 flex flex-wrap justify-between gap-3 text-xs text-white/30">
        <span>© 2025 Shree DSB Solar, Bikaner. All rights reserved.</span>
        <span>Y67, Sudarshana Nagar, Bikaner, Rajasthan 334001</span>
      </div>
    </footer>
  );
}
