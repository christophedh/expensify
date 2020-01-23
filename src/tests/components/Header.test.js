import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'

let wrapper, startLogOut

beforeEach(() => {
    startLogOut = jest.fn()
    wrapper = shallow(<Header startLogOut={startLogOut} />)
})
test('should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should logOut on button click', () => {
    wrapper.find('button').simulate('click')
    expect(startLogOut).toHaveBeenCalled()
})
