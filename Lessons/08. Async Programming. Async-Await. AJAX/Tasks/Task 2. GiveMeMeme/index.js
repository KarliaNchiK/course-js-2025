const BASE_URL = 'https://api.imgflip.com/get_memes';

const updateImage = (imageData) => {
    const container = document.querySelector('.main__image-container');
    container.innerHTML = '';
    const img = document.createElement('img');
    img.src = imageData.url;
    container.appendChild(img);
};

const giveMeMeme = () => {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-warning');
    button.textContent = 'ДАЙ МНЕ МЕМ!';

    const memeContainer = document.createElement('div');
    memeContainer.classList.add('main__image-container');

    const mainContainer = document.querySelector('.main');
    mainContainer.append(memeContainer, button);

    button.addEventListener('click', async () => {
        try {
            const response = await fetch(BASE_URL);

            if (!response.ok) { throw new Error('Ошибка загрузки мемов'); }
            const data = await response.json();

            if (!data.data || !data.data.memes) { throw new Error('Некорректный формат данных'); }
            const memes = data.data.memes;

            const randomIndex = Math.floor(Math.random() * memes.length);
            const randomMeme = memes[randomIndex];

            updateImage(randomMeme);

        } catch (error) { throw error; }
    });
};

export default giveMeMeme;