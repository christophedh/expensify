import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListItem } from '../../components/ExpenseListItem'
import expenses from '../fixtures/expensesFixtures'

test('should render ExpenseList with expense', () => {
    const wrapper = shallow(<ExpenseListItem expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList with no expense', () => {
    const wrapper = shallow(<ExpenseListItem expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})
