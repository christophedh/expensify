export default expenses => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)
    return total
}
