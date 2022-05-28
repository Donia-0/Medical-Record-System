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
const ViewLabTests = (props) => {
  useEffect(() => {
    AOS.init();
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
                <LabTest
                  eventKey="0"
                  labTestName="Accordion Item #1"
                  labTestImage={background}
                  date="17/6/1999"
                  note="fkfnerigioerngm"
                />
                <LabTest
                  eventKey="1"
                  labTestName="Accordion Item #2"
                  labTestImage={background}
                  date="17/6/1999"
                  note="fkfnerigioerngm"
                />
                <LabTest
                  eventKey="3"
                  labTestName="Accordion Item #3"
                  labTestImage={background}
                  date="17/6/1999"
                  note="fkfnerigioerngm"
                />
                <LabTest
                  eventKey="4"
                  labTestName="Accordion Item #4"
                  labTestImage={background}
                  date="17/6/1999"
                  note="fkfnerigioerngm"
                />
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewLabTests;
