import React from 'react'
import { connect } from 'react-redux'
import Expense from './Expense'
import selectExpenses from '../selectors/expensesSelector'
export const ExpenseList = props => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expense</div>
            <div className="show-for-mobile">Amount</div>
            <div className="show-for-desktop">Expenses</div>
        </div>
        <div className="list-body">
            {props.expenses.length ? (
                props.expenses.map(expense => {
                    return <Expense key={expense.id} {...expense} />
                })
            ) : (
                <div className="list-item list-item__message">No expenses</div>
            )}
        </div>
    </div>
)

const mapStateToProps = state => ({
    expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)
