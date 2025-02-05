import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

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
      className={`fixed bottom-5 right-5 flex flex-col items-center space-y-2 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-transparent border-4 text-sky-600 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:text-red-500"
      >
        <Rocket size={32} />
      </button>
      <span className="text-lg font-semibold text-sky-600">Mabur</span>
    </div>
  );
};

export default BackToTop;
