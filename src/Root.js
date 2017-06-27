import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import App from './layouts/App';
import history from './history';

class Root extends Component {

    render() {
        return (
            <Provider store={this.props.store}>
                <Router history={history}>
                    <Route path="/" component={App} />
                </Router>
            </Provider>
        );
    }

}

export default Root;
