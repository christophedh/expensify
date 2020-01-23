import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import expensesReducer from '../reducers/expensesReducer'
import filtersReducer from '../reducers/filtersReducer'
import authReducer from '../reducers/authReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

export default createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
        auth: authReducer
    }),
    // applyMiddleware(thunk),
    composeEnhancers(applyMiddleware(thunk))
)
