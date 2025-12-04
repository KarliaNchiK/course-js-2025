const BASE_URL = 'https://api.imgflip.com/get_memes';

// обновление картинки (вызывается из основного потока)
const updateImage = (imageData) => {
    const container = document.querySelector('.main__image-container');
    container.innerHTML = ''; // удаляем предыдущий мем

    const img = document.createElement('img');
    img.src = imageData.url;
    img.alt = imageData.name;
    img.className = 'meme-image';
    container.appendChild(img);
};

const giveMeMeme = () => {
    const main = document.querySelector('.main');
    const memeContainer = document.createElement('div');
    memeContainer.className = 'main__image-container';
    main.appendChild(memeContainer);
    const button = document.createElement('button');
    button.className = 'btn btn-warning';
    button.textContent = 'ДАЙ МНЕ МЕМ!';
    main.appendChild(button);
    button.addEventListener('click', async () => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();

            // мемы лежат в data.memes
            const memes = data.data.memes;
            const randomIndex = Math.floor(Math.random() * memes.length);
            const randomMeme = memes[randomIndex];
            updateImage(randomMeme);

        } catch (error) {
            // ошибку логируем и прокидываем дальше
            console.error('Ошибка получения мема:', error);
            throw error;
        }
    });
};

export default giveMeMeme;
