class CityGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = this.player1;
        this.currentCity = null;
        this.cities = [];
        this.checker = true;
    }

    play(city) {
        this.currentPlayer = this.changePlayer();
        if (this.check(city)) {
            this.cities.push(city);
            this.currentCity = city;
            return this.cities;
        } else {
            this.checker = false;
            return 'Game over! The winner is ' + this.currentPlayer;
        }

    }

    restart() {

        this.currentPlayer = this.player1;
        this.currentCity = null;
        this.cities = [];
        this.checker = true;
        return 'The game has been restarted!'
    }

    check(city) {
        if (this.checker === false) {
            return false;
        }

        if (this.currentCity === null) {
            return true;
        }
        if (this.cities.includes(city)) {
            return false;
        }
        if (this.currentCity[this.currentCity.length - 1].toLowerCase() === city[0].toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }

    changePlayer() {
        if (this.currentPlayer === null) {
            return this.player1;
        }
        return this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }

}


export default CityGame;
