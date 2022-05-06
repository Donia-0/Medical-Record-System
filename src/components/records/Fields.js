import React from "react";
import classnames from "classnames";
import style from "../../Css/records/Record.module.css";
const Fields = ({
  labelName,
  type,
  placeholder,
  name,
  onChange,
  value,
  err,
  pattern,
  disabled,
}) => {
  return (
    <div className={`row ${style.field}`}>
      <div className="col-lg-3 col-md-12 col-sm-12">
        <label className={style.formlabel}>{labelName}: </label>
      </div>
      <div className="col-lg-9 col-sm-12">
        <input
          value={value}
          onChange={onChange}
          name={name}
          className={classnames("form-control", {
            "is-invalid": err,
          })}
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          disabled={disabled}
        />
        {err && <div className="invalid-feedback">{err}</div>}
      </div>
    </div>
  );
};

export default Fields;
