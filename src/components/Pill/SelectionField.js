import React from "react";
import classnames from "classnames";
import style from "../../Css/Pill/Pill.module.css";

const SelectionField = ({
  value,
  err,
  onChange,
  type,
  placeholder,
  pattern,
}) => {
  return (
    // <div className="col-lg-6 col-md-6 col-sm-6">
    //   <div className={`${style.select_container} select-container`}>
    //     <select
    //       className={classnames("form-select", {
    //         "is-invalid": err,
    //       })}
    //     >
    //       <option>{selectName}</option>
    //       {options}
    //     </select>
    //   </div>
    //   {err && <div className="invalid-feedback">{err}</div>}
    // </div>
    <div className={`row ${style.field}`}>
      <div className="col-lg-12 col-sm-12">
        <input
          value={value}
          onChange={onChange}
          className={classnames("form-control", {
            "is-invalid": err,
          })}
          type={type}
          placeholder={placeholder}
          pattern={pattern}
        />
        {err && <div className="invalid-feedback">{err}</div>}
      </div>
    </div>
  );
};

export default SelectionField;
