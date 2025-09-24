class CarBrand {
    // Начало
    constructor(mark, power, timeToHundred) {
        this.mark = mark;
        this.power = power;
        this.timeToHundred = timeToHundred;
    }

    runDrag(time) {
        return `${this.mark} runs drag for ${time} seconds`;
    }

    getWhoIsFaster(car) {
        return `${this.mark} is faster for ${car.timeToHundred - this.timeToHundred} seconds`;
    }
    // Конец
}

export default CarBrand;