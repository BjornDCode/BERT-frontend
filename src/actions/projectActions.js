import axios from 'axios';
import { SET_CURRENT_PROJECT, SET_PROJECT, REQUEST_PROJECT } from './types';
import { getConfig } from '../utils/authConfigs';

export function setCurrentProject(id) {
    return {
        type: SET_CURRENT_PROJECT,
        id
    }
}

export function getCurrentProject(id) {
    return dispatch => {
        const authConfig = getConfig('http://bert-backend.dev/project/' + id);

        dispatch(requestProject(id));

        return axios(authConfig).then(response => {
            dispatch(setProject(response.data.data));
        })
    }
}

export function setProject(project) {
    return {
        type: SET_PROJECT,
        project
    }
}

export function requestProject(id) {
    return {
        type: REQUEST_PROJECT,
        id
    }
}