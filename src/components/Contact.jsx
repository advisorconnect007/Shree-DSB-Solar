import React, { useState } from "react";
import { Phone, MapPin, Clock, ExternalLink, User, Sun, Send, Lock } from "lucide-react";
import useReveal from "./useReveal";

const SHEETS_URL = "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE";

export default function Contact() {
  useReveal();
  const [form, setForm] = useState({ name: "", phone: "", service: "", location: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = () => {
    if (!form.name || !form.phone || !form.service || !form.location) {
      alert("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    if (SHEETS_URL === "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE") {
      setTimeout(() => { setLoading(false); setSubmitted(true); }, 900);
      return;
    }
    fetch(SHEETS_URL, { method: "POST", body: JSON.stringify(form) })
      .then(() => { setLoading(false); setSubmitted(true); })
      .catch(() => { setLoading(false); setSubmitted(true); });
  };

  const infoRows = [
    { icon: Phone, label: "Phone / WhatsApp", value: "+91 9462982929", href: "tel:9462982929" },
    { icon: MapPin, label: "Our Address", value: "Y67, Sudarshana Nagar, Bikaner, Rajasthan — 334001" },
    { icon: Clock, label: "Working Hours", value: "Mon–Sat: 9am–7pm  |  Sun: By appointment" },
    { icon: ExternalLink, label: "Location", value: "View on Google Maps →", href: "https://maps.app.goo.gl/tjjC3iE7yWVE2byNA", external: true },
  ];

  return (
    <section id="contact" className="py-20 md:py-24 px-6 md:px-[6%] bg-gradient-to-b from-sky-50/60 to-blue-50/40">
      <div className="reveal mb-14">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Request a Free Quote</h2>
        <p className="section-sub">Fill in your details and we'll call you back within 24 hours — guaranteed.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-14 items-start">
        {/* Left */}
        <div className="reveal left">
          <h3 className="text-xl font-extrabold text-slate-900 mb-7">Contact Information</h3>
          <div className="space-y-5">
            {infoRows.map(({ icon: Icon, label, value, href, external }, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon size={20} className="text-[#0c1f3f]" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-700 mb-0.5 uppercase tracking-wide">{label}</div>
                  {href ? (
                    <a href={href} target={external ? "_blank" : undefined} rel="noreferrer" className="text-sm text-[#0c1f3f] font-semibold hover:underline">{value}</a>
                  ) : (
                    <div className="text-sm text-slate-500">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe src="https://maps.google.com/maps?q=Y67+Sudarshana+Nagar+Bikaner+Rajasthan+334001&output=embed" title="Location" width="100%" height="220" className="border-0 block" allowFullScreen loading="lazy" />
          </div>
        </div>

        {/* Right — Form */}
        <div className="reveal right bg-white rounded-3xl p-8 md:p-10 shadow-[0_16px_60px_rgba(12,31,63,.1)] border border-slate-200">
          {!submitted ? (
            <>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-1.5">Get a Free Quote ☀️</h3>
              <p className="text-sm text-slate-400 mb-8">We respond within 24 hours. No commitment required.</p>

              {[
                { key: "name", label: "Full Name", icon: User, placeholder: "Your full name", type: "text" },
                { key: "phone", label: "Phone Number", icon: Phone, placeholder: "+91 XXXXX XXXXX", type: "tel" },
                { key: "location", label: "Your Location", icon: MapPin, placeholder: "Village, City, District", type: "text" },
              ].map(({ key, label, icon: Icon, placeholder, type }) => (
                <div key={key} className="mb-4">
                  <label className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 mb-2 uppercase tracking-widest">
                    <Icon size={12} className="text-blue-600" />{label}
                  </label>
                  <input type={type} placeholder={placeholder} value={form[key]} onChange={handle(key)} className="w-full px-4 py-3.5 border-[1.5px] border-slate-200 rounded-xl text-sm text-slate-800 bg-slate-50 transition-all" />
                </div>
              ))}

              <div className="mb-6">
                <label className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 mb-2 uppercase tracking-widest">
                  <Sun size={12} className="text-blue-600" />Service Needed
                </label>
                <select value={form.service} onChange={handle("service")} className="w-full px-4 py-3.5 border-[1.5px] border-slate-200 rounded-xl text-sm text-slate-800 bg-slate-50 transition-all">
                  <option value="">Select a service</option>
                  <option>Solar Panel Installation</option>
                  <option>Solar Panel Washing / Cleaning</option>
                  <option>Solar System Maintenance (AMC)</option>
                  <option>Solar Inspection & Audit</option>
                  <option>Battery Storage Solutions</option>
                  <option>Solar Consulting</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>

              <button onClick={submit} disabled={loading} className="btn-navy mb-3">
                <Send size={16} strokeWidth={2.5} />
                {loading ? "Submitting..." : "Submit Inquiry"}
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <Lock size={11} />Your data is secure. We never share your information.
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-5">✅</div>
              <h3 className="text-2xl font-extrabold text-[#0c1f3f] mb-3">Inquiry Received!</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Our team will call you within 24 hours.<br />WhatsApp us directly at <strong className="text-[#0c1f3f]">+91 9462982929</strong></p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
