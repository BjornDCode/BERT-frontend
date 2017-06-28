import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputFieldGroup extends Component {

    render() {

        const { type, label, name, value, placeholder, onChange, errors } = this.props;

        return(
            <div className="form-group">
                <label>{label}:</label>
                <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange}  />
                {errors.username && <span className="error">{errors.username[0]}</span>}
            </div>
        );
    }
}

InputFieldGroup.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object
}

InputFieldGroup.defaultProps = {
    type: 'text'
}

export default InputFieldGroup;
