import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogOut } from '../actions/auth'

export class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <Link className="header__title" to="/dashboard" exact>
                            <h1>Expensify</h1>
                        </Link>
                        <button
                            className="button button--no-background"
                            onClick={this.props.startLogOut}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    startLogOut: () => dispatch(startLogOut())
})
export default connect(undefined, mapDispatchToProps)(Header)
