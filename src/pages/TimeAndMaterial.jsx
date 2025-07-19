import React from "react";

const TimeAndMaterial = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="text-primary fw-bold mb-4">
              Time and Material (T&M)
            </h1>
            <p>
              The Time and Material model is ideal for projects with evolving
              requirements. You only pay for the actual time and resources
              spent, offering flexibility, control, and real-time adaptability.
            </p>

            <h4 className="mt-5">Why Choose T&M?</h4>
            <ul className="list-unstyled ms-3">
              <li>• Suited for agile and iterative development</li>
              <li>• High adaptability to changing project scopes</li>
              <li>• Transparent billing based on hourly or daily rates</li>
              <li>• Better project control and oversight</li>
            </ul>

            <p className="mt-4">
              Best for exploratory, research-based, or MVP-stage projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeAndMaterial;
