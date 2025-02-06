import { CheckCircle } from "lucide-react";

function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4 md:px-8">
      <div className="container mx-auto text-center p-6">
        <h2 className="text-4xl font-semibold font-mono mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Pricing Cards */}
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold font-mono mb-4">{plan.title}</h3>
              <p className="text-green-600 font-semibold mb-4">{plan.price}</p>

              {/* Features List */}
              <ul className="text-gray-600 mb-4 space-y-2 max-w-xs sm:max-w-sm mx-auto flex-grow">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-2 break-words"
                  >
                    <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-left">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button - Always at the Bottom */}
              <a
                href="#contact"
                className="block bg-blue-600 text-white px-6 py-3 rounded-lg text-center mt-auto"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const pricingPlans = [
  {
    title: "Starter Pack",
    price: "$500",
    features: [
      "Landing Page / Company Profile Website",
      "Basic UI/UX Design",
      "Responsive (Mobile & Desktop)",
      "1 Major Revision",
      "Development Time: 1–2 Weeks",
    ],
  },
  {
    title: "Professional Pack",
    price: "$1500",
    features: [
      "Custom Web Application (Dashboard, eCommerce, etc.)",
      "Intermediate UI/UX Design",
      "Basic API Integration",
      "3 Major Revisions",
      "Development Time: 3–5 Weeks",
    ],
  },
  {
    title: "Enterprise Pack",
    price: "$2500",
    features: [
      "Complex Web Applications (SaaS, Marketplace, ERP, etc.)",
      "Premium UI/UX Design",
      "Advanced API Integration",
      "1 Month Free Maintenance",
      "Development Time: 6–10 Weeks",
    ],
  },
  {
    title: "Basic UI/UX Design",
    price: "$500",
    features: [
      "Design for 1–5 Pages/Screen",
      "Basic Wireframes & Mockups",
      "Responsive Design for Desktop & Mobile",
      "1 Major Revision",
      "Development Time: 1-2 Weeks",
    ],
  },
  {
    title: "Intermediate UI/UX Design",
    price: "$1500",
    features: [
      "Design for 6–15 Pages/Screen",
      "Wireframes, High-Fidelity Mockups & Prototypes",
      "Interactive Design Elements (Animations, Transitions)",
      "User Flow & Experience Optimization",
      "2 Major Revisions",
      "Development Time: 3–4 Weeks",
    ],
  },
  {
    title: "Premium UI/UX Design",
    price: "$2500",
    features: [
      "Design for 16+ Pages/Screen",
      "Custom & Detailed Wireframes, Mockups & Prototypes",
      "Advanced Interactions & Animations",
      "User Research & Persona Creation",
      "Full User Experience Optimization & Testing",
      "3 Major Revisions",
      "Development Time: 5–6 Weeks",
    ],
  },
  {
    title: "Add-ons & Custom Features",
    price: "$Let's talk!",
    features: [
      "Hosting & Domain",
      "Monthly Maintenance",
      "Additional Features",
      "Design Consultation",
      "UI/UX Audit",
      "Design System & Style Guide",
    ],
  },
];

export default Pricing;
