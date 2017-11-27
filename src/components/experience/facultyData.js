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
const foursBachelorPMK = [firstPIdirection, fourthBIdirection, firstPMiIdirection, firstFIiITdirection]

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

// 0 = оба
// 1 = +
// 2 = -
const discreteMathematicsP = {
    name: 'Дискретная математика',
    plus_minus: '+'
}

const discreteMathematicsM = {
    name: 'Дискретная математика',
    plus_minus: '-'
}

const TOIP = {
    name: 'ТОИ',
    plus_minus: '+'
}
const TOIM = {
    name: 'ТОИ',
    plus_minus: '-'
}

const time11 = {
    [timeList[0]]: {
        [firstPIdirection.abbr_key]: {
            '-': discreteMathematicsM,
            '+': discreteMathematicsP
        },
        [firstPMiIdirection.abbr_key]: {
            '-': discreteMathematicsM,
            '+': discreteMathematicsP
        },
        [fourthBIdirection.abbr_key]: {
            '-': discreteMathematicsM
        }
    },
    [timeList[1]]: {
        [firstPIdirection.abbr_key]: {
            '-': discreteMathematicsM,
            '+': TOIP
        },
        [firstFIiITdirection.abbr_key]: {
            '+': TOIP
        },
        [firstPMiIdirection.abbr_key]: {
            '-': discreteMathematicsM
        }
    },
    [timeList[2]]: {
        [firstPIdirection.abbr_key]: {
            '-': discreteMathematicsM,
            '+': TOIP
        },
        [firstFIiITdirection.abbr_key]: {
            '+': TOIP
        },
        [firstPMiIdirection.abbr_key]: {
            '-': discreteMathematicsM,
            '+': discreteMathematicsP
        }
    }
}

export const timetableExample = {
    'Понедельник': time11 
}
