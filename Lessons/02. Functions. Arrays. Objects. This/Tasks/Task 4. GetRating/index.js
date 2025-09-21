const getRating = (object) => {

    const { likes, dislikes } = object;
    return likes-dislikes;
};

console.log(getRating({ likes: 1, dislikes: 43 }));
export default getRating;
