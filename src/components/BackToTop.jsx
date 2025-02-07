import { useEffect, useState } from "react";
import rocket from "../assets/roket2.gif"; // Mengimpor gambar roket dari folder assets

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-5 right-0 flex flex-col items-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-transparent  text-sky-600 p-3  transform transition-all duration-300 hover:scale-110 hover:text-red-500"
      >
        {/* Menggunakan gambar sebagai ikon */}
        <img src={rocket} alt="Back to top" className="w-14 h-14" />
      </button>
      <span className="text-lg font-semibold text-white">Mabur</span>
    </div>
  );
};

export default BackToTop;
