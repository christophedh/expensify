import React from 'react'
import ExpenseListItem from './ExpenseListItem'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpenseSummary'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseListItem />
    </div>
)

export default ExpenseDashboardPage
