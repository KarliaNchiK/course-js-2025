const itisCool = (begin, end) => {
    if (begin > end) {
        return false;
    }

    for (begin; begin <= end; begin += 1) {
        if (begin % 3 === 0 &&  begin % 5 === 0)
            console.log('ItisCool');
        else if (begin % 3 === 0)
            console.log('Itis');
        else if (begin % 5 === 0)
            console.log('Cool');
        else
            console.log(begin);
    }
};

export default itisCool;
