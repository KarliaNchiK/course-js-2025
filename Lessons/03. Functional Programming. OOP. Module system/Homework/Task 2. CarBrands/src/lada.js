import CarBrand from './carBrand';

class LadaBrand extends CarBrand {

    constructor(modelName, hp, acceleration, location) {
        super('Lada ' + modelName, hp, acceleration);
        this.location = location;
    }

    getLocation(){
        return this.modelName + ' is located in ' + this.location;
    }
}

export default LadaBrand;