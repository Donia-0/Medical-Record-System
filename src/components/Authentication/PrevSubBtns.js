import React from "react";
import style from "../../Css/Authentication/Auth.module.css";

const PrevSubBtns = (props) => {
  return (
    <div className="btns-container-register-steps mt-8">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="input-group mb-3">
            <div
              onClick={props.onClick}
              className={`btn ${style.btns_auth_steps}`}
            >
              PREV
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="input-group mb-3" style={{ justifyContent: "right" }}>
            <button className={`btn ${style.btns_auth_steps}`}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevSubBtns;
