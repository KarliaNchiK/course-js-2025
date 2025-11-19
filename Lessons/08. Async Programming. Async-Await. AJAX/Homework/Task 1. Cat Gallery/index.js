const setCatGallery = async () => {
    const promises = [];
    const container = document.querySelector('.main__container');
    
    for(let i = 0; i < 10; i++){
        promises.push(fetch("https://api.thecatapi.com/v1/images/search"));
    }
    
    try {
        const responses = await Promise.all(promises);
        const jsonPromises = responses.map(response => response.json());
        const data = await Promise.all(jsonPromises);
        
        data.forEach(catData => {
            const img = document.createElement('img');
            img.src = catData[0].url;
            container.appendChild(img);
        });
        
        return "cat gallery is ready!";
    } catch (error) {
        console.error("Error loading cat gallery:", error);
        return "error loading cat gallery";
    }
};

export default setCatGallery;