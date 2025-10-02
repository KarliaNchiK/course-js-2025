class CityGame {
    constructor(player1, player2) {
        this.players = [player1, player2];
        this.currentPlayerIndex = 0;
        this.cities = [];
        this.gameOver = false;
    }

    play(city) {
        if (this.gameOver) {
            return 'Game over!';
        }

        if (typeof city !== 'string' || city.trim().length === 0) {
            this.gameOver = true;
            return `Game over! The winner is ${this.getCurrentPlayer()}`;
        }

        const cityName = city.trim().toLowerCase();

        if (this.cities.some(c => c.toLowerCase() === cityName.toLowerCase())) {
            this.gameOver = true;
            return `Game over! The winner is ${this.getCurrentPlayer()}`;
        }

        if (this.cities.length > 0) {
            const lastCity = this.cities[this.cities.length - 1];
            const lastLetter = this.getLastLetter(lastCity).toLowerCase();
            const firstLetter = cityName.charAt(0).toLowerCase();

            if (lastLetter !== firstLetter) {
                this.gameOver = true;
                return `Game over! The winner is ${this.getCurrentPlayer()}`;
            }
        }

        this.cities.push(city);

        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;

        return [...this.cities];
    }

    // eslint-disable-next-line class-methods-use-this
    getLastLetter(city) {
        const lastChar = city.charAt(city.length - 1);
        if (lastChar === 'ь' || lastChar === 'ъ') {
            return city.charAt(city.length - 2).toLowerCase();
        }
        return lastChar.toLowerCase();
    }

    getCurrentPlayer() {
        const previousPlayerIndex = (this.currentPlayerIndex - 1 + this.players.length) % this.players.length;
        return this.players[previousPlayerIndex];
    }

    restart() {
        this.cities = [];
        this.currentPlayerIndex = 0;
        this.gameOver = false;
        return 'The game has been restarted!';
    }
}

export default CityGame;
