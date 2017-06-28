import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import SignupForm from './SignupForm';
import FlashMessagesList from '../flash/FlashMessagesList';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends Component {

    render() {

        const { userSignupRequest, addFlashMessage } = this.props;

        return(
            <div className="signup">
                <h1>SignupPage</h1>
                <FlashMessagesList />
                <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} />
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

 export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage);
