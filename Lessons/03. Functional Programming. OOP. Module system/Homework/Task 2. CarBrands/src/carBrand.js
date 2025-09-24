class CarBrand {

    constructor(modelName, hp, acceleration) {
        this.modelName = modelName;
        this.hp = hp;
        this.acceleration = acceleration;
    }

    runDrag = (time) => {
        return this.modelName + ' runs drag for ' + time + ' seconds';
    }

    getWhoIsFaster = (car) => {
        if (car.acceleration < this.acceleration){
            return car.modelName + ' is faster for ' + Math.abs(car.acceleration - this.acceleration) + ' seconds';
        } else {
            return this.modelName + ' is faster for ' + Math.abs(this.acceleration - car.acceleration) + ' seconds';
        }
    }

}

export default CarBrand;