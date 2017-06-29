import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import validateInput from '../../utils/validations/signup';
import InputFieldGroup from '../common/InputFieldGroup';
import InputSubmitGroup from '../common/InputSubmitGroup';

class SignupForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            "username": "",
            "email": "",
            "password": "",
            "password_confirmation": "",
            errors: {},
            isLoading: false,
            redirectTo: null
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors: errors });
        }

        return isValid;
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.userSignupRequest(this.state).then(
                () => {
                    this.props.addFlashMessage({
                        type: 'success',
                        message: 'You signed up successfully. Please sign in!'
                    });
                    this.setState({ redirectTo: "/signin" })
                },
                (error) => this.setState({ errors: error.response.data, isLoading: false })
            );
        }
    }

    render() {

        const { username, email, password, password_confirmation, errors, redirectTo, isLoading } = this.state;

        return(
            <form className="auth-form card" onSubmit={this.onSubmit}>

                {this.state.redirectTo ? <Redirect push={true} to={redirectTo} /> : null}

                <h1>Sign Up</h1>

                <InputFieldGroup type="text" label="Username" name="username" value={username} placeholder="Username" onChange={this.onChange} errors={errors} />
                <InputFieldGroup type="text" label="Email" name="email" value={email} placeholder="Email" onChange={this.onChange} errors={errors} />
                <InputFieldGroup type="password" label="Password" name="password" value={password} placeholder="Password" onChange={this.onChange} errors={errors} />
                <InputFieldGroup type="password" label="Password (Repeat)" name="password_confirmation" value={password_confirmation} placeholder="Repeat Password" onChange={this.onChange} errors={errors} />

                <InputSubmitGroup value="Sign Up" isLoading={isLoading} />

                <Link to="/signin" className="form-link" >Already have an account? Sign in</Link>

            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
};

export default SignupForm;
