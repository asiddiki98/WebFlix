import * as APIUtil from '../utils/sessions'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";

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
export const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}


export const checkEmail = (emailObj) => {
    return () => {
        return APIUtil.checkEmail(emailObj)
    }
}

export const createNewUser = (formUser) => {
    return (dispatch) => {
        return APIUtil.postUser(formUser).then((user) => {
            dispatch(receiveCurrentUser(user))
        }, (errors) => {
            dispatch(receiveErrors(errors.responseJSON))
        })
    }
}
export const login = (formUser) => {
    return (dispatch) => {
        return APIUtil.postSession(formUser).then((user) => {
            dispatch(receiveCurrentUser(user))
        }, (errors) => {
            dispatch(receiveErrors(errors.responseJSON))
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

