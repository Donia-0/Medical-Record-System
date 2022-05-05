import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../Css/Layouts/Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={`${style.sidenav}`}>
      <NavLink to="/user/profile" className={style.a_section}>
        Profile
      </NavLink>
      <button
        className={style.dropdown_btn}
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
        <NavLink
          activeClassName="active-link"
          to="/records/viewbloodp"
          className={style.a_section}
        >
          Blood pressure
        </NavLink>
        <NavLink
          activeClassName="active-link"
          to="/records/viewglucose"
          className={style.a_section}
        >
          Glucose
        </NavLink>
      </div>
      <NavLink
        activeClassName="active-link"
        to="/records/surgery"
        className={style.a_section}
      >
        Surgery
      </NavLink>

      <NavLink
        activeClassName="active-link"
        to="/records/allergy"
        className={style.a_section}
      >
        Allergy
      </NavLink>
      <NavLink
        activeClassName="active-link"
        to="/records/examination"
        className={style.a_section}
      >
        Examination
      </NavLink>
    </div>
  );
};

export default Sidebar;
