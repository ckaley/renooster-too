// dependencies
import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import moment from "moment-timezone";

class Subscription extends React.Component {
  state = {
    name: "",
    startDate: "",
    endDate: "",
    price: 0,
    frequency: "monthly",
    profileID: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log("This is profileID:" + this.state.profileID);
    console.log("THIS IS THE STARTDATE =" + this.state.startDate);
    axios
      .post("/api/subscriptions", {
        name: this.state.name,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        price: this.state.price,
        frequency: this.state.frequency,
        profileID: this.state.profileID,
      })
      .then((response) => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          console.log("A subscription has been created!");
          this.props.history.push("/subscriptions");
        }
      })
      .catch((error) => {
        console.log("login error: ");
        console.log(error);
      });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleStartDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  handleEndDateChange = (date) => {
    this.setState({
      endDate: date,
    });
  };
  handleOptionChange = (changeEvent) => {
    this.setState({
      frequency: changeEvent.target.value,
    });
  };

  componentDidMount() {
    this.setState({
      profileID: this.props.profile._id,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 l8 offset-l2">
            <div className="card-panel">
              <h5 className="card-title">Add a Subscription</h5>
              <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="input-field col s12" id="field-name">
                      <span>Name</span>
                      <input
                        autoComplete="name"
                        className="form-control"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="row">
                      <div className="input-field col s12" id="field-name-date">
                        <span>Start Date: </span>
                        <DatePicker
                          selected={this.state.startDate}
                          onSelect={this.handleSelect}
                          onChange={this.handleStartDateChange}
                          showDateSelect
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12" id="field-name-date">
                        <span>End Date: </span>
                        <DatePicker
                          selected={this.state.endDate}
                          onSelect={this.handleSelect}
                          onChange={this.handleEndDateChange}
                          showDateSelect
                        />
                      </div>
                    </div>
                    <div className="input-field col s12" id="field-name">
                      <span>Price</span>
                      <input
                        autoComplete="price"
                        name="price"
                        type="text"
                        value={this.state.price}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div>
                      <div id="field-name-date">
                        <span>Frequency</span>
                        <p>
                          <label>
                            <input
                              type="radio"
                              value="monthly"
                              checked={this.state.frequency === "monthly"}
                              onChange={this.handleOptionChange}
                              name="frequency"
                            />
                            <span>Monthly</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <input
                              type="radio"
                              value="annually"
                              checked={this.state.frequency === "annually"}
                              onChange={this.handleOptionChange}
                              name="frequency"
                            />
                            <span>Annually</span>
                          </label>
                        </p>
                      </div>
                    </div>
                    <button className="btn" type="submit">
                      Submit
                    </button>
                    <Link to="/subscriptions" className="btn">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscription;
