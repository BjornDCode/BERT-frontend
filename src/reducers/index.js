import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import auth from './auth';
import projects from './projects';


const reducer = combineReducers({
    flashMessages,
    auth,
    projects
});

export default reducer;
