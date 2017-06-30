import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProject } from '../../../actions/dashboardActions';
import NoData from './NoData';
import Loader from '../../common/Loader';
import { isEmpty } from 'lodash';


class Project extends Component {

    componentDidMount() {
        const { dispatch, getCurrentProject, project } = this.props;
        dispatch(getCurrentProject(project.id));
    }

    render() {

        let pageComponents = [];
        let testComponents = [];

        if (!isEmpty(this.props.project.data)) {

            if (!isEmpty(this.props.project.data.pages.data)) {
                pageComponents = this.props.project.data.pages.data.map(page => {
                    return <div key={page.id}>{page.title}</div>
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
    project: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        project: state.project,
        getCurrentProject: getCurrentProject
    }
}

export default connect(mapStateToProps)(Project);
