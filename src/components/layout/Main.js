import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import IndexPage from '../index/IndexPage';
import SignupPage from '../signup/SignupPage';
import LoginPage from '../login/LoginPage';
import DashboardPage from '../dashboard/DashboardPage';

class Main extends Component {

    render() {
        return(
            <main className="main">
                <Switch>
                    <Route exact path="/" component={IndexPage} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/signin" component={LoginPage} />
                    <Route path="/dashboard" component={DashboardPage} />
                </Switch>
            </main>
        );
    }
}
 export default Main;
