import { SET_ACTIVE_PAGE, SET_ACTIVE_DASHBOARD_COMPONENT, CLEAR_STATE } from '../actions/types';

const initialState = {
    page: "Dashboard",
    component: "Project Name"
};

const auth = (state=initialState, action={}) => {
    switch (action.type) {
        case SET_ACTIVE_PAGE:
            return {
                page: action.title,
                component: state.component
            }
        case SET_ACTIVE_DASHBOARD_COMPONENT:
            return {
                page: state.page,
                component: action.title
            }
        case CLEAR_STATE:
            return initialState;
        default:
            return state;
    }
}

export default auth;
