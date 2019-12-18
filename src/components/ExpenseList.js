import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';
import selectExpenses from '../selectors/expensesSelector';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
      return <Expense key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
