import React from "react";
import classnames from "classnames";
import style from "../../Css/records/Record.module.css";
const AdditioningField = ({
  labelName,
  placeholder,
  name,
  onChange,
  value,
  id,
  err,
  rows,
}) => {
  return (
    <div className={`row ${style.field}`}>
      <div className="col-lg-12">
        <label className={style.formlabel}>{labelName}: </label>
      </div>
      <div className="col-lg-12">
        <textarea
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          className={classnames("form-control", {
            "is-invalid": err,
          })}
          rows={rows}
          placeholder={placeholder}
        ></textarea>
        {err && <div className="invalid-feedback">{err}</div>}
      </div>
    </div>
  );
};

export default AdditioningField;
