const getRating = (object) => {
    // деструктуризация объекта
    const { likes, dislikes } = object;
    
    return likes - dislikes;
};

export default getRating;