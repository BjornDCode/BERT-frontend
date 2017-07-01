import axios from 'axios';
import { SET_CURRENT_TEST, SET_TEST, REQUEST_TEST } from './types';
import { getConfig } from '../utils/authConfigs';

export function setCurrentTest(id) {
    return {
        type: SET_CURRENT_TEST,
        id
    }
}

export function getCurrentTest(id) {
    return dispatch => {

        const authConfig = getConfig('http://bert-backend.dev/test/' + id);

        dispatch(requestTest(id));

        return axios(authConfig).then(response => {
            dispatch(setTest(response.data.data));
        });

    }
}

export function setTest(test) {
    return {
        type: SET_TEST,
        test
    }
}

export function requestTest(id) {
    return {
        type: REQUEST_TEST,
        id
    }
}
