import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startUpdateExpense, startRemoveExpense } from '../actions/expense'

export class EditExpensePage extends React.Component {
    onSubmit = expenseUpdate => {
        this.props.editExpense(expenseUpdate)
        this.props.history.push('/dashboard')
    }
    onDelete = () => {
        this.props.removeExpense(this.props.expense.id)
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                        onDelete={this.onDelete}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    editExpense: expenseUpdate => dispatch(startUpdateExpense(expenseUpdate)),
    removeExpense: id => dispatch(startRemoveExpense(id))
})

const mapStateToProps = ({ expenses }, props) => ({
    expense: expenses.find(expense => expense.id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
