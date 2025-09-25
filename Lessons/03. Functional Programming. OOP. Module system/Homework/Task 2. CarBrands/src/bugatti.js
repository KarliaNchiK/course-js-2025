import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(model, power, accelerationTime, price) {
        super(`Bugatti ${model}`, power, accelerationTime);
        this.price = price;
        this.brand = 'Bugatti';
        this.modelName = model;
    }

    getIsExpensive() {
        return this.price > 1;
    }
    // Конец
}

export default BugattiBrand;