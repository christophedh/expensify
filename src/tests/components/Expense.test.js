import React from 'react'
import { shallow } from 'enzyme'
import { Expense } from '../../components/Expense'
import expenses from '../fixtures/expensesFixtures'

test('should Expense component test', () => {
    const wrapper = shallow(<Expense {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})
