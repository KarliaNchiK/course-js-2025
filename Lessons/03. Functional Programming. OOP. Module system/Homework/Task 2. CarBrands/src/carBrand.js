class CarBrand {
    constructor(brandModel, power, timeAcceleration100) {
        this.brandModel = brandModel;
        this.power = power;
        this.timeAcceleration100 = timeAcceleration100;
    }

    runDrag(time) {
        return `${this.brandModel} runs drag for ${time} seconds`;
    }

    getWhoIsFaster(car) {
        if (this.timeAcceleration100 > car.timeAcceleration100) {
            return `${car.brandModel} is faster for ${this.timeAcceleration100 - car.timeAcceleration100} seconds`;
        }
        else {
            return `${this.brandModel} is faster for ${car.timeAcceleration100 - this.timeAcceleration100} seconds`;
        }
    }
}

export default CarBrand;