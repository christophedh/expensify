import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import { EditExpensePage } from '../../components/ExpensePageEdit'
import expenses from '../fixtures/expensesFixtures'
let wrapper, editExpense, history, removeExpense

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[0]}
            editExpense={editExpense}
            removeExpense={removeExpense}
            history={history}
        />
    )
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
    const { id, expenseUpdate } = expenses[0]
    const data = { expenseId: id, expenseUpdate }
    wrapper.find(ExpenseForm).prop('onSubmit')(data)
    expect(editExpense).toHaveBeenCalledWith(data)
    expect(history.push).toHaveBeenCalledWith('/dashboard')
})

test('should handle removeExpense', () => {
    wrapper.find(ExpenseForm).prop('onDelete')()
    expect(removeExpense).toHaveBeenCalledWith(expenses[0].id)
    expect(history.push).toHaveBeenCalledWith('/dashboard')
})
