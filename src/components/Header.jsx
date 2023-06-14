import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [button, setButton] = useState(true);
  // console.log(showMenu);

  const active = {
    textDecoration: "underline",
  };

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
        <Link to={"/"}>
          <h1>GM</h1>
        </Link>
      </div>
      <nav>
        <ul className={showMenu ? "menu-items" : "menu-items hidden"}>
          <li>
            <NavLink
              to={"/"}
              onClick={() => setShowMenu(false)}
              style={({ isActive }) => (isActive ? active : null)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"Projects"}
              onClick={() => setShowMenu(false)}
              style={({ isActive }) => (isActive ? active : null)}
            >
              Projects
            </NavLink>
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
