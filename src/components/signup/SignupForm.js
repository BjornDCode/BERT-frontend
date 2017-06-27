import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignupForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
    }

    render() {
        return(
            <form className="signup-form" onSubmit={this.onSubmit}>
                <h1>Sign Up</h1>

                <div className="form-group">
                    <label>Username:</label>
                    <input type="username" name="username" placeholder="Username" onChange={this.onChange} required />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Email" onChange={this.onChange} required />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="Password" onChange={this.onChange} required />
                </div>

                <div className="form-group">
                    <label>Password Confirmation:</label>
                    <input type="password" name="password_confirmation" placeholder="Password Confirmation" onChange={this.onChange} required />
                </div>

                <div className="form-group">
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;
