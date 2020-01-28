import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filter'
import { DateRangePicker } from 'react-dates'
import { setStartDate, setEndDate } from '../actions/filter'
import moment from 'moment'

export class ExpenseListFilters extends React.Component {
    state = {
        startDate: undefined,
        endDate: undefined,
        focusedInput: undefined
    }
    componentDidMount() {
        const {
            filters: { startDate, endDate }
        } = this.props

        this.setState({
            startDate: moment(startDate),
            endDate: moment(endDate)
        })
    }

    onTextChange = e => {
        const text = e.target.value
        this.props.setTextFilter(text)
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.setState({
            startDate,
            endDate
        })
        this.props.setDates(startDate.valueOf(), endDate.valueOf())
    }

    setSortBy = e => {
        const sortBy = e.target.value

        if (sortBy === 'date') {
            this.props.sortByDate()
        } else if (sortBy === 'amount') {
            this.props.sortByAmount()
        }
    }

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            className="text-input"
                            type="text"
                            placeholder="Search expense"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.setSortBy}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.state.startDate}
                            startDateId={'f2ea0227-995f-4846-a900-24dbbad9f022'}
                            endDate={this.state.endDate}
                            endDateId={'2ea0227-995f-4846-a900-24dbbad9f023'}
                            isOutsideRange={() => false}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.focusedInput}
                            onFocusChange={focusedInput =>
                                this.setState({ focusedInput })
                            }
                        />
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = dispatch => ({
    setTextFilter: text => dispatch(setTextFilter(text)),
    setDates: (startDate = 0, endDate = 0) => {
        dispatch(setStartDate(startDate))
        dispatch(setEndDate(endDate))
    },
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate())
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
