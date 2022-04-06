import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const RegisterInput = (props) => {
  return (
    <div>
      <div className="mb-4">
        {/* <label htmlFor={props.labelFor} className="form-label">
          <FontAwesomeIcon icon={props.icon} />
          {props.labelName}
        </label> */}
        <div className="input-div">
          {props.isHasIcon === "yes" ? (
            <FontAwesomeIcon icon={props.icon} />
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
