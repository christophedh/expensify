import React from 'react'
import ReactDom from 'react-dom'
import 'react-dates/initialize'
import { history, AppRouter } from './routers/AppRouter'
import store from './store/configureStore'
import { Provider } from 'react-redux'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'
import { startSetExpense } from './actions/expense'
import { firebase } from '../firebase/firebase'
import { login, logout } from './actions/auth'

let hasRendered = false

const renderApp = () => {
    ReactDom.render(<App />, document.getElementById('app'))
    hasRendered = true
}
const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDom.render(<p>loading ...</p>, document.getElementById('app'))

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpense()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})
