const daysInMonthsNonLeapYear = {
    'January': 31,
    'February' : 28,
    'March': 31,
    'April': 30,
    'May': 31,
    'June': 30,
    'July': 31,
    'August': 31,
    'September': 30,
    'October': 31,
    'November': 30,
    'December': 31,
};

const daysInFebruary = {
    'leapYear': 29,
    'nonLeapYear': 28,
};

const isYearLeap = (year) => {
    return ((year % 100) !== 0) && (year % 4 === 0);
};

const getDaysAmount = (month, year) => {
    if (month === 'February') {
        if (isYearLeap(year)) {
            return daysInFebruary.leapYear;
        } else {
            return daysInFebruary.nonLeapYear;
        }
    } else {
        const days = daysInMonthsNonLeapYear[month];
        if (days === undefined) {
            return 'error';
        }
        return days;
    }
};

export default getDaysAmount;
