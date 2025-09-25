class CarBrand {
    constructor(brand, modelName, power, accelerationTime) {
        this.brand = brand;
        this.modelName = modelName;
        this.power = power;
        this.accelerationTime = accelerationTime;
    }

    runDrag(time) {
        this.time = time;
        return `${this.brand} ${this.modelName} runs drag for ${this.time} seconds`;
    }

    getWhoIsFaster(car) {
        const diff = +(car.accelerationTime - this.accelerationTime).toFixed(1);
        const diffAbs = Math.abs(diff);
        if (diff > 0) {
            return `${this.brand} ${this.modelName} is faster for ${diffAbs} seconds`;
        } else if (diff < 0) {
            return `${car.brand} ${car.modelName} is faster for ${diffAbs} seconds`;
        } else {
            return `${this.brand} ${this.modelName} and ${car.brand} ${car.modelName} accelerate equally`;
        }
    }
}

export default CarBrand;