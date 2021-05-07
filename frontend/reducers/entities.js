import { combineReducers } from 'redux';

import videosReducer from './videos'
import listReducer from './list'

export default combineReducers({
    videos: videosReducer,
    list: listReducer
})