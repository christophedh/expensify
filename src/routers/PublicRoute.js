import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/Header'
import { history } from './AppRouter'

export const PublicRoute = ({ component: Component, ...props }) => (
    <Route
        component={() => (
            <div>
                <Header />
                <Component history={history} />
            </div>
        )}
        {...props}
    />
)

export default PublicRoute
