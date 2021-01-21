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
            <div>
                <Link to="/login">Sign In</Link>
            </div>
        )
      }
    return (
        <header className="nav-bar">
            <img className="logo" src={window.logoUrl}/>

            { display }
        </header>
    )
}