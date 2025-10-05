import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    set model(value) {
        this._model = value;
    }

    set power(value) {
        this._power = value;
    }

    set accelerationTimeTo100(value) {
        this._accelerationTimeTo100 = value;
    }

    set price(value) {
        this._price = value;
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

    get price() {
        return this._price;
    }
    // Начало
    constructor(model, power, accelerationTimeTo100, price) {
        super(model, power, accelerationTimeTo100, price);
        this.model = model;
        this.power = power;
        this.accelerationTimeTo100 = accelerationTimeTo100;
        this.price = price;
    }
    getIsExpensive(){
        return this.price >= 1;

    }
    runDrag(time) {
        return `Bugatti ${this.model} runs drag for ${time} seconds`;
    }

    getWhoIsFaster(car) {
        const timeDiff = this.accelerationTimeTo100 - car.accelerationTimeTo100;
        return `Bugatti ${this.model} is faster for ${Math.abs(timeDiff)} seconds`;
    }

    // Конец
}

export default BugattiBrand;