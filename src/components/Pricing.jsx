function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
            <p className="text-gray-600 mb-4">$19/month</p>
            <ul className="text-gray-600 mb-4">
              <li>1 Website</li>
              <li>Basic Support</li>
              <li>10GB Storage</li>
            </ul>
            <a
              href="#contact"
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg text-center"
            >
              Get Started
            </a>
          </div>

          {/* Pro Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
            <p className="text-gray-600 mb-4">$49/month</p>
            <ul className="text-gray-600 mb-4">
              <li>5 Websites</li>
              <li>Premium Support</li>
              <li>50GB Storage</li>
            </ul>
            <a
              href="#contact"
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg text-center"
            >
              Get Started
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Enterprise Plan</h3>
            <p className="text-gray-600 mb-4">$99/month</p>
            <ul className="text-gray-600 mb-4">
              <li>Unlimited Websites</li>
              <li>24/7 Support</li>
              <li>500GB Storage</li>
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
