import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  // console.log(showMenu);
  return (
    <header>
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <nav>
        <ul className={showMenu ? "menu-items" : "menu-items hidden"}>
          <li>
            <Link to={"/"} onClick={() => setShowMenu(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"About"} onClick={() => setShowMenu(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to={"Projects"} onClick={() => setShowMenu(false)}>
              Projects
            </Link>
          </li>
        </ul>
        <div className="menu-btn" onClick={() => setShowMenu((prev) => !prev)}>
          {showMenu ? (
            <i className="fa-solid fa-times fa-xl"></i>
          ) : (
            <i className="fa-solid fa-bars fa-xl"></i>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
