import {addExpense, removeExpense, editExpense} from '../actions/expense';
import getVisibleExpenses from '../selectors/expensesSelector';
import store from '../store/configureStore';

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../actions/filter';

const uuidv4 = require('uuid/v4');
const id = uuidv4();
//const store = configureStore();

store.subscribe(() => {
  const storeState = store.getState();
  console.log(getVisibleExpenses(storeState.expenses, storeState.filters));
});

store.dispatch(
  addExpense({
    id: uuidv4(),
    note: 'note 1',
    description: 'this is note 1',
    createdAt: 4000,
  }),
);

store.dispatch(
  addExpense({
    id: id,
    description: 'a description 2',
    note: 'note 2',
    amount: 5000,
    createdAt: 1000,
  }),
);

// store.dispatch(removeExpense(id));
//store.dispatch(editExpense({expenseId: id, expenseUpdate: {note: 'note 4'}}));

store.dispatch(setTextFilter(''));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(100));
store.dispatch(setEndDate(5000));
