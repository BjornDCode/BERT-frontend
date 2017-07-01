import axios from 'axios';
import { postConfig } from '../utils/authConfigs';
import { BERT_API_URL } from '../utils/config';

export function userSignupRequest(userData) {
    return dispatch => {

        const authConfig = postConfig(BERT_API_URL + '/auth/signup', userData);

        return axios(authConfig);
    }
}
