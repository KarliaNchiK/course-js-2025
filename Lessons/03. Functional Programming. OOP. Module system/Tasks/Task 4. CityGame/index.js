class CityGame {
    playerOne = '';

    playerTwo = '';

    turn = '';

    cities = [];

    lastWord = '';

    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
    }

    play(cityName) {
        if (this.cities.length < 1) {
            this.turn = this.playerOne;
            this.cities.push(cityName);
            this.lastWord = cityName;
            return this.cities;
        }

        if (this.lastWord.toUpperCase()[this.lastWord.length - 1] === cityName[0]) {
            this.changeTurns();
            this.lastWord = cityName;
            this.cities.push(cityName);
            return this.cities;
        }

        return `Game over! The winner is ${this.turn}`;
    }

    restart() {
        this.cities = [];
        this.lastWord = "";
        this.turn = this.playerOne;
        return 'The game has been restarted!';
    }

    changeTurns() {
        this.turn = this.turn === this.playerOne ? this.playerTwo : this.playerOne;
    }
}

export default CityGame;
