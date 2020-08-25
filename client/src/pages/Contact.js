// dependencies
import React, { useState } from 'react'
import axios from 'axios'

const Contact = (props) => {
    // // state hook variables
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastEmail] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)

    // below is equivalent to above
    // const [state, setState] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     tel: "",
    //     message: "",
    //     success: false
    // })

    const handleChange = event => {
        // destructure event
        const { name, value } = event.target

        // update state
        switch (name) {
            case 'firstName':
                setFirstName(value)
                // equivalent to:
                // setState({...state, firstName: value})
                break
            case 'lastName':
                setLastEmail(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'tel':
                setTel(value)
                break
            case 'message':
                setMessage(value)
                break
            default:
                return
        }
    }

    const handleSubmit = event => {
        event.preventDefault()

        // create payload
        const payload = {
            firstName,
            lastName,
            email,
            tel,
            message
        }

        // send email
        axios.post('/api/contact/', payload)
            .then(() => {
                // update state
                setFirstName('')
                setLastEmail('')
                setEmail('')
                setTel('')
                setMessage('')
                setSuccess(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container" id="contact">
            <div className="row">
                <div className="col s12 l8 offset-l2">
                    <div className="card-panel">
                    <h5 className="card-title">Contact Us</h5>
                        <div className="row">
                            <form
                                className="col s12"
                                onSubmit={handleSubmit}
                            >
                                <div className="row">
                                    <div className="input-field col s6">
                                        <span>First Name</span>
                                        <input
                                            autoComplete="given-name"
                                            name="firstName"
                                            onChange={handleChange}
                                            type="text"
                                            value={firstName}
                                        />
                                    </div>
                                    <div className="input-field col s6">
                                        <span>Last Name</span>
                                        <input
                                            autoComplete="family-name"
                                            name="lastName"
                                            onChange={handleChange}
                                            type="text"
                                            value={lastName}
                                        />
                                    </div>
                                    <div className="input-field col s12">
                                        <span>Email</span>
                                        <input
                                            autoComplete="email"
                                            name="email"
                                            onChange={handleChange}
                                            type="email"
                                            value={email}
                                        />
                                    </div>
                                    <div className="input-field col s12">
                                        <span>Phone</span>
                                        <input
                                            autoComplete="tel"
                                            name="tel"
                                            onChange={handleChange}
                                            type="tel"
                                            value={tel}
                                        />
                                    </div>
                                    <div className="input-field col s12">
                                        <span>Message</span>
                                        <textarea
                                            className="materialize-textarea"
                                            onChange={handleChange}
                                            name="message"
                                            value={message}
                                        >
                                        </textarea>
                                    </div>
                                    <div className="col s12">
                                        {
                                            success
                                                ? <span className="success">Your message has been sent</span>
                                                : <button className="btn" type="submit">Send</button>
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
