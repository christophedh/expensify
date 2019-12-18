export const setTextFilter = ({text} = {}) => ({
  type: 'SETTEXTFILTER',
  text,
});

export const sortByDate = () => ({
  type: 'SORTBY',
  sortBy: 'date',
});

export const sortByAmount = () => ({
  type: 'SORTBY',
  sortBy: 'amount',
});

export const setStartDate = (startDate = 0) => ({
  type: 'SET_START_DATE',
  startDate,
});

export const setEndDate = (endDate = 0) => ({
  type: 'SET_END_DATE',
  endDate,
});
