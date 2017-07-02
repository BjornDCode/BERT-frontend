import axios from 'axios';
import { SET_CURRENT_TEST, SET_TEST, REQUEST_TEST } from './types';
import { getConfig, postConfig } from '../utils/authConfigs';
import { BERT_API_URL } from '../utils/config';

export function setCurrentTest(id) {
    return {
        type: SET_CURRENT_TEST,
        id
    }
}

export function getCurrentTest(id) {
    return dispatch => {

        const authConfig = getConfig(BERT_API_URL + '/test/' + id);

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

export function createTestRequest(project_id, page_id) {
    return dispatch => {

        const requestData = {
            project_id,
            page_id
        }

        const authConfig = postConfig(BERT_API_URL + '/test', requestData);

        return axios(authConfig).then(response => {
            window.location.reload();
        }); // Then reload?

    }
}
