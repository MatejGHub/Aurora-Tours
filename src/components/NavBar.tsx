import React from "react";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const NavBar = () => {
  // Create a NAVBAR that changes color when the user scrolls down the page
  //56px is height of navbar

  return (
    <>
      <nav
        className={`navbar navbar-expand-sm bg-transparent fixed-top test ${styles["background-change"]}`}
      >
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            AURORA TOURS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="packages.tsx"
                >
                  Packages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
