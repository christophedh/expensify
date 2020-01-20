import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpense,
    startSetExpense,
    startRemoveExpense,
    startUpdateExpense
} from '../../actions/expense'
import expensesReducer from '../../reducers/expensesReducer'
import expenses from '../fixtures/expensesFixtures'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach(done => {
    const expenseData = {}
    expenses.forEach(({ id, description, amount, note, createdAt }) => {
        expenseData[id] = {
            description,
            amount,
            note,
            createdAt
        }
    })

    database
        .ref('expenses')
        .set(expenseData)
        .then(() => done())
})
test('should setup remove expense action object', () => {
    const action = removeExpense('123')
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        expenseId: '123'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense({
        expenseId: 123,
        expenseUpdate: { note: 'this is a note' }
    })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        expenseId: 123,
        expenseUpdate: { note: 'this is a note' }
    })
})

test('should setup add expense action with provided value', () => {
    const action = addExpense(expenses[0])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenses[0]
        }
    })
})

test('should setup add expense action object with default values', () => {
    const action = addExpense({
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    })
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    })
})

test('should add expense to database and store', done => {
    const store = createMockStore({})
    const expenseData = {
        description: 'description',
        amount: 3000,
        note: 'this is test a note',
        createdAt: 1000
    }
    // console.log(startAddExpense(expenseData))
    store
        .dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions()
            const actionAddExpenseData = {
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            }
            expect(actions[0]).toEqual(actionAddExpenseData)
            return database
                .ref(`expenses/${actions[0].expense.id}`)
                .once('value')
        })
        .then(snaptshot => {
            expect(snaptshot.val()).toEqual(expenseData)
            done()
        })
})

test('should add expense with default values to database and store', done => {
    const store = createMockStore({})
    const defaultExpenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store
        .dispatch(startAddExpense())
        .then(() => {
            const actions = store.getActions()

            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...defaultExpenseData
                }
            })

            return database
                .ref(`expenses/${actions[0].expense.id}`)
                .once('value')
        })
        .then(snaptshot => {
            expect(snaptshot.val()).toEqual({ ...defaultExpenseData })
            done()
        })
})

test('should setup setExpense action object with data', () => {
    const action = setExpense(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSE',
        expenses
    })
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSE',
        expenses: [expenses[0]]
    }
    const state = expensesReducer(expenses, action)

    expect(state).toEqual([expenses[0]])
})

test('should fetch the expense from firebase', done => {
    const store = createMockStore({})

    store.dispatch(startSetExpense()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSE',
            expenses
        })
        done()
    })
})

test('should remove the expense with id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expenseId: expenses[0].id
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([expenses[1], expenses[2]])
})

test('should remove the expense with id from firebase', done => {
    const store = createMockStore({})
    store
        .dispatch(startRemoveExpense(expenses[0].id))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                expenseId: expenses[0].id
            })

            return database.ref(`expenses/${expenses[0].id}`).once('value')
        })
        .then(snaptshot => {
            expect(snaptshot.val()).toBeFalsy()
            done()
        })
})

test('should expense update', done => {
    const store = createMockStore({})
    const id = expenses[0].id
    const expenseUpdate = {
        description: 'a test description'
    }

    store
        .dispatch(
            startUpdateExpense({
                expenseId: id,
                expenseUpdate
            })
        )
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                expenseId: id,
                expenseUpdate
            })

            return database.ref(`expenses/${id}`).once('value')
        })
        .then(snaptshot => {
            expect({ id: snaptshot.key, ...snaptshot.val() }).toEqual({
                ...expenses[0],
                ...expenseUpdate
            })
            done()
        })
})
