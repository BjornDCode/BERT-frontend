import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectWidget from './ProjectWidget';
import NoData from './NoData';
import Loader from '../../common/Loader';
import { getProjects } from '../../../actions/projectsActions';

class Projects extends Component {

    componentDidMount() {
        const { dispatch, getProjects } = this.props;
        dispatch(getProjects());
    }

    render() {

        let projectComponents;

        if (this.props.projects.data) {
            projectComponents = this.props.projects.data.map(project => {
                return <ProjectWidget key={project.id} id={project.id} title={project.title} />
            });
        }

        return (
            <div className="projects">
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