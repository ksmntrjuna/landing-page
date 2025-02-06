import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import LoadingIndicator from "./components/LoadingIndicator";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Fungsi untuk menghitung progres berdasarkan scroll
  const calculateScrollProgress = () => {
    const scrollPosition = window.scrollY;
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    // Dapatkan posisi bagian Contact dan Footer
    const contactOffsetTop = document.getElementById("contact")?.offsetTop || 0;
    const footerOffsetTop =
      document.getElementById("footer")?.offsetTop || totalHeight;

    // Tentukan progres berdasarkan posisi scroll dan posisi Contact
    if (scrollPosition >= contactOffsetTop) {
      setScrollProgress(100); // Jika sudah sampai di Contact, progres 100%
    } else {
      // Hitung progres berdasarkan scroll, pastikan tidak lebih dari 100%
      const progress = (scrollPosition / contactOffsetTop) * 100;
      setScrollProgress(Math.min(progress, 100)); // Pastikan progres tidak lebih dari 100%
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgress);
    return () => {
      window.removeEventListener("scroll", calculateScrollProgress);
    };
  }, []);

  return (
    <div className="bg-linear-to-r/increasing from-indigo-500 to-teal-400 min-h-screen flex flex-col overflow-x-hidden relative">
      {scrollProgress <= 100 && <LoadingIndicator progress={scrollProgress} />}

      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer id="footer" />
      <BackToTop />
    </div>
  );
}

export default App;
