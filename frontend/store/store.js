import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root';
import logger from 'redux-logger'


export default (preloadedState = {}) => {
    return createStore(RootReducer, preloadedState, applyMiddleware(thunk))
}

