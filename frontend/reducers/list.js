import { RECEIVE_LIST } from '../actions/list'

const listReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_LIST:
            return action.list
        default:
            return state;
    }
}

export default listReducer
