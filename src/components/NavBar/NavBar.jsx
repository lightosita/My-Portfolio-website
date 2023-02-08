import React, {useState} from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
 
    <div className="navbar">


      return (
      <nav
        className="nav-bar"
      role="navigation">
        <ul className="navlink">
          <li><NavLink  activeClassName="is-active" to="/">Home</NavLink></li>
          <li><NavLink activeClassName="is-active" to="about">About Me</NavLink></li>
          <li><NavLink activeClassName="is-active" to="projects">Portfolio</NavLink></li>
          <li><NavLink activeClassName="is-active" to="contact">Lets Talk</NavLink></li>
            
            
            
            
            
                      
        </ul>
      </nav>
      );
    </div>
 
}
export default NavBar;


