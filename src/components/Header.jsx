import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="/">
            <img src={logo} alt="Logo" className="h-14" />{" "}
          </a>
        </div>
        <nav>
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
      </div>
    </header>
  );
}

export default Header;
