import React from "react";
import {
  faLock,
  faIdCard,
  faPhoneFlip,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import RegisterInput from "./RegisterInput";
import PrevSubBtns from "./PrevSubBtns";
import style from "../../Css/Authentication/Auth.module.css";
import common from "../../Css/Common.module.css";

const PatientStep2 = ({
  step,
  onChange,
  onClick,
  form,
  onCheckboxChange,
  isChecked,
}) => {
  return (
    <div>
      <div
        className={
          step === "step2" ? `${common.remove_dis_none}` : `${common.dis_none}`
        }
        data-aos="flip-right"
        data-aos-duration="1500"
      >
        <RegisterInput
          value={form.password}
          onChange={onChange}
          isHasIcon="yes"
          icon={faLock}
          name="password"
          id="password"
          type="password"
          placeholder="Enter Password"
        />

        <RegisterInput
          value={form.confirmPassword}
          onChange={onChange}
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          placeholder="Enter Confrim Password"
          isHasIcon="yes"
          icon={faLock}
        />

        <RegisterInput
          value={form.nationalId}
          onChange={onChange}
          name="nationalId"
          id="nationalId"
          type="text"
          placeholder="Enter Your National ID"
          isHasIcon="yes"
          icon={faIdCard}
        />

        <RegisterInput
          value={form.phone}
          onChange={onChange}
          isHasIcon="yes"
          icon={faPhoneFlip}
          id="phone"
          name="phone"
          type="text"
          placeholder="Enter Your Phone Number"
        />

        <div className={style.form_check} style={{ marginBottom: "20px" }}>
          <input
            name="role"
            className={style.form_check_input}
            type="checkbox"
            checked={isChecked}
            onChange={onCheckboxChange}
          />
          <label className={style.form_check_label} htmlFor="role">
            Become a doctor
          </label>
        </div>

        <PrevSubBtns onClick={onClick} />
      </div>
    </div>
  );
};
export default PatientStep2;
