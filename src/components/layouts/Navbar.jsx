import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          <i className="fas fa-glass-cheers" />
          Party RSVP
        </h1>
        <p>
          Made with <span>❤</span> by Gobinda Das
        </p>
      </div>
      <ul>
        <li>Hello, Gobinda</li>
        <span className="sm-hide">|</span>
        <li>
          <a href="#!">
            <span className="sm-hide">Logout</span>
            <i className="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
