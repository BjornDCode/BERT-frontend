import axios from 'axios';
import { SET_PROJECTS, REQUEST_PROJECTS } from './types';
import { getConfig } from '../utils/authConfigs';
import { BERT_API_URL } from '../utils/config';

export function requestProjects() {
    return {
        type: REQUEST_PROJECTS
    }
}

export function getProjects() {
    return dispatch => {

        const authConfig = getConfig(BERT_API_URL + '/project');

        dispatch(requestProjects());

        return axios(authConfig).then(response => {
            dispatch(setProjects(response.data.data));
        });

    }
}

export function setProjects(projects) {
    return {
        type: SET_PROJECTS,
        projects
    }
}
