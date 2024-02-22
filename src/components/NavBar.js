import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      {/* NavLink for Home */}
      <NavLink to="/">Home</NavLink>

      {/* NavLink for Movies */}
      <NavLink to="/movies">Movies</NavLink>

      {/* NavLink for Directors */}
      <NavLink to="/directors">Directors</NavLink>

      {/* NavLink for Actors */}
      <NavLink to="/actors">Actors</NavLink>
    </div>
  );
}

export default NavBar;
