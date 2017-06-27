import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import SignupForm from './SignupForm';

class SignupPage extends Component {

    render() {

        const { userSignupRequest } = this.props;

        return(
            <div className="signup">
                <h1>SignupPage</h1>
                <SignupForm userSignupRequest={userSignupRequest} />
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

 export default connect(null, { userSignupRequest })(SignupPage);
