const isThreePower = (num) => 
    {
        let power = Math.log(num) / Math.log(3);

        return power % 1 < 1e-10;
    };

export default isThreePower;