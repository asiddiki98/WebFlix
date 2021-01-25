import React from 'react'

class Footer extends React.Component {
    render(){
        let klass;
        if (this.props.location.pathname === "/") {
            klass = "register-footer"
        } else if (this.props.location.pathname === "/signup") {
            klass = "signup-footer"
        } else if (this.props.location.pathname === "/login") {
            klass = "login-footer"
        }
        return (
            <footer className={klass}></footer>
        )
    }
}
export default Footer