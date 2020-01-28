import React from 'react'
import { connect } from 'react-redux'
import selectExpensesTotal from '../selectors/expensesTotal'
import selectExpenses from '../selectors/expensesSelector'
import numeral from 'numeral'
import { Link } from 'react-router-dom'
export const ExpenseSummary = props => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">
                Viewving <span>{props.expensesVisible}</span> expenses
                totalling: &nbsp;
                <span>{numeral(props.expensesTotal).format('$0,0.00')}</span>
                <div className="page-header__action">
                    <Link
                        to="/add"
                        className="button button--link"
                        // activeClassName="is-active"
                        exact
                    >
                        Add an expense
                    </Link>
                </div>
            </h1>
        </div>
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
