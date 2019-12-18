export const addExpense = (expense = {}) => ({
  type: 'ADDEXPENSE',
  expense,
});

export const removeExpense = ({expenseId} = {}) => ({
  type: 'REMOVEEXPENSE',
  expenseId,
});

export const editExpense = ({expenseId, expenseUpdate} = {}) => ({
  type: 'EDITEXPENSE',
  expenseId,
  expenseUpdate,
});
