import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'
import expenses from '../fixtures/expensesFixtures'
import expensesTotal from '../../selectors/expensesTotal'

test('should ExpenseSummary render properly', () => {
    const wrapper = shallow(<ExpenseSummary />)
    expect(wrapper).toMatchSnapshot()
})

test('should ExpenseSummary render properly with expenses', () => {
    const total = expensesTotal(expenses)
    const wrapper = shallow(
        <ExpenseSummary
            expenses={expenses}
            expensesTotal={total}
            expensesVisible={expenses.length}
        />
    )
    expect(wrapper).toMatchSnapshot()
})
