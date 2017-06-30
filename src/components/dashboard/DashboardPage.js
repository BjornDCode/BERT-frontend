import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import DashboardComponent from './DashboardComponent';
import Projects from './subcomponents/Projects';
import Temp from './subcomponents/Temp';

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

                <DashboardSidebar />

                <Switch>
                    <Route exact path="/dashboard" component={DashboardComponent(Projects)} />
                    <Route path="/dashboard/project" component={DashboardComponent(Temp)} />
                    <Route path="/dashboard/page" component={DashboardComponent(Temp)} />
                    <Route path="/dashboard/test" component={DashboardComponent(Temp)} />
                </Switch>

            </div>
        );
    }
}

export default DashboardPage;
