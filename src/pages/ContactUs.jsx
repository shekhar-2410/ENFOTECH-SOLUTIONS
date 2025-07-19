import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import ContactImg from "../assets/contact-image.svg";

const ContactUs = () => {
  return (
    <section className="bg-light">
      <div className="container-fluid px-0 py-0">
        <div className="row g-0 align-items-stretch">
          {/* LEFT SIDE */}
          <div
            style={{ marginTop: "10px",marginBottom:"30px" }}
            className="col-lg-6 bg-white d-flex align-items-center justify-content-center"
          >
            <div className="w-100" style={{ maxWidth: "600px" }}>
              <img
                src={ContactImg}
                alt="Team Illustration"
                className="img-fluid rounded mb-4"
                style={{
                  maxHeight: "280px",
                  objectFit: "cover",
                  width: "100%",
                 
                }}
              />
              <h2  className="fw-bold text-info mb-2">
                Connect with Our Team of Experts
              </h2>
              <p className="text-muted mb-4">
                Contact our team of excellence-driven experts today to bring
                your project to life.
              </p>

              <div className="mb-3 d-flex align-items-center">
                <FaPhoneAlt className="text-info me-2" />
                <span className="fw-semibold">713.953.5200</span>
              </div>
              <div className="mb-3 d-flex align-items-center">
                <FaEnvelope className="text-info me-2" />
                <span className="fw-semibold">lja@lja.com</span>
              </div>
              <div className="d-flex align-items-center">
                <FaMapMarkerAlt className="text-info me-2" />
                <span className="fw-semibold">See Our Locations</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM ONLY CENTERED */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center text-white">
            <div className="w-100 p-3" style={{ maxWidth: "600px" }}>
              <form>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <select className="form-select" required>
                    <option value="">
                      What Expertise You're Interested In
                    </option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="uiux">UI/UX Design</option>
                  </select>
                </div>

                <div className="mb-4">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Tell Us About Your Project"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-info text-light fw-semibold d-flex align-items-center gap-2"
                >
                  Submit <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
