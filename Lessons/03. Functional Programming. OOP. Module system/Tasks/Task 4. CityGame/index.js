class CityGame {
    namedCities = [];
    isFirstPlayerMove = true;

    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }
    restart() {
        this.isFirstPlayerMove = true;
        this.namedCities = [];
        return 'The game has been restarted!';

    }
    play(text) {
        if (this.namedCities.length === 0) {
            this.isFirstPlayerMove = false;
            this.namedCities.push(text);
            return this.namedCities;
        }
        if (this.namedCities.at(-1).at(-1).toLowerCase() === text[0].toLowerCase()){
            this.isFirstPlayerMove = !this.isFirstPlayerMove;
            this.namedCities.push(text);
            return this.namedCities;
        } else {
            return (this.isFirstPlayerMove === false) ?
                `Game over! The winner is ${this.firstName}` :
                `Game over! The winner is ${this.secondName}`;
        }
    }

}

export default CityGame;
