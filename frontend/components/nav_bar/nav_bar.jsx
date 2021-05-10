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
        } else if (this.props.location.pathname === "/browse" || this.props.location.pathname === "/my-list"){
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
                            <a href="https://github.com/asiddiki98" target="_blank"><button className="signout-button"> <i className="fab fa-github"> </i> Github</button></a>
                            <a href="https://angel.co/u/azim-siddiki" target="_blank"><button className="github-button">  <i className="fab fa-angellist"></i> Angel List</button></a>
                            <a href="https://www.linkedin.com/in/azim-siddiki-3b505b207/" target="_blank"><button className="github-button"> <i className="fab fa-linkedin-in"></i> Linked In</button></a>
                                <button  className="github-button" onClick={this.props.logout}>Sign out </button>

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
                <div className="leftnav">
                <Link to="/"><img className={klass} src={window.logoUrl} /></Link> 
                <div className="links">
                { this.props.location.pathname === "/browse" || this.props.location.pathname === "/my-list" ? <Link className="home-link" to="/browse">Home</Link> : null }
                        {this.props.location.pathname === "/browse" || this.props.location.pathname === "/my-list" ? <Link  className="list-link" to="/my-list">My List</Link> : null }
                    </div>
                </div>
                { display }
            </header>
        )
    }

    
}
export default NavBar