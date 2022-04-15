import React from "react";
import classnames from "classnames";

const Fields = ({
  labelName,
  type,
  placeholder,
  name,
  onChange,
  value,
  err,
}) => {
  return (
    <div className="row form-container">
      <div className="formlabel col-lg-3 col-md-12 col-sm-12">
        <label>{labelName}: </label>
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
        />
        {err && <div className="invalid-feedback">{err}</div>}
      </div>
    </div>
  );
};

export default Fields;
