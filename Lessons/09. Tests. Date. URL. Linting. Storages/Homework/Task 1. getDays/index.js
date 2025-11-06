const daysInMonthsNonLeapYear = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
};

const daysInFebruary = {
    leapYear: 29,
    nonLeapYear: 28,
};

const getDaysAmount = (month, year) => {
    if (daysInMonthsNonLeapYear[month] !== undefined) {
        if (year > 2000 && year % 4 === 0 && month === 'February') {
            return daysInFebruary.leapYear;
        }
        if (year < 2000 && year % 4 === 0 && year % 100 !== 0 && month === 'February') {
            return daysInFebruary.leapYear;
        }
        return daysInMonthsNonLeapYear[month];
    }
    return 'error';
};

export default getDaysAmount;