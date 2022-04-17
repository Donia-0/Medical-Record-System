import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidenav">
      <NavLink to="/user/profile" className="a-section">
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
        {/* <a href="/records/viewbloodp">Blood pressure</a>
        <a href="/records/viewglucose">Glucose</a> */}
        <NavLink to="viewbloodp" className="a-section">
          Blood pressure
        </NavLink>
        <NavLink to="viewglucose" className="a-section">
          Glucose
        </NavLink>
      </div>
      <NavLink to="surgery" className="a-section">
        Surgery
      </NavLink>
      <a href="#allergy" className="a-section">
        Allergy
      </a>
      {/* <a href="#examination" className="a-section">
        Examination
      </a> */}
      <NavLink to="/records/examination" className="a-section">
        Examination
      </NavLink>
    </div>
  );
};

export default Sidebar;
