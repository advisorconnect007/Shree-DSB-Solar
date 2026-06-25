import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown, ShieldCheck, Clock3, Sparkles,
  MessageCircle, ArrowRight
} from "lucide-react";
import useReveal from "../components/useReveal";

const faqs = [
  {
    category: "Installation",
    question: "How long does a residential solar installation take?",
    answer: "Most residential systems (3–10 kW) are installed within 5–7 working days after the site survey and design approval. This includes panel mounting, inverter installation, electrical wiring and commissioning. Larger commercial and industrial projects follow a customized timeline shared during the consultation phase.",
  },
  {
    category: "Installation",
    question: "Is my roof suitable for solar panels?",
    answer: "Most roofs are suitable for solar. Our engineers assess roof area, orientation (south-facing is ideal), tilt angle, structural strength and shading from nearby trees or buildings during the free site survey. We can install on RCC, tin, or metal roofs and will recommend the best mounting system for your property.",
  },
  {
    category: "Warranty",
    question: "What warranty do you offer on solar systems?",
    answer: "We offer a 25-year linear performance warranty on all solar panels, ensuring at least 80% output at end of warranty. The inverter carries a manufacturer warranty of up to 10–12 years. Our workmanship and installation warranty covers 5 years. Every warranty is fully documented and transferable if you sell your property.",
  },
  {
    category: "Subsidy",
    question: "Can I get government subsidy on my solar installation?",
    answer: "Yes! Under the PM Surya Ghar: Muft Bijli Yojana, residential customers can receive subsidies of up to ₹78,000 for a 3kW or larger system: ₹30,000 for 1kW, ₹60,000 for 2kW, and ₹78,000 for 3kW or more. Our team manages your entire subsidy application — from documentation to DISCOM approval — at no extra charge.",
  },
  {
    category: "Subsidy",
    question: "How does net metering work?",
    answer: "Net metering allows you to export surplus solar power back to the electricity grid. Your meter records units exported vs. imported, and you receive a credit on your bill. You only pay for the net electricity consumed. Our team handles the entire net metering application with the state DISCOM on your behalf.",
  },
  {
    category: "Maintenance",
    question: "Do solar panels require regular maintenance?",
    answer: "Solar panels are largely maintenance-free. We recommend a professional cleaning and inspection 2–4 times per year, depending on dust and pollution in your area. Our Annual Maintenance Contracts (AMC) cover panel cleaning, inverter health check, wiring inspection and a detailed performance report — keeping your system running at peak for decades.",
  },
  {
    category: "Maintenance",
    question: "What happens if a panel is damaged?",
    answer: "Damaged panels are covered under our workmanship warranty (5 years) and the manufacturer's product warranty (10–12 years). We'll inspect, diagnose and replace any faulty components quickly. Our 24/7 support team is always available to handle emergencies.",
  },
  {
    category: "Finance",
    question: "What financing options are available?",
    answer: "We offer flexible EMI financing through leading banks and NBFCs. Monthly EMIs start from ₹2,800 for a 1kW system, with tenure options up to 7 years. Once your government subsidy is deducted from the total cost, the financed amount reduces significantly — making solar very affordable with quick payback.",
  },
  {
    category: "Finance",
    question: "How long does it take to recover my investment?",
    answer: "The payback period for a residential on-grid solar system is typically 3–5 years in Rajasthan, given the high solar irradiance and electricity tariff savings. Post-payback, you enjoy 20+ years of virtually free electricity. Most customers see a 25%+ IRR on their solar investment.",
  },
  {
    category: "Technical",
    question: "What happens during a power cut?",
    answer: "Standard on-grid systems shut down automatically during power cuts (for safety). If you need backup during outages, we recommend a hybrid or off-grid system with battery storage. Our battery solutions provide seamless backup power, keeping your critical loads running even during extended outages.",
  },
];

const categories = ["All", "Installation", "Warranty", "Subsidy", "Maintenance", "Finance", "Technical"];

const infoCards = [
  {
    icon: ShieldCheck,
    title: "Premium Warranty Coverage",
    desc: "25-year panel performance warranty and 5-year workmanship warranty on every installation. Fully documented and transferable.",
  },
  {
    icon: Clock3,
    title: "Fast Response Guarantee",
    desc: "Site surveys and estimates delivered within 48 hours. Installation completed in as little as 5 working days.",
  },
  {
    icon: Sparkles,
    title: "100% Transparent Pricing",
    desc: "Clear package pricing, no hidden fees, no surprise charges. What we quote is what you pay.",
  },
];

function FAQItem({ faq, open, onToggle }) {
  return (
    <div className="border border-[#E2E8F0] rounded-2xl bg-white overflow-hidden shadow-sm hover:border-[#FBBF24]/30 transition-colors">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#F8FAFC] transition-colors"
      >
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#FBBF24]/15 text-[#F59E0B] text-[10px] font-bold flex items-center justify-center">
            Q
          </span>
          <span className="text-base font-semibold text-[#0F172A] leading-6">{faq.question}</span>
        </div>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-[#94A3B8] transition-transform duration-300 ${open ? "rotate-180 text-[#FBBF24]" : ""}`}
        />
      </button>
      <div className={`faq-body ${open ? "open" : "closed"}`}>
        <div className="px-6 pb-6 pt-1 flex gap-3">
          <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#0F172A]/8 text-[#0F172A] text-[10px] font-bold flex items-center justify-center">
            A
          </span>
          <p className="text-sm text-[#475569] leading-7">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  useReveal();

  return (
    <div className="overflow-hidden">

      {/* ── Page Hero ── */}
      <div
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="page-hero-overlay" />
        <div className="page-hero-gradient" />
        <div className="page-hero-content text-white">
          <p className="section-tag text-[#FBBF24]">FAQ</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
            Answers to the Questions<br className="hidden md:block" /> Our Clients Ask Most
          </h1>
          <p className="text-lg text-[#CBD5E1] max-w-xl leading-8">
            Professional, transparent explanations about installation, warranty, subsidies, financing and system performance.
          </p>
        </div>
      </div>

      {/* ── FAQ Content ── */}
      <section className="py-20 md:py-28 px-6 md:px-[6%] bg-[#F8FAFC]">
        <div className="max-w-[1300px] mx-auto">

          {/* Category filter */}
          <div className="reveal flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(-1); }}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  activeCategory === cat
                    ? "bg-[#FBBF24] text-[#0F172A] border-[#FBBF24]"
                    : "bg-white border-[#E2E8F0] text-[#475569] hover:border-[#FBBF24]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-3 mb-16">
            {filtered.map((faq, i) => (
              <div key={faq.question} className="reveal">
                <FAQItem
                  faq={faq}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              </div>
            ))}
          </div>

          {/* Info cards */}
          <div className="grid gap-6 lg:grid-cols-3">
            {infoCards.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="reveal card p-8 card-hover text-center">
                <div className="feature-icon mx-auto">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h3>
                <p className="text-sm text-[#475569] leading-7">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Still have questions? ── */}
      <section className="py-16 px-6 md:px-[6%] bg-[#0F172A]">
        <div className="max-w-[1300px] mx-auto text-center">
          <MessageCircle size={36} className="text-[#FBBF24] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Still Have Questions?
          </h2>
          <p className="text-[#94A3B8] mb-8 max-w-md mx-auto">
            Our solar specialists are happy to answer any question — from technical specs to subsidy claims. Reach out anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex">
              Contact Us <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/919462982929?text=Hi%2C%20I%20have%20a%20question%20about%20solar."
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-white inline-flex"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
