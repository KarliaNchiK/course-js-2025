const isTicketHappy = (numStr) => 
    {
        let firstHalf = 0;
        let secondHalf = 0;

        for (let i = 0; i < numStr.length / 2; i++)
            firstHalf += Number(numStr[i]);

        for (let j = numStr.length / 2; j < numStr.length; j++)
            secondHalf += Number(numStr[j]);

        return firstHalf === secondHalf;
    };

export default isTicketHappy;
