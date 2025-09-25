class Pyramid {
    constructor(height, baseArea1, baseArea2) {
        this.height = height;
        this.baseArea1 = baseArea1;
        this.baseArea2 = baseArea2;
    }

    getVolume() {
        const volume = (this.height / 3) * (this.baseArea1 + this.baseArea2 + Math.sqrt(this.baseArea1 * this.baseArea2)
        );
        return volume;
    }
}

export default Pyramid;
