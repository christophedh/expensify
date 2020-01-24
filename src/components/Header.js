import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startLogOut } from '../actions/auth'

export class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Expensify</h1>
                <ul>
                    <li>
                        <NavLink
                            to="/dashboard"
                            activeClassName="is-active"
                            exact
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add" activeClassName="is-active" exact>
                            Add an expense
                        </NavLink>
                    </li>
                </ul>
                <button onClick={this.props.startLogOut}>Logout</button>
            </header>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    startLogOut: () => dispatch(startLogOut())
})
export default connect(undefined, mapDispatchToProps)(Header)
