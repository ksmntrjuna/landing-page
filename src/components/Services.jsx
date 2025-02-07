import bg1 from "../assets/bg1.jpg";

function Services() {
  const services = [
    {
      title: "Web & App Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ornare aliquet.",
      image: bg1,
    },
    {
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ornare aliquet.",
      image: bg1,
    },
    {
      title: "API & Backend Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ornare aliquet.",
      image: bg1,
    },
    {
      title: "Maintenance & Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ornare aliquet.",
      image: bg1,
    },
    {
      title: "Custom Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ornare aliquet.",
      image: bg1,
    },
  ];

  return (
    <section id="services" className="py-16 px-4 md:px-8">
      <div className="container mx-auto text-center p-6">
        <h2 className="text-4xl font-semibold font-mono mb-8 text-white">Our Services</h2>

        {/* Grid untuk layanan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center mx-auto max-w-8xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-lg border-black border-2 rounded-lg p-6 hover:scale-105 hover:shadow-xl hover:border-white transition-all duration-300 transform relative overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4 text-white font font-mono">
                  {service.title}
                </h3>
                <p className="text-white">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
