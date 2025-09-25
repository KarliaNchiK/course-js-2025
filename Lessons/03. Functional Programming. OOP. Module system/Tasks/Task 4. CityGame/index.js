class CityGame {
    namedCities = [];
    isEven = true;


    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }
    restart() {

    }
    play(text){
        if (this.namedCities.length === 0) {
            this.isEven = false;
            this.namedCities.push(text);
            return this.namedCities;
        }
    }

}

export default CityGame;
