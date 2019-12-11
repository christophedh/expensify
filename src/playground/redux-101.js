import {createStore} from 'redux';

const incrementCountBy = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const decrementCountBy = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});

const resetCount = () => ({
  type: 'RESET',
});

const setCount = ({set = 0} = {}) => ({
  type: 'SET',
  set,
});

const defaultCountReducerState = () => ({
  count: 0,
});

const countReducer = (state = defaultCountReducerState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy =
        typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        ...state,
        count: state.count + incrementBy,
      };
    case 'DECREMENT':
      const decrementBy =
        typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        ...state,
        count: state.count - decrementBy,
      };

    case 'RESET':
      return {
        ...state,
        count: 0,
      };

    case 'SET':
      return {
        ...state,
        count: action.set,
      };

    default:
      return state;
  }
};

const store = createStore(countReducer());

//const unsubscribe = store.subscribe(() => {
//console.log(store.getState());
//});

store.subscribe(() => {
  console.log(store.getState());
});
// unsubscribe()

store.dispatch(incrementCountBy({incrementBy: 10}));

store.dispatch(incrementCountBy());

store.dispatch(decrementCountBy({decrementBy: 100}));

store.dispatch(resetCount());

store.dispatch(decrementCountBy());

store.dispatch(setCount({set: -100}));

console.log('ok2');
