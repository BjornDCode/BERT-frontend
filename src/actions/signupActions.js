import axios from 'axios';

export function userSignupRequest(userData) {
    return dispatch => {

        const authConfig = {
            method: 'POST',
            url: 'http://bert-backend.dev/auth/signup',
            data: userData,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        return axios(authConfig);
    }
}
