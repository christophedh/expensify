import { login, logout } from '../../actions/auth'

test('should login action', () => {
    expect(login('a1')).toEqual({ type: 'LOGIN', uid: 'a1' })
})

test('should logout action', () => {
    expect(logout()).toEqual({ type: 'LOGOUT' })
})
