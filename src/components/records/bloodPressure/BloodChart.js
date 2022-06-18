import React, { useEffect } from "react";
import "chart.js/auto";
import { connect } from "react-redux";
import { getBloodPressure } from "../../../actions/records/bloodPressureAction";
import Chart from "../Chart";
import dateFormat from "../../../utils/dateFormat";
import getDayName from "../../../utils/getDateByName";
import bloodpreasureImage from "../../../images/records/bloodpressure/bloodp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import style from "../../../Css/records/ViewRecord.module.css";
const BloodChart = (props) => {
  const { bloodPressure, loading } = props.bloodpressures;
  useEffect(() => {
    if (localStorage.patientId) {
      const userData = {
        patientId: localStorage.getItem("patientId"),
      };
      props.getBloodPressure(userData);
    } else {
      props.getBloodPressure();
    }
  }, []);

  var days = [];
  var systolic = [];
  var diastolic = [];
  var pulse = [];
  const arr = bloodPressure.sort().slice(0, 7);
  console.log(arr);
  arr.forEach((element) => {
    const found = days.find(
      (day) => day === getDayName(dateFormat(element.date))
    );
    if (!found) {
      days.push(getDayName(dateFormat(element.date)));
      systolic.push(element.systolic);
      diastolic.push(element.diastolic);
      pulse.push(element.pulse);
    }
  });
  console.log(days.reverse());
  const data = {
    labels: days.reverse(),
    datasets: [
      {
        label: "Systolic",
        data: systolic.reverse(),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Diastolic",
        data: diastolic.reverse(),
        backgroundColor: ["rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgba(255, 159, 64, 1)"],
        borderWidth: 1,
      },
      {
        label: "Pulse",
        data: pulse.reverse(),
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={style.view}>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className={style.view_header}>
            <img src={bloodpreasureImage} /> Blood Preasure Measurements
          </div>
          <div className={style.graph_title}>
            <FontAwesomeIcon icon={faChartBar} /> Graph for the last seven days
          </div>
          <div className="row"></div>
        </div>
      </div>
      <div className="graph" style={{ width: "80%", margin: "40px auto" }}>
        <Chart label={days.reverse()} data={data} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bloodpressures: state.bloodpressures,
});
export default connect(mapStateToProps, { getBloodPressure })(BloodChart);
