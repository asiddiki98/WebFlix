import { connect } from 'react-redux';
import { createNewUser, clearErrors } from '../../actions/session'
import Signup from './signup'


const mstp = (state, ownProps) => {
   if (ownProps.location.state){
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
        createNewUser: formUser => dispatch(createNewUser(formUser)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mstp, mdtp)(Signup)

