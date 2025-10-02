import CarBrand from './carBrand.js';


class LadaBrand extends CarBrand {
    // Начало
    constructor(model, power, time, location) {
        super(model, power, time);
        this.location = location;
        this.model = 'Lada ' + model;
    }

    getLocation() {
        return this.model + ' is located in ' + this.location;
    }

    // Конец
}

export default LadaBrand;