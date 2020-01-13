import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import { connect } from 'react-redux'
import uuidv4 from 'uuid'

class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        error: ''
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
    onDelete = () => {
        this.props.onDelete()
    }
    onSubmit = e => {
        e.preventDefault()
        const { description, note, amount, createdAt } = this.state
        const { expense } = this.props
        let data
        if (!description && !amount) {
            this.setState(() => ({
                error: 'Please provide description and amount'
            }))

            return
        }

        data = { description, note, amount: parseFloat(amount), createdAt }
        if (expense) {
            data = {
                expenseId: expense.id,
                expenseUpdate: data
            }
        }

        this.props.onSubmit(data)
    }
    render() {
        return (
            <div>
                {this.state.error && <div>{this.state.error}</div>}
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
                    {this.props.expense && (
                        <button type="button" onClick={this.onDelete}>
                            Delete
                        </button>
                    )}
                </form>
            </div>
        )
    }
}

export default ExpenseForm
