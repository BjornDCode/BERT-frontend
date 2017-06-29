import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import InputFieldGroup from '../common/InputFieldGroup';
import InputSubmitGroup from '../common/InputSubmitGroup';
import validateInput from '../../utils/validations/login';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "email": "",
            "password": "",
            "errors": {},
            "isLoading": false,
            "redirectTo": null
        };

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
        if(this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.userLoginRequest(this.state).then(
                () => {
                    this.props.addFlashMessage({
                        type: 'success',
                        message: 'You are now signed in'
                    });
                    this.setState({ redirectTo: "/dashboard" });
                },
                (error) => this.setState({ errors: error.response.data, isLoading: false })
            );
        }
    }

    render() {

        const { email, password, errors, isLoading, redirectTo } = this.state;

        return(
            <form className="card" onSubmit={this.onSubmit}>

                {this.state.redirectTo ? <Redirect push={true} to={redirectTo} /> : null}

                <h1>Login</h1>

                <InputFieldGroup type="email" label="Email" name="email" value={email} placeholder="Email" onChange={this.onChange} errors={errors} />
                <InputFieldGroup type="password" label="Password" name="password" value={password} placeholder="Password" onChange={this.onChange} errors={errors} />

                <InputSubmitGroup value="Login" isLoading={isLoading} />

                <Link to="/signup" className="form-link" >Don't have an account yet? Sign up</Link>

            </form>
        );
    }
}

LoginForm.propTypes = {
    userLoginRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
};

export default LoginForm;
