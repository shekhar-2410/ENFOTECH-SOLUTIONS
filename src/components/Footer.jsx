import "./style/Footer.css";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer bg-light-blue text-dark pt-5 pb-4">
      <div className="container px-4 px-md-5 py-4">
        {/* MAIN FOOTER GRID */}
        <div className="row gy-4">
          {/* --- Company Info --- */}
          <div className="col-md-4 text-md-start text-center">
            <div className="d-flex align-items-center justify-content-md-start justify-content-center mb-2">
              <img
                src="/logo.png"
                alt="Logo"
                width="40"
                height="40"
                className="me-2"
              />
              <div>
                <h5 className="fw-bold mb-0 text-white">ENFOTECH SOLUTIONS</h5>
                <small style={{ color: "#e0e0e0" }}>
                  Focused Innovation & Engineering
                </small>
              </div>
            </div>
            <p className="small text-light mt-2">
              Empowering smart mobility through engineering excellence and
              intelligent solutions.
            </p>
          </div>

          {/* --- Offerings --- */}
          <div className="col-md-2 text-md-start text-center">
            <h6 className="fw-semibold">Offerings</h6>
            <ul className="list-unstyled small">
              <li>
                <Link to="/services/embedded">Embedded Engineering</Link>
              </li>
              <li>
                <Link to="/services/validation">Verification & Validation</Link>
              </li>
              <li>
                <Link to="/services/product">Product Lifecycle</Link>
              </li>
            </ul>
          </div>

          {/* --- Quick Links --- */}
          <div className="col-md-2 text-md-start text-center">
            <h6 className="fw-semibold">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/careers">Career</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>

          {/* --- Contact --- */}
          <div className="col-md-4 text-md-start text-center">
            <h6 className="fw-semibold">Contact Us</h6>
            <p className="small mb-2">
              <FaEnvelope className="me-2 contact-icon" /> info@mycompany.com
            </p>
            <p className="small mb-2">
              <FaPhoneAlt className="me-2 contact-icon" /> +91 98765 43210
            </p>
            <p className="small">
              <FaMapMarkerAlt className="me-2 contact-icon" /> Plot 5B,
              Innovation Street, Tech Park, Bengaluru
            </p>
          </div>
        </div>

        {/* SEPARATOR */}
        <hr className="my-4" />
      </div>

      {/* COPYRIGHT - OUTSIDE .row */}
      <div className="text-center small copyright-text">
        &copy; {new Date().getFullYear()} ENFOTECH SOLUTIONS. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
