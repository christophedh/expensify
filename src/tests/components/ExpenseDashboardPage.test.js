import React from 'react'
import { shallow } from 'enzyme'
import ExpensePageDashboard from '../../components/ExpensePageDashboard'

test('should render ExpensePageDashboard correctly', () => {
    const wrapper = shallow(<ExpensePageDashboard />)
    expect(wrapper).toMatchSnapshot()
})
