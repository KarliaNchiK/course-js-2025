const getRating = (object) => {
    return object.likes - object.dislikes;
};

export default getRating;
