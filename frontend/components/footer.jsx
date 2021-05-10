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
        } else if (this.props.location.pathname === "/browse" || this.props.location.pathname === "/my-list"){
            klass = "loggedin-footer"
        } else {
            klass = "no-footer"
        }
        return (
            <footer className={klass}> 
                <h1 className="github ">CREATOR CREDENTIALS</h1>
                <i id="github" className="fab fa-github"> </i> 
                <a className="github" target="_blank" href="https://github.com/asiddiki98"> Github</a>
                <i id="angellist"  className="fab fa-angellist"></i>
                <a className="angellist" target="_blank" href="https://angel.co/u/azim-siddiki"> Angel List</a>
                <i id="linkedin" className="fab fa-linkedin-in"></i>
                <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/azim-siddiki-3b505b207/"> Linked In</a>
            </footer>
        )
    }
}
export default Footer