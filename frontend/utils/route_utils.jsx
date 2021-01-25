import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom'

const mstp = state => {
    return {
        loggedIn: Boolean(state.session.currentUser)
    }
}

const Auth = ({loggedIn, path, component: Component}) => {
    return (
        <Route 
            path={path}
            render={props => {
            return loggedIn ? <Redirect to="/browse" /> : <Component {...props} />
            }}
        />
    )
}

const Protected = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
)

export const ProtectedRoute = withRouter(connect(mstp)(Protected))

export const AuthRoute = withRouter(connect(mstp)(Auth))