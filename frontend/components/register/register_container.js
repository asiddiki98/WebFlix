import { connect } from 'react-redux';
import { checkEmail } from '../../actions/session'
import Register from './register'

const mdtp = (dispatch) => {
    return {
        checkEmail: email => dispatch(checkEmail(email))
    }
}


export default connect(null, mdtp)(Register)