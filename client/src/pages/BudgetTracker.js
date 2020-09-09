// dependencies
import React, { Component } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

class BudgetTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: "",
      price: "",
      startDate: "",
      myArray: [],
    };
  }
  componentDidMount(props) {
    console.log("MY PROPS = " + this.props);
    axios
      .get(`/api/budgetTracker/chart/${this.props.profile._id}`)
      .then((res) => {
        console.log("THIS IS MY RES DATA = " + res.data);
        let myArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (var i = 0; i < res.data.length; i++) {
          let newStartDate = new Date(res.data[i].startDate);
          let month = newStartDate.getMonth();
          console.log("my date = " + month);
          if (res.data[i].frequency === "annually") {
            let value = myArray[month];
            value = value + res.data[i].price;
            myArray[month] = value;
            // plug it in to the array at the
            console.log("the value is " + value);
          } else {
            for (var x = 0; x < 12; x++) {
              let valueX = myArray[x];
              valueX = valueX + res.data[i].price;
              myArray[x] = valueX;
              console.log("the month value is " + valueX);
            }
          }
        }
        this.setState({
          myArray: myArray,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const data = {
      labels: [
        "September",
        "October",
        "November",
        "December",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
      ],
      datasets: [
        {
          label: "Expense",
          data: this.state.myArray,
          fill: true, // Don't fill area under the line
          borderColor: "red", // Line color
          backgroundColor: [
            "green",
            "red",
            "blue",
            "green",
            "red",
            "blue",
            "green",
            "red",
            "blue",
            "green",
            "red",
            "blue",
          ],
        },
      ],
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };

    return (
      <div className='container'>
        <div
          className='card'
          style={{ width: 1200, height: 740, alignSelf: "center" }}>
          <div>
            <h1>Expense Chart</h1>
          </div>
          <article className='canvas-container'>
            <Bar data={data} />
          </article>
        </div>
      </div>
    );
  }
}

export default BudgetTracker;
