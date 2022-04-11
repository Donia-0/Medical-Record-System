import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faSort } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import Profile from "../user/Profile";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Viewbloodpreasure from "../records/examination/Viewbloodpreasure";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
const Layout = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(windowDimensions.width);
  return (
    <div className="layout">
      <Navbar />
      <div className="row">
        <div
          className={
            windowDimensions.width > 995
              ? "col-lg-6 col-md-12 col-sm-3 dis-none align-right "
              : "col-lg-6 col-md-12 col-sm-3 align-right "
          }
        >
          <input
            type="text"
            className="form-control"
            style={{ width: "86%", display: "inline-block" }}
            placeholder="Search Term"
          />
          <button
            className="div-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebar"
            aria-controls="sidebar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="btn-toggle">
              <FontAwesomeIcon icon={faSort} />
            </span>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div
            className={
              windowDimensions.width < 995
                ? "sidebar collapse remove-fixed"
                : "sidebar add-fixed"
            }
            id="sidebar"
          >
            <Sidebar />
          </div>
        </div>
        <div className="col-lg-10 col-md-12 col-sm-12">
          <div className="profile-content">
            <Outlet />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
