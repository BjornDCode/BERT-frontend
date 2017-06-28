import axios from 'axios';

export function userLoginRequest(userData) {
    return dispatch => {

        const authConfig = {
            method: 'POST',
            url: 'http://bert-backend.dev/auth/signin',
            data: userData,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        return axios(authConfig);
    }
}
