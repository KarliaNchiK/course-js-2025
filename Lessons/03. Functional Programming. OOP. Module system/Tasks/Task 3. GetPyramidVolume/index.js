class Pyramid {
    constructor(height, baseOfPyramid1, baseOfPyramid2) {
        this.height = height;
        this.baseOfPyramid1 = baseOfPyramid1;
        this.baseOfPyramid2 = baseOfPyramid2;
    }

    getVolume() {
        return (this.height / 3) * (this.baseOfPyramid1 +
            Math.sqrt(this.baseOfPyramid1 * this.baseOfPyramid2) + this.baseOfPyramid2);
    }
}

export default Pyramid;
