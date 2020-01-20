import expensesReducer from '../../reducers/expensesReducer'
import expenses from '../fixtures/expensesFixtures'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expenseId: expenses[0].id
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([expenses[1], expenses[2]])
})

test('should remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expenseId: '-1'
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual(expenses)
})

test('should add expense', () => {
    const expense = {
        id: '4',
        description: 'gum test',
        note: 'gum test',
        amount: 1234,
        createdAt: 100
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([...expenses, expense])
})

test('should edit expense', () => {
    const expenseUpdate = {
        id: '1',
        description: 'gum test',
        note: 'gum test',
        amount: 1234,
        createdAt: 100
    }
    const action = {
        type: 'EDIT_EXPENSE',
        expenseId: expenseUpdate.id,
        expenseUpdate
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([expenseUpdate, expenses[1], expenses[2]])
})

test('should edit expense if id not found', () => {
    const expenseUpdate = {
        id: '-1',
        description: 'gum test',
        note: 'gum test',
        amount: 1234,
        createdAt: 100
    }
    const action = {
        type: 'EDIT_EXPENSE',
        expenseId: expenseUpdate.id,
        expenseUpdate
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
    const expensesData = [expenses[0], expenses[1]]

    const action = {
        type: 'SET_EXPENSE',
        expenses: expensesData
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual(expensesData)
})
