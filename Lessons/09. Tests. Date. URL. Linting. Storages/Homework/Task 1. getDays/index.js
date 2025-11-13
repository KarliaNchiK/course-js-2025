import { error } from "console";

const daysInMonthsNonLeapYear = {
    'January': 31,
    'February': 28,
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
}

const daysInFebruary = {
    'leapYear': 29,
    'nonLeapYear': 28,
}

const getDaysAmount = (month, year) => {
    let isLeapYear = false;
    let isRealMonth = false;

    Object.keys(daysInMonthsNonLeapYear).forEach(realMonth => {
        if (realMonth == month) {
            isRealMonth = true;
        }
    });

    if (!isRealMonth) {
        return 'error';
    }

    if (year & 400 == 0 || (year % 100 !== 0 && year % 4 == 0)) {
        isLeapYear = true;
    }

    if (isLeapYear && month == 'February') {
        return 29;
    }

    return daysInMonthsNonLeapYear[month];
};

export default getDaysAmount;
