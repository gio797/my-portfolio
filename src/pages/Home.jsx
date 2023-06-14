import React from "react";
import img from "../images/home-cover.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <div className="home-image-container">
        <img src={img} alt="office-image" />
      </div>

      <div className="home-hero-container">
        <h1 className="heading-primary">My name is Giorgi Muchaidze</h1>
        <div className="home-hero-info">
          <p className="text-primary">
            I am a frontend developer based in Tbilisi, Georgia. My specialities
            are <strong>React JS</strong>, and I love building apps that are
            delightful to use.
          </p>
        </div>
        <div className="home-hero-cta">
          <Link to="about">About me</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
