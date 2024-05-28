import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="header">
      <div className="toggle-icon">
        <i
          onClick={toggleMenu}
          class="fa-solid fa-bars-staggered text-light fs-3"
        ></i>
      </div>
      {isOpen && (
        <div className="toggle-menu">
          {" "}
          <ul className="toggle-list">
            <Link to="/" className="link" onClick={closeMenu}>
              <li className="nav-link">Home</li>
            </Link>
            <Link to="/about" className="link" onClick={closeMenu}>
              <li className="nav-link">About</li>
            </Link>
            <Link to="/education" className="link" onClick={closeMenu}>
              {" "}
              <li className="nav-link">Education</li>
            </Link>
            <Link to="/portfolio" className="link" onClick={closeMenu}>
              <li className="nav-link">Portfolio</li>
            </Link>
            <Link to="/contact" className="link" onClick={closeMenu}>
              <li className="nav-link">Contact</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
