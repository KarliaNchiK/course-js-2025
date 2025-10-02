class CityGame {
    constructor(player1, player2) {
        this.players = [player1, player2];
        this.currentPlayerIndex = 0;
        this.usedCities = [];
        this.isGameOver = false;
        this.winner = null;
    }

    play(city) {
        if (this.isGameOver) {
            return `Game over! The winner is ${this.winner}`;
        }
        const cityLower = city.toLowerCase();
        if (this.usedCities.some(usedCity => usedCity.toLowerCase() === cityLower)) {
            this.isGameOver = true;
            if (this.currentPlayerIndex % 2 === 0) {
                this.winner = this.players[1];
            } else {
                this.winner = this.players[0];
            }
            return `Game over! The winner is ${this.winner}`;
        }
        if (!city || city.trim() === '') {
            this.isGameOver = true;
            if (this.currentPlayerIndex % 2 === 0) {
                this.winner = this.players[1];
            } else {
                this.winner = this.players[0];
            }
            return `Game over! The winner is ${this.winner}`;
        }
        if (this.usedCities.length > 0) {
            const lastCity = this.usedCities[this.usedCities.length - 1].toLowerCase();
            const lastLetter = this.getLastLetter(lastCity);
            if (cityLower[0] !== lastLetter) {
                this.isGameOver = true;
                if (this.currentPlayerIndex % 2 === 0) {
                    this.winner = this.players[1];
                } else {
                    this.winner = this.players[0];
                }
                return `Game over! The winner is ${this.winner}`;
            }
        }
        this.usedCities.push(city);
        this.currentPlayerIndex = (this.currentPlayerIndex + 1);
        return [...this.usedCities];
    }
    restart() {
        this.usedCities = [];
        this.currentPlayerIndex = 0;
        this.isGameOver = false;
        this.winner = null;
        return 'The game has been restarted!';
    }
    getLastLetter(city) {
        const letters = city.replace(/[^a-zа-яё]/gi, '');
        let lastChar = letters[letters.length - 1];
        if (lastChar === 'ь' || lastChar === 'ъ') {
            lastChar = letters[letters.length - 2];
        }
        return lastChar;
    }
}

export default CityGame;
