import carBrand from "./carBrand.js";

class BugattiBrand extends carBrand {
    // Начало
    constructor(mark, power, timeToHundred, price) {
        super('Bugatti ' + mark, power, timeToHundred);
        this.price = price;
    }

    getIsExpensive() {
        return this.price > 1;
    }

    // Конец
}

export default BugattiBrand;