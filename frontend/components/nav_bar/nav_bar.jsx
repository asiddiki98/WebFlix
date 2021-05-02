import React from 'react'
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props){
        super(props)

        this.loginDemo = this.loginDemo.bind(this)

        
    }


    loginDemo(){
        const demo = {
            email: "Demo",
            password: "hunter12"
        }

        this.props.login(demo)
    }
    render(){
      
        let display, klass;
        if (this.props.location.pathname === "/") {
            klass = "register-nav-bar"
        } else if (this.props.location.pathname === "/signup") {
            klass = "signup-nav-bar"
        } else if (this.props.location.pathname === "/login") {
            klass = "login-nav-bar"
        } else if (this.props.location.pathname === "/browse"){
            klass = "logged-in-nav-bar"
        } else {
            klass = "no-nav-bar"
        }
        if (this.props.currentUser)  {
            display = (
                <div className="left-side-nav-bar">
                  
                    <div className="profile-dropdown" ref={div => this.dropDown = div}>
                        <img className="profile" src={window.profileUrl} /> <div className="caret">&#9660;</div>
                        {/* {!this.state.hidden && <div className="dropdown-contents" onClick={e => e.stopPropagation()}> */}
                            <div className="dropdown-content">
                                <button className="signout-button" onClick={this.props.logout}>Sign out of Webflix</button>
                            </div>
                        {/* </div>} */}
                    </div>
                </div>
                
            )
        } else if (this.props.match.isExact || this.props.location.pathname === "/signup") {
            display = (
                <div className="demo-div">
                    <button className="demo" onClick={this.loginDemo}>Demo</button>
                    <div className={klass}>
                        <Link className={klass} to="/login">Sign In</Link>
                    </div>
                </div>
            )
        
        }
        else {
            display = (
                <button className="demo" onClick={this.loginDemo}>Demo</button>
            )
        }
    
       
        return (
            <header className={klass}>
                <Link to="/"><img className={klass} src={window.logoUrl} /></Link> 
                { display }
            </header>
        )
    }

    
}
export default NavBar