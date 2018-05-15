const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

export const getShortDayName = date => {
    const dayNumber = new Date(date).getDay()
    return DAYS[dayNumber === 6
            ? 0
            : dayNumber + 1].substr(0, 3)
}
