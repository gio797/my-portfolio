import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [button, setButton] = useState(true);
  // console.log(showMenu);

  function showButton() {
    if (innerWidth < 900) {
      setButton(true);
      setShowMenu(false);
    } else {
      setButton(false);
      setShowMenu(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

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
        {button ? (
          <div
            className="menu-btn"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            {showMenu ? (
              <i className="fa-solid fa-times fa-xl"></i>
            ) : (
              <i className="fa-solid fa-bars fa-xl"></i>
            )}
          </div>
        ) : null}
      </nav>
    </header>
  );
}

export default Header;
