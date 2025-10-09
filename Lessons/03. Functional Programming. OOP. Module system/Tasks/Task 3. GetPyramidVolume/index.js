class Pyramid {
    constructor(height, baseArea1, baseArea2) {
        this.height = height;
        this.baseArea1 = baseArea1;
        this.baseArea2 = baseArea2;
    }
    
    getVolume() {
        // усеч пир V = (h/3) * (S1 + S2 + √(S1*S2))
        const volume = (this.height / 3) * 
                      (this.baseArea1 + this.baseArea2 + 
                       Math.sqrt(this.baseArea1 * this.baseArea2));
        return Math.round(volume * 100) / 100; // Округление до 2 знаков
    }
}

export default Pyramid;