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

const getDaysAmount = (month, year) => {
    const isLeapYear = (year) => {
        return year % 4 === 0;
    };

    if (!daysInMonthsNonLeapYear.hasOwnProperty(month)) {
        return 'error';
    }

    if (month === 'February') {
        return isLeapYear(year) ? 29 : 28;
    }

    return daysInMonthsNonLeapYear[month];
};

export default getDaysAmount;
