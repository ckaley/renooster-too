// dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("THis.State.Password  " + this.state.password);
    console.log("THis.State.Email  " + this.state.email);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handlePasswordChange(event) {
    this.password = event.target.value;
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
              <h5 className='card-title'>Login to Renooster</h5>
              <div className='row'>
                <form className='col s12'>
                  <div className='row'>
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
                    <Link
                      to='/subscriptions'
                      className='btn'
                      onClick={this.handleSubmit}>
                      Login
                    </Link>
                    <Link to='/signup' className='btn'>
                      Sign-up
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
export default Login;
