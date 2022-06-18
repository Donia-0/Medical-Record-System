import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import PrevSubBtns from "./PrevSubBtns";
import RegisterInput from "./RegisterInput";
import style from "../../Css/Authentication/Auth.module.css";
import common from "../../Css/Common.module.css";

const Doctor = ({ form, step, onChange, onClick, onFileChange }) => {
  return (
    <div>
      <div
        className={
          step === "doctor" ? `${common.remove_dis_none}` : `${common.dis_none}`
        }
        data-aos="flip-right"
        data-aos-duration="1500"
      >
        <RegisterInput
          value={form.specialization}
          onChange={onChange}
          name="specialization"
          type="text"
          placeholder="Enter your specialization"
          isHasIcon="yes"
          icon={faUserDoctor}
        />

        <RegisterInput
          onChange={onFileChange}
          name="nationalImg"
          type="file"
          file="yes"
          noteFile="Please upload your national id image"
        />

        <RegisterInput
          onChange={onFileChange}
          name="syndicateImg"
          type="file"
          file="yes"
          noteFile="Please upload your syndicate image"
        />
        <PrevSubBtns onClick={onClick} />
      </div>
    </div>
  );
};

export default Doctor;
