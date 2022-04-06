import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../Css/App.css";
const Footer = () => {
  return (
    <div className="row">
      <div className="footer">
        <div className="col-lg-6 col-md-9 col-sm-9 footer-left">
          <div className="footer-content">
            &copy; 2022 Medical Records All Right Reserved
          </div>
        </div>
        <div className="col-lg-6 col-md-3 col-sm-3 footer-right">
          <div className="footer-content">
            Contact Us:
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faFacebookF} />
            </a>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
