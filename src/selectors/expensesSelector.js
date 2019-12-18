export default (expenses, {text, startDate, endDate, sortBy}) => {
  return expenses
    .filter(expense => {
      const textMatch = expense.note.includes(text);
      const endDateMatch =
        typeof endDate === 'number' ? expense.createdAt <= endDate : true;
      const startDateMatch =
        typeof startDate === 'number' ? expense.createdAt >= startDate : true;
      return textMatch && endDateMatch && startDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'amount') {
        return a.amount - b.amount;
      } else {
        return a.createdAt - b.createdAt;
      }
    });
};
