import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../Css/Layouts/Sidebar.module.css";
import bloodpreasureImage from "../../images/records/bloodpressure/bloodp.png";
import glucoseImage from "../../images/glucose.png";
import surgeryImage from "../../images/surgury.png";
import allergyImage from "../../images/allergy.png";
import prescriptionImage from "../../images/medicine.png";
import labTestImage from "../../images/x-ray.png";
import examinationImage from "../../images/examination.png";
import profileImage from "../../images/profile.png";
import dailyImage from "../../images/planner.png";

const Sidebar = () => {
  return (
    <div className={`${style.sidenav}`}>
      <NavLink to="/user/profile" className={style.a_section}>
        <div className={style.sidebar_navlink_content}>
          <div className={style.sidebar_navlink_content_img}>
            <img src={profileImage} />
          </div>
          Profile
        </div>
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
        <div className={style.sidebar_navlink_content}>
          <div className={style.sidebar_navlink_daily}>
            <div className={style.sidebar_navlink_content_img}>
              <img src={dailyImage} />
            </div>
            <div>Daily</div>
          </div>
          <div>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </button>
      <div className="collapse" id="daily">
        <NavLink to="/records/bloodpreasure" className={style.a_section}>
          <div className={style.sidebar_navlink_content}>
            <div className={style.sidebar_navlink_content_img}>
              <img src={bloodpreasureImage} />
            </div>
            Blood pressure
          </div>
        </NavLink>
        <NavLink to="/records/glucose" className={style.a_section}>
          <div className={style.sidebar_navlink_content}>
            <div className={style.sidebar_navlink_content_img}>
              <img src={glucoseImage} />
            </div>
            Glucose
          </div>
        </NavLink>
      </div>
      <NavLink to="/records/surgery" className={style.a_section}>
        <div className={style.sidebar_navlink_content}>
          <div className={style.sidebar_navlink_content_img}>
            <img src={surgeryImage} />
          </div>
          Surgery
        </div>
      </NavLink>
      <NavLink to="/records/allergy" className={style.a_section}>
        <div className={style.sidebar_navlink_content}>
          <div className={style.sidebar_navlink_content_img}>
            <img src={allergyImage} />
          </div>
          Allergy
        </div>
      </NavLink>
      <NavLink to="/records/examination" className={style.a_section}>
        <div className={style.sidebar_navlink_content}>
          <div className={style.sidebar_navlink_content_img}>
            <img src={examinationImage} />
          </div>
          Examination
        </div>
      </NavLink>
      <NavLink to="/records/prescriptions" className={style.a_section}>
        <div className={style.sidebar_navlink_content}>
          <div className={style.sidebar_navlink_content_img}>
            <img src={prescriptionImage} />
          </div>
          Prescriptions
        </div>
      </NavLink>
      <NavLink to="/records/labtests" className={style.a_section}>
        <div className={style.sidebar_navlink_content}>
          <div className={style.sidebar_navlink_content_img}>
            <img src={labTestImage} />
          </div>
          Lab Tests
        </div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
