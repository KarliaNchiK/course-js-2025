class CityGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.cities = [];
        this.currentPlayer = player1;
        this.isGameOver = false;
        this.winner = null;
    }
    
    play(city) {
        if (this.isGameOver) {
            return `Game over! The winner is ${this.winner}`;
        }
        
        if (this.cities.length === 0) {
            this.cities.push(city);
            this._switchPlayer();
            return [...this.cities];
        }
        
        const lastCity = this.cities[this.cities.length - 1];
        const lastLetter = lastCity[lastCity.length - 1].toLowerCase();
        const firstLetter = city[0].toLowerCase();
        
        if (lastLetter !== firstLetter) {
            this.isGameOver = true;
            this.winner = this.currentPlayer === this.player1 ? this.player2 : this.player1;
            return `Game over! The winner is ${this.winner}`;
        }
        
        this.cities.push(city);
        this._switchPlayer();
        return [...this.cities];
    }
    
    restart() {
        this.cities = [];
        this.currentPlayer = this.player1;
        this.isGameOver = false;
        this.winner = null;
        return 'The game has been restarted!';
    }
    
    _switchPlayer() {
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }
}

export default CityGame;