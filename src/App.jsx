import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-linear-to-r/increasing from-indigo-500 to-teal-400 min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
