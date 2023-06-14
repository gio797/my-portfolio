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
        <div>
          <h2>My skills</h2>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
          </ul>
        </div>

        <div className="home-hero-cta">
          <Link to="projects">Portfolio</Link>
        </div>

        <div className="contact">
          <h2>contact</h2>
          <p>
            Please reach out if you have any questions! I'm happy to jump on a
            video call. Send me an email at g.muchaidze@yahoo.com or call me
            directly at +995 595228259
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
