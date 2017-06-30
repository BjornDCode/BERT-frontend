import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logout from '../login/Logout';

class DashboardHeader extends Component {

    render() {

        return(
            <header className="dashboard-header card">
                <h1>{this.props.activePage.page}</h1>
                <Logout />
            </header>
        );
    }
}

DashboardHeader.propTypes = {
    activePage: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        activePage: state.activePage
    }
}

export default connect(mapStateToProps)(DashboardHeader);
