import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session'
import Login from './login'

const mstp = (state, ownProps) => {
    if (ownProps.location.state) {
        return {
        
            errors: state.errors,
            email: ownProps.location.state.email,
        }
    } else {
        return {
            errors: state.errors,
            email: ""
        }
    }
}


const mdtp = dispatch => {
    return {
        login: formUser => dispatch(login(formUser)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mstp, mdtp)(Login)