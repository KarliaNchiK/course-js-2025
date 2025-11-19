
const BASE_URL = 'https://api.imgflip.com/get_memes';

const updateImage = (imageUrl) => {
    const container = document.querySelector('.main__image-container');
    container.innerHTML = '';
    
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    container.appendChild(imageElement);
};

const giveMeMeme = () => {
    const mainContainer = document.querySelector('.main');
    
    const memeContainer = document.createElement('div');
    memeContainer.classList.add('main__image-container');
    
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-warning');
    button.textContent = 'ДАЙ МНЕ МЕМ!';

    mainContainer.appendChild(memeContainer);
    mainContainer.appendChild(button);

    button.addEventListener('click', () => {
        fetch(BASE_URL)
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    const memes = data.data.memes;
                    const randomIndex = Math.floor(Math.random() * memes.length);
                    const randomMeme = memes[randomIndex];
                    updateImage(randomMeme.url);
                }
            })
            .catch((error) => {
                console.error('Error fetching memes:', error);
            });
    });
};

export default giveMeMeme;