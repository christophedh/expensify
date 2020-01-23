import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'
let wrapper, startLogin

beforeEach(() => {
    startLogin = jest.fn()
    wrapper = shallow(<LoginPage startLogin={startLogin} />)
})

test('should LoginPage component snapshot', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should startLogin on button click', () => {
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled()
})
