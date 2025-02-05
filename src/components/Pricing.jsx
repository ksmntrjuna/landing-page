function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4 md:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Starter Pack */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Starter Pack</h3>
            <p className="text-green-600 font-semibold mb-4">$500</p>
            <ul className="text-gray-600 mb-4">
              <li>Landing Page / Company Profile Website</li>
              <li>Basic UI/UX Design</li>
              <li>Responsive (Mobile & Desktop)</li>
              <li>1 Major Revision</li>
              <li>Development Time: 1–2 Weeks</li>
            </ul>
            <a
              href="#contact"
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg text-center"
            >
              Get Started
            </a>
          </div>

          {/* Professional Pack */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Professional Pack</h3>
            <p className="text-green-600 font-semibold mb-4">$1200</p>
            <ul className="text-gray-600 mb-4">
              <li>Custom Web Application (Dashboard, eCommerce, etc.)</li>
              <li>Intermediate UI/UX Design</li>
              <li>Basic API Integration</li>
              <li>3 Major Revisions</li>
              <li>Development Time: 3–5 Weeks</li>
            </ul>
            <a
              href="#contact"
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg text-center"
            >
              Get Started
            </a>
          </div>

          {/* Enterprise Pack */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Enterprise Pack</h3>
            <p className="text-green-600 font-semibold mb-4">$2500</p>
            <ul className="text-gray-600 mb-4">
              <li>Complex Web Applications (SaaS, Marketplace, ERP, etc.)</li>
              <li>Premium UI/UX Design</li>
              <li>Advanced API Integration</li>
              <li>1 Month Free Maintenance</li>
              <li>Development Time: 6–10 Weeks</li>
            </ul>
            <a
              href="#contact"
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg text-center"
            >
              Get Started
            </a>
          </div>

          {/* Basic UI/UX Design */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Basic UI/UX Design</h3>
            <p className="text-green-600 font-semibold mb-4">$500</p>
            <ul className="text-gray-600 mb-4">
              <li>Design for 1–5 Pages/Screen</li>
              <li>Basic Wireframes & Mockups</li>
              <li>Responsive Design for Desktop & Mobile</li>
              <li>1 Major Revisions</li>
              <li>Development Time: 1-2 Weeks</li>
            </ul>
            <a
              href="#contact"
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg text-center"
            >
              Get Started
            </a>
          </div>

          {/* Intermediate UI/UX Design */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">
              Intermediate UI/UX Design
            </h3>
            <p className="text-green-600 font-semibold mb-4">$1200</p>
            <ul className="text-gray-600 mb-4">
              <li>Design for 6–15 Pages/Screen</li>
              <li>Wireframes, High-Fidelity Mockups & Prototypes</li>
              <li>Interactive Design Elements (Animations, Transitions)</li>
              <li>User Flow & Experience Optimization</li>
              <li>2 Major Revisions</li>
              <li>Development Time: 3–4 Weeks</li>
            </ul>
            <a
              href="#contact"
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg text-center"
            >
              Get Started
            </a>
          </div>

          {/* Premium UI/UX Design */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Premium UI/UX Design</h3>
            <p className="text-green-600 font-semibold mb-4">$2500</p>
            <ul className="text-gray-600 mb-4">
              <li>Design for 16+ Pages/Screen</li>
              <li>Custom & Detailed Wireframes, Mockups & Prototypes</li>
              <li>Advanced Interactions & Animations</li>
              <li>User Research & Persona Creation</li>
              <li>Full User Experience Optimization & Testing</li>
              <li>3 Major Revisions</li>
              <li>Development Time: 5–6 Weeks</li>
            </ul>
            <a
              href="#contact"
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg text-center"
            >
              Get Started
            </a>
          </div>

          {/* Add-ons & Custom Features */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">
              Add-ons & Custom Features
            </h3>
            <p className="text-green-600 font-semibold mb-4">$Let's talk!</p>
            <ul className="text-gray-600 mb-4">
              <li>Hosting & Domain</li>
              <li>Monthly Maintenance</li>
              <li>Additional Features</li>
              <li>Design Consultation</li>
              <li>UI/UX Audit</li>
              <li>Design System & Style Guide</li>
            </ul>
            <a
              href="#contact"
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
