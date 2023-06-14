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
        All my projects include links to the code and live version. Click the
        button to check the project.
      </p>
      <div className="project-wrapper">
        <div className="project">
          <h2>project title</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
            mollitia. Molestias culpa quasi earum repudiandae, est sint ipsam at
            voluptatibus consequuntur, magni tenetur nemo error? Neque,
            repellendus soluta. Ex, hic!
          </p>
          <div className="project-img-wrapper">
            <img src={img} alt="" />
          </div>
          <Link
            className="prokect-link"
            to={"https://curious-truffle-09eab6.netlify.app"}
            target="blank"
          >
            Project link
          </Link>
          <hr />
        </div>

        <div className="project">
          <h2>project title 2</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
            mollitia. Molestias culpa quasi earum repudiandae, est sint ipsam at
            voluptatibus consequuntur, magni tenetur nemo error? Neque,
            repellendus soluta. Ex, hic!
          </p>
          <div className="project-img-wrapper">
            <img src={img2} alt="" />
          </div>
          <Link
            className="prokect-link"
            to={"https://superb-druid-9d3988.netlify.app"}
            target="blank"
          >
            Project link
          </Link>
          <hr />
        </div>

        <div className="project">
          <h2>project title 3</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
            mollitia. Molestias culpa quasi earum repudiandae, est sint ipsam at
            voluptatibus consequuntur, magni tenetur nemo error? Neque,
            repellendus soluta. Ex, hic!
          </p>
          <div className="project-img-wrapper">
            <img src={img3} alt="" />
          </div>
          <Link
            className="prokect-link"
            to={"https://gorgeous-cobbler-04f350.netlify.app"}
            target="blank"
          >
            Project link
          </Link>
          <hr />
        </div>

        <div className="project">
          <h2>project title 4</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
            mollitia. Molestias culpa quasi earum repudiandae, est sint ipsam at
            voluptatibus consequuntur, magni tenetur nemo error? Neque,
            repellendus soluta. Ex, hic!
          </p>
          <div className="project-img-wrapper">
            <img src={img4} alt="" />
          </div>
          <Link
            className="prokect-link"
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
