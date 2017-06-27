import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '../Index';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import Dashboard from '../Dashboard';

class Main extends Component {

    render() {
        return(
            <main className="main">
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </main>
        );
    }
}
 export default Main;
