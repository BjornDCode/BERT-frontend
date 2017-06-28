import React, { Component } from 'react';
import FlashMessagesList from '../flash/FlashMessagesList';

class DashboardPage extends Component {

    render() {
        return(
            <div className="dashboard">

                <h1>DashboardPage</h1>

                <FlashMessagesList />

            </div>
        );
    }
}
 export default DashboardPage;
