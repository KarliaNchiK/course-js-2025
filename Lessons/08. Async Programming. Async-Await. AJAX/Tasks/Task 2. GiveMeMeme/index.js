const BASE_URL = 'https://api.imgflip.com/get_memes';

const updateImage = (imageData) => {
    const container = document.querySelector(".main__image-container");
    container.innerHTML='';

    const img = document.createElement('img');
    img.src = imageData.url;
    img.alt = imageData.name;
    img.classList.add("img-fluid","rounded");

    container.append(img);
};

const giveMeMeme = () => {
    const main = document.querySelector('.main');

    const container = document.createElement('div');
    container.classList.add('main__image-container');

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-warning');
    button.textContent = 'ДАЙ МНЕ МЕМ!';

    main.append(container);
    main.append(button);

    button.addEventListener('click', async () => {
        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error(`Ошибка загрузки: ${response.status}`);
            }

            const data = await response.json();
            const memes = data.data.memes;

            const randomIndex = Math.floor(Math.random() * memes.length);
            const randomMeme = memes[randomIndex];

            updateImage(randomMeme);
        } catch (error) {
            console.error('Ошибка при загрузке мема:', error);
            throw error;
        }
    });
};

export default giveMeMeme;
