import React from "react";
import logo from "../../images/light-color.png";
import SearchBar from "../user/SearchBar";
import style from "../../Css/Navbar.module.css";
import {
  faCapsules,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clearCurrentProfile } from "./../../actions/profileAction";
import { logoutUser } from "./../../actions/authAction";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser(navigate);
    props.clearCurrentProfile();
  };
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
      <div className={`container-fluid`}>
        <SearchBar />
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
        <ul className="navbar-nav ms-auto">
          <li className={`nav-item ${style.width_nav_item}`}>
            <a
              className={`nav-link ${style.nav_link_own_style}`}
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

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
