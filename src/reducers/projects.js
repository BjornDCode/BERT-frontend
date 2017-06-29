import { SET_PROJECTS } from '../actions/types';
const initialState = {

};

const projects = (state=initialState, action={}) => {
    switch (action.type) {
        case SET_PROJECTS:
            return {
                projects: action.projects
            }
            break;
        default:
            return state;
    }
}

export default projects;
