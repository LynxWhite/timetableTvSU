/*
Первый уровень данных: Год и семестр
Второй уровень данных: Факультеты
Третий уровень данных: курс
Четвёртый уровень данных: направление
*/
/* ############################################################################### */
const PMK = {
    name: 'Прикладная математика и кибернетика',
    abbr_key: 'PMK'
}

const Physics = {
    name: 'Физика',
    abbr_key: 'Physics'
}

export const faculties = [PMK, Physics]
/* ############################################################################### */

/* ############################################################################### */
const bachelorType = {
    name: 'Бакалавриат',
    key: 'bachelorDegree'
}
const masterType = {
    name: 'Магистратура',
    key: 'masterDegree'
}
export const courcesTypes = [bachelorType, masterType]
/* ############################################################################### */

/* ############################################################################### */
const bachelorCources = [1, 2, 3, 4]
const masterCources = [1, 2]
const PMKCources = {
    [bachelorType.key]: bachelorCources,
    [masterType.key]: masterCources
}
const PhysicsCources = {
    [bachelorType.key]: bachelorCources,
    [masterType.key]: masterCources
}
export const courceList = {
    [PMK.abbr_key]: PMKCources,
    [Physics.abbr_key]: PhysicsCources
}
/* ############################################################################### */

/* ############################################################################### */
const firstPIdirection = {
    name: 'Прикладная информатика',
    abbr: 'ПИ',
    abbr_key: 'PI',
    code: 1
}

const firstPMiIdirection = {
    name: 'Прикладная математика и информатика',
    abbr: 'ПМиИ',
    abbr_key: 'PMiI',
    code: 4
}

const firstFIiITdirection = {
    name: 'Фундаментальная информатика и Информационные технологии',
    abbr: 'ФИиИТ',
    abbr_key: 'FIiIT',
    code: 6
}

const fourthBIdirection = {
    name: 'Бизнес Информатика',
    abbr: 'БИ',
    abbr_key: 'BI',
    code: 4
}

const firstBachelorPMK = [firstPIdirection, firstPMiIdirection, firstFIiITdirection]
const foursBachelorPMK = [firstPIdirection, fourthBIdirection, firstPMiIdirection ,firstFIiITdirection]

const directionsOfPMK = {
    [bachelorType.key]: {
        1: firstBachelorPMK,
        2: firstBachelorPMK,
        3: firstBachelorPMK,
        4: foursBachelorPMK
    }
}
const directionsOfPhysic = {}

export const directions = {
    [PMK.abbr_key]: directionsOfPMK,
    [Physics.abbr_key]: directionsOfPhysic
}
/* ############################################################################### */

export const timeList = ['8:30-10:05', '10:20-11:55', '12:10-13:55']

/* ############################################################################### */

const discreteMathematics = {
    name: 'Дискретная математика'
}

const TOI = {
    name: 'ТОИ'
}

const PICells = {
    [timeList[0]]: discreteMathematics,
    [timeList[1]]: discreteMathematics,
    [timeList[2]]: TOI
}

const PMiICells = {
    [timeList[0]]: discreteMathematics,
    [timeList[1]]: TOI,
    [timeList[2]]: discreteMathematics
}

const FIiITCells = {
    [timeList[1]]: TOI,
    [timeList[2]]: TOI
}

const SundayColumn = {
    [firstPIdirection.abbr_key]: PICells,
    [firstFIiITdirection.abbr_key]: FIiITCells,
    [firstPMiIdirection.abbr_key]: PMiICells
}

export const timetableExample = {
    'Понедельник': SundayColumn 
}
