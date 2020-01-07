import expensesReducer from '../../reducers/expensesReducer'
import expenses from '../fixtures/expensesFixtures'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVEEXPENSE',
        expenseId: expenses[0].id
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([expenses[1], expenses[2]])
})

test('should remove expense if id not found', () => {
    const action = {
        type: 'REMOVEEXPENSE',
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
        type: 'ADDEXPENSE',
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
        type: 'EDITEXPENSE',
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
        type: 'EDITEXPENSE',
        expenseId: expenseUpdate.id,
        expenseUpdate
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual(expenses)
})
