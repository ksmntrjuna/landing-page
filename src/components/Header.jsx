import logo from "../assets/logo.png";
import { useState } from "react";

function Header() {
  // State untuk menu responsive
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk toggle menu pada perangkat kecil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fungsi untuk menutup menu setelah item diklik
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div>
          <a href="#hero">
            <img src={logo} alt="Logo" className="h-14" />
          </a>
        </div>

        {/* Menu untuk perangkat besar */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#about"
                className="text-white hover:text-black transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-white hover:text-black transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-white hover:text-black transition duration-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-white hover:text-black transition duration-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-white hover:text-black transition duration-300"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-black transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger menu untuk perangkat kecil */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu dropdown untuk perangkat kecil */}
      {isMenuOpen && (
        <nav className="md:hidden bg-transpatent from-indigo-500 to-teal-400 text-center py-4 border-2 border-white">
          <ul>
            <li>
              <a
                href="#about"
                className="block py-2 text-white hover:text-indigo-500 transition duration-300"
                onClick={closeMenu} // Menutup menu setelah klik
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 text-white hover:text-indigo-500 transition duration-300"
                onClick={closeMenu} // Menutup menu setelah klik
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="block py-2 text-white hover:text-indigo-500 transition duration-300"
                onClick={closeMenu} // Menutup menu setelah klik
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="block py-2 text-white hover:text-indigo-500 transition duration-300"
                onClick={closeMenu} // Menutup menu setelah klik
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="block py-2 text-white hover:text-indigo-500 transition duration-300"
                onClick={closeMenu} // Menutup menu setelah klik
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 text-white hover:text-indigo-500 transition duration-300"
                onClick={closeMenu} // Menutup menu setelah klik
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
