class CityGame {

    constructor(player1,player2,cities = [],progress_counter = player1) {
        this.player1 = player1;
        this.player2 = player2;
        this.cities = cities;
        this.progress_counter = progress_counter;
    }

    play(city) {
        if (this.cities.length < 1) {
            this.cities.push(city);
            this.progress_counter = this.progress_counter === this.player1 ? this.player2 : this.player1;
            return this.cities;
        }

        const lastCity = this.cities[this.cities.length - 1];
        const lastChar = lastCity[lastCity.length - 1];
        const firstChar = city[0].toLowerCase();


        if( lastChar === firstChar) {
            this.cities.push(city);
            this.progress_counter = this.progress_counter === this.player1 ? this.player2 : this.player1;
            return this.cities;
        }
         else  {
            return "Game over! The winner is " + (this.progress_counter === this.player1 ? this.player2 : this.player1);
        }


    }

    restart() {
        this.cities = [];
        this.progress_counter = this.player1;
        return "The game has been restarted!";
    }
}
const game = new CityGame('Max', 'Lewis');
console.log(game.play('Kazan'));             // ['Kazan']
console.log(game.play('Novgorod'));          // ['Kazan', 'Novgorod']
console.log(game.play('Denver'));            // ['Kazan', 'Novgorod', 'Denver']
console.log(game.play('Paris'));             // 'Game over! The winner is Max';

console.log(game.restart());                 // 'The game has been restarted!'
console.log(game.play('Prague'));            // ['Prague']
console.log(game.play('Edinburgh'));         // ['Prague', 'Edinburgh']
console.log(game.play('Kioto'));             // 'Game over! The winner is Lewis';
export default CityGame;
