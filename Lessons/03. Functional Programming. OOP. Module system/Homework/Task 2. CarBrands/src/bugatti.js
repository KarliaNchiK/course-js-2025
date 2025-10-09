import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    constructor(model, power, acceleration, cost) {
        super('Bugatti', model, power, acceleration);
        this.cost = cost;
    }
    
    getIsExpensive() {
        return this.cost > 1;
    }
}

export default BugattiBrand;