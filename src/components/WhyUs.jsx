import React from "react";
import { Award, Leaf, Landmark, Headphones, Shield, MapPin } from "lucide-react";
import useReveal from "./useReveal";

const items = [
  { icon: Award, emoji: "🏅", title: "10+ Years Experience", desc: "Hundreds of successful installations across Bikaner and surrounding districts of Rajasthan." },
  { icon: Leaf, emoji: "🌿", title: "Eco-Friendly Approach", desc: "Only certified, high-efficiency panels. Minimal environmental impact on our planet." },
  { icon: Landmark, emoji: "🏛️", title: "Subsidy Experts", desc: "We handle your PM Surya Ghar application end-to-end at absolutely zero extra charge." },
  { icon: Headphones, emoji: "📞", title: "24/7 After-Sales Support", desc: "Our team is always available for emergencies, queries, and quick fixes anytime." },
  { icon: Shield, emoji: "🔒", title: "10-Year Panel Warranty", desc: "Every installation backed by comprehensive warranty. Invest with full confidence." },
  { icon: MapPin, emoji: "📍", title: "Local & Reliable", desc: "Based in Sudarshana Nagar, Bikaner — we're your neighbours, not a distant company." },
];

export default function WhyUs() {
  useReveal();
  return (
    <section id="why" className="py-20 md:py-24 px-6 md:px-[6%] bg-gradient-to-br from-[#0c1f3f] to-[#1a3a8f] relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="reveal mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[2.5px] uppercase text-amber-300 mb-3 before:content-[''] before:w-5 before:h-0.5 before:rounded-full before:bg-white/30">
          <span className="w-5 h-0.5 rounded-full bg-white/30 inline-block" /> Why Choose Us
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">Bikaner's Most Trusted Solar Team</h2>
        <p className="text-base text-white/55 leading-relaxed max-w-xl">Hundreds of happy customers across Rajasthan trust us with their solar investments.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
        {items.map(({ icon: Icon, emoji, title, desc }, i) => (
          <div key={i} className={`reveal group bg-white/6 border border-white/9 rounded-2xl p-7 transition-all duration-300 hover:bg-white/11 hover:-translate-y-1.5 hover:border-white/20 delay-${(i % 3 + 1) * 100}`}>
            <div className="w-13 h-13 w-[52px] h-[52px] bg-amber-400/15 rounded-xl flex items-center justify-center mb-4 text-2xl group-hover:scale-110 group-hover:rotate-[-5deg] transition-transform duration-300">
              {emoji}
            </div>
            <h3 className="text-base font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-white/55 leading-[1.72]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
