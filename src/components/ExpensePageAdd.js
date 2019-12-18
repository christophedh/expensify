import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
const AddExpensePage = props => {
    const {
        match: {
            params: { id }
        },
        history
    } = props
    console.log(id)
    return (
        <div>
            <h1>Add an expense</h1>
            <ExpenseForm
                onSubmitCompleted={() => {
                    history.push('/')
                }}
            />
        </div>
    )
}

export default connect()(AddExpensePage)
