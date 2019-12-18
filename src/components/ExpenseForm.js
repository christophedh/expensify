import React from 'react'
import moment from 'moment'
import { addExpense, editExpense } from '../actions/expense'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import { connect } from 'react-redux'
const uuidv4 = require('uuid/v4')

class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false
    }
    componentDidMount() {
        const { expense } = this.props

        if (expense) {
            this.setState(() => ({
                ...expense,
                createdAt: moment(expense.createdAt)
            }))
        }
    }
    onDescriptionChange = e => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = e => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange = e => {
        const amount = e.target.value

        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = createdAt => {
        this.setState(() => ({ createdAt }))
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }
    onSubmit = e => {
        e.preventDefault()
        const { dispatch, expense } = this.props
        const { description, note, amount, createdAt } = this.state
        if (expense) {
            dispatch(
                editExpense({
                    expenseId: expense.id,
                    expenseUpdate: {
                        description,
                        note,
                        amount: parseFloat(amount),
                        createdAt: createdAt.unix()
                    }
                })
            )
        } else {
            dispatch(
                addExpense({
                    id: uuidv4(),
                    description,
                    note,
                    amount: parseFloat(amount),
                    createdAt: createdAt.unix()
                })
            )
        }
        this.props.onSubmitCompleted()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        id={uuidv4()}
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>
                        {this.props.expense ? 'Edit Expense' : 'Add Expense'}
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(ExpenseForm)
