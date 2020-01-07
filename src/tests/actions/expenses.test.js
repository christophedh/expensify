import { addExpense, editExpense, removeExpense } from '../../actions/expense'

test('should setup remove expense action object', () => {
    const action = removeExpense('123')
    expect(action).toEqual({
        type: 'REMOVEEXPENSE',
        expenseId: '123'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense({
        expenseId: 123,
        expenseUpdate: { note: 'this is a note' }
    })
    expect(action).toEqual({
        type: 'EDITEXPENSE',
        expenseId: 123,
        expenseUpdate: { note: 'this is a note' }
    })
})

test('should setup add expense action with provided value', () => {
    const expenseData = {
        description: 'this an expense',
        amount: 123,
        createdAt: 100,
        note: 'this is a note'
    }

    const action = addExpense(expenseData)

    expect(action).toEqual({
        type: 'ADDEXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with default values', () => {
    const action = addExpense({
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    })
    expect(action).toEqual({
        type: 'ADDEXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    })
})
