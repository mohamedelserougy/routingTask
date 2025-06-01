import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  let [scrolled, setScrolled] = useState(false);

  function changeNav() {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  window.addEventListener("scroll", changeNav);

  return (
    <div>
      <nav
        className={
          scrolled
            ? "navbar navbar-expand-lg p-2 fixed-top"
            : "navbar navbar-expand-lg p-3 fixed-top"
        }
      >
        <div className="container">
          <NavLink className="navbar-brand fs-2 fw-bold text-uppercase" to="/">
            Start Framework
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fs-5 fw-bold customActive"
                      : "nav-link fs-5 fw-bold"
                  }
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fs-5 fw-bold customActive"
                      : "nav-link fs-5 fw-bold"
                  }
                  aria-current="page"
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fs-5 fw-bold customActive"
                      : "nav-link fs-5 fw-bold"
                  }
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
