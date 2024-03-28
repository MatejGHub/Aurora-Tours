import React from "react";
import planeImg from "../assets/plane.png";
import "../components/Overview.module.css";

const Overview = () => {
  return (
    <>
      <div className="bg-dark">
        <div className="container">
          <div className="row py-2 py-md-5 text-white">
            <div className="overview col-12 col-md-4 d-flex align-items-center justify-content-center gap-2 my-3 my-lg-0 fs-5">
              <i className="bi bi-airplane-fill"></i>3 Amazing destinations
            </div>
            <div className="overview col-12 col-md-4 d-flex align-items-center justify-content-center gap-2 my-3 my-lg-0 fs-5">
              <i className="bi bi-wallet-fill"></i>Only pay 5% up front
            </div>
            <div className="overview col-12 col-md-4 d-flex align-items-center justify-content-center gap-2 my-3 my-lg-0 fs-5">
              <i className="bi bi-patch-check-fill"></i>1000's of customers
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
