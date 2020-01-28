import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export class LoginPage extends React.Component {
    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify</h1>
                    <p>Add your expense</p>
                    <button
                        className="button"
                        type="button"
                        onClick={this.props.startLogin}
                    >
                        Login with google
                    </button>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    startLogin: () => dispatch(startLogin())
})
export default connect(undefined, mapDispatchToProps)(LoginPage)
