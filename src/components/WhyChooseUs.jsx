import React from "react";
import "./style/WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us py-5 px-3">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="text-uppercase fw-bold mb-3">WHY CHOOSE US</h1>
        <p className="mx-auto subtitle" style={{ maxWidth: "800px" }}>
          We blend innovation, speed, and deep technical expertise to build
          scalable digital products that solve real-world business challenges
          and deliver measurable value.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="d-flex justify-content-center flex-wrap gap-4">
        {/* Card 1: Agile Delivery */}
        <div className="custom-card p-5">
          <h3 className="fw-bold mb-4 text-dark">Agile Delivery</h3>
          <ul className="list text-dark">
            <li>Quick iterations with sprint cycles</li>
            <li>Transparent communication process</li>
            <li>Rapid MVP development and deployment</li>
            <li>Iterative client feedback integration</li>
            <li>Collaborative planning & demos</li>
            <li>Prioritized backlog management</li>
            <li>High adaptability to change</li>
          </ul>
        </div>

        {/* Card 2: Expert Team */}
        <div className="custom-card p-5">
          <h3 className="fw-bold mb-4 text-dark">Expert Team</h3>
          <ul className="list text-dark">
            <li>Highly skilled professionals</li>
            <li>Strong cross-domain expertise</li>
            <li>Hands-on technical problem solving</li>
            <li>Continuous learning culture</li>
            <li>Collaborative engineering mindset</li>
            <li>Focus on best development practices</li>
            <li>Globally experienced team members</li>
          </ul>
        </div>

        {/* Card 3: Customer Focused */}
        <div className="custom-card p-5">
          <h3 className="fw-bold mb-4 text-dark">Customer Focused</h3>
          <ul className="list text-dark">
            <li>Business-aligned tech solutions</li>
            <li>Client-centric engagement model</li>
            <li>Dedicated account & support team</li>
            <li>Tailored features to business needs</li>
            <li>Proactive communication & updates</li>
            <li>Strong focus on delivery quality</li>
            <li>Data-driven decision making</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
