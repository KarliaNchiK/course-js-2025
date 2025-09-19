class CityGame {
    cities = [];
    lastLetter = '';

    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.step = 1;
    }

    play(city) {
        if (this.cities.length === 0 || city[0].toLowerCase() === this.lastLetter) {
            this.cities.push(city);
            this.step++;
            this.lastLetter = city.at(-1);
            return this.cities;
        }
        else {
            if (this.step % 2 === 0) {
                return 'Game over! The winner is ' + this.playerOne;
            }
            else {
                return 'Game over! The winner is ' + this.playerTwo;
            }
        }
    }

    restart() {
        this.cities = [];
        this.step = 1;
        this.lastLetter = '';
        return 'The game has been restarted!';
    }
}

export default CityGame;
