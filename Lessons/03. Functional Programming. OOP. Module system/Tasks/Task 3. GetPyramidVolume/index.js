class Pyramid {
    constructor(height, square1, square2) {
        this.height = height;
        this.square1 = square1;
        this.square2 = square2;
    }

    getVolume() {
        return ((this.square1 + this.square2 + Math.sqrt(this.square1 * this.square2)) * this.height) / 3;
    }
}
export default Pyramid;
