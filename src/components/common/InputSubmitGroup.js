import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSubmitGroup extends Component {

    render() {

        const { value, isLoading } = this.props;

        return(
            <div className="form-group">
                <input type="submit" value={value} disabled={isLoading} />
            </div>
        );
    }
}

InputSubmitGroup.propTypes = {
    value: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default InputSubmitGroup;
