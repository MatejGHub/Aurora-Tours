import React from "react";

const FAQ = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 pt-5">
            <h1 className="display-6 fw-bold">FAQ</h1>
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-12 col-lg-10   py-4 ">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What do we do?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-start">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum quo ratione, corrupti error exercitationem omnis,
                      modi aperiam maxime asperiores dolores vel? Blanditiis
                      maxime dolores debitis molestias dolorem consectetur error
                      deserunt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Do I get a refund if I cancel my booking?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-start">
                    <p>
                      You get a refund if you cancel your booking Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Ipsa,
                      maiores?
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How do I book a tour?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-start">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Provident consequatur error quia magni eveniet perferendis
                      tenetur ullam vitae nulla sint repudiandae eius animi nisi
                      nihil nam repellat, fugit soluta molestiae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
