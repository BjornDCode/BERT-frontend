import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import DashboardComponent from './DashboardComponent';
import Projects from './subcomponents/Projects';
import Project from './subcomponents/Project';
import Page from './subcomponents/Page';
import Test from './subcomponents/Test';
import CreateProjectForm from './subcomponents/CreateProjectForm';
import CreatePageForm from './subcomponents/CreatePageForm';

class DashboardPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: "Projects"
        }
    }

    render() {

        return(
            <div className="dashboard">

                <DashboardHeader title={this.state.activePage} />

                <div className="dashboard-container">

                    <DashboardSidebar />

                    <Switch>
                        <Route exact path="/dashboard" component={DashboardComponent(Projects, ['project'])} />
                        <Route path="/dashboard/project/create" component={DashboardComponent(CreateProjectForm)} />
                        <Route path="/dashboard/page/create" component={DashboardComponent(CreatePageForm)} />
                        <Route path="/dashboard/test/create" component={DashboardComponent(CreateProjectForm)} />
                        <Route path="/dashboard/project" component={DashboardComponent(Project, ['page', 'test'])} />
                        <Route path="/dashboard/page" component={DashboardComponent(Page, ['test'])} />
                        <Route path="/dashboard/test" component={DashboardComponent(Test)} />
                    </Switch>

                </div>

            </div>
        );
    }
}

export default DashboardPage;
