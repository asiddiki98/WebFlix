import { connect } from 'react-redux';
import NavBar from './nav_bar'
import { logout, login } from '../../actions/session'


const mstp = state => {
    return {
        currentUser: state.session.currentUser
    }
}

const mdtp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        login: demo => dispatch(login(demo))
    }
}

export default connect(mstp, mdtp)(NavBar)