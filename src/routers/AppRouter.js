import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import ExpenseDashboard from '../components/ExpensePageDashboard';
import CreateExpensePage from '../components/ExpensePageCreate';
import EditExpensePage from '../components/ExpensePageEdit';
import HelpExpensePage from '../components/ExpensePageHelp';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact />
        <Route path="/edit/:id" component={EditExpensePage} exact />
        <Route path="/create" component={CreateExpensePage} exact />
        <Route path="/help" component={HelpExpensePage} exact />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);
