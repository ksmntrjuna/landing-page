import StarItem from "./StarItem";
import profil1 from "../assets/profil1.jpg";
import profil2 from "../assets/profil2.jpg";
import profil3 from "../assets/profil3.jpg";


function Testimonial() {
  // Array berisi data testimoni
  const testimonials = [
    {
      name: "Satoru Gojo",
      role: "CEO, Yowaimo Company",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in arcu sapien. Vivamus varius erat ac erat auctor, non rhoncus erat vulputate.",
      rating: 4,
      image: profil1,
    },
    {
      name: "Rahmat Fushiguro",
      role: "Founder, Mahoraga Corp",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in arcu sapien. Vivamus varius erat ac erat auctor, non rhoncus erat vulputate.",
      rating: 3,
      image: profil2,
    },
    {
      name: "Ryomen Sukuna",
      role: "CEO, Fukuma Mizushi",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in arcu sapien. Vivamus varius erat ac erat auctor, non rhoncus erat vulputate.",
      rating: 5,
      image: profil3,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 px-4 md:px-8"
    >
      <div className="container mx-auto text-center p-6">
        <h2 className="text-4xl font-semibold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
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
