import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidenav">
      <NavLink to="/profile" className="a-section">
        Profile
      </NavLink>
      <button
        className="dropdown-btn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#daily"
        aria-controls="daily"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Daily <FontAwesomeIcon icon={faCaretDown} />
      </button>
      <div className="collapse" id="daily">
        <a href="#">Blood pressure</a>
        <a href="#">Glucose</a>
      </div>
      <a href="#surgery" className="a-section">
        Surgery
      </a>
      <a href="#allergy" className="a-section">
        Allergy
      </a>
      <a href="#examination" className="a-section">
        Examination
      </a>
    </div>
  );
};

export default Sidebar;
