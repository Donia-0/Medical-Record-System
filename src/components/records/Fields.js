import React from "react";

const Fields = ({ labelName, type, placeholder, name, onChange, value }) => {
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
          className="form-control"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Fields;
