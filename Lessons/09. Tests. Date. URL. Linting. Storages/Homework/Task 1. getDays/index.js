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

const getDaysAmount = (month, year) => {
    // Проверяем существование месяца
    if (!daysInMonthsNonLeapYear[month]) {
        return 'error';
    }
    
    // Для февраля проверяем високосный год
    if (month === 'February') {
        const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        return isLeapYear ? 29 : 28;
    }
    
    // Для остальных месяцев возвращаем значение из объекта
    return daysInMonthsNonLeapYear[month];
};

export default getDaysAmount;