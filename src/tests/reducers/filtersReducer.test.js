import moment from 'moment'
import filtersReducer from '../../reducers/filtersReducer'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {
        type: 'SORTBY',
        sortBy: 'amount'
    })

    expect(state.sortBy).toEqual('amount')
})

test('should set sortBy to date', () => {
    const defaultState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(defaultState, {
        type: 'SORTBY',
        sortBy: 'date'
    })

    expect(state.sortBy).toEqual('date')
})

test('should set setTextFilter', () => {
    const state = filtersReducer(undefined, {
        type: 'SETTEXTFILTER',
        text: 'test'
    })

    expect(state.text).toBe('test')
})

test('should set startDate', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        startDate: moment(100).valueOf()
    })

    expect(state.startDate).toBe(moment(100).valueOf())
})

test('should set end date', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        endDate: moment(100).valueOf()
    })

    expect(state.endDate).toEqual(moment(100).valueOf())
})
