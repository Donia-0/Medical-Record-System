import {
  faCapsules,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../images/light-color.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand">
          <img src={logo} />
          <div className="site-name">
            <span>Medical Record</span>
          </div>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#billidentifier"
              >
                <FontAwesomeIcon
                  icon={faCapsules}
                  style={{ marginRight: "5px" }}
                />
                Pill identifier
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  style={{ marginRight: "5px" }}
                />
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
