import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'
import { history } from './AppRouter'
export const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
    return (
        <Route
            component={props =>
                (isAuth && (
                    <div>
                        <Header />
                        <Component {...props} />
                    </div>
                )) || <Redirect to="/" />
            }
            {...rest}
        />
    )
}
const mapStateToProps = state => ({
    isAuth: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)
