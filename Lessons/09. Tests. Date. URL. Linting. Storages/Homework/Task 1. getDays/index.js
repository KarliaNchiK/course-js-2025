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

const isLeapYear = (year) => {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
};

const getDaysAmount = (month, year) => {
    if (!(month in daysInMonthsNonLeapYear)) {
        return 'error';
    }

    if (month === 'February') {
        return isLeapYear(year) ? daysInFebruary.leapYear : daysInFebruary.nonLeapYear;
    }

    return daysInMonthsNonLeapYear[month];
};

export default getDaysAmount;
