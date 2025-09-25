class CarBrand {
    // Начало
    constructor(model, power, accelerationTime) {
        this.model = model;
        this.power = power;
        this.accelerationTime = accelerationTime;
    }

    runDrag(time) {
        return `${this.model} runs drag for ${time} seconds`;
    }

    getWhoIsFaster(car) {
        const timeDifference = Math.abs(this.accelerationTime - car.accelerationTime);

        if (this.accelerationTime < car.accelerationTime) {
            return `${this.model} is faster for ${timeDifference} seconds`;
        }
        return `${car.model} is faster for ${timeDifference} seconds`;
    }
    // Конец
}

export default CarBrand;