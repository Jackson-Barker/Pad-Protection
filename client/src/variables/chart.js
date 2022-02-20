import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import "./style.css";
const state = {
  labels: ["January", "February", "March"],
  datasets: [
    {
      label: "Rainfall",
      fill: false,
      lineTension: 4.5,
      backgroundColor: "rgb(22,25,48)",
      borderColor: "rgba(119,52,169)",
      borderWidth: 2,
      data: [65, 59, 80],
    },
  ],
};

export default class App extends React.Component {
  render() {
    return (
      <div class="col-xl-4 col-md-5 mb-5 ">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div className="bgrd">
                  <Doughnut data={state} width="220px" />
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
              </div>
              <div class="col-auto mt-5">
                <h4>Coverage: $40,000</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}