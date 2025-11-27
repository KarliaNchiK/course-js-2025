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
}

const daysInFebruary = {
    'leapYear': 29,
    'nonLeapYear': 28,
}

const getDaysAmount = (month, year) => {
    const isLeapYear = (year % 100 != 0 | year % 400 == 0) & (year % 4 == 0);
    if (daysInMonthsNonLeapYear[month] != null && month != 'February'){
        return daysInMonthsNonLeapYear[month];
    }
    else if(month == 'February'){
        return isLeapYear ? daysInFebruary.leapYear : daysInFebruary.nonLeapYear;
    }
    else{
        return 'error';
    }
};

export default getDaysAmount;
