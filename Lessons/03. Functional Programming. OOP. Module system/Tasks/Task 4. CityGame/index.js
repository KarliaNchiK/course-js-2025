class CityGame {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.cities = [];
        this.currentPos = -1;
    }

    play(city) {
        if (this.cities.length === 0) {
            this.currentPos += 1;
            this.cities.push(city);
            return this.cities;
        }
        if (this.cities[this.currentPos].at(-1).toUpperCase() !== city.at(0)) {
            if (this.currentPos % 2 === 0) {
                return `Game over! The winner is ${this.name1}`;
            }
            return `Game over! The winner is ${this.name2}`;
        }
        this.cities.push(city);
        this.currentPos += 1;
        return this.cities;
    }

    restart() {
        this.cities = [];
        this.currentPos = -1;
        return 'The game has been restarted!';
    }
}
export default CityGame;
