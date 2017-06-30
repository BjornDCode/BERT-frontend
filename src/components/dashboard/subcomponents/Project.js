import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {

    render() {

        const { id, title } = this.props;

        return(
            <div className="project">
                <h3>{title}</h3>
            </div>
        );
    }
}

Project.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default Project;
