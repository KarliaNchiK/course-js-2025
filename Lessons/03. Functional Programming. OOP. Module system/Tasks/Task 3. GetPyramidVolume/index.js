class Pyramid {
    sBaseOne = 0
    sBaseTwo = 0
    height = 0

    constructor(height, sBaseOne, sBaseTwo) {
        this.height = height;
        this.sBaseOne = sBaseOne;
        this.sBaseTwo = sBaseTwo;
    }

    getVolume() {
        return 1 / 3 * this.height * (this.sBaseOne + this.sBaseTwo + Math.sqrt(this.sBaseOne * this.sBaseTwo));
    }
}

export default Pyramid;
