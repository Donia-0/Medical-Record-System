import React from "react";
import RegisterInput from "./RegisterInput";
import { faUser, faAt } from "@fortawesome/free-solid-svg-icons";
import style from "../../Css/Authentication/Auth.module.css";
import common from "../../Css/Common.module.css";

const Patient = ({ step, form, onChange, onClick, onFileChange }) => {
  return (
    <div>
      <div
        className={
          step === "step1" ? `${common.remove_dis_none}` : `${common.dis_none}`
        }
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <RegisterInput
          value={form.name}
          onChange={onChange}
          id="name"
          name="name"
          type="text"
          placeholder="Enter Name"
          isHasIcon="yes"
          icon={faUser}
        />

        <RegisterInput
          value={form.email}
          onChange={onChange}
          id="email"
          name="email"
          type="Email"
          placeholder="Enter Email Address"
          isHasIcon="yes"
          icon={faAt}
        />
        <RegisterInput
          // value={form.profileImg}
          onChange={onFileChange}
          name="profileImg"
          type="file"
          file="yes"
          noteFile="Please upload your photo"
        />

        <div className="input-group">
          <div className="input-group-prepend">
            <label
              style={{ marginRight: "4px" }}
              className="input-group-text"
              htmlFor="birthdate"
            >
              Birthdate
            </label>
          </div>

          <RegisterInput
            value={form.birthdate}
            onChange={onChange}
            id="birthdate"
            name="birthdate"
            type="date"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label
              style={{ marginRight: "4px", width: "90px" }}
              className="input-group-text"
              htmlFor="gender"
            >
              Gender
            </label>
          </div>
          <select
            style={{ width: "100px" }}
            name="gender"
            className="custom-select"
            id="gender"
            value={form.gender}
            onChange={onChange}
          >
            <option>Choose</option>
            <option value="male">Male </option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="input-group mb-3" style={{ justifyContent: "right" }}>
          <div onClick={onClick} className={`btn ${style.btns_auth_steps}`}>
            NEXT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
