import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from '../reducers'


const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        autoRehydrate(),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)

persistStore(store);

export default store;
