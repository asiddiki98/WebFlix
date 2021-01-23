import React from 'react'
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props){
        super(props)

        
    }
    render(){

        let display, klass;
        if (this.props.location.pathname === "/") {
            klass = "register-nav-bar"
        } else if (this.props.location.pathname === "/signup") {
            klass = "signup-nav-bar"
        } else if (this.props.location.pathname === "/login") {
            klass = "login-nav-bar"
        } else {
            klass = "logged-in-nav-bar"
        } 
        if (this.props.currentUser)  {
            display = (
                <div className="nav-bar-dropdown">
                    <button className={"dropdown-button"}>&#8964;</button>
                    <div className="dropdown-content">
                        <button className="signout-button" onClick={this.props.logout}>Sign out of Webflix</button>
                    </div>
                </div>
                
            )
        } else if ( this.props.match.isExact || this.props.location.pathname === "/signup") {
            display = (
                <div className={klass}>
                    <Link className={klass} to="/login">Sign In</Link>
                </div>
            )
        }
    
       
        return (
            <header className={klass}>
                <img className={klass} src={window.logoUrl}/>
                <br/>
                { display }
            </header>
        )
    }

    
}
export default NavBar