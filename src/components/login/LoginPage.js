import React, { Component } from 'react';
import FlashMessagesList from '../flash/FlashMessagesList';

class LoginPage extends Component {

    render() {
        return(
            <div className="signin">
                <h1>LoginPage</h1>
                <FlashMessagesList />
            </div>
        );
    }
}
 export default LoginPage;
