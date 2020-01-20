const uuidv4 = require('uuid/v4')
import database from '../../firebase/firebase'
export const addExpense = (expense = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        ...expense
    }
})

export const startAddExpense = (expenseData = {}) => {
    return async dispatch => {
        const {
            description = '',
            amount = 0,
            note = '',
            createdAt = 0
        } = expenseData
        const expense = { description, amount, note, createdAt }
        return await database
            .ref('expenses')
            .push(expense)
            .then(snaptshot => {
                dispatch(
                    addExpense({
                        id: snaptshot.key,
                        ...expense
                    })
                )
            })
    }
}

export const removeExpense = expenseId => ({
    type: 'REMOVE_EXPENSE',
    expenseId
})

export const editExpense = ({ expenseId, expenseUpdate } = {}) => ({
    type: 'EDIT_EXPENSE',
    expenseId,
    expenseUpdate
})

export const setExpense = expenses => ({
    type: 'SET_EXPENSE',
    expenses
})
export const startSetExpense = () => {
    return async dispatch => {
        return await database
            .ref('expenses')
            .once('value')
            .then(snaptshot => {
                const expenses = []
                snaptshot.forEach(expense => {
                    expenses.push({ id: expense.key, ...expense.val() })
                })
                dispatch(setExpense(expenses))
            })
    }
}
