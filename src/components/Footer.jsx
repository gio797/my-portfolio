import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <Link to={"/"}>home</Link>
      <Link to={"projects"}>projects</Link>
      <div className="social">
        <h2>social</h2>
        <Link to={"https://github.com/gio797"} target="blank">
          <i class="fa-brands fa-github fa-xl"></i>
        </Link>

        <Link
          to={"https://www.linkedin.com/in/giorgi-muchaidze-2115b6279/"}
          target="blank"
        >
          <i class="fa-brands fa-linkedin fa-xl"></i>
        </Link>

        <Link to={"https://www.facebook.com/mg.seven.10/"} target="blank">
          <i class="fa-brands fa-facebook fa-xl"></i>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
