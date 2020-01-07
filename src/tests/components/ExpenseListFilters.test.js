import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { DateRangePicker } from 'react-dates'
import { filters, altFilters } from '../fixtures/filtersFixtures'
import moment from 'moment'
let wrapper, setTextFilter, sortByDate, sortByAmount, setDates

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setDates = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setDates={setDates}
        />
    )
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const text = 'test'
    wrapper
        .find('input')
        .at(0)
        .simulate('change', {
            target: { value: text }
        })
    expect(setTextFilter).toHaveBeenCalledWith(text)
})

test('should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: 'date'
        }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: 'amount'
        }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date change', () => {
    const startDate = moment(0)
    const endDate = moment(100)
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate })
    expect(setDates).toHaveBeenCalledWith(
        startDate.valueOf(),
        endDate.valueOf()
    )
})

test('should handle focus on ', () => {
    const focus = 'endDate'
    wrapper.find(DateRangePicker).prop('onFocusChange')(focus)

    expect(wrapper.state('focusedInput')).toBe(focus)
})
