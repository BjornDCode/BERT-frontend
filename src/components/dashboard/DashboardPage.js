import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import Temp from './subcomponents/Temp';
import Project from './subcomponents/Project';
import NoData from './subcomponents/NoData';
import Loader from '../common/Loader';
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

        if (this.props.projects.data) {
            projectComponents = this.props.projects.data.map(project => {
                return <Project key={project.id} id={project.id} title={project.title} />
            });
        }

        return(
            <div className="dashboard">

                <DashboardHeader title={this.state.activePage} />

                <DashboardSidebar />

                {/*projectComponents ? projectComponents : null*/}

                <Switch>
                    <Route path="/dashboard/project" component={Temp} />
                    <Route path="/dashboard/page" component={Temp} />
                    <Route path="/dashboard/test" component={Temp} />
                </Switch>

                <section className="dashboard-component">
                    {this.props.projects.isLoading ? <Loader /> : (projectComponents.length > 0) ? projectComponents : <NoData type="projects" />}
                </section>

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
