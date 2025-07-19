import React from "react";
import { FaPenNib, FaCode, FaBullhorn } from "react-icons/fa";
import "./style/Careers.css";

const Careers = () => {
  return (
    <section className="careers-container">
      {/* Join Us Section */}
      <div className="join-us-section">
        <h2>Join Us</h2>
        <p>
          Starlight launches branded products with a proprietary systematic
          flow that gives you the highest return on investment in the online
          and advertising super world.
        </p>
        <button className="about-btn">More About Us</button>
      </div>

      {/* Department Cards */}
      <div className="departments-section">
        <div className="department-card">
          <FaPenNib className="icon" />
          <h4>Product Design</h4>
          <p>
            Help design intuitive and impactful products with a focus on
            user experience.
          </p>
          <button className="view-btn">View Openings</button>
        </div>
        <div className="department-card">
          <FaCode className="icon" />
          <h4>Product Development</h4>
          <p>
            Work on robust backend systems and performant frontends across
            platforms.
          </p>
          <button className="view-btn">View Openings</button>
        </div>
        <div className="department-card">
          <FaBullhorn className="icon" />
          <h4>Marketing</h4>
          <p>
            Shape how our brand is perceived and connect with our global
            audience.
          </p>
          <button className="view-btn">View Openings</button>
        </div>
      </div>

      {/* We're Hiring Bottom Section */}
      <div className="hiring-section">
        <h3>We're Hiring</h3>
        <p>
          Starlight launches branded products with a proprietary systematic
          flow that gives you the highest return in the online advertising
          world.
        </p>
      </div>
    </section>
  );
};

export default Careers;
