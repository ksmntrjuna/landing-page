function Services() {
  return (
    <section
      id="services"
      className="py-16 px-4 md:px-8"
    >
      <div className="container mx-auto text-center p-6">
        <h2 className="text-4xl font-semibold mb-8 text-white">Our Services</h2>

        {/* Grid untuk layanan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center mx-auto max-w-8xl">
          {/* Layanan 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-3 border-indigo-700 hover:scale-105 hover:shadow-xl hover:border-indigo-500 transition-all duration-300 transform">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">
              Web & App Development
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sodales ornare aliquet.
            </p>
          </div>

          {/* Layanan 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-3 border-indigo-700 hover:scale-105 hover:shadow-xl hover:border-indigo-500 transition-all duration-300 transform">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">
              UI/UX Design
            </h3>
            <p className="text-gray-600">
              Etiam sed eros eu magna sollicitudin cursus ac eu est. Maecenas
              dignissim velit mi, sit amet finibus nulla tristique at.
            </p>
          </div>

          {/* Layanan 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-3 border-indigo-700 hover:scale-105 hover:shadow-xl hover:border-indigo-500 transition-all duration-300 transform">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">
              API & Backend Development
            </h3>
            <p className="text-gray-600">
              Aenean vehicula leo lacinia tempor ornare. Cras tempus ac dui ac
              pellentesque.
            </p>
          </div>

          {/* Layanan 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-3 border-indigo-700 hover:scale-105 hover:shadow-xl hover:border-indigo-500 transition-all duration-300 transform">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">
              Maintenance & Support
            </h3>
            <p className="text-gray-600">
              Praesent porta mauris in urna pharetra, sit amet vehicula elit
              cursus. Proin eget augue vel urna luctus viverra id nec odio.
            </p>
          </div>

          {/* Layanan 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-3 border-indigo-700 hover:scale-105 hover:shadow-xl hover:border-indigo-500 transition-all duration-300 transform">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">
              Custom Solutions
            </h3>
            <p className="text-gray-600">
              Vivamus dictum quis dui vitae finibus. Praesent quam est,
              scelerisque eu odio at, feugiat hendrerit diam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
