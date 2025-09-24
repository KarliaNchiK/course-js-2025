import carBrand from "./carBrand.js";

class LadaBrand extends carBrand {
    // Начало
    constructor(mark, power, timeToHundred, place) {
        super('Lada ' + mark, power, timeToHundred);
        this.place = place;
    }

    getLocation() {
        return `${this.mark} is located in ${this.place}`;
    }
    // Конец
}

export default LadaBrand;