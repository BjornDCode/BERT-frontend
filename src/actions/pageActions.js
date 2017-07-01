import axios from 'axios';
import { SET_CURRENT_PAGE, SET_PAGE, REQUEST_PAGE } from './types';
import { getConfig } from '../utils/authConfigs';
import { BERT_API_URL } from '../utils/config';

export function setCurrentPage(id) {
    return {
        type: SET_CURRENT_PAGE,
        id
    }
}

export function getCurrentPage(id) {
    return dispatch => {

        const authConfig = getConfig(BERT_API_URL + '/page/' + id);

        dispatch(requestPage(id));

        return axios(authConfig).then(response => {
            dispatch(setPage(response.data.data))
        })

    }
}

export function setPage(page) {
    return {
        type: SET_PAGE,
        page
    }
}

export function requestPage(id) {
    return {
        type: REQUEST_PAGE,
        id
    }
}
