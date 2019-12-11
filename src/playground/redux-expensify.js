import {createStore, combineReducers} from 'redux';
// import { uuidv4 } from "uuid";
const uuidv4 = require('uuid/v4');
// const demoState = {
//   expenses: [
//     {
//       id: "123",
//       description: "a description",
//       note: "a note",
//       amount: 5000,
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: "",
//     sortBy: "amount",
//     startDate: undefined,
//     endDate: undefined
//   }
// };

const addExpense = (expense = {}) => ({
  type: 'ADDEXPENSE',
  expense,
});

const removeExpense = ({expenseId} = {}) => ({
  type: 'REMOVEEXPENSE',
  expenseId,
});

const editExpense = ({expenseId, expenseUpdate} = {}) => ({
  type: 'EDITEXPENSE',
  expenseId,
  expenseUpdate,
});

const setTextFilter = text => ({
  type: 'SETTEXTFILTER',
  text,
});

const sortByDate = () => ({
  type: 'SORTBY',
  sortBy: 'date',
});

const sortByAmount = () => ({
  type: 'SORTBY',
  sortBy: 'amount',
});

const setStartDate = (startDate = 0) => ({
  type: 'SET_START_DATE',
  startDate,
});

const setEndDate = (endDate = 0) => ({
  type: 'SET_END_DATE',
  endDate,
});

const expenseReducerDefaultState = [];

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SETTEXTFILTER':
      const {text} = action;
      return {
        ...state,
        text,
      };
    case 'SORTBY':
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};
const expenseReducer = (state = expenseReducerDefaultState, action) => {
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

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer,
  }),
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  addExpense({
    id: uuidv4(),
    description: 'a description',
    note: 'a note',
    amount: 5000,
    createdAt: 0,
  }),
);

const id = uuidv4();

store.dispatch(
  addExpense({
    id: id,
    description: 'a description 2',
    note: 'a note',
    amount: 5000,
    createdAt: 0,
  }),
);

// store.dispatch(removeExpense(id));
store.dispatch(editExpense({expenseId: id, expenseUpdate: {note: 'note 4'}}));

store.dispatch(setTextFilter('1234'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(1230));
store.dispatch(setEndDate(456));
store.dispatch(setEndDate());
console.log('ok');
