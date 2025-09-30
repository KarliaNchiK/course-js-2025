class Pyramid {

    constructor(height,squareDown,squareUp ) {
        this.height = height;
        this.squareDown = squareDown;
        this.squareUp = squareUp;
    }

    getVolume() {
        return (1/3) * this.height * (this.squareDown + this.squareUp + Math.sqrt(this.squareDown * this.squareUp));
    }

}
const pyramid = new Pyramid(10, 25, 15);
console.log(pyramid.getVolume());    // 197.88
export default Pyramid;
