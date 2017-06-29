import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import IndexPage from '../index/IndexPage';
import SignupPage from '../signup/SignupPage';
import LoginPage from '../login/LoginPage';
import DashboardPage from '../dashboard/DashboardPage';
import Route404 from './Route404';
import requireAuth from '../../utils/requireAuth';
import noAuth from '../../utils/noAuth';

class Main extends Component {

    render() {
        return(
            <main className="main">
                <Switch>
                    <Route exact path="/" component={noAuth(IndexPage)} />
                    <Route path="/signup" component={noAuth(SignupPage)} />
                    <Route path="/signin" component={noAuth(LoginPage)} />
                    <Route path="/dashboard" component={requireAuth(DashboardPage)} />
                    <Route component={Route404} />
                </Switch>
            </main>
        );
    }
}
 export default Main;
