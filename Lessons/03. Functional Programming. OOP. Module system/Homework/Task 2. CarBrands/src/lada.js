import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    set model(value) {
        this._model = value;
    }

    set power(value) {
        this._power = value;
    }

    set accelerationTimeTo100(value) {
        this._accelerationTimeTo100 = value;
    }

    set location(value) {
        this._location = value;
    }

    get model() {
        return this._model;
    }

    get power() {
        return this._power;
    }

    get accelerationTimeTo100() {
        return this._accelerationTimeTo100;
    }

    get location() {
        return this._location;
    }

    // Начало
    constructor(model, power, accelerationTimeTo100, location) {
        super(model, power, accelerationTimeTo100, location);
        this.model = model;
        this.power = power;
        this.accelerationTimeTo100 = accelerationTimeTo100;
        this.location = location;


    }

    getLocation() {
        return 'Lada ' + this.model + " is located in " + this.location;
    }
    runDrag(time) {
        return `Lada ${this.model} runs drag for ${time} seconds`;
    }

    getWhoIsFaster(car) {
        const timeDiff = this.accelerationTimeTo100 - car.accelerationTimeTo100;
        return `Lada ${this.model} is faster for ${Math.abs(timeDiff)} seconds`;
    }

    // Конец
}

export default LadaBrand;