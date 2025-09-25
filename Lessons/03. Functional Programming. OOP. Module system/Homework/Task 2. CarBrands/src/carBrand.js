class CarBrand {
    model = '';

    power = 0;

    acceleration = 0;

    constructor(model, power, acceleration) {
        this.model = model;
        this.power = power;
        this.acceleration = acceleration;
    }

    runDrag(time) {
        return `${this.model} runs drag for ${time} seconds`;
    }

    getWhoIsFaster(car) {
        const differnece = Math.abs(car.acceleration - this.acceleration);
        return `${car.power > this.power ? car.model : this.model} is faster for ${differnece} seconds`;
    }
}

export default CarBrand;