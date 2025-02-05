import PortfolioItem from "./PortfolioItem";
import pict1 from "../assets/portfolio.jpg";

function Portfolio() {
  // Data portofolio (bisa diubah atau diperbarui)
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: pict1,
      link: "https://example.com/ecommerce",
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: pict1,
      link: "https://example.com/dashboard",
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: pict1,
      link: "https://example.com/portfolio",
    },
    {
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: pict1,
      link: "https://example.com/portfolio",
    },
    {
      title: "Project 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: pict1,
      link: "https://example.com/portfolio",
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Our Portfolio</h2>
        <div className="flex flex-wrap items-start justify-center gap-6 p-6">
          {projects.map((project, index) => (
            <PortfolioItem
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
