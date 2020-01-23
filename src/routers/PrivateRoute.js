import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'
export const PrivateRoute = ({ isAuth, component: Component, ...props }) =>
    (isAuth && (
        <Route
            component={() => (
                <div>
                    <Header />
                    <Component />
                </div>
            )}
            {...props}
        />
    )) || <Redirect to="/" />

const mapStateToProps = state => ({
    isAuth: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)
