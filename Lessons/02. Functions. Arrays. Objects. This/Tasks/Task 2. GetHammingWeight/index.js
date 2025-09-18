const convertToBinary = num => (num >>> 0).toString(2);

const getHammingWeight = (num) => 
    {
        let doubleNum = String(num.toString(2));
        let unitcount = 0;
        for (let i = 0; i < doubleNum.length; i++)
        {
            if (doubleNum[i] === '1')
                unitcount++;
        }
        return unitcount;
    };
export default getHammingWeight;
