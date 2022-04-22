import React from "react";
import classnames from "classnames";

const RequestsViewField = ({ labelName, type, placeholder, name }) => {
  return (
    <div className="requests-container">
      <div className="formlabel col-lg-3 col-md-12 col-sm-12">
        <label>{labelName}: </label>
      </div>
      <div className="col-lg-9 col-sm-12">
        <input
          name={name}
          className="form-control"
          type={type}
          placeholder={placeholder}
          disabled
        />
      </div>
    </div>
  );
};

export default RequestsViewField;
