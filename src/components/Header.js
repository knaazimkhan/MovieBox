import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
      <div className="bg-color">
<nav className="navbar navbar-expand-lg navbar-light sticky-top">
  <a className="navbar-brand text-white" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <NavLink to="/movies" className="nav-link text-white">Movies <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/tv-shows" className="nav-link text-white">TV Shows</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/dubbed" className="nav-link text-white">TV Shows</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/bollywood" className="nav-link text-white">TV Shows</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/hollywood" className="nav-link text-white">TV Shows</NavLink>
      </li>
    </ul>
  </div>
</nav>
      </div>
        
    );
};

export default Header;
