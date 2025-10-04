const getRating = (object) => {
    const {likes , dislikes} = object;
    return likes - dislikes;
    // if(dislike > like && dislike === like){
    //     return  like - dislike;
    // }else{
    //     return  Math.abs(like - dislike);
    //}


};

export default getRating;
