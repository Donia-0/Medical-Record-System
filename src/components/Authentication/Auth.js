import React, { useEffect, useState } from "react";
import layout_img from "../../images/maxresdefault.jpg";
import { Outlet, NavLink } from "react-router-dom";
import Loading from "./../Loading";
import style from "../../Css/Authentication/Auth.module.css";
const Auth = () => {
  const [load, setload] = useState(false);

  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 3000);
  }, []);
  return (
    <div className={style.auth_layout}>
      {load ? (
        <Loading loading={load} />
      ) : (
        <div className={`row ${style.main_layout} container`}>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className={style.auth_layout_link}>
              <span className={style.auth_link}>
                <NavLink to="/auth/login">Login</NavLink>
              </span>
              <span className={style.auth_link}>
                <NavLink to="/auth/register">Register</NavLink>
              </span>
            </div>
            <div className={style.form_container}>
              <div className={style.form_layout}>
                <div className={style.form_div}>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className={style.image_layout}>
              <div className={style.img_div}>
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
