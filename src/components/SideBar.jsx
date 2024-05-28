import React from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 side-bar"
      style={{ width: 280 }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-2 portfolio-text mt-5">Portfolio</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" className="nav-link">
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="nav-link">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
      <hr />
      <div className="social-media-section">
        <div className="social-media">
          <Link
            to="https://www.instagram.com/n_shaig/"
            className="link"
            target="_blank"
          >
            <span className="social-media-icon instagram me-2">
              <i class="fa-brands fa-instagram"></i>
            </span>
          </Link>
          <Link
            to="https://github.com/ShaigNizamzada"
            className="link"
            target="_blank"
          >
            <span className="social-media-icon github me-2">
              <i class="fa-brands fa-github"></i>
            </span>
          </Link>
          <Link
            to="https://www.linkedin.com/in/shaignizamzada/"
            className="link"
            target="_blank"
          >
            <span className="social-media-icon linkedin me-2">
              <i class="fa-brands fa-linkedin"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
