import * as APIUtil from '../utils/lists'

export const RECEIVE_LIST = "RECEIVE_LIST"


const receiveList = (payload) => {
    return {
        type: RECEIVE_LIST,
        list: payload.list
    }
}


export const fetchList = () => {
    return (dispatch) => {
        return APIUtil.fetchList().then((payload) => {
            dispatch(receiveList(payload))
        })
    }
}