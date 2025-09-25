class Pyramid {

    constructor (height, firstArea, secondArea)
    {
        this.height = height;
        this.firstArea = firstArea;
        this.secondArea = secondArea;
    }
    getVolume()
    {
        return (this.height / 3) * (this.secondArea + this.firstArea + Math.sqrt(this.firstArea * this.secondArea))
    }
}

export default Pyramid;
