import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    constructor(modelName, power, accelerationTime, price) {
        super('Bugatti', modelName, power, accelerationTime);
        this.price = price;
    }

    getIsExpensive() {
        return this.price > 1;
    }
}

export default BugattiBrand;