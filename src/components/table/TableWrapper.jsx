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

// Расписание для 1 курса пмк
const timetable = {
    'ПИ': [
        {
            day: 'Понедельник',
            time_start: '8:30',
            classroom: '304',
            title: 'Дискретная математика'
        }
    ],
    'БИ': [
        {
            day: 'Понедельник',
            time_start: '8:30',
            classroom: '304',
            title: 'Дискретная математика'
        }
    ],
    'ПМиИ': [
        {
            day: 'Понедельник',
            time_start: '8:30',
            classroom: '304',
            title: 'Дискретная математика'
        }
    ],
    'ФИиИТ': [
        {
            day: 'Понедельник',
            time_start: '8:30',
            classroom: '304',
            title: 'Дискретная математика'
        }
    ]
}

const faculties = [
    {
        abbr_key: 'pmk',
        fullname: 'Прикладная математика и кибернетика'
    }
]

const t_time = [
    '8:30 - 10:05',
    '10:20 - 11:55',
    '12:10 - 13:45',
    '14:00 - 15:35',
    '15:50 - 17:25',
    '17:40 - 19:15',
    '19:30 - 21.05'
]
const testTable = {
    '8:30 - 10:05': [
        {
            classroom: '304',
            title: 'Дискретная математика',
            size: 4
        }
    ],
    '10:20 - 11:55': [
        {
            classroom: '212',
            title: 'Английский язык',
            size: 1
        },
        {
            classroom: '200',
            title: 'Бизнес',
            size: 1
        },
        {
            classroom: '',
            title: '',
            size: 1
        },
        {
            classroom: '304',
            title: 'Алгоритмы и программы',
            size: 1
        }
    ]
}

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
        /*
        То что нужно для составления расписания:
        - Факультет (есть из url)
        - Направление (приходит, показываем все)
        - День (todo)
        - Время

        Для каждой группы для данного времени берём и добавляем ячейку предмета
        */
        return (
            <div>
                <Navbar/>
                <nav className='valign-wrapper z-depth-0 day-title--wrapper blue darken-2'>
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
                        {t_time.map((hours, key) => (
                            <tr key={key}>
                                <td>
                                    {hours}
                                </td>
                                {   testTable[hours] ?
                                    testTable[hours].map((subject, subKey) => (
                                        <td key={subKey} colSpan={subject.size}>
                                            {subject.title + ', ' + subject.classroom}
                                        </td>
                                    ))
                                    : null
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Footer/>
            </div>
        )
    }
}

/*
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
*/

export default TableWrapper
