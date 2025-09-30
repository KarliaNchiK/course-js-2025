class CarBrand {
    // Начало

    constructor(model,power,acceleration_time) {
        this.model = model;
        this.power = power;
        this.acceleration_time = acceleration_time;
    }

    runDrag(time){
        return this.model + " runs drag for " + time + " seconds";
    }

    getWhoIsFaster(car) {
        const timeDif = Math.abs(this.acceleration_time - car.acceleration_time);
        if (this.acceleration_time < car.acceleration_time) {
            return this.model + " is faster for " + timeDif + " seconds";
        }else {
            return car.model + " is faster for " + timeDif + " seconds";
        }
    }
    // Конец
}


export default CarBrand;