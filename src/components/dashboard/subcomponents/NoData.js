import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoData extends Component {

    render() {
        return (
            <div className="no-data">No {this.props.type}</div>
        );
    }
}

NoData.propTypes = {
    type: PropTypes.string.isRequired
};

export default NoData;
