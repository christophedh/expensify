import React from 'react'
import ReactDom from 'react-dom'
import 'react-dates/initialize'
import { AppRouter } from './routers/AppRouter'
import store from './store/configureStore'
import { Provider } from 'react-redux'
import { addExpense } from './actions/expense'
import moment from 'moment'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'
const uuidv4 = require('uuid/v4')
console.log('test')
// store.subscribe(() => {
//     // const { expenses, filters } = store.getState()
//     // console.log(getVisibleExpenses(expenses, filters))
// })

store.dispatch(
    addExpense({
        id: uuidv4(),
        note: 'water bill',
        amount: 100,
        description: 'this is a water bill',
        createdAt: moment().valueOf()
    })
)

store.dispatch(
    addExpense({
        id: uuidv4(),
        note: 'gas bill 2',
        amount: 200,
        description: 'this is a water bill',
        createdAt: moment().valueOf()
    })
)

store.dispatch(
    addExpense({
        id: uuidv4(),
        note: 'hydro bill',
        amount: 3000,
        description: 'this is a water bill',
        createdAt: moment().valueOf()
    })
)
store.dispatch(
    addExpense({
        id: uuidv4(),
        note: 'web service bill',
        amount: 50,
        description: 'this is a water bill',
        createdAt: moment().valueOf()
    })
)
const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDom.render(<App />, document.getElementById('app'))
