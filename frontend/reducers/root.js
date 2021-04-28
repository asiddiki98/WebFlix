import { combineReducers } from 'redux';
import entitiesReducer from './entities'
import sessionReducer from './session'
import errorsReducer from './errors'
import modal from './modals';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    modal: modal
})