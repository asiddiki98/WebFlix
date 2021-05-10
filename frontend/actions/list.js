import * as APIUtil from '../utils/lists'

export const RECEIVE_LIST = "RECEIVE_LIST"


const receiveList = (payload) => {
    return {
        type: RECEIVE_LIST,
        list: payload
    }
}


export const fetchList = () => {
    return (dispatch) => {
        return APIUtil.fetchList().then((payload) => {
            dispatch(receiveList(payload))
        })
    }
}


export const addToList = (list) => {
    return (dispatch) => {
        return APIUtil.addToList(list).then((payload) => {
            dispatch(receiveList(payload))
        })
    }
}
export const deleteFromList = (list) => {
    return (dispatch) => {
        return APIUtil.deleteFromList(list).then((payload) => {
            dispatch(receiveList(payload))
        })
    }
}

