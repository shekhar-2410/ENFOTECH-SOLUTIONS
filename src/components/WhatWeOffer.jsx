import React from "react";
import { Link } from "react-router-dom";
import OfferImage from "../assets/offer-image.jpg";
import "./style/WhatWeOffer.css";

const WhatWeOffer = () => {
  return (
    <section className="what-we-offer">
      <div className="offer-left">
        <div className="content">
          <h6 className="label">WHAT WE OFFER</h6>
          <h2 className="headline">
            Our core services empower startups to grow and scale rapidly.
          </h2>

          <div className="services">
            {[
              {
                icon: "🖥️",
                title: "Web Development",
                desc: "Build blazing-fast, scalable websites with React, Next.js, and modern backend stacks.",
              },
              {
                icon: "📱",
                title: "Mobile Applications",
                desc: "Robust mobile apps with beautiful UI using Flutter or React Native for iOS and Android.",
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                desc: "Elegant, user-first design that elevates your brand and product experience.",
              },
            ].map((item, i) => (
              <div className="service-card" key={i}>
                <div className="icon">{item.icon}</div>
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link className="service-link">Explore all services →</Link>
        </div>
      </div>

      <div className="offer-right">
        <img src={OfferImage} alt="Offer" className="offer-image" />
      </div>
    </section>
  );
};

export default WhatWeOffer;
