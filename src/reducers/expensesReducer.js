const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADDEXPENSE':
      return [...state, action.expense];
    case 'REMOVEEXPENSE':
      const {expenseId} = action;
      return state.filter(expense => expense.id !== expenseId);
    case 'EDITEXPENSE':
      return state.map(expense => {
        if (expense.id === action.expenseId) {
          return {
            ...expense,
            ...action.expenseUpdate,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
