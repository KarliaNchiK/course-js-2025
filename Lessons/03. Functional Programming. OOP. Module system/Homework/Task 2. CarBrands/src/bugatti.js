import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {
    // Начало
    constructor(model,power,acceleration_time,price) {
        super(model,power,acceleration_time);
        this.price = price;
    }

    runDrag(time) {
        return "Bugatti " + this.model + " runs drag for " + time + " seconds";
    }

    getIsExpensive() {
        return this.price > 1;

    }

    getWhoIsFaster(car) {
        const timeDif = Math.abs(this.acceleration_time - car.acceleration_time);
        if (this.acceleration_time < car.acceleration_time) {
            return "Bugatti " + this.model + " is faster for " + timeDif + " seconds";
        }else {
            return "Bugatti " + car.model + " is faster for " + timeDif + " seconds";
        }
    }

    // Конец
}

export default BugattiBrand;