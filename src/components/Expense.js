import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expense'
import { NavLink } from 'react-router-dom'
const Expense = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3>
            <NavLink to={`/edit/${id}`} activeClassName="is-active" exact>
                {description}
            </NavLink>
        </h3>
        <p>
            {amount} - {createdAt}
        </p>
        <button
            onClick={() => {
                dispatch(removeExpense({ id }))
            }}
        >
            Remove
        </button>
    </div>
)

export default connect()(Expense)
