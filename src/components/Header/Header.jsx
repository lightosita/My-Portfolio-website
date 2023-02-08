import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h2>
        <a href="/">
          Osita<small>Light.</small>
        </a>
      </h2>
      <div>
        <nav>
          <ul className="navbar">
            <li>
              <Link activeClassName="IsActive" to="/">
                Home
              </Link> 
            </li> 
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Lets Talk</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
