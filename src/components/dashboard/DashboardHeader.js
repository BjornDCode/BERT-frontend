import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logout from '../login/Logout';

class DashboardHeader extends Component {

    render() {

        const { title } = this.props;

        return(
            <header className="dashboard-header card">
                <h1>{title}</h1>
                <Logout />
            </header>
        );
    }
}

DashboardHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default DashboardHeader;
