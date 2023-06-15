import React from "react";
import img from "../images/proj1.png";
import img2 from "../images/proj2.png";
import img3 from "../images/proj3.png";
import img4 from "../images/proj4.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="project-page-wrapper">
      <h1>Projects</h1>
      <p>
        Here we have some of my projects, wich include links to the live
        version. you can also find codes for these projects on my github.
      </p>
      <div className="project-wrapper">
        <div className="project">
          <h2>Space tourism multi-page website</h2>
          <p>
            This is a frontendmentor website challange named 'Space tourism
            multi-page website'. In this project i have used react router and
            the page is responsive.
          </p>
          <div className="project-img-wrapper">
            <img src={img} alt="" />
          </div>
          <Link
            className="project-link"
            to={"https://curious-truffle-09eab6.netlify.app"}
            target="blank"
          >
            Project link
          </Link>
          <hr />
        </div>

        <div className="project">
          <h2>Dictionary web app</h2>
          <p>
            This is a frontendmentor website challange named 'Dictionary web
            app'. In this project i have used react. wepsite is responsive and
            has theme change possibility.
          </p>
          <div className="project-img-wrapper">
            <img src={img2} alt="" />
          </div>
          <Link
            className="project-link"
            to={"https://superb-druid-9d3988.netlify.app"}
            target="blank"
          >
            Project link
          </Link>
          <hr />
        </div>

        <div className="project">
          <h2>REST Countries API with color theme switcher</h2>
          <p>
            This is a frontendmentor website challange named 'REST Countries API
            with color theme switcher'. In this project I have used react.
            wepsite is responsive and has theme change possibility.
          </p>
          <div className="project-img-wrapper">
            <img src={img3} alt="" />
          </div>
          <Link
            className="project-link"
            to={"https://gorgeous-cobbler-04f350.netlify.app"}
            target="blank"
          >
            Project link
          </Link>
          <hr />
        </div>

        <div className="project">
          <h2>Trivia</h2>
          <p>
            This is a trivia website, where you can answer trivia questions. you
            can choose number of questions, category and difficulty.
          </p>
          <div className="project-img-wrapper">
            <img src={img4} alt="" />
          </div>
          <Link
            className="project-link"
            to={"https://verdant-frangollo-9bebd7.netlify.app"}
            target="blank"
          >
            Project link
          </Link>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Projects;
