import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import auth from './auth';


const reducer = combineReducers({
    flashMessages,
    auth
});

export default reducer;
