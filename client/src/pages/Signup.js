// dependencies
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      redirectTo: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");
    axios
      .post("/api/profile", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          console.log("An account has been created!");
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log("login error: ");
        console.log(error);
      });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <div className='container' id='contact'>
        <div className='page-header'>
          <img src='/images/renoosterlogo.png' alt='Renooster Logo' />
          <h1>Renooster</h1>
          <h4>The easy way to manage your subscriptions!</h4>
        </div>
        <div className='row'>
          <div className='col s12 l8 offset-l2'>
            <div className='card-panel'>
              <h5 className='card-title'>Sign-Up for Renooster</h5>
              <div className='row'>
                <form className='col s12' onSubmit={this.handleSubmit}>
                  <div className='row'>
                    <div className='input-field col s6'>
                      <span>First Name</span>
                      <input
                        autoComplete='firstName'
                        name='firstName'
                        type='text'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className='input-field col s6'>
                      <span>Last Name</span>
                      <input
                        autoComplete='lastName'
                        name='lastName'
                        type='text'
                        value={this.state.lastName}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className='input-field col s12'>
                      <span>Email</span>
                      <input
                        autoComplete='email'
                        name='email'
                        type='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className='input-field col s12'>
                      <span>Password</span>
                      <input
                        autoComplete='password'
                        name='password'
                        type='text'
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <button className='btn' type='submit'>
                      Sign-up
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

export default Signup;
