import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense
} from '../../actions/expense'
import expenses from '../fixtures/expensesFixtures'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () => {
    const action = removeExpense('123')
    expect(action).toEqual({
        type: 'REMOVEEXPENSE',
        expenseId: '123'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense({
        expenseId: 123,
        expenseUpdate: { note: 'this is a note' }
    })
    expect(action).toEqual({
        type: 'EDITEXPENSE',
        expenseId: 123,
        expenseUpdate: { note: 'this is a note' }
    })
})

test('should setup add expense action with provided value', () => {
    const action = addExpense(expenses[0])
    expect(action).toEqual({
        type: 'ADDEXPENSE',
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
        type: 'ADDEXPENSE',
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
                type: 'ADDEXPENSE',
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
                type: 'ADDEXPENSE',
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
