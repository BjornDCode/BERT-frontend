import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import DashboardComponent from './DashboardComponent';
import Projects from './subcomponents/Projects';
import Project from './subcomponents/Project';
import Page from './subcomponents/Page';
import Test from './subcomponents/Test';

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
                        <Route exact path="/dashboard" component={DashboardComponent(Projects)} />
                        <Route path="/dashboard/project" component={DashboardComponent(Project)} />
                        <Route path="/dashboard/page" component={DashboardComponent(Page)} />
                        <Route path="/dashboard/test" component={DashboardComponent(Test)} />
                    </Switch>

                </div>

            </div>
        );
    }
}

export default DashboardPage;
