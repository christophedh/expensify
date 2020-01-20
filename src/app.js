import React from 'react'
import ReactDom from 'react-dom'
import 'react-dates/initialize'
import { AppRouter } from './routers/AppRouter'
import store from './store/configureStore'
import { Provider } from 'react-redux'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'
import database from '../firebase/firebase'
import { startSetExpense } from './actions/expense'

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDom.render(<p>Loading ...</p>, document.getElementById('app'))

store.dispatch(startSetExpense()).then(() => {
    ReactDom.render(<App />, document.getElementById('app'))
})
