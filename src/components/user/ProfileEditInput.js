import classNames from "classnames";
import React from "react";
import style from "../../Css/User/Profile.module.css";

const ProfileEditInput = ({
  type,
  labelName,
  labelFor,
  name,
  value,
  edit,
  onChange,
  placeholder,
  err,
}) => {
  return (
    <div className={style.edit_input}>
      <label className={style.edit_label} htmlFor={labelFor}>
        {labelName}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={classNames("input form-control", {
          "is-invalid": err,
        })}
        disabled={edit === false ? true : ""}
        placeholder={placeholder}
      />
      {err && <div className="invalid-feedback">{err}</div>}
    </div>
  );
};

export default ProfileEditInput;
