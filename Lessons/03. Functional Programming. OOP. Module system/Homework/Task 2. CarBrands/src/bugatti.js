import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    constructor(brandModel, power, timeAcceleration100, cost) {
        super(brandModel, power, timeAcceleration100);
        this.cost = cost;
        this.brandModel = 'Bugatti ' + brandModel;
    }

    getIsExpensive() {
        return this.cost > 1;
    }
}

export default BugattiBrand;