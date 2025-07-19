import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style/Header.css";
import { FaChevronDown } from "react-icons/fa";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    if (window.innerWidth <= 992) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid px-4">
        <NavLink
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={closeMenu}
        >
          <img
            src="/logo.png"
            width="40"
            height="40"
            className="me-2"
            alt="Logo"
          />
          <div className="brand-text">
            <span className="brand-name">ENFOTECH SOLUTIONS</span>
            <span className="tagline">Focused Innovation & Engineering</span>
          </div>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: "white", border: "1px solid white" }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            isMenuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center mr-2">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact="true"
                to="/"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services{" "}
                <FaChevronDown
                  className="ms-1"
                  style={{ fontSize: "0.6rem" }}
                />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/embedded"
                    onClick={closeMenu}
                  >
                    Embedded Product Engineering
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/validation"
                    onClick={closeMenu}
                  >
                    Verification & Validation
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Engagement Models Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Engagement Models{" "}
                <FaChevronDown
                  className="ms-1"
                  style={{ fontSize: "0.6rem" }}
                />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/engagement/fte"
                    onClick={closeMenu}
                  >
                    Full Time Equivalent (FTE)
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/engagement/offshore"
                    onClick={closeMenu}
                  >
                    Offshore Development (OD)
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/engagement/tm"
                    onClick={closeMenu}
                  >
                    Time and Material (T&M)
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about-us" onClick={closeMenu}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/careers" onClick={closeMenu}>
                Career
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact-us"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
