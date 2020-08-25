// dependencies
import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    return (
        <div className="container" id="contact">
                    <div className="page-header">
            <img src="/images/renoosterlogo.png" alt="Renooster Logo" />
            <h1>Renooster</h1>
            <h4>The easy way to manage your subscriptions!</h4>
        </div>
            <div className="row">
                <div className="col s12 l8 offset-l2">
                    <div className="card-panel">
                        <h5 className="card-title">Login to Renooster</h5>
                        <div className="row">
                            <form
                                className="col s12"
                                // onSubmit={handleSubmit}
                            >
                                <div className="row">
                                    <div className="input-field col s12">
                                        <span>Email</span>
                                        <input
                                            autoComplete="email"
                                            name="email"
                                            // onChange={handleChange}
                                            type="email"
                                            // value={email}
                                        />
                                    </div>
                                    <div className="input-field col s12">
                                        <span>Password</span>
                                        <input
                                            autoComplete="password"
                                            name="password"
                                            // onChange={handleChange}
                                            type="text"
                                            // value={password}
                                        />
                                    </div>
                                    <Link to="/subscriptions" className="btn">Login</Link>
                                    <Link to="/signup" className="btn">Sign-up</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Login