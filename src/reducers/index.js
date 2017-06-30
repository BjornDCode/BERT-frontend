import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import auth from './auth';
import projects from './projects';
import project from './project';



const reducer = combineReducers({
    flashMessages,
    auth,
    projects,
    project
});

export default reducer;
