import { SET_CURRENT_PROJECT, SET_PROJECT, REQUEST_PROJECT, CLEAR_STATE } from '../actions/types';

const initialState = {
    id: null,
    data: {},
    isLoading: false
};

const project = (state=initialState, action={}) => {
    switch (action.type) {
        case SET_CURRENT_PROJECT:
            return {
                id: action.id,
                data: {},
                isLoading: false
            }
        case SET_PROJECT:
            return {
                id: action.project.id,
                data: action.project,
                isLoading: false
            }
        case REQUEST_PROJECT:
            return {
                id: action.id,
                data: {},
                isLoading: true
            }
        case CLEAR_STATE:
            return initialState;
        default:
            return state;
    }
}

export default project;
