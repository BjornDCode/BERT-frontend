import axios from 'axios';
import { SET_CURRENT_USER } from './types';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { postConfig } from '../utils/authConfigs';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function userLoginRequest(userData) {
    return dispatch => {

        const authConfig = postConfig('http://bert-backend.dev/auth/signin', userData);

        return axios(authConfig).then(response => {
            const token = response.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwtDecode(token)));
        });
    }
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}
