const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            const { expenseId } = action
            return state.filter(expense => expense.id !== expenseId)
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.expenseId) {
                    return {
                        ...expense,
                        ...action.expenseUpdate
                    }
                } else {
                    return expense
                }
            })
        case 'SET_EXPENSE':
            return action.expenses
        default:
            return state
    }
}
