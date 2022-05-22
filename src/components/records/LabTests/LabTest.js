import React, { useEffect } from "react";
import style from "../../../Css/records/ViewRecord.module.css";
import { Accordion } from "react-bootstrap";
const LabTest = ({ eventKey, labTestName, labTestImage, date, note }) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12">
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header className={style.lab_test_name}>
          {labTestName}
        </Accordion.Header>
        <Accordion.Body>
          <div className="row">
            <div className="col-lg-12">
              <div className={style.lab_test_information_container}>
                <div className="col-lg-2">
                  <div className={style.lab_test_label}>Date:</div>
                </div>
                <div className="col-lg-10">
                  <div className={style.lab_test_information}>{date}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={style.lab_test_information_container}>
                <div className="col-lg-2">
                  <div className={style.lab_test_label}>Note:</div>
                </div>
                <div className="col-lg-10">
                  <div className={style.lab_test_information}>{note}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className={style.accordion_img}
                style={{ backgroundImage: `url(${labTestImage})` }}
              ></div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default LabTest;
