import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import Project from './subcomponents/Project';
import { getProjects } from '../../actions/dashboardActions';

class DashboardPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: "Projects"
        }
    }

    componentDidMount() {
        const { dispatch, getProjects } = this.props;
        dispatch(getProjects());
    }

    render() {

        let projectComponents;

        console.log(this.props.projects);
        if (this.props.projects.projects) {
            projectComponents = this.props.projects.projects.map(project => {
                return <div key={project.id}>{project.title}</div>
            });
        } else {
            projectComponents = <div>No Projects</div>
        }


        return(
            <div className="dashboard">

                <DashboardHeader title={this.state.activePage} />

                {/* <DashboardSidebar /> */}

                {projectComponents ? projectComponents : null}

                <Switch>
                    <Route path="/dashboard/project" component={Project} />
                    <Route path="/dashboard/page" component={Project} />
                    <Route path="/dashboard/test" component={Project} />
                </Switch>

            </div>
        );
    }
}

DashboardPage.propTypes = {
    getProjects: PropTypes.func.isRequired,
    projects: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        getProjects: getProjects,
        projects: state.projects
    }
}

export default connect(mapStateToProps)(DashboardPage);
