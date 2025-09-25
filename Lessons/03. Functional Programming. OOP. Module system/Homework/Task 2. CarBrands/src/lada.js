import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    constructor(modelName, power, accelerationTime, location) {
        super('Lada', modelName, power, accelerationTime);
        this.location = location;
    }

    getLocation() {
        return `Lada ${this.modelName} is located in ${this.location}`;
    }
}

export default LadaBrand;