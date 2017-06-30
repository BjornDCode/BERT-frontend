import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Project from './Project';
import NoData from './NoData';
import Loader from '../../common/Loader';
import { getProjects } from '../../../actions/dashboardActions';

class Projects extends Component {

    componentDidMount() {
        const { dispatch, getProjects } = this.props;
        dispatch(getProjects());
    }

    render() {

        let projectComponents;

        if (this.props.projects.data) {
            projectComponents = this.props.projects.data.map(project => {
                return <Project key={project.id} id={project.id} title={project.title} />
            });
        }

        return (
            <div>
                {this.props.projects.isLoading ? <Loader /> : (projectComponents.length > 0) ? projectComponents : <NoData type="projects" />}
            </div>
        );
    }
}



Projects.propTypes = {
    getProjects: PropTypes.func.isRequired,
    projects: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        getProjects: getProjects,
        projects: state.projects
    }
}

export default connect(mapStateToProps)(Projects);
