import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AddNewButton extends Component {

    render() {

        const { createLocation } = this.props;

        return (
            <button className="button small brand">
                <Link to={"/dashboard/" + createLocation + "/create"}>Add {createLocation}</Link>
            </button>
        );
    }
}


AddNewButton.propTypes = {
    createLocation: PropTypes.string.isRequired
};

export default AddNewButton;
