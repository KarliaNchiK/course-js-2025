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
        if (this.usedCities.length > 0) {
            const lastCity = this.usedCities[this.usedCities.length - 1].toLowerCase();
            const lastLetter = this.getLastLetter(lastCity);

            if (cityLower[0] !== lastLetter) {
                this.isGameOver = true;
                this.winner = this.players[this.currentPlayerIndex];
                return `Game over! The winner is ${this.winner}`;
            }
        }

        // 2. Город не должен быть уже использован
        if (this.usedCities.some(usedCity => usedCity.toLowerCase() === cityLower)) {
            this.isGameOver = true;
            this.winner = this.players[this.currentPlayerIndex];
            return `Game over! The winner is ${this.winner}`;
        }

        // 3. Город должен быть допустимым (не пустая строка)
        if (!city || city.trim() === '') {
            this.isGameOver = true;
            this.winner = this.players[this.currentPlayerIndex];
            return `Game over! The winner is ${this.winner}`;
        }

        // Если все проверки пройдены, добавляем город
        this.usedCities.push(city);

        // Передаем ход следующему игроку
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;

        // Возвращаем текущий список городов
        return [...this.usedCities];
    }

    restart() {
        this.usedCities = [];
        this.currentPlayerIndex = 0;
        this.isGameOver = false;
        this.winner = null;
        return 'The game has been restarted!';
    }

    // Вспомогательный метод для получения последней буквы
    // (исключаем мягкий знак и другие небуквенные символы)
    getLastLetter(city) {
        const letters = city.replace(/[^a-zа-яё]/gi, ''); // Убираем не-буквы
        let lastChar = letters[letters.length - 1];

        // Если последняя буква - мягкий знак, берем предыдущую
        if (lastChar === 'ь' || lastChar === 'ъ') {
            lastChar = letters[letters.length - 2];
        }

        return lastChar;
    }

    // Дополнительные методы для информации о состоянии игры
    getCurrentPlayer() {
        return this.players[this.currentPlayerIndex];
    }

    getUsedCities() {
        return [...this.usedCities];
    }

    getGameStatus() {
        if (this.isGameOver) {
            return `Game over! Winner: ${this.winner}`;
        }
        return `Game in progress. Current player: ${this.getCurrentPlayer()}`;
    }
}

export default CityGame;
