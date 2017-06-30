import { SET_PROJECTS, REQUEST_PROJECTS } from '../actions/types';

const initialState = {
    data: [],
    isLoading: false
};

const projects = (state=initialState, action={}) => {
    switch (action.type) {
        case REQUEST_PROJECTS:
            return {
                data: [],
                isLoading: true
            }
        case SET_PROJECTS:
            return {
                data: action.projects,
                isLoading: false
            }
        default:
            return state;
    }
}

export default projects;
