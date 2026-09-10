import { useState, useEffect } from "react";
import "./Header.css";
import Resume from "../Resume.pdf";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={`Header ${scrolled ? "scrolled" : ""}`}>
      <div className="HeaderContainer">
        <div className="logoWrapper" onClick={() => scrollToSection("hero")}>
          <img
            className="name"
            alt="Firas Najjar Logo"
            src="/images/firas-Logo.webp"
            onError={(e) => {
              e.target.src = "/images/firas-Logo.png";
            }}
          />
        </div>

        <nav className={`NavLinks ${mobileMenuOpen ? "open" : ""}`}>
          <button className="navLink" onClick={() => scrollToSection("about")}>
            About
          </button>
          <button className="navLink" onClick={() => scrollToSection("skills")}>
            Skills
          </button>
          <button className="navLink" onClick={() => scrollToSection("projects")}>
            Projects
          </button>
          <button className="navLink" onClick={() => scrollToSection("designs")}>
            Designs
          </button>
          <button
            className="navLink contactBtnLink"
            onClick={() => {
              setMobileMenuOpen(false);
              navigate("/contact");
            }}
          >
            Contact
          </button>

          <div className="mobileResume">
            <a
              href={Resume}
              download="Firas-Najjar-Resume"
              className="resumeAnchor"
            >
              <button type="button" className="Resume">
                <svg
                  className="downloadIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="16"
                  height="16"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Resume
              </button>
            </a>
          </div>
        </nav>

        <div className="HeaderAction desktopOnly">
          <button
            className="contactLink"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
          <div className="btn">
            <a
              href={Resume}
              download="Firas-Najjar-Resume"
              className="resumeAnchor"
            >
              <button type="button" className="Resume">
                <svg
                  className="downloadIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="16"
                  height="16"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Resume
              </button>
            </a>
          </div>
        </div>

        <button
          className="hamburger"
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`bar ${mobileMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${mobileMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${mobileMenuOpen ? "active" : ""}`}></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
