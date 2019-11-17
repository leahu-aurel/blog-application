import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignLinks from "./auth/SignLinks";
export default class NavBar extends Component {
  render() {
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            Blog
          </Link>
        </div>
        <ul className="right">
          <SignLinks />
          <li>
            <Link to="/" className="btn btn-floating pink lighten-1">
              LA
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
