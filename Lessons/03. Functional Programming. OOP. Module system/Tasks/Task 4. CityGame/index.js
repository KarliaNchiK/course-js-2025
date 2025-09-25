class CityGame {
    cities = [];
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
    }
    play(city) {
        if (this.cities.length === 0) {
            this.cities.push(city);
        }
        const lastCity = this.cities[this.cities.length - 1];
        const lastChar = lastCity[lastCity.length - 1].toLowerCase();
        const firstChar = city[0].toLowerCase();
        if (lastChar === firstChar) {
            this.cities.push(city);
            return this.cities;
        } else {
            const turnCount = this.cities.length;
            const winner = turnCount % 2 === 0 ? this.name1 : this.name2;
            return `Game over! The winner is ${winner}`;
        }
    }
}

export default CityGame;
