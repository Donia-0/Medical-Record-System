import React from "react";
import classnames from "classnames";
import style from "../../Css/Pill/Pill.module.css";

const SelectionField = ({ labelName, options, err, selectName }) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className={`${style.select_container} select-container`}>
        <select
          className={classnames("form-select", {
            "is-invalid": err,
          })}
        >
          <option>{selectName}</option>
          {options}
        </select>
      </div>
      {err && <div className="invalid-feedback">{err}</div>}
    </div>
  );
};

export default SelectionField;
