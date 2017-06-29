import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions';

class Logout extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        this.props.logout();
    }


    render() {
        return(
            <button className="button small brand logout" onClick={this.onClick} >Logout</button>
        );
    }
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired
}

 export default connect(null, { logout })(Logout);
