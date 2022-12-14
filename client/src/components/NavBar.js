import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/LeveledMoves">Stops</NavLink>
        </li>
        <li>
          <NavLink to="/TurnView">Turns</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
