import moment from 'moment'

const expenses = [
    {
        id: '1',
        description: 'gum',
        note: 'gum',
        amount: 123,
        createdAt: moment(0)
    },
    {
        id: '2',
        description: 'rent',
        note: 'rent',
        amount: 7890,
        createdAt: moment(-1000)
    },
    {
        id: '3',
        description: 'Credit Card',
        note: 'Credit Card',
        amount: 4000,
        createdAt: moment(1000)
    }
]

export default expenses
