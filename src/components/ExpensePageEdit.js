import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
const EditExpensePage = props => {
    const { history, expense } = props
    return (
        <div>
            <h1>Expense form</h1>
            <ExpenseForm
                expense={expense}
                onSubmitCompleted={() => {
                    history.push('/')
                }}
            />
        </div>
    )
}
const mapStateToProps = ({ expenses }, props) => ({
    expense: expenses.find(expense => expense.id === props.match.params.id)
})
export default connect(mapStateToProps)(EditExpensePage)
