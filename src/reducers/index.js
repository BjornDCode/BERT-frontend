import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import auth from './auth';
import activePage from './activePage';
import projects from './projects';
import project from './project';
import page from './page';



const reducer = combineReducers({
    flashMessages,
    auth,
    activePage,
    projects,
    project,
    page
});

export default reducer;
