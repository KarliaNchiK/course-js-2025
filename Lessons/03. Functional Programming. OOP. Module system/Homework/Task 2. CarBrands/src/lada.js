import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    constructor(brandModel, power, timeAcceleration100, location) {
        super(brandModel, power, timeAcceleration100);
        this.location = location;
        this.brandModel = 'Lada ' + brandModel;
    }

    getLocation() {
        return `${this.brandModel} is located in ${this.location}`;
    }
}

export default LadaBrand;