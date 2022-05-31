import React from "react";
import style from "../../Css/Authentication/Auth.module.css";

const PrevSubBtns = (props) => {
  return (
    <div
      className={`${style.btns_container_register_steps} btns-container-register-steps mt-8`}
    >
      <div className={style.prev_submit_container}>
        <div onClick={props.onClick} className={`btn ${style.btns_auth_steps}`}>
          PREV
        </div>
      </div>
      <div
        className={style.prev_submit_container}
        style={{ justifyContent: "right" }}
      >
        <button className={`btn ${style.btns_auth_steps}`}>Submit</button>
      </div>
    </div>
  );
};

export default PrevSubBtns;
