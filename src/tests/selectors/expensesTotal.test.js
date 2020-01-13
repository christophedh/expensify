import selectExpensesTotal from '../../selectors/expensesTotal'
import expenses from '../fixtures/expensesFixtures'
test('should selectExpensesTotal return 0 if no expense', () => {
    const res = selectExpensesTotal([])
    expect(res).toBe(0)
})

test('should selectExpensesTotal should add correctly with 1 expense', () => {
    const res = selectExpensesTotal([expenses[0]])
    expect(res).toBe(expenses[0].amount)
})

test('should selectExpensesTotal should add correctly with multiple expense', () => {
    const res = selectExpensesTotal(expenses)
    const totalAmount =
        expenses[0].amount + expenses[1].amount + expenses[2].amount

    expect(res).toBe(totalAmount)
})
