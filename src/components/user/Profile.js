import React, { useState, useEffect } from "react";
import male from "../../images/male.png";
import female from "../../images/female.png";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getCurrentProfile, updateUser } from "./../../actions/profileAction";
import Switch from "react-switch";
import ProfileEditInput from "./ProfileEditInput";
import style from "../../Css/User/Profile.module.css";
import moment from "moment-timezone";
import ChangePassword from "./ChangePassword";
const Profile = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  const [form, setFrom] = useState({
    name: "",
    email: "",
    phone: "",
    birthdate: new Date(),
    gender: "",
    specialization: "",
  });
  const [edit, setEdit] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);
  const { profile, loading } = props.profile;
  const handleToggleChange = (checked) => {
    setToggleChecked(checked);
    setEdit(!edit);
  };
  const onSaveClick = (e) => {
    e.preventDefault();
    var update = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      gender: form.gender,
    };
    if (form.birthdate !== "") {
      update = { ...update, birthdate: form.birthdate };
    }
    console.log(update);
    props.updateUser(update);
  };
  const onInputChange = (evt) => {
    const value = evt.target.value;
    setFrom({
      ...form,
      [evt.target.name]: value,
    });
  };
  useEffect(() => {
    props.getCurrentProfile();
  }, []);

  useEffect(() => {
    if (profile !== null) {
      setFrom({
        name: profile.myProfile.name,
        email: profile.myProfile.email,
        phone: profile.myProfile.phone,
        gender: profile.myProfile.gender,
        specialization: profile.myProfile.specialization,
      });
    }
  }, [profile]);
  let profileContent;
  if (profile === null || loading) {
    profileContent = (
      <div className="user">
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else if (profile !== null) {
    profileContent = (
      <div>
        <div className={style.profile_img}>
          <span className={style.profile_span_img}>
            <img src={form.gender === "female" ? female : male} />
          </span>
          <span className={style.profile_span_name}>{form.name}</span>
          {profile.myProfile.role === 1 ? (
            <span className={style.profile_span_spec}>
              {" "}
              / {form.specialization}
            </span>
          ) : null}
        </div>
        <div className={style.profile_info}>
          <div className={style.profile_form}>
            <span className={style.edit_switch_btn}>
              <label className="" style={{ backgroundColor: "none" }}>
                <Switch
                  onColor="#307b8c"
                  offColor="#3ca6a6"
                  onChange={handleToggleChange}
                  checked={toggleChecked}
                />
              </label>
            </span>
            <span className={style.edit_switch_note}>Switch To Edit</span>
            <form action="">
              <div className="row">
                <div className="col-lg-12 col-md-8 col-sm-12">
                  <ProfileEditInput
                    value={form.email}
                    name="email"
                    labelFor="email"
                    labelName="Email"
                    edit={edit}
                    type="email"
                    onChange={onInputChange}
                  />
                </div>
                <div className="col-lg-12 col-md-8 col-sm-12">
                  <ProfileEditInput
                    value={form.phone}
                    name="phone"
                    labelFor="phone"
                    labelName="Phone"
                    edit={edit}
                    type="text"
                    onChange={onInputChange}
                  />
                </div>
                <div className="col-lg-12 col-md-8 col-sm-12">
                  <ProfileEditInput
                    value={
                      edit === false
                        ? moment(profile.myProfile.birthdate).format(
                            "MMM Do YY"
                          )
                        : form.birthdate
                    }
                    name="birthdate"
                    labelFor="birthdate"
                    labelName="Brithdate"
                    edit={edit}
                    type={edit === false ? "text" : "date"}
                    onChange={onInputChange}
                  />
                </div>
                <div className="col-lg-12 col-md-8 col-sm-12">
                  <ProfileEditInput
                    value={form.gender}
                    name="gender"
                    labelFor="gender"
                    labelName="Gender"
                    edit={edit}
                    type="text"
                    onChange={onInputChange}
                  />
                </div>
                <div className="col-lg-12 col-md-8 col-sm-12">
                  <div className={`row ${style.btn_edit}`}>
                    <div className="col-lg-6">
                      <div className={style.btn_edit_change_password}>
                        {edit === true ? (
                          <button className="btn">Change Password</button>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className={style.btn_edit_save}>
                        {edit === true ? (
                          <button onClick={onSaveClick} className="btn">
                            Save
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return <div className={style.profile}>{profileContent}</div>;
  // return (
  //   <div className={style.profile}>
  //     <button className="btn-primary" onClick={() => setModalShow(true)}>
  //       Change Password
  //     </button>

  //     <ChangePassword show={modalShow} onHide={() => setModalShow(false)} />
  //   </div>
  // );
};

Profile.prototypes = {
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile, updateUser })(
  Profile
);
