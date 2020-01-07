import moment from 'moment'
export const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SETTEXTFILTER':
            const { text } = action
            return {
                ...state,
                text
            }
        case 'SORTBY':
            const { sortBy } = action
            return {
                ...state,
                sortBy: sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}
