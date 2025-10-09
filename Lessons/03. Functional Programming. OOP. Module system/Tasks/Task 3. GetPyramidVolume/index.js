class Pyramid {
    constructor(height, square1, square2) {
        this.height = height;
        this.square1 = square1;
        this.square2 = square2;
    }

    getVolume() {
        const { height, square1, square2 } = this;
        const volume = (height/3) * (square1+square2+Math.sqrt(square1*square2));
        return Math.round(volume*100)/100;
    }
}

export default Pyramid;
