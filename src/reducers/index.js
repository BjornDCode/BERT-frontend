import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import auth from './auth';
import activePage from './activePage';
import projects from './projects';
import project from './project';



const reducer = combineReducers({
    flashMessages,
    auth,
    activePage,
    projects,
    project
});

export default reducer;
