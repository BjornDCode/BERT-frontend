import axios from 'axios';
import { SET_PROJECTS, REQUEST_PROJECTS } from './types';

export function requestProjects() {
    return {
        type: REQUEST_PROJECTS
    }
}

export function getProjects() {
    return dispatch => {

        const authConfig = {
            method: 'GET',
            url: 'http://bert-backend.dev/project',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

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
