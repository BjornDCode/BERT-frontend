import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';

const reducer = combineReducers({
    user: userReducer
});

export default createStore(reducer, applyMiddleware(thunk));
