import "./style/Hero.css";
import HeroImg from "../assets/banner.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        {/* LEFT: TEXT */}
        <div className="hero-text text-center text-md-start">
          <h6 className="text-teal-light">ENFOTECH SOLUTIONS</h6>
          <h1>
            Technology Partner for <br />
            <span>Smart Mobility Solutions</span>
          </h1>
          <div className="mt-4">
            <Link to="/contact-us">
              <button className="btn me-3 btn-hero rounded-pill">
                Contact Us
              </button>
            </Link>

            <Link to="/about-us">
              <button className="btn btn-outline-dark rounded-pill">
                Know More
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="hero-image">
          <img src={HeroImg} alt="AI Robot" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
