import React, { Component } from 'react'

import Footer from './Footer'
import Navbar from './Navbar'

const directions = {
    'pmk': [
        {
            number: 1,
            name: 'Прикладная информатика',
            abbr: 'ПИ'
        },
        {
            number: 2,
            name: 'Бизнес-информатика',
            abbr: 'БИ'
        },
        {
            number: 4,
            name: 'Прикладная математика и информатика',
            abbr: 'ПМиИ'
        },
        {
            number: 6,
            name: 'Фундаментальная информатика и информационные технологии',
            abbr: 'ФИиИТ'
        }
    ]
}

const faculties = [
    {
        abbr_key: 'pmk',
        fullname: 'Прикладная математика и кибернетика'
    }
]

const findFaculty = (key) => {
    let result = false
    faculties.forEach(faculty => {
        if (faculty.abbr_key === key) {
            result = faculty
        }
    })
    return result
}

class TableWrapper extends Component {
    render() {
        const faculty = findFaculty(this.props.match.params.faculty)
        const cource = 1
        return (
            <div>
                <Navbar/>
                <nav className='valign-wrapper z-depth-0 day-title--wrapper'>
                    <p className='center-align day-title'> Понедельник </p>
                </nav>
                <table className='bordered highlight centered timetable'>
                    <thead>
                        <tr>
                            <th className='time-column'>Время</th>
                            {directions[faculty.abbr_key].map((direction, key) => (
                                <th key={key}>{direction.abbr + ' ' + cource + direction.number}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>8:30 - 10:05</td>
                            <td colSpan='2'>Общий предмет</td>
                        </tr>
                        <tr>
                            <td>10:20 - 11:55</td>
                            <td>Предмет</td>
                            <td>Предмет</td>
                        </tr>
                        <tr>
                            <td>12:10 - 13:45</td>
                            <td>Предмет</td>
                            <td>Предмет</td>
                        </tr>
                    </tbody>
                </table>
                <Footer/>
            </div>
        )
    }
}

export default TableWrapper
