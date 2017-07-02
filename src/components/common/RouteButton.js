import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class RouteButton extends Component {

    render() {

        const { size, color, redirectTo, text } = this.props;

        return(
            <button className={"button route-button " + size + " " + color}><Link to={redirectTo}>{text}</Link></button>
        );
    }
}

RouteButton.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    redirectTo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default RouteButton;
