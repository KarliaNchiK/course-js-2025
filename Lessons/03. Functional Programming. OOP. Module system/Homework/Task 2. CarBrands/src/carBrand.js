class CarBrand {
    // Начало

    constructor(model, power, time) {
        this.model = model;
        this.power = power;
        this.time = time;
    }
    runDrag(time) {
        return this.model + " runs drag for " + time + " seconds";
    }

    getWhoIsFaster(car) {
        return this.time < car.time ? this.model + " is faster for " + (car.time - this.time) + " seconds" :
            car.model + " is faster for " + (this.time - car.time) + " seconds"
    }

    // Конец
}

export default CarBrand;