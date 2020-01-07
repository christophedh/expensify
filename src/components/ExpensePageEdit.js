import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expense'

export class EditExpensePage extends React.Component {
    onSubmit = expenseUpdate => {
        this.props.editExpense(expenseUpdate)
        this.props.history.push('/')
    }
    onDelete = () => {
        this.props.removeExpense(this.props.expense.id)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Expense form</h1>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                    onDelete={this.onDelete}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: expenseUpdate => dispatch(editExpense(expenseUpdate)),
    removeExpense: () => dispatch(removeExpense(id))
})

const mapStateToProps = ({ expenses }, props) => ({
    expense: expenses.find(expense => expense.id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
