import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
    constructor(model, power, accelerationTime, location) {
        super(`Lada ${model}`, power, accelerationTime);
        this.location = location;
        this.brand = 'Lada';
        this.modelName = model;
    }

    getLocation() {
        return `${this.model} is located in ${this.location}`;
    }
    // Конец
}

export default LadaBrand;