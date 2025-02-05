function StarItem({ name, role, testimonial, rating, image }) {
  // Fungsi untuk mengubah rating menjadi bintang
  const renderStars = (rating) => {
    const fullStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return fullStars + emptyStars;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <p className="text-gray-600 mb-4 text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
        {testimonial}
      </p>
      <div className="flex items-center justify-center mb-4">
        <div className="text-yellow-500 text-xl sm:text-lg md:text-xl lg:text-2xl">
          {renderStars(rating)}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full mr-4 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
        />
        <div>
          <p className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
            {name}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StarItem;
