const BASE_URL = 'https://api.imgflip.com/get_memes';

const updateImage = (imageData) => {

    const container = document.querySelector('.main__image-container');
    container.innerHTML = '';

    const img = document.createElement('img');
    img.src = imageData.url;
    img.alt = imageData.name || 'Meme';
    img.className = 'img-fluid';

    container.appendChild(img);
};

const giveMeMeme = () => {
    const button = document.createElement('button');
    button.className = "btn btn-warning";
    button.textContent = "ДАЙ МНЕ МЕМ!";

    const container = document.createElement('div');
    container.className = "main__image-container";

    const mainElement = document.querySelector('.main');
    mainElement.appendChild(container);
    mainElement.appendChild(button);

    button.addEventListener('click', async () => {
        try{
            const response = await fetch(BASE_URL);

            if (!response.ok) {
                throw new Error('HTTP error! status: ' + response.status);
            }

            const data = await response.json();

            if (!data.success || !data.data || !data.data.memes) {
                throw new Error('Нет данных из API');
            }

            const memes = data.data.memes;
            if (memes.length === 0) {
                throw new Error('Список мемов пуст')
            }

            const randomIndex = Math.floor(Math.random() * memes.length);
            const randomMeme = memes[randomIndex];

            updateImage(randomMeme);
        } catch (error) {
            console.error('Ошибка при выборе мема');
            throw error;
        }
    })
};

export default giveMeMeme;
