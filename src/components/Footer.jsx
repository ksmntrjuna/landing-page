import fb from "../assets/facebook.png";
import gmail from "../assets/gmail.png";
import ig from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
  return (
    <footer className="border-t-4 text-white text-center py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 hover:scale-110 transition duration-300"
          >
            <img src={fb} alt="Facebook" className="w-10 h-10" />
          </a>
          <a
            href="https://gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 hover:scale-110 transition duration-300"
          >
            <img src={gmail} alt="Gmail" className="w-10 h-10" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 hover:scale-110 transition duration-300"
          >
            <img src={ig} alt="Instagram" className="w-10 h-10" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 hover:scale-110 transition duration-300"
          >
            <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="mt-2 text-sm">
          &copy; 2025 Your Company. All rights reserved.
        </p>
        <p className="text-sm">React | TailwindCSS</p>
      </div>
    </footer>
  );
}

export default Footer;
