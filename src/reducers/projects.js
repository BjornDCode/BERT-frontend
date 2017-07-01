import { SET_PROJECTS, REQUEST_PROJECTS, CLEAR_STATE } from '../actions/types';

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
        case CLEAR_STATE:
            return initialState;
        default:
            return state;
    }
}

export default projects;
