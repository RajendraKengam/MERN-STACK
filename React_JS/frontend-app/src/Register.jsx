import React from "react";
import { Component } from "react";
import './register.css';
class Register extends Component {
    render() {
        return (
            <form className="register-form">
                <fieldset className="register-fieldset">
                    <legend className="register-legend">Register</legend>
                    <label htmlFor="full name" className="register-label">Full Name:</label>
                    <input type="text" id="full name" className="register-input" />
                    <label htmlFor="email" className="register-label">Email:</label>
                    <input type="email" id="email" className="register-input" />
                    <label htmlFor="password" className="register-label">Password:</label>
                    <input type="password" id="password" className="register-input" />
                    <button type="submit" className="register-button">Register</button>
                </fieldset>
            </form>
        )
    }
}
export default Register;