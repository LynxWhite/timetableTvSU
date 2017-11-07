const initialState = {
    'pmk': [
        {
            number: '1',
            id: '1b' 
        },
        {
            number: '2',
            id: '2b'
        },
        {
            number: '3',
            id: '3b'
        },
        {
            number: '4',
            id: '4b'
        },
        {
            number: '1 магистратура',
            id: '1m'
        }
    ],
    'physics': [
        {
            number: '1',
            id: '1b' 
        }
    ]
}

export default function footer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
