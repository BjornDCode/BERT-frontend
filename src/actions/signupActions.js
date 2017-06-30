import axios from 'axios';
import { postConfig } from '../utils/authConfigs';

export function userSignupRequest(userData) {
    return dispatch => {

        const authConfig = postConfig('http://bert-backend.dev/auth/signup', userData);

        return axios(authConfig);
    }
}
