import initDOM from "../../../06. Naming. App state. Dom updates. MVC/MVC example/init.js";

const BASE_URL = 'https://api.imgflip.com/get_memes';

const updateImage = (imageUrl) => {
    let memeDiv = document.querySelector('.main__image-container');

    let img = document.createElement('img');
    img.src = imageUrl;

    memeDiv.innerHTML = '';
    memeDiv.appendChild(img);
};

const fetchMeme = async () => {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();

        if (data.success && data.data.memes.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.data.memes.length);
            return data.data.memes[randomIndex].url;
        }
        throw new Error('No memes found');
    } catch (error) {
        console.error('Error fetching meme:', error);
        return null;
    }
};

const initializeObjects = () => {
    let memeDiv = document.createElement("div");
    memeDiv.className = "main__image-container";

    let getMemeBtn = document.createElement("button");
    getMemeBtn.className = "btn btn-warning";
    getMemeBtn.textContent = "ДАЙ МНЕ МЕМ!";

    let main = document.querySelector(".main");
    main.appendChild(memeDiv);
    main.appendChild(getMemeBtn);
};

const addListener = () => {
    let getMemeBtn = document.querySelector(".btn");
    getMemeBtn.addEventListener("click", async () => {
        const memeUrl = await fetchMeme();
        if (memeUrl) {
            updateImage(memeUrl);
        }
    });
};

const giveMeMeme = () => {
    initializeObjects();
    addListener();
};

export default giveMeMeme;