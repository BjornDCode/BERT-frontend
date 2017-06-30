import axios from 'axios';
import { SET_PROJECTS, REQUEST_PROJECTS } from './types';
import { getConfig } from '../utils/authConfigs';

export function requestProjects() {
    return {
        type: REQUEST_PROJECTS
    }
}

export function getProjects() {
    return dispatch => {

        const authConfig = getConfig('http://bert-backend.dev/project');

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
