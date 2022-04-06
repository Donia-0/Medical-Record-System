import React from "react";
import logo from "../../images/light-color.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAction";
import { clearCurrentProfile } from "../../actions/profileAction";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate();
  const onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser(navigate);
    props.clearCurrentProfile();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
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
                Bill identifier
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ cursor: "pointer" }}
                onClick={onLogoutClick}
                className="nav-link"
              >
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
