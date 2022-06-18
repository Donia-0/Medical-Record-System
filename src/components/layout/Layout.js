import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faSort } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Loading from "../Loading";
import style from "../../Css/Layouts/Layout.module.css";
import common from "../../Css/Common.module.css";
import SearchBar from "../user/SearchBar";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
const Layout = () => {
  const [load, setload] = useState(false);

  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 2700);
  }, []);
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
  return (
    <div>
      {load ? (
        <Loading loading={load} />
      ) : (
        <div className={style.layout}>
          <Navbar />
          <div className={`row ${style.small_layout}`}>
            <div
              className={`col-lg-6 col-md-12 col-sm-12 ${
                windowDimensions.width > 720
                  ? `${common.dis_none} ${common.align_right}`
                  : `${common.align_right}`
              }`}
            >
              <SearchBar />

              <button
                className={style.div_toggler}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebar"
                aria-controls="sidebar"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ display: "inline-block" }}
              >
                <span className={style.btn_toggle}>
                  <FontAwesomeIcon icon={faSort} />
                </span>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div
                className={`${
                  windowDimensions.width < 995
                    ? `collapse ${style.remove_fixed}`
                    : `${style.sidenav}`
                }`}
                id="sidebar"
              >
                <Sidebar />
              </div>
            </div>
            <div className="col-lg-10 col-md-12 col-sm-12">
              <div className="layout-content">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
