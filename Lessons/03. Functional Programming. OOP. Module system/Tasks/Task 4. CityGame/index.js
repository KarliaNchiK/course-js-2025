class CityGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.cities = [];
        this.currentPlayer = player1;
        this.gameOver = false;
        this.winner = null;
    }

    play(city) {
        if (this.gameOver) {
            return `Game over! The winner is ${this.winner}`;
        }

        if (this.cities.length > 0) {
            const lastCity = this.cities[this.cities.length - 1];
            const lastLetter = lastCity[lastCity.length - 1].toLowerCase();
            const firstLetter = city[0].toLowerCase();
            
            if (firstLetter !== lastLetter) {
                this.gameOver = true;
                this.winner = this.currentPlayer === this.player1 ? this.player2 : this.player1;
                return `Game over! The winner is ${this.winner}`;
            }
        }

        if (this.cities.includes(city)) {
            this.gameOver = true;
            this.winner = this.currentPlayer === this.player1 ? this.player2 : this.player1;
            return `Game over! The winner is ${this.winner}`;
        }

        this.cities.push(city);
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
        return [...this.cities];
    }

    restart() {
        this.cities = [];
        this.currentPlayer = this.player1;
        this.gameOver = false;
        this.winner = null;
        return 'The game has been restarted!';
    }
}

export default CityGame;