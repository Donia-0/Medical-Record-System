import React, { useEffect } from "react";
import Navbar from "./layout/Navbar";
import style from "../Css/notFound.module.css";
import notfound from "../images/notfound.png";
import { useNavigate } from "react-router-dom";
export default function () {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-2);
    }, 3000);
  }, []);
  return (
    <div className="">
      <Navbar />
      <div className="container">
        <div className={style.not_found}>
          <div>
            <img src={notfound} />
          </div>
          <div className={style.text}>
            <h3>
              this page is not allowed to you you will be automatically
              <br></br>
              redirected to pervious page after few seconds
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
