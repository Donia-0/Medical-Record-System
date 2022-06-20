import React, { useEffect } from "react";
import style from "../../../Css/records/ViewRecord.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Accordion } from "react-bootstrap";
import background from "../../../images/card3.jpg";
import LabTest from "./LabTest";
import labTestImage from "../../../images/x-ray.png";
import { connect } from "react-redux";
import { getAllTests } from "../../../actions/records/LabtestAction";
import moment from "moment-timezone";
const ViewLabTests = (props) => {
  const { labTests } = props.labtest;
  console.log(labTests);
  useEffect(() => {
    AOS.init();
    props.getAllTests();
  }, []);
  return (
    <div
      className={style.view}
      style={{ marginLeft: "0" }}
      data-aos="zoom-in-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className={style.view_header}>
            <img src={labTestImage} />
            Lab Tests
          </div>
        </div>
      </div>
      <div className={style.view_data}>
        <div className="row">
          <div className="col-lg-12">
            <div className={style.add_view_btn}>
              <Link
                to="/records/addlabtest"
                type="button"
                className="btn btn-primary"
              >
                <FontAwesomeIcon icon={faPlus} /> Add
              </Link>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Accordion>
              <div className="row">
                {labTests.length !== 0 ? (
                  labTests.map((lab, index) => {
                    return (
                      <LabTest
                        id={lab._id}
                        eventKey={index}
                        labTestName={lab.title}
                        labTestImages={lab.files}
                        date={moment(lab.date).format("yyyy-MM-DD")}
                        note={lab.note}
                      />
                    );
                  })
                ) : (
                  <div className="text-center">there no labtests yet</div>
                )}
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToMap = (state) => ({
  labtest: state.labtest,
});

export default connect(mapStateToMap, { getAllTests })(ViewLabTests);
