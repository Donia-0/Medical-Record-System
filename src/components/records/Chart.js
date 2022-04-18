import React, { useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto";
import { connect } from "react-redux";
import { getBloodPressure } from "../../actions/records/bloodPressureAction";
import dateFormat from "../../utils/dateFormat";
var numdays = 7; // Change it to the number of days you need
var d = new Date();
var n = d.getDay();
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var myArray = new Array(numdays);
for (var i = 0; i < numdays; i++) {
  myArray[i] = weekday[(n - i + numdays) % 7];
}

const Chart = (props) => {
  const { bloodPressure, loading } = props.bloodpressures;
  useEffect(() => {
    props.getBloodPressure();
  }, []);
  const getDayName = (dateString) =>
    new Intl.DateTimeFormat("en-Us", { weekday: "long" }).format(
      new Date(dateString)
    );
  var days = [];
  var systolic = [];
  var diastolic = [];
  var pulse = [];
  const arr = bloodPressure.slice(0, 7).sort();
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

  const labels = days.reverse();
  return (
    <div style={{ width: "40%" }}>
      <Bar
        data={{
          labels,
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

            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={200}
        width={200}
        options={{
          maintainAspectRatio: false,
          scale: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 222,
            },
          },
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bloodpressures: state.bloodpressures,
});
export default connect(mapStateToProps, { getBloodPressure })(Chart);
