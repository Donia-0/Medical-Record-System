import React from "react";

const ProfileEditInput = ({ type, labelName, labelFor, name, value, edit }) => {
  return (
    <div className="edit-input">
      <label className="edit-label" htmlFor={labelFor}>
        {labelName}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className="input form-control"
        disabled={edit === false ? "true" : ""}
      />
    </div>
  );
};

export default ProfileEditInput;
