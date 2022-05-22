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
        <NavLink to="/records/bloodpreasure" className={style.a_section}>
          Blood pressure
        </NavLink>
        <NavLink to="/records/glucose" className={style.a_section}>
          Glucose
        </NavLink>
      </div>
      <NavLink to="/records/surgery" className={style.a_section}>
        Surgery
      </NavLink>

      <NavLink to="/records/allergy" className={style.a_section}>
        Allergy
      </NavLink>
      <NavLink to="/records/examination" className={style.a_section}>
        Examination
      </NavLink>
      <NavLink to="/records/prescriptions" className={style.a_section}>
        Prescriptions
      </NavLink>
      <NavLink to="/records/Addlabtest" className={style.a_section}>
        Lab Tests
      </NavLink>
    </div>
  );
};

export default Sidebar;
