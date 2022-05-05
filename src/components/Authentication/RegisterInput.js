import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../Css/Authentication/Auth.module.css";

const RegisterInput = (props) => {
  return (
    <div>
      <div className="mb-4">
        <div className={style.input_div}>
          {props.isHasIcon === "yes" ? (
            <FontAwesomeIcon icon={props.icon} className={style.highlight} />
          ) : null}
          <input
            name={props.name}
            type={props.type}
            className="form-control"
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
          />
        </div>
        {props.file === "yes" ? (
          <div id="textExample1" className="form-text">
            {props.noteFile}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RegisterInput;
