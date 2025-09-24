class Pyramid {
    constructor(height, s1, s2) {
        this.height = height;
        this.s1 = s1;
        this.s2 = s2;
        this.volume = (height/3)*(s1+s2+Math.sqrt(s1*s2));
    }
    getVolume(){
        return this.volume;
    }
}

export default Pyramid;
