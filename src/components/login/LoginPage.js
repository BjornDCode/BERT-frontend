import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlashMessagesList from '../flash/FlashMessagesList';
import LoginForm from './LoginForm';
import { userLoginRequest } from '../../actions/authActions';
import { addFlashMessage } from '../../actions/flashMessages';

class LoginPage extends Component {

    render() {

        const { userLoginRequest, addFlashMessage } = this.props;

        return(
            <div className="signin card-page">
                <FlashMessagesList />
                <LoginForm userLoginRequest={userLoginRequest} addFlashMessage={addFlashMessage} />
            </div>
        );
    }
}

LoginPage.propTypes = {
    userLoginRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
};

export default connect(null, { userLoginRequest, addFlashMessage })(LoginPage);
