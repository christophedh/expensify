import React from 'react'
import ExpenseListItem from './ExpenseListItem'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseListItem />
    </div>
)

export default ExpenseDashboardPage
