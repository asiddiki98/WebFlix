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
        } else if (this.props.location.pathname === "/browse")
            klass = "register-footer"
        return (
            <footer className={klass}> 
            <i id="github" className="fab fa-github"> </i> 
                <a className="github" href="https://github.com/asiddiki98"> Github</a>
            </footer>
        )
    }
}
export default Footer