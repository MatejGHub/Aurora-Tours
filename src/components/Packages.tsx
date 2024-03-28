import React from "react";

const Packages = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 pt-5 fw-bold display-5">Packages</div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 p-3 py-lg-5">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1682686580186-b55d2a91053c?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top img-fluid"
                alt="..."
                style={{ objectFit: "cover", height: "280px" }}
              ></img>
              <div className="card-body text-start">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Book a tour
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 p-3 py-lg-5">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1707343843344-011332037abb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top img-fluid"
                alt="..."
                style={{ objectFit: "cover", height: "280px" }}
              ></img>
              <div className="card-body text-start">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Book a tour
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 p-3 py-lg-5">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top img-fluid"
                alt="..."
                style={{ objectFit: "cover", height: "280px" }}
              ></img>
              <div className="card-body text-start">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Book a tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
