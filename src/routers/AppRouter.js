import React from 'react'
import { Router } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import ExpenseDashboard from '../components/ExpensePageDashboard'
import ExpensePageAdd from '../components/ExpensePageAdd'
import EditExpensePage from '../components/ExpensePageEdit'
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFoundPage'
import { createBrowserHistory } from 'history'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

export const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <PublicRoute
                    path="/dashboard"
                    component={ExpenseDashboard}
                    exact
                />
                <PrivateRoute
                    path="/edit/:id"
                    component={EditExpensePage}
                    exact
                />
                <PrivateRoute path="/add" component={ExpensePageAdd} exact />
                <PublicRoute>
                    <NotFoundPage />
                </PublicRoute>
            </Switch>
        </div>
    </Router>
)
