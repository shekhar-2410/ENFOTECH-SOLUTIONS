import React from "react";
import TeamImg from "../assets/about-hero.png"; // Replace with your actual image
import "./style/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-wrapper">
      <div className="about-container">
        {/* Left: Text */}
        <div className="about-text">
          <small>ABOUT US</small>
          <h1>
            Helping businesses <span className="highlight">succeed</span>{" "}
            through the <br /> power of <span className="highlight">video</span>
            .
          </h1>
          <p>
            Video is the future of business in this digital-focused world. We
            use video to change the way companies connect and communicate. We
            help organizations of all sizes humanize their communications and
            personalize their customer experiences.
          </p>
          <button className="cta-btn">Sign Up for Free</button>
        </div>

        {/* Right: Image */}
        <div className="about-image-wrapper">
          <div className="about-image-shape">
            <img src={TeamImg} alt="Team working" className="about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
