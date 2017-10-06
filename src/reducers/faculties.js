const initialState = [
    {
        id: 'pmk',
        name: 'Прикладная математика и кибернетика',
        abbreviation: 'ПМК'
    },
    {
        id: 'physics',
        name: 'Физика',
        abbreviation: 'Физика'
    }
]

export default function footer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
