import React from 'react'
import { connect } from 'react-redux'
import Expense from './Expense'
import selectExpenses from '../selectors/expensesSelector'
import selectExpensesTotal from '../selectors/expensesTotal'
export const ExpenseListItem = props => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length ? (
            props.expenses.map(expense => {
                return <Expense key={expense.id} {...expense} />
            })
        ) : (
            <p>No expenses</p>
        )}
    </div>
)

const mapStateToProps = state => ({
    expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseListItem)
