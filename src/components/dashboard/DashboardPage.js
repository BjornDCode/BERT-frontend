import React, { Component } from 'react';
import FlashMessagesList from '../flash/FlashMessagesList';
import Logout from '../login/Logout';

class DashboardPage extends Component {

    render() {
        return(
            <div className="dashboard">

                <h1>DashboardPage</h1>

                <FlashMessagesList />
                <Logout />

            </div>
        );
    }
}

export default DashboardPage;
