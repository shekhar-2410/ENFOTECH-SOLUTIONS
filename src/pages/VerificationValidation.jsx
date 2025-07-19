import React from "react";

const VerificationValidation = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="mb-4 text-primary fw-bold">
              Verification & Validation Services
            </h1>
            <p className="mb-3">
              We provide robust Verification and Validation (V&V) services to
              ensure your products meet quality, safety, and compliance
              standards. Our team is experienced in end-to-end V&V processes
              from test planning to reporting.
            </p>

            <h4 className="mt-5">What We Offer:</h4>
            <ul className="list-unstyled ms-3">
              <li>• Functional and system-level testing</li>
              <li>• Automated test development and execution</li>
              <li>• Test strategy and documentation (STP, STD, STR)</li>
              <li>
                • Hardware-in-the-loop (HIL) and Software-in-the-loop (SIL)
                testing
              </li>
              <li>• Compliance with standards like ISO 26262, IEC 62304</li>
            </ul>

            <h5 className="mt-4">Benefits:</h5>
            <p>
              Reduce development risk, improve reliability, and accelerate
              product release with our thorough validation practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationValidation;
