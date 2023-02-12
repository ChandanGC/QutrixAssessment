import React from 'react'
import './App.css'
import { Line  } from 'react-chartjs-2';
import {Chart as chartjs} from 'chart.js/auto'

function Graph(data) {
    const Labels = data.data.map(emp => emp.sub);
    const dataVal = data.data.map(val => val.sem);
    const ChartData = {
        labels: Labels,
        datasets: [
            {
                label: "Rs",
                backgroundColor: 'crimson',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: dataVal
            }
        ]
    }
  return (
    <div className="App">
      <div
        style={{
          width: "50%",
          height: "400px",
          display: "inline-flex",
        }}
      >
        <Line
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Food Items Chart",
              fontSize: 25,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    fontSize: 15,
                    fontColor: "#000",
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    fontSize: 16,
                    fontColor: "#000",
                  },
                },
              ],
            },
          }}
          data={ChartData}
        ></Line>
      </div>
    </div>
  );
}

export default Graph