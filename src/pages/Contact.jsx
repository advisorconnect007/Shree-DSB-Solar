import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone, Mail, MapPin, Clock, Send, ShieldCheck,
  Facebook, Instagram, Linkedin, Youtube, CheckCircle2
} from "lucide-react";
import useReveal from "../components/useReveal";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 94629 82929",
    href: "tel:+919462982929",
    color: "#16A34A",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "hello@dsbsolar.com",
    href: "mailto:hello@dsbsolar.com",
    color: "#3B82F6",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "Y67, Sudarshana Nagar, Bikaner, Rajasthan 334001",
    href: null,
    color: "#F59E0B",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Sat: 9 AM – 7 PM  |  Sunday: By appointment",
    href: null,
    color: "#8B5CF6",
  },
];

// ── Google Sheet se connect karne ke liye yahan URL paste karo ──────────────
// Steps: google-apps-script.gs file deploy karo → Web App URL copy karo → yahan paste karo
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxXBGLoZBZQkYQR-zJGnie8sjYB9-naISl_U9qOOEEIOmQKJwwZgrZ0KyaqNyJABhc/exec";

const services = [
  "Residential Solar Installation",
  "Commercial Solar Installation",
  "Industrial Solar Installation",
  "Solar Battery Storage",
  "Solar Maintenance & AMC",
  "Solar Consultation",
  "Other",
];

const socials = [
  { icon: Facebook,  href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin,  href: "#", label: "LinkedIn" },
  { icon: Youtube,   href: "#", label: "YouTube" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  const handle = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submitForm = async () => {
    if (!form.name || !form.phone) return;
    setLoading(true);
    setError("");

    if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL === "APNA_WEB_APP_URL_YAHAN_PASTE_KARO") {
      // URL set nahi hai — direct success dikhao (dev mode fallback)
      setTimeout(() => { setLoading(false); setSubmitted(true); }, 800);
      return;
    }

    try {
      await fetch(APPS_SCRIPT_URL, {
        method:  "POST",
        mode:    "no-cors",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          name:    form.name.trim(),
          phone:   form.phone.trim(),
          email:   form.email.trim(),
          service: form.service,
          message: form.message.trim(),
        }),
      });
      setSubmitted(true);
    } catch {
      setError("Network error. Kripya dobara try karein ya seedha call karein.");
    } finally {
      setLoading(false);
    }
  };

  useReveal();

  return (
    <div className="overflow-hidden">

      {/* ── Page Hero ── */}
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="page-hero-overlay" />
        <div className="page-hero-gradient" />
        <div className="page-hero-content text-white">
          <p className="section-tag text-[#FBBF24]">Contact Us</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
            Connect with Our Solar Specialists<br className="hidden md:block" /> for a Premium Proposal
          </h1>
          <p className="text-lg text-[#CBD5E1] max-w-xl leading-8">
            Send us a message or reach out directly to arrange a free consultation and site survey. We respond within 24 hours.
          </p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <section className="py-20 md:py-28 px-6 md:px-[6%] bg-[#F8FAFC]">
        <div className="max-w-[1300px] mx-auto grid gap-10 lg:grid-cols-[1fr_1.1fr] items-start">

          {/* Left: Contact info */}
          <div className="space-y-5">
            <div className="reveal">
              <p className="section-tag">Get in Touch</p>
              <h2 className="section-heading text-[#0F172A]">We're Here to Help</h2>
              <p className="section-desc mb-6">
                Whether you have a question about pricing, subsidies, installation or just want to explore your options — our team is ready.
              </p>
            </div>

            {/* Detail cards */}
            {contactDetails.map(({ icon: Icon, label, value, href, color }) => (
              <div key={label} className="reveal card p-6 flex items-start gap-5 card-hover">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}15`, color }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[2px] font-bold mb-1" style={{ color }}>
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-base font-semibold text-[#0F172A] hover:text-[#F59E0B] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-base font-semibold text-[#0F172A]">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="reveal card p-6">
              <p className="text-xs uppercase tracking-[2px] text-[#F59E0B] font-bold mb-4">Follow Us</p>
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:bg-[#FBBF24] hover:text-[#0F172A] hover:border-[#FBBF24] transition-all"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Security note */}
            <div className="reveal flex items-center gap-3 text-sm text-[#475569] px-2">
              <ShieldCheck size={18} className="text-[#16A34A] flex-shrink-0" />
              Your information is secure and used only to respond to your inquiry. We never share your data.
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="reveal card p-8 md:p-10 delay-200">
            {submitted ? (
              <div className="py-20 text-center">
                <div className="w-20 h-20 rounded-full bg-[#16A34A]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-[#16A34A]" />
                </div>
                <h2 className="text-3xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Message Sent!
                </h2>
                <p className="text-[#475569] leading-7 mb-8">
                  We've received your request. One of our solar consultants will contact you within 24 hours to schedule your free consultation.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                  className="btn-outline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs uppercase tracking-[2px] text-[#F59E0B] font-bold mb-6">Send a Message</p>

                <div className="grid gap-5">
                  {/* Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-sm font-semibold text-[#0F172A] mb-2 block">Full Name *</span>
                      <input
                        type="text"
                        value={form.name}
                        onChange={handle("name")}
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0F172A] outline-none transition"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-[#0F172A] mb-2 block">Phone Number *</span>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={handle("phone")}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0F172A] outline-none transition"
                      />
                    </label>
                  </div>

                  {/* Email */}
                  <label className="block">
                    <span className="text-sm font-semibold text-[#0F172A] mb-2 block">Email Address</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={handle("email")}
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0F172A] outline-none transition"
                    />
                  </label>

                  {/* Service dropdown */}
                  <label className="block">
                    <span className="text-sm font-semibold text-[#0F172A] mb-2 block">Service Interested In</span>
                    <select
                      value={form.service}
                      onChange={handle("service")}
                      className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#475569] outline-none transition appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </label>

                  {/* Message */}
                  <label className="block">
                    <span className="text-sm font-semibold text-[#0F172A] mb-2 block">Message</span>
                    <textarea
                      value={form.message}
                      onChange={handle("message")}
                      rows={4}
                      placeholder="Tell us about your project, location, approximate size or any questions..."
                      className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0F172A] outline-none transition resize-none"
                    />
                  </label>
                </div>

                <button
                  onClick={submitForm}
                  disabled={loading || !form.name || !form.phone}
                  className="btn-primary w-full mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <><Send size={16} /> Send Inquiry</>
                  )}
                </button>

                {error && (
                  <p className="text-sm text-red-500 text-center mt-3 bg-red-50 rounded-xl px-4 py-3 border border-red-100">
                    ⚠ {error}
                  </p>
                )}

                <p className="text-xs text-center text-[#94A3B8] mt-4">
                  By submitting, you agree to be contacted by DSB Solar regarding your inquiry.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── Google Map ── */}
      <section className="px-6 md:px-[6%] pb-20 md:pb-28">
        <div className="max-w-[1300px] mx-auto">
          <div className="reveal rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm h-[420px] relative">
            <iframe
              title="DSB Solar — Y67 Sudarshana Nagar Bikaner"
              src="https://maps.google.com/maps?q=Y67%2C+Sudarshana+Nagar%2C+Bikaner%2C+Rajasthan+334001&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Address overlay badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-max max-w-[90vw] bg-white rounded-2xl shadow-[0_8px_32px_rgba(15,23,42,.18)] px-5 py-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#FBBF24]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={16} className="text-[#F59E0B]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#F59E0B] uppercase tracking-[1.5px] mb-0.5">DSB Solar Office</p>
                <p className="text-sm font-semibold text-[#0F172A] leading-snug">
                  Y67, Sudarshana Nagar, Bikaner<br />Rajasthan — 334001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
