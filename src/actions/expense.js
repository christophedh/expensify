const uuidv4 = require('uuid/v4')
import database from '../../firebase/firebase'
export const addExpense = (expense = {}) => ({
    type: 'ADDEXPENSE',
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
    type: 'REMOVEEXPENSE',
    expenseId
})

export const editExpense = ({ expenseId, expenseUpdate } = {}) => ({
    type: 'EDITEXPENSE',
    expenseId,
    expenseUpdate
})
