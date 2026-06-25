import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import SolarSolutions from "./pages/SolarSolutions";
import Pricing from "./pages/Pricing";
import Projects from "./pages/Projects";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <div className="font-inter bg-[#F8FAFC] text-[#0F172A]">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/solutions" element={<SolarSolutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsApp />
      </div>
    </Router>
  );
}
