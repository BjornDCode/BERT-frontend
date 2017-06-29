import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSubmitGroup extends Component {

    render() {

        const { value, isLoading } = this.props;

        return(
            <div className="form-group">
                <button className="button medium brand" disabled={isLoading}>{value}</button>
            </div>
        );
    }
}

InputSubmitGroup.propTypes = {
    value: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default InputSubmitGroup;
