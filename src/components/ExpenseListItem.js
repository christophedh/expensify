import React from 'react'
import { connect } from 'react-redux'
import Expense from './Expense'
import selectExpenses from '../selectors/expensesSelector'
import selectExpensesTotal from '../selectors/expensesTotal'
import numeral from 'numeral'
export const ExpenseListItem = props => (
    <div>
        <h1>Expense List</h1>
        <p>
            Viewving {props.expensesVisible} expenses totalling: &nbsp;
            {numeral(props.expensesTotal).format('$0,0.00')}
        </p>
        {props.expenses.length ? (
            props.expenses.map(expense => {
                return <Expense key={expense.id} {...expense} />
            })
        ) : (
            <p>No expenses</p>
        )}
    </div>
)

const mapStateToProps = state => {
    const expenses = selectExpenses(state.expenses, state.filters)
    return {
        expenses,
        expensesTotal: selectExpensesTotal(expenses),
        expensesVisible: expenses.length
    }
}

export default connect(mapStateToProps)(ExpenseListItem)
