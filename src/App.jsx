import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Calculator from "./components/Calculator";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

function goTo(id) {
  if (id === "hero") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  const el = document.getElementById(id);
  if (!el) return;
  const navH = document.querySelector("nav")?.offsetHeight ?? 68;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - navH - 8, behavior: "smooth" });
}

export default function App() {
  return (
    <div className="font-inter">
      <Navbar onNav={goTo} />
      <Hero onNav={goTo} />
      <Services onNav={goTo} />
      <Calculator onNav={goTo} />
      <Pricing onNav={goTo} />
      <Testimonials />
      <WhyUs />
      <Contact />
      <Footer onNav={goTo} />
      <WhatsApp />
    </div>
  );
}
