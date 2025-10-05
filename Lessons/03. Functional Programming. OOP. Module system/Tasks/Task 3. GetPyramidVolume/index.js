//V = (1/3) * h * (S1 + S2 + √(S1 * S2))
class Pyramid {
    constructor(height, square1, square2) {
        this.square1 = square1;
        this.square2 = square2;
        this.height = height;


    }

    get getSquare1() {
        return this.square1;
    }

    get getSquare2() {
        return this.square2;
    }

    get getHeight() {
        return this.height;
    }

    getVolume() {
        const sqrt = Math.sqrt(this.square2 * this.square1);
        return (1 / 3) * this.height * (this.square1 + this.square2 + sqrt);


    }


}


export default Pyramid;
