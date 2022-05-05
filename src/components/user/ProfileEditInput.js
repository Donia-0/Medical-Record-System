import React from "react";
import style from "../../Css/User/Profile.module.css";

const ProfileEditInput = ({ type, labelName, labelFor, name, value, edit }) => {
  return (
    <div className={style.edit_input}>
      <label className={style.edit_label} htmlFor={labelFor}>
        {labelName}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className="input form-control"
        disabled={edit === false ? true : ""}
      />
    </div>
  );
};

export default ProfileEditInput;
