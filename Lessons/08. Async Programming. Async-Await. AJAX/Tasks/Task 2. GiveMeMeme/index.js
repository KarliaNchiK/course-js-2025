const BASE_URL = 'https://api.imgflip.com/get_memes';

// Функция обновления картинки — вставляет мем (вызывается из основного потока)
const updateImage = (imageData) => {
    const container = document.querySelector('.main__image-container');
    container.innerHTML = ''; // удаляем предыдущий мем, если был

    const img = document.createElement('img');
    img.src = imageData.url;
    img.alt = imageData.name;
    img.className = 'meme-image';
    container.appendChild(img);
};

// Главная функция задания — делает весь поток строго по конспекту
const giveMeMeme = () => {
    const main = document.querySelector('.main');

    // Создание контейнера для мемов
    const memeContainer = document.createElement('div');
    memeContainer.className = 'main__image-container';
    main.appendChild(memeContainer);

    // Создание кнопки
    const button = document.createElement('button');
    button.className = 'btn btn-warning';
    button.textContent = 'ДАЙ МНЕ МЕМ!';
    main.appendChild(button);

    // Обработчик нажатия
    button.addEventListener('click', async () => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();

            // Мемы лежат в data.memes
            const memes = data.data.memes;

            // Получаем случайный индекс
            const randomIndex = Math.floor(Math.random() * memes.length);
            const randomMeme = memes[randomIndex];

            // Вставляем мем через функцию updateImage (согласно делению ответственности из конспекта)
            updateImage(randomMeme);

        } catch (error) {
            // Ошибку логируем и прокидываем дальше
            console.error('Ошибка получения мема:', error);
            throw error;
        }
    });
};

export default giveMeMeme;
