import React from 'react'
import { connect } from 'react-redux'
import { startRemoveExpense } from '../actions/expense'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
export const Expense = ({ dispatch, id, description, amount, createdAt }) => (
    <div className="list-wrapper">
        <Link to={`/edit/${id}`} className="list-item">
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__sub-title">
                    {moment(createdAt).format('LL')}
                </span>
            </div>
            <h3 className="list-item__data">
                <span className="show-for-desktop">Amount</span>
                {numeral(amount).format('$0,0.00')} <br />
            </h3>
        </Link>
        <button
            className="button button--secondary button--list-item"
            onClick={() => {
                dispatch(startRemoveExpense(id))
            }}
        >
            Remove
        </button>
    </div>
)

export default connect()(Expense)
