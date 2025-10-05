class CityGame {

    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentLetter = '';
        this.currentTurn = 1;
        this.cityList = [];
    }

    play = (cityName) => {
        if (this.currentLetter === '') {
            this.currentLetter = cityName.at(-1).toLowerCase();
            this.currentTurn++;
            this.cityList.push(cityName);
            return this.cityList;
        } else if (cityName.at(0).toLowerCase() === this.currentLetter) {
            this.currentLetter = cityName.at(-1);
            this.currentTurn++;
            this.cityList.push(cityName);
            return this.cityList;
        } else {
            if (this.currentTurn % 2 === 0){
                return 'Game over! The winner is ' + this.player1;
            }else{
                return 'Game over! The winner is ' + this.player2;
            }
        }
    }

    restart(){
        this.currentLetter = '';
        this.currentTurn = 1;
        this.cityList = [];
        return 'The game has been restarted!';
    }
}

export default CityGame;
