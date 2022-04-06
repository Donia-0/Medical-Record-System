import React, { useState, useEffect } from "react";
import male from "../../images/male.png";
import female from "../../images/female.png";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getCurrentProfile } from "./../../actions/profileAction";
import Switch from "react-switch";
import ProfileEditInput from "./ProfileEditInput";

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("/");
}

const Profile = (props) => {
  const [form, setFrom] = useState({
    name: "",
    email: "",
    phone: "",
    birthdate: "",
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
        birthdate: profile.myProfile.birthdate,
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
        <div className="profile-img">
          <span className="profile-span-img">
            <img src={form.gender === "female" ? female : male} />
          </span>
          <span className="profile-span-name">{form.name}</span>
          {profile.myProfile.role === 1 ? (
            <span className="profile-span-spec"> / {form.specialization}</span>
          ) : null}
        </div>
        <div className="profile-info">
          <div className="profile-form">
            <span className="edit-switch-btn">
              <label className="" style={{ backgroundColor: "none" }}>
                <Switch
                  onColor="#3ea9ad"
                  offColor="#2a7f82"
                  onChange={handleToggleChange}
                  checked={toggleChecked}
                />
              </label>
            </span>
            <span className="edit-switch-note">Switch To Edit</span>
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
                  />
                </div>
                <div className="col-lg-12 col-md-8 col-sm-12">
                  <ProfileEditInput
                    value={formatDate(form.birthdate)}
                    name="brithdate"
                    labelFor="brithdate"
                    labelName="Brithdate"
                    edit={edit}
                    type={edit === false ? "text" : "date"}
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
                  />
                </div>
                <div className="col-lg-12 col-md-8 col-sm-12">
                  <div className="row btn-edit">
                    <div className="col-lg-6">
                      <div className="btn-edit-change-password">
                        {edit === true ? (
                          <button className="btn">Change Password</button>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="btn-edit-save">
                        {edit === true ? (
                          <button className="btn ">Save</button>
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
  return <div className="profile">{profileContent}</div>;
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
export default connect(mapStateToProps, { getCurrentProfile })(Profile);
