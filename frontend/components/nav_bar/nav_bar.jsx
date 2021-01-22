import React from 'react'
import { Link } from 'react-router-dom';

export default (props) => {
    let display;
     if (props.currentUser)  {
        display = (
            <div>
                <button onClick={props.logout}>Sign Out</button>
            </div>
        )
      } else if ( props.match.isExact ) {
        display = (
            <div className={"sign-in-div"}>
                <Link className={"sign-in-link"} to="/login">Sign In</Link>
            </div>
        )
      }
    return (
        <header className="sign-in-nav-bar">
            <img className="logo" src={window.logoUrl}/>
            <br/>
            { display }
        </header>
    )
}