import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import RequestsViewField from "./RequestsViewField";
import bloodpreasure from "../../images/records/bloodpressure/bloodp.png";
import { getRequestDetail, acceptRequest } from "../../actions/adminAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment-timezone";
import style from "../../Css/Admin.module.css";

const RequestsView = (props) => {
  useEffect(() => {
    props.getRequestDetail(props.req_id);
  }, []);
  const { user } = props.admin.requestDetail;
  const onAcceptClick = () => {
    props.acceptRequest(props.req_id);
  };
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {!user ? null : user.name + " needs to be a doctor"}
        </Modal.Title>
      </Modal.Header>
      {!user ? null : (
        <Modal.Body>
          <div className="requests-view">
            <div className="row form-container">
              <div className="col-lg-6">
                <RequestsViewField
                  name="birthdate"
                  labelName="BirthDate"
                  type="text"
                  value={moment(user.birthdate).format("MMM-Do-YYYY")}
                />
              </div>
              <div className="col-lg-6">
                <RequestsViewField
                  name="gender"
                  labelName="Gender"
                  type="text"
                  value={user.gender}
                />
              </div>

              <div className="col-lg-6">
                <RequestsViewField
                  name="nationalId"
                  labelName="Nat Id"
                  type="text"
                  value={"**********" + user.nationalId.slice(10, 14)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="requests-imgs">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={`http://localhost:5000/user/syndicateImg/${user._id}`}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Syndicate image</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="requests-imgs">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={`http://localhost:5000/user/nationalImg/${user._id}`}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">National ID image</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      )}
      <Modal.Footer>
        <div className={style.requests_btn}>
          <div className={style.btns_req}>
            <button
              onClick={onAcceptClick}
              type="button"
              className={`btn ${style.accept}`}
            >
              Accpet
            </button>
          </div>
          <div className={style.btns_req}>
            <button type="button" className={`btn ${style.decline}`}>
              Decline
            </button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

RequestsView.propTypes = {
  getRequestDetail: PropTypes.func.isRequired,
  acceptRequest: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  admin: state.admin,
});
export default connect(mapStateToProps, { getRequestDetail, acceptRequest })(
  RequestsView
);
