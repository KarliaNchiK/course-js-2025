const CHECK_NUM = 42;

const transformFortyTwo = (arr) => 
    {
        return arr.map(element => 
        {
            if (element % 42 === 0)
                return 'forty two!';
            else 
                return element
        } );
    };
export default transformFortyTwo;
