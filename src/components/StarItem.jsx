function StarItem({ name, role, testimonial, rating, image }) {
  // Fungsi untuk mengubah rating menjadi bintang
  const renderStars = (rating) => {
    const fullStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return fullStars + emptyStars;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <p className="text-gray-600 mb-4">{testimonial}</p>
      <div className="flex items-center justify-center mb-4">
        <div className="text-yellow-500 text-xl">{renderStars(rating)}</div>
      </div>
      <div className="flex items-center justify-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default StarItem;
