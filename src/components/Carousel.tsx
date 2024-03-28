import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="container">
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Book a tour
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form action="#">
                  <div className="row g-2">
                    <div className="col-12 col-lg-6">
                      <div className="form-floating mb-3">
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="email">Email address</label>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="form-floating">
                        <select className="form-control" id="select-form">
                          <option selected disabled>
                            Select...
                          </option>
                          <option value="1">Aurora - 120$/night</option>
                          <option value="2">Aurobor - 89$/night</option>
                          <option value="3">Auromodal - 56$/night</option>
                        </select>
                        <label htmlFor="select-form">Select</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="hero-carousel" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{ height: "550px", objectFit: "cover" }}
          >
            <img
              src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 c-img"
              alt="..."
              style={{
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.5)"
              }}
            ></img>
            <div className="carousel-caption top-0 mt-5 pt-5">
              <p className="fs-3 mt-5 pt-3">Discover the hidden world</p>
              <h1 className="display-1 fw-bold mt-4">AURORA TOURS</h1>
              <button
                className="btn btn-primary mt-4 px-4 py-2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                {/*Opens a modal*/}
                Book a tour
              </button>
            </div>
          </div>
          <div
            className="carousel-item "
            style={{ height: "550px", objectFit: "cover" }}
          >
            <img
              src="https://images.unsplash.com/photo-1711330980173-f308124e153d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 c-img"
              alt="..."
              style={{
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.5)"
              }}
            ></img>
            <div className="carousel-caption  top-0 mt-5 pt-5">
              <p className="fs-3 mt-5 pt-3">
                Explore what the world has to offer
              </p>
              <h1 className="display-1 fw-bold mt-4">WORLD TOUR</h1>
              <button
                className="btn btn-primary mt-4 px-4 py-2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Book a tour
              </button>
            </div>
          </div>
          <div
            className="carousel-item "
            style={{ height: "550px", objectFit: "cover" }}
          >
            <img
              src="https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.5)"
              }}
              className="d-block w-100 c-img"
              alt="..."
            ></img>
            <div className="carousel-caption  top-0 mt-5 pt-5">
              <p className="fs-3 mt-5 pt-3">Explore the deserted world</p>
              <h1 className="display-1 fw-bold mt-4">GO DESERTED</h1>
              <button
                className="btn btn-primary mt-4 px-4 py-2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Book a tour
              </button>
            </div>
          </div>
          <div
            className="carousel-item "
            style={{ height: "550px", objectFit: "cover" }}
          >
            <img
              src="https://images.unsplash.com/photo-1682686581740-2c5f76eb86d1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.5)"
              }}
              className="d-block w-100 c-img"
              alt="..."
            ></img>
            <div className="carousel-caption top-0 mt-5 pt-5">
              <p className="fs-3 mt-5 pt-3">Explore the underwater world</p>
              <h1 className="display-1 fw-bold mt-4">DEEP DIVING</h1>
              <button
                className="btn btn-primary mt-4 px-4 py-2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Book a tour
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
