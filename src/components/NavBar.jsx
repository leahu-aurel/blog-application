import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Blog
        </Link>
      </div>
      <ul className="right">
        <li>
          <NavLink to="/create">New Blog</NavLink>
        </li>
        <li>
          <Link to="/" className="btn btn-floating pink lighten-1">
            LA
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
