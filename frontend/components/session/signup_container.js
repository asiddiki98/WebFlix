import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session'
import Signup from './signup'


const mstp = (state, ownProps) => {
   if (ownProps.location.state){
        return {
            email: ownProps.location.state.email,
        }
   } else {
       return {
           email: ""
       }
   }
}

const mdtp = dispatch => {
    return {
        createNewUser: formUser => dispatch(createNewUser(formUser))
    }
}

export default connect(mstp, mdtp)(Signup)

