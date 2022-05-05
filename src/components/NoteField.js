import React from "react";
import classnames from "classnames";

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
    <div className="row form-container">
      <div className="formlabel col-lg-12">
        <label htmlFor={id}>{labelName}:</label>
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
