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
    price: "",
    frequency: "monthly",
    profileID: "",
  };

  handleSubmit(event) {
    event.preventDefault();

    console.log("handleSubmit");
    axios
      .put(`/api/subscriptions/${this.state.id}`, {
        name: this.state.name,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        price: this.state.price,
        frequency: this.state.frequency,
      })
      .then((response) => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          console.log("A subscription has been updated!");
          this.props.history.push("/subscriptions");
        }
      })
      .catch((error) => {
        console.log("login error: ");
        console.log(error);
      });
  }

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
    axios
      .get(`/api/subscriptions/edit/${this.props.match.params.id}`)
      .then((res) => {
        let newStartDate = new Date(res.data.startDate);
        let newEndDate = new Date(res.data.endDate);
        this.setState({
          id: res.data._id,
          name: res.data.name,
          startDate: newStartDate,
          endDate: newEndDate,
          price: res.data.price,
          frequency: res.data.frequency,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className='container' id='newSubscription'>
        <div className='row'>
          <div className='col s12 l8 offset-l2'>
            <div className='card-panel'>
              <h5 className='card-title'>Edit a Subscription</h5>
              <div className='row'>
                <form className='col s12' onSubmit={this.handleSubmit}>
                  <div className='row'>
                    <div className='input-field col s12'>
                      <span>Name</span>
                      <input
                        autoComplete='name'
                        className='form-control'
                        name='name'
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className='row'>
                      <div className='input-field col s12'>
                        <span>Start Date</span>
                        <DatePicker
                          selected={this.state.startDate}
                          onSelect={this.handleSelect}
                          onChange={this.handleStartDateChange}
                          showDateSelect
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='input-field col s12'>
                        <span>End Date</span>
                        <DatePicker
                          selected={this.state.endDate}
                          onSelect={this.handleSelect}
                          onChange={this.handleEndDateChange}
                          showDateSelect
                        />
                      </div>
                    </div>
                    <div className='input-field col s12'>
                      <span>Price</span>
                      <input
                        autoComplete='price'
                        name='price'
                        type='text'
                        value={this.state.price}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div>
                      <span>Frequency</span>
                      <p>
                        <label>
                          <input
                            type='radio'
                            value='weekly'
                            checked={this.state.frequency === "weekly"}
                            onChange={this.handleOptionChange}
                            name='frequency'
                          />
                          <span>Weekly</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input
                            type='radio'
                            value='monthly'
                            checked={this.state.frequency === "monthly"}
                            onChange={this.handleOptionChange}
                            name='frequency'
                          />
                          <span>Monthly</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          <input
                            type='radio'
                            value='annually'
                            checked={this.state.frequency === "annually"}
                            onChange={this.handleOptionChange}
                            name='frequency'
                          />
                          <span>Anually</span>
                        </label>
                      </p>
                    </div>
                    <button className='btn' type='submit'>
                      Submit
                    </button>
                    <Link to='/' className='btn'>
                      Home
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
