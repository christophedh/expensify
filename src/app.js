import React from 'react'
import ReactDom from 'react-dom'
import 'react-dates/initialize'
import { AppRouter } from './routers/AppRouter'
import store from './store/configureStore'
import { Provider } from 'react-redux'
import { addExpense } from './actions/expense'
import { setTextFilter, setEndDate, setStartDate } from './actions/filter'
import getVisibleExpenses from './selectors/expensesSelector'
import './styles/style.scss'
const uuidv4 = require('uuid/v4')
store.subscribe(() => {
    const { expenses, filters } = store.getState()
    console.log(getVisibleExpenses(expenses, filters))
})

store.dispatch(
    addExpense({
        id: uuidv4(),
        note: 'water bill',
        amount: 100,
        description: 'this is a water bill',
        createdAt: 2500
    })
)

store.dispatch(
    addExpense({
        id: uuidv4(),
        note: 'gas bill',
        amount: 200,
        description: 'this is a water bill',
        createdAt: 2000
    })
)

store.dispatch(
    addExpense({
        id: uuidv4(),
        note: 'hydro bill',
        amount: 3000,
        description: 'this is a water bill',
        createdAt: 100
    })
)
store.dispatch(
    addExpense({
        id: uuidv4(),
        note: 'web service bill',
        amount: 50,
        description: 'this is a water bill',
        createdAt: 4000
    })
)
const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDom.render(<App />, document.getElementById('app'))
