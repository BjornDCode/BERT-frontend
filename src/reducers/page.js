import { SET_CURRENT_PAGE, SET_PAGE, REQUEST_PAGE } from '../actions/types';

const initialState = {
    id: null,
    data: {},
    isLoading: false
}

const page = (state=initialState, action={}) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                id: action.id,
                data: {},
                isLoading: false
            }
        case SET_PAGE:
            return {
                id: state.id,
                data: action.page,
                isLoading: false
            }
        case REQUEST_PAGE:
            return {
                id: action.id,
                data: {},
                isLoading: true
            }
        default:
            return state;
    }
}

export default page;
