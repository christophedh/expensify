import React from 'react'
import { connect } from 'react-redux'
import selectExpensesTotal from '../selectors/expensesTotal'
import selectExpenses from '../selectors/expensesSelector'
import numeral from 'numeral'
export const ExpenseSummary = props => (
    <div>
        <h2>
            Viewving {props.expensesVisible} expenses totalling: &nbsp;
            {numeral(props.expensesTotal).format('$0,0.00')}
        </h2>
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

export default connect(mapStateToProps)(ExpenseSummary)
