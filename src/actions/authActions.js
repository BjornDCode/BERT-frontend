import axios from 'axios';
import { SET_CURRENT_USER, CLEAR_STATE } from './types';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { postConfig } from '../utils/authConfigs';
import { BERT_API_URL } from '../utils/config';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function userLoginRequest(userData) {
    return dispatch => {

        const authConfig = postConfig(BERT_API_URL + '/auth/signin', userData);

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
        dispatch(resetState());
    }
}

export function resetState() {
    return {
        type: CLEAR_STATE
    }
}
