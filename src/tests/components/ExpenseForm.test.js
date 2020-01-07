import React from 'react'
import { shallow } from 'enzyme'
import { SingleDatePicker } from 'react-dates'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expensesFixtures'
import moment from 'moment'

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid submission', () => {
    const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />)
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })

    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
    const value = 'test description'
    const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />)
    wrapper
        .find('input')
        .at(0) // index 0 for description input
        .simulate('change', { target: { value } })
    expect(wrapper.state('description')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('should set note on input change', () => {
    const value = 'test note'
    const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />)
    wrapper.find('textarea').simulate('change', { target: { value } })
    expect(wrapper.state('note')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('should set amount if valid input change', () => {
    const value = '11.23'
    const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />)
    wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value } })
    expect(wrapper.state('amount')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('should set amount if not valid input change', () => {
    const value = '11.234'
    const wrapper = shallow(<ExpenseForm onSubmit={() => {}} />)
    wrapper
        .find('input')
        .at(1)
        .simulate('change', { target: { value } })
    expect(wrapper.state('amount')).toBe('')
    expect(wrapper).toMatchSnapshot()
})

test('should call onSubmit prop for valid submission', () => {
    const { id, ...expenseUpdate } = expenses[0]
    const data = {
        expenseId: id,
        expenseUpdate
    }
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(
        <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
    )
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })
    expect(wrapper.state('error')).toBe('')
    //expect(onSubmitSpy).toHaveBeenCalled()
    expect(onSubmitSpy).toHaveBeenCalledWith(data)
})

test('should set date on input change ', () => {
    const now = moment(100)
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find(SingleDatePicker).prop('onDateChange')(now)

    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar on focus change ', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused })

    expect(wrapper.state('calendarFocused')).toEqual(focused)
})
