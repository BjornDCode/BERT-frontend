import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProject } from '../../../actions/projectActions';
import NoData from './NoData';
import Loader from '../../common/Loader';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import { setActivePage, setActiveDashboardComponent } from '../../../actions/activePage';


class Project extends Component {

    componentDidMount() {
        const { dispatch, getCurrentProject, project } = this.props;
        dispatch(getCurrentProject(project.id));
    }

    componentDidUpdate() {
        const { dispatch, setActivePage, setActiveDashboardComponent, project } = this.props;
        let title = project.id ? project.data.title : "Project";
        dispatch(setActivePage(title));
        dispatch(setActiveDashboardComponent("Project"));
    }

    render() {

        let pageComponents = [];
        let testComponents = [];

        if (!isEmpty(this.props.project.data)) {

            if (!isEmpty(this.props.project.data.pages.data)) {
                pageComponents = this.props.project.data.pages.data.map(page => {
                    return <div key={page.id}><Link to="/dashboard/page">{page.title}</Link></div>
                });
            }

            if (!isEmpty(this.props.project.data.tests.data)) {
                testComponents = this.props.project.data.tests.data.map(test => {
                    return <div key={test.id}>{test.version}</div>
                });
            }

        }

        return (
            <div className="project">
                <div className="pages">
                    <h4>Pages</h4>
                    {this.props.project.isLoading ? <Loader /> : (pageComponents.length > 0) ? pageComponents : <NoData type="pages" /> }
                </div>
                <div className="tests">
                    <h4>Tests</h4>
                    {this.props.project.isLoading ? <Loader /> : (testComponents.length > 0) ? testComponents : <NoData type="pages" /> }
                </div>
            </div>
        );
    }
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
    getCurrentProject: PropTypes.func.isRequired,
    setActivePage: PropTypes.func.isRequired,
    setActiveDashboardComponent: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        project: state.project,
        getCurrentProject: getCurrentProject,
        setActivePage: setActivePage,
        setActiveDashboardComponent: setActiveDashboardComponent
    }
}

export default connect(mapStateToProps)(Project);
