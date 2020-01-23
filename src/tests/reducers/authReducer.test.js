import authReducer from '../../reducers/authReducer'

test('should default authReducer state', () => {
    const state = {}
    const action = {}

    expect(authReducer(state, action)).toEqual({})
})

test('should login authReducer state', () => {
    const state = {}
    const action = { type: 'LOGIN', uid: 'a1' }

    expect(authReducer(state, action)).toEqual({ uid: 'a1' })
})

test('should logout authReducer state', () => {
    const state = { uid: 'a1' }
    const action = { type: 'LOGOUT' }

    expect(authReducer(state, action)).toEqual({})
})
