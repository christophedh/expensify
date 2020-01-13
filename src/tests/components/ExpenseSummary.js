import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'

test('should ExpenseSummary render properly', () => {
    const wrapper = shallow(<ExpenseSummary />)
    expect(wrapper).toMatchSnapshot()
})
