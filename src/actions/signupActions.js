import axios from 'axios';

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('http://bert-backend.dev/auth/signup', userData);
    }
}
