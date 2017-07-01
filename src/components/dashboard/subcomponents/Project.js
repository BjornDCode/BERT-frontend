import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProject } from '../../../actions/projectActions';
import PageWidget from './PageWidget';
import TestWidget from './TestWidget';
import NoData from './NoData';
import Loader from '../../common/Loader';
import { isEmpty } from 'lodash';
import { setActivePage, setActiveDashboardComponent } from '../../../actions/activePage';


class Project extends Component {

    componentDidMount() {
        const { dispatch, getCurrentProject, project } = this.props;
        dispatch(getCurrentProject(project.id));
    }

    componentDidUpdate() {
        const { dispatch, setActivePage, setActiveDashboardComponent, project } = this.props;
        dispatch(setActivePage("Project"));
        let title = project.id ? project.data.title : "Project";
        dispatch(setActiveDashboardComponent(title));
    }

    render() {

        let pageComponents = [];
        let testComponents = [];

        if (!isEmpty(this.props.project.data)) {

            if (!isEmpty(this.props.project.data.pages.data)) {
                pageComponents = this.props.project.data.pages.data.map(page => {
                    return <PageWidget key={page.id} id={page.id} title={page.title} />
                    // return <div key={page.id}><Link to="/dashboard/page">{page.title}</Link></div>
                    // return <Widget key={page.id} id={page.id} title={page.title} redirect="/dashboard/page" setActiveItem={setCurrentPage} dispatch={dispatch} />
                });
            }

            if (!isEmpty(this.props.project.data.tests.data)) {
                testComponents = this.props.project.data.tests.data.map(test => {
                    return <TestWidget key={test.id} id={test.id} version={test.version} page={test.page} />
                });
            }

        }

        return (
            <div className="dashboard-component-container">
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
    setActiveDashboardComponent: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        project: state.project,
        getCurrentProject: getCurrentProject,
        setActivePage: setActivePage,
        setActiveDashboardComponent: setActiveDashboardComponent,
    }
}

export default connect(mapStateToProps)(Project);
