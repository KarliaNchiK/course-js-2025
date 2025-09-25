const getRating = (object) => {
    return Object.values(object).reduce((a, b) => a - b);

};

export default getRating;
