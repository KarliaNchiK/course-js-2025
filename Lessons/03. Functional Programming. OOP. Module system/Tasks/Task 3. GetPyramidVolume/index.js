class Pyramid {
    constructor(height, baseArea, topArea) {
        this.height = height;
        this.baseArea = baseArea;
        this.topArea = topArea;
    }

    getVolume() {
        // V = (h/3) * (S1 + S2 + √(S1 * S2))
        const volume = (this.height / 3) * (this.baseArea + this.topArea + Math.sqrt(this.baseArea * this.topArea));

        return Math.round(volume * 100) / 100;
    }
}

export default Pyramid;
