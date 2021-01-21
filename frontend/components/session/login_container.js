import { connect } from 'react-redux';
import { login } from '../../actions/session'
import Login from './login'

const mstp = (state, ownProps) => {
    if (state.session.email) {
        return {
            email: state.session.email,
        }
    } else {
        return {
            email: ""
        }
    }
}


const mdtp = dispatch => {
    return {
        login: formUser => dispatch(login(formUser))
    }
}

export default connect(mstp, mdtp)(Login)