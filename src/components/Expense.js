import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expense'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
export const Expense = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3>
            <NavLink to={`/edit/${id}`} exact>
                {description}
            </NavLink>
        </h3>
        <p>
            {amount} - {moment(createdAt).format('LL')}
        </p>
        <button
            onClick={() => {
                dispatch(removeExpense(id))
            }}
        >
            Remove
        </button>
    </div>
)

export default connect()(Expense)
