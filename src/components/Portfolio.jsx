import pict1 from "../assets/portfolio.jpg";

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: pict1,
      link: "https://example.com/",
      tools: "React, Tailwind CSS",
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: pict1,
      link: "https://example.com/",
      tools: "React, Tailwind CSS",
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: pict1,
      link: "https://example.com/",
      tools: "React, Tailwind CSS",
    },
    {
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: pict1,
      link: "https://example.com/",
      tools: "React, Tailwind CSS",
    },
    {
      title: "Project 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: pict1,
      link: "https://example.com/",
      tools: "React, Tailwind CSS",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-16 px-4 md:px-8 border-b-2 border-t-2 border-white"
    >
      <div className="container mx-auto text-center p-6">
        <h2 className="text-4xl font-semibold font-mono mb-8 text-white">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black rounded-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-50"
                />
                {/* Overlay with tools on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-purple-500/50 transition-all duration-300">
                  <h2 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transform group-hover:translate-y-10 transition-all duration-500">
                    {project.tools}
                  </h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-2 font-mono">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
