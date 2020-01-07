import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/ExpensePageAdd'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expensesFixtures'

let addExpense, history, wrapper

beforeEach(() => {
    addExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <AddExpensePage addExpense={addExpense} history={history} />
    )
})
test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle addExpense', () => {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenCalledWith('/')
    expect(addExpense).toHaveBeenCalledWith(expenses[0])
})
