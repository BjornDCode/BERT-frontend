import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputFieldGroup extends Component {

    render() {

        const { type, label, name, value, placeholder, onChange, errors } = this.props;

        const errorClass = errors[name] ? "error" : "";

        return(
            <div className="form-group">
                <div className="form-group-header">
                    <label>{label}:</label>
                    <span className="error">{errors[name] ? errors[name][0] : null}</span>
                </div>
                <input className={"text-input " + errorClass} type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
                {/*errors[name] && <span className="error">{errors[name][0]}</span>*/}

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
