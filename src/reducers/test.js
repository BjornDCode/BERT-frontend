import { SET_CURRENT_TEST, SET_TEST, REQUEST_TEST, CLEAR_STATE } from '../actions/types';

const initialState = {
    id: null,
    data: {},
    isLoading: false
};

const test = (state=initialState, action={}) => {
    switch (action.type) {
        case SET_CURRENT_TEST:
            return {
                id: action.id,
                data: {},
                isLoading: false
            }
        case SET_TEST:
            return  {
                id: state.id,
                data: action.test,
                isLoading: false
            }
        case REQUEST_TEST:
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

export default test;
