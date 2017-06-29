import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/authActions';

import store from './store';

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);
registerServiceWorker();
