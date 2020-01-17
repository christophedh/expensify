import React from 'react'
import ReactDom from 'react-dom'
import 'react-dates/initialize'
import { AppRouter } from './routers/AppRouter'
import store from './store/configureStore'
import { Provider } from 'react-redux'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'
import '../firebase/firebase'

process.env

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDom.render(<App />, document.getElementById('app'))

// const uuidv4 = require('uuid/v4')
// store.subscribe(() => {
//     // const { expenses, filters } = store.getState()
//     // console.log(getVisibleExpenses(expenses, filters))
// })
