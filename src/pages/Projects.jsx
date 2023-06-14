import React from "react";
import img from "../images/proj1.png";
import img2 from "../images/proj2.png";
import img3 from "../images/proj3.png";
import img4 from "../images/proj4.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
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
        <Link to={"https://curious-truffle-09eab6.netlify.app"} target="blank">
          Project link
        </Link>
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
        <Link to={"https://superb-druid-9d3988.netlify.app"} target="blank">
          Project link
        </Link>
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
        <Link to={"https://gorgeous-cobbler-04f350.netlify.app"} target="blank">
          Project link
        </Link>
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
          to={"https://verdant-frangollo-9bebd7.netlify.app"}
          target="blank"
        >
          Project link
        </Link>
      </div>
    </div>
  );
}

export default Projects;
