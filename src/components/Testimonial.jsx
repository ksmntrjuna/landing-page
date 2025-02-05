import StarItem from "./StarItem";

function Testimonial() {
  // Array berisi data testimoni
  const testimonials = [
    {
      name: "Satoru Gojo",
      role: "CEO, Yowaimo Company",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in arcu sapien. Vivamus varius erat ac erat auctor, non rhoncus erat vulputate. Duis ut odio sed odio condimentum elementum ut eu nulla.",
      rating: 4, // Rating 4 bintang
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Rahmat Fushiguro",
      role: "Founder, Mahoraga Corp",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in arcu sapien. Vivamus varius erat ac erat auctor, non rhoncus erat vulputate. Duis ut odio sed odio condimentum elementum ut eu nulla.",
      rating: 3, // Rating 3 bintang
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Ryomen Sukuna",
      role: "CEO, Fukuma Mizushi",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in arcu sapien. Vivamus varius erat ac erat auctor, non rhoncus erat vulputate. Duis ut odio sed odio condimentum elementum ut eu nulla. ",
      rating: 5, // Rating 5 bintang
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-semibold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StarItem
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
