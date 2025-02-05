function PortfolioItem({ title, description, image, link }) {
  return (
    <div className="bg-white border-2 border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover sm:h-60 md:h-72 lg:h-80"
      />
      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-semibold hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}

export default PortfolioItem;
