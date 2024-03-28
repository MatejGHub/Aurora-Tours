import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Overview from "./components/Overview";
import Packages from "./components/Packages";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar />
      </header>
      <main>
        <Carousel />
        <Overview />
        <Packages />
        <FAQ />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
