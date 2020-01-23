import React from 'react'
import { Router } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import ExpenseDashboard from '../components/ExpensePageDashboard'
import ExpensePageAdd from '../components/ExpensePageAdd'
import EditExpensePage from '../components/ExpensePageEdit'
import HelpExpensePage from '../components/ExpensePageHelp'
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFoundPage'
import { createBrowserHistory } from 'history'
import PrivateRoute from './PrivateRoute'

export const history = createBrowserHistory()

export const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <Route path="/dashboard" component={ExpenseDashboard} exact />
                <PrivateRoute
                    path="/edit/:id"
                    component={EditExpensePage}
                    exact
                />
                <PrivateRoute path="/add" component={ExpensePageAdd} exact />
                <Route path="/help" component={HelpExpensePage} exact />
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </div>
    </Router>
)
