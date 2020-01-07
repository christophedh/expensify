const uuidv4 = require('uuid/v4')
export const addExpense = (expense = {}) => ({
    type: 'ADDEXPENSE',
    expense: {
        id: uuidv4(),
        ...expense
    }
})

export const removeExpense = expenseId => ({
    type: 'REMOVEEXPENSE',
    expenseId
})

export const editExpense = ({ expenseId, expenseUpdate } = {}) => ({
    type: 'EDITEXPENSE',
    expenseId,
    expenseUpdate
})
