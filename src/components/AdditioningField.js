import React from "react";
import classnames from "classnames";

const AdditioningField = ({
  labelName,
  type,
  placeholder,
  name,
  onChange,
  value,
  err,
  pattern,
}) => {
  return (
    <div className="row form-container">
      <div className="formlabel col-lg-12 col-md-12 col-sm-12">
        <label>{labelName}: </label>
      </div>
      <div className="col-lg-12 col-sm-12">
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
        />
        {err && <div className="invalid-feedback">{err}</div>}
      </div>
    </div>
  );
};

export default AdditioningField;
