import * as APIUtil from '../utils/sessions'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_EMAIL = "RECEIVE_EMAIL"

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user,
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveEmail = (email) => {
    return {
        type: RECEIVE_EMAIL,
        email,
    }
}

export const checkEmail = (emailObj) => {
    return (dispatch) => {
        return APIUtil.checkEmail(emailObj).then((email) => {
            dispatch(receiveEmail(email))
        })
    }
}



export const createNewUser = (formUser) => {
    return (dispatch) => {
        return APIUtil.postUser(formUser).then((user) => {
            dispatch(receiveCurrentUser(user))
        })
    }
}
export const login = (formUser) => {
    return (dispatch) => {
        return APIUtil.postSession(formUser).then((user) => {
            dispatch(receiveCurrentUser(user))
        })
    }
}
export const logout = () => {
    return (dispatch) => {
        return APIUtil.deleteSession().then(() => {
            dispatch(logoutCurrentUser())
        })
    }
}