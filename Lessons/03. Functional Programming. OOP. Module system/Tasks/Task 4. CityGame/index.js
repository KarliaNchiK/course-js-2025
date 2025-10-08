class CityGame {
    arg = [];
    count = 0;
    numberexit = 1;
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
    }

    play(sity){
        if (this.arg.length === 0){
            this.arg[0] = sity;
            this.count += 1;
            this.numberexit += 1;
            return this.arg;
        }else {
            if (sity[0].toLowerCase() === this.arg[this.count - 1][this.arg[this.count - 1].length - 1].toLowerCase()){
                this.arg[this.count] = sity;
                this.numberexit += 1;
                this.count += 1;
                return this.arg;
            }else {
                if(this.numberexit % 2 === 0){
                    return "Game over! The winner is " + this.name1;
                }else {
                    return "Game over! The winner is " + this.name2;
                }
            }
        }

    }

    restart(){
        this.arg = [];
        this.count = 0;
        this.numberexit = 1;
        return 'The game has been restarted!';
    }

}

export default CityGame;
