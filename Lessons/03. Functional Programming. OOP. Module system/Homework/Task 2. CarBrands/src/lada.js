import CarBrand from './carBrand';

class LadaBrand extends CarBrand {
    // Начало
    constructor(model,power,acceleration_time,location) {
        super(model,power,acceleration_time);
        this.location = location;
    }

    runDrag(time) {
        return "Lada " + this.model + " runs drag for " + time + " seconds";
    }

    getLocation() {
        return "Lada " + this.model + " is located in " + this.location;
    }
    // Конец
}

export default LadaBrand;