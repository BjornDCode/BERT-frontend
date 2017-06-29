import axios from 'axios';
import { GET_PROJECTS, SET_PROJECTS } from './types';

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
