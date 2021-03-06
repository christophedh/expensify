import database from '../../firebase/firebase'
export const addExpense = (expense = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        ...expense
    }
})

export const startAddExpense = (expenseData = {}) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '',
            amount = 0,
            note = '',
            createdAt = 0
        } = expenseData
        const expense = { description, amount, note, createdAt }
        return await database
            .ref(`users/${uid}/expenses`)
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
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        return await database
            .ref(`/users/${uid}/expenses`)
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

export const startRemoveExpense = id => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        return await database
            .ref(`/users/${uid}/expenses/${id}`)
            .remove()
            .then(() => {
                dispatch(removeExpense(id))
            })
    }
}

export const startUpdateExpense = ({ expenseId, expenseUpdate }) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        return await database
            .ref(`users/${uid}/expenses/${expenseId}`)
            .update(expenseUpdate)
            .then(() => {
                dispatch(editExpense({ expenseId, expenseUpdate }))
            })
    }
}
