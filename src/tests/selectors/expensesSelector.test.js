import expensesSelector from '../../selectors/expensesSelector'
import expenses from '../fixtures/expensesFixtures'
test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = expensesSelector(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[2]])
})

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: 0,
        endDate: undefined
    }

    const result = expensesSelector(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[2]])
})

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: 0
    }

    const result = expensesSelector(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[0]])
})

test('should filter sortBy date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = expensesSelector(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[0], expenses[2]])
})

test('should filter sortBy amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = expensesSelector(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[2], expenses[1]])
})
