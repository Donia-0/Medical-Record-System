import React, { useState } from "react";
import logo from "../../images/light-color.png";
import SearchBar from "../user/SearchBar";
import style from "../../Css/Navbar.module.css";
import {
  faCapsules,
  faCaretDown,
  faCircleNotch,
  faListCheck,
  faRightFromBracket,
  faRotateLeft,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clearCurrentProfile } from "./../../actions/profileAction";
import { logoutUser } from "./../../actions/authAction";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { clearPatientProfile } from "../../actions/PatientAction";
import AcceptTerm from "../CheckSymptoms/AcceptTerm";
const Navbar = (props) => {
  const navigate = useNavigate();
  const onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser(navigate);
    localStorage.removeItem("patientId");
    localStorage.removeItem("patientName");
    props.clearCurrentProfile();
    props.clearPatientProfile();
  };
  const onClickChange = () => {
    localStorage.removeItem("patientId");
    localStorage.removeItem("patientName");
    props.clearPatientProfile();
    window.location.reload();
  };

  const loggedInUser = (
    <>
      <li className={`nav-item ${style.width_nav_item}`}>
        {/* <Link
          to="/pillIdentifier"
          className={`nav-link ${style.nav_link_own_style}`}
          aria-current="page"
          href="#billidentifier"
        >
          <FontAwesomeIcon icon={faCapsules} style={{ marginRight: "5px" }} />
          Pill identifier
        </Link> */}
        <div className="dropdown">
          <a
            className={`nav-link dropdown-toggle ${style.nav_link_own_style} ${style.features_dropdown}`}
            href="#"
            role="button"
            id="features"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Features
            <div className={style.features_dropdown_icon}>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </a>

          <ul className="dropdown-menu" aria-labelledby="features">
            <li>
              <Link
                to="/checksymptoms"
                className={`nav-link ${style.features_dropdown_item}`}
                aria-current="page"
                href="#checksymptoms"
              >
                <FontAwesomeIcon
                  icon={faListCheck}
                  style={{ marginRight: "5px" }}
                />
                Check symptoms
              </Link>
            </li>
            <li>
              <Link
                to="/pillIdentifier"
                className={`nav-link ${style.features_dropdown_item}`}
                aria-current="page"
                href="#pillidentifier"
              >
                <FontAwesomeIcon
                  icon={faCapsules}
                  style={{ marginRight: "5px" }}
                />
                Pill identifier
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
  const searchBarCondition = () => {
    if (!localStorage.patientId) {
      if (role == 1 && isActive) {
        return <SearchBar />;
      }
      if (role == 1 && !isActive) {
        return (
          <div className="pending-request" style={{ color: "#FFF" }}>
            <FontAwesomeIcon icon={faCircleNotch} />
            <strong style={{ marginLeft: "10px" }}>
              Your Request to be a doctor is under review
            </strong>
          </div>
        );
      }
    } else {
      return (
        <div
          className="text-center"
          style={{ color: "white", textAlign: "end" }}
        >
          <strong>
            Now you can see {localStorage.getItem("patientName")}'s Records
          </strong>
        </div>
      );
    }
  };
  const { role, isActive } = props.auth.user;
  return (
    <nav
      className={`${style.navbar_own_style} navbar navbar-expand-lg navbar-light`}
    >
      <div className={`${style.container_fluid_own_style} container-fluid`}>
        <a className="navbar-brand">
          <img className={`${style.navbar_img_width}`} src={logo} />
          <div className={style.site_name}>
            <span>Medical Record</span>
          </div>
        </a>
      </div>
      <div
        className={`${style.search_container} ${style.search_patient_bar} container-fluid`}
      >
        {searchBarCondition()}
        {/* {!localStorage.patientId ? (
          role == 1 && isActive == true ? (
            <SearchBar />
          ) : null
        ) : (
          <div
            className="text-center"
            style={{ color: "white", textAlign: "end" }}
          >
            <strong>
              Now you can see {localStorage.getItem("patientName")}'s Records
            </strong>
          </div>
        )} */}
      </div>

      <button
        className={`navbar-toggler collapsed ${style.navbar_button_menu}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className={`${style.span_navbar} navbar-toggler-icon`}></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {localStorage.patientId ? (
            <li
              style={{ width: "200px", cursor: "pointer" }}
              className={`nav-item ${style.width_nav_item}`}
            >
              <span
                className={`nav-link ${style.nav_link_own_style}`}
                aria-current="page"
                href="#billidentifier"
                onClick={onClickChange}
              >
                <FontAwesomeIcon
                  icon={faRotateLeft}
                  style={{ marginRight: "5px" }}
                />
                Back To My Records
              </span>
            </li>
          ) : null}
          {role != 2 ? loggedInUser : null}
          <li className={`nav-item ${style.width_nav_item}`}>
            <a
              className={`nav-link ${style.nav_link_own_style}`}
              href="/auth/login"
              onClick={onLogoutClick}
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                style={{ marginRight: "5px" }}
              />
              Log out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  logoutUser,
  clearCurrentProfile,
  clearPatientProfile,
})(Navbar);
