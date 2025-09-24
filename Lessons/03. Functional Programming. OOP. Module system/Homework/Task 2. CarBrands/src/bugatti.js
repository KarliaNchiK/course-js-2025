import CarBrand from './carBrand';

class BugattiBrand extends CarBrand {

    constructor(modelName, hp, acceleration, price) {
        super('Bugatti ' + modelName, hp, acceleration);
        this.price = price;
    }

    getIsExpensive(){
        return (this.price > 1);
    }
}

export default BugattiBrand;