import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import expensesReducer from '../reducers/expensesReducer'
import filtersReducer from '../reducers/filtersReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

export default createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }),
    // applyMiddleware(thunk),
    composeEnhancers(applyMiddleware(thunk))
)
