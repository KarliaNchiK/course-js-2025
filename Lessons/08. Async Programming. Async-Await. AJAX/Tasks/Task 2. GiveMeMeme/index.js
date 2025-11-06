const BASE_URL = 'https://api.imgflip.com/get_memes';

const updateImage = (imageData) => {
    const container = document.querySelector('.main__image-container');
    const currentImage = document.querySelector('.img');
    if (currentImage !== null) {
        currentImage.remove();
    }
    const newImage = document.createElement('img');
    newImage.className = 'img';
    newImage.src = imageData;
    container.appendChild(newImage);
};

const getImage = async () => {
    try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        if (!json.success) {
            throw new Error();
        }
        const memes = json.data.memes;
        const randomMeme = memes[Math.floor(Math.random() * memes.length)];
        return randomMeme.url;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const giveMeMeme = () => {
    const container = document.querySelector('.main');

    const button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-warning');
    button.textContent = 'ДАЙ МНЕ МЕМ!';
    button.addEventListener('click', async () => {
        const imageUrl = await getImage();
        if (imageUrl) {
            updateImage(imageUrl);
        }
    });
    const memeContainer = document.createElement('div');
    memeContainer.className = 'main__image-container';
    container.appendChild(memeContainer);
    container.appendChild(button);
};

export default giveMeMeme;
