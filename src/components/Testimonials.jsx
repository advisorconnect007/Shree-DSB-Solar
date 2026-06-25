import React from "react";
import { Quote } from "lucide-react";
import useReveal from "./useReveal";

const testimonials = [
  {
    stars: 5,
    name: "Ramesh Sharma",
    loc: "Bikaner, Rajasthan",
    tag: "5kW Rooftop System",
    initials: "RS",
    color: "#0369a1",
    quote:
      "DSB Solar ne humara 5kW system bahut achhe se install kiya. Bijli ka bill almost zero ho gaya hai. Team very professional aur punctual thi. Highly recommended!",
  },
  {
    stars: 5,
    name: "Priya Vyas",
    loc: "Nokha, Bikaner",
    tag: "Commercial Solar",
    initials: "PV",
    color: "#15803d",
    quote:
      "Panel washing service is excellent. After cleaning, generation went up by 25%! Very professional team, on time and very careful with the equipment.",
  },
  {
    stars: 5,
    name: "Mahesh Kumar",
    loc: "Kolayat, Bikaner",
    tag: "3kW + ₹78K Subsidy",
    initials: "MK",
    color: "#7c3aed",
    quote:
      "They helped us claim PM Surya Ghar subsidy — saved ₹78,000! The entire process was managed by their team. We didn't have to follow up even once. Amazing!",
  },
  {
    stars: 4,
    name: "Sunita Joshi",
    loc: "Bikaner City",
    tag: "Annual AMC",
    initials: "SJ",
    color: "#b45309",
    quote:
      "AMC service is great value. They visit twice a year, check everything thoroughly and provide a detailed performance report. System running perfectly for 3+ years!",
  },
  {
    stars: 5,
    name: "Arun Jangid",
    loc: "Dungargarh, Bikaner",
    tag: "Free Solar Consulting",
    initials: "AJ",
    color: "#065f46",
    quote:
      "Free consulting session cleared all my confusion. They suggested the right system size and saved me from over-spending. Honest advice, great team!",
  },
  {
    stars: 5,
    name: "Dinesh Pareek",
    loc: "Bikaner, Rajasthan",
    tag: "Solar + Battery Backup",
    initials: "DP",
    color: "#1d4ed8",
    quote:
      "Battery storage solution is brilliant! No more power cuts. Installation was clean and the team explained every detail perfectly. 10 out of 10 experience!",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="16" height="16"
          viewBox="0 0 16 16"
          fill={i < count ? "#FBBF24" : "#E2E8F0"}
        >
          <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.93L8 10.52l-3.52 1.83.67-3.93L2.3 5.64l3.94-.57L8 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  useReveal();

  return (
    <section className="py-20 md:py-28 px-6 md:px-[6%] bg-[#F8FAFC]">
      <div className="max-w-[1300px] mx-auto">

        {/* Header */}
        <div className="reveal text-center mb-14">
          <p className="section-tag justify-center">Customer Reviews</p>
          <h2 className="section-heading">What Our Clients Say</h2>
          <p className="section-desc max-w-xl mx-auto">
            Real feedback from real customers across Bikaner and Rajasthan — with actual solar systems running strong.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`reveal card card-hover p-7 flex flex-col delay-${(i % 3 + 1) * 100}`}
            >
              {/* Quote icon */}
              <Quote size={28} className="text-[#FBBF24]/40 mb-3 flex-shrink-0" />

              <StarRating count={t.stars} />

              <p className="text-sm text-[#475569] leading-7 italic flex-1 mb-6">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-[#E2E8F0]">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">{t.name}</p>
                  <p className="text-xs text-[#94A3B8]">{t.loc}</p>
                  <span className="inline-block mt-1 rounded-full bg-[#FBBF24]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[1px] text-[#0F172A]">
                    {t.tag}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
