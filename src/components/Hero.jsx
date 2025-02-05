import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="flex-1 text-white text-center py-16 px-4 md:py-24 md:px-8 border-b-2 border-t-2 border-yellow-300">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
        <Typewriter
          words={["XSMNTR Kaisen."]}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h1>
      <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
        "Building Apps, Perfecting Experiences"
      </p>
      <a
        href="#services"
        className="mt-6 inline-block border-white border-4 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 hover:scale-105 transform transition duration-300"
      >
        Get Started
      </a>
    </section>
  );
}

export default Hero;
