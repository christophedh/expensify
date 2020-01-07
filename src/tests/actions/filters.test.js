import moment from 'moment'
import {
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByDate,
    sortByAmount
} from '../../actions/filter'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0).valueOf())

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0).valueOf()
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0).valueOf())

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0).valueOf()
    })
})

test('should generate set text empty filter action object', () => {
    const action = setTextFilter('')

    expect(action).toEqual({
        type: 'SETTEXTFILTER',
        text: ''
    })
})

test('should generate set text filter action object', () => {
    const action = setTextFilter('test')

    expect(action).toEqual({
        type: 'SETTEXTFILTER',
        text: 'test'
    })
})

test('should generate set sort by amount filter action object', () => {
    const action = sortByAmount()

    expect(action).toEqual({
        type: 'SORTBY',
        sortBy: 'amount'
    })
})

test('should generate set sort by date action object', () => {
    const action = sortByDate()

    expect(action).toEqual({
        type: 'SORTBY',
        sortBy: 'date'
    })
})
