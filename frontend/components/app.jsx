import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import RegisterContainer from './register/register_container'
import Footer from './footer'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import BrowseContainer from './browse/browse_container'
import Modal from './modals/first_modal'
import VideoShow from './show/show_video'



export default () => {
    return (
        <div className={"main-div"}>
            <Route path="/" component={NavBarContainer}/>
            <div className="between-header-footer">
                <Modal />
                <Switch>
                    <ProtectedRoute path="/browse" component={BrowseContainer} />
                    <ProtectedRoute path="/my-list" component={BrowseContainer} />
                    <ProtectedRoute path="/video/:videoId" component={VideoShow} />
                    <AuthRoute exact path="/" component={RegisterContainer}/> 
                    <AuthRoute path="/signup" component={SignupContainer}/> 
                    <AuthRoute path="/login" component={LoginContainer}/> 
                </Switch>
            </div>
            <Route path="/" component={Footer}/>
        </div>
    )
}