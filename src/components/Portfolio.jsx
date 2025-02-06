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
