import React, { useEffect, useState } from "react";
import layout_img from "../../images/maxresdefault.jpg";
import Register from "./Register";
import { Outlet, NavLink } from "react-router-dom";
import Loading from "./../Loading";
const Auth = () => {
  const [load, setload] = useState(false);

  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 3000);
  }, []);
  return (
    <div className="auth-layout">
      {load ? (
        <Loading loading={load} />
      ) : (
        <div className="row main-layout container">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="auth-layout-link">
              <span className="auth-link">
                <NavLink to="/auth/login">Login</NavLink>
              </span>
              <span className="auth-link">
                <NavLink to="/auth/register">Register</NavLink>
              </span>
            </div>
            <div className="form-container">
              <div className="form-layout">
                <div className="form-div">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="image-layout">
              <div className="img-div">
                <img src={layout_img} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
