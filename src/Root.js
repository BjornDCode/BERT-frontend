import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/partials/App';

class Root extends Component {

    render() {
        return (
            <Provider store={this.props.store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        );
    }

}

export default Root;
