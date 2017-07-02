import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectWidget from './ProjectWidget';
import NoData from './NoData';
import Loader from '../../common/Loader';
import { getProjects } from '../../../actions/projectsActions';
import { setActivePage, setActiveDashboardComponent } from '../../../actions/activePage';
import { setCurrentProject } from '../../../actions/projectActions';

class Projects extends Component {

    componentDidMount() {
        const { dispatch, getProjects } = this.props;
        dispatch(getProjects());
    }

    componentDidUpdate() {
        const { dispatch, setActivePage, setActiveDashboardComponent } = this.props;
        dispatch(setActivePage("Projects"));
        dispatch(setActiveDashboardComponent("Projects"));
    }

    render() {

        let projectComponents;

        if (this.props.projects.data) {
            projectComponents = this.props.projects.data.map(project => {
                return <ProjectWidget key={project.id} id={project.id} title={project.title} />
            });
        }

        return (
            <div className="widget-container">
                {this.props.projects.isLoading ? <Loader /> : (projectComponents.length > 0) ? projectComponents : <NoData type="projects" />}
            </div>
        );
    }
}



Projects.propTypes = {
    getProjects: PropTypes.func.isRequired,
    setActivePage: PropTypes.func.isRequired,
    setActiveDashboardComponent: PropTypes.func.isRequired,
    projects: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired,
    setCurrentProject: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        getProjects: getProjects,
        projects: state.projects,
        project: state.project,
        setActivePage,
        setActiveDashboardComponent,
        setCurrentProject
    }
}

export default connect(mapStateToProps)(Projects);
