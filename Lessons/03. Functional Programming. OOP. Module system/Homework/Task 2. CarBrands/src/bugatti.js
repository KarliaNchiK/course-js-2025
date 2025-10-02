import CarBrand from './carBrand.js';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(model, power, time, cost) {
        super(model, power, time);
        this.cost = cost;
        this.model = "Bugatti " + model;
    }
    getIsExpensive() {
        return this.cost > 1;
    }

    // Конец
}

export default BugattiBrand;