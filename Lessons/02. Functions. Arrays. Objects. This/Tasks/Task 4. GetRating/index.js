const getRating = (object) => {
    const {like , dislike} = object;
    return like - dislike;
    // if(dislike > like && dislike === like){
    //     return  like - dislike;
    // }else{
    //     return  Math.abs(like - dislike);
    //}


};

export default getRating;
